"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import namesData from "../assets/data/names.json";
import NameInitialSelector from "@/components/nameInitSelector";
import GenderSelector from "@/components/genderSelect";
import LanguageMultiSelect from "@/components/langMultiSelect";
import QualityMultiSelect from "@/components/qualityMultiSelect";
import filterNames from "../lib/filterName";
import NameCard from "@/components/nameCard";

export interface Name {
	name: string;
	gender: string;
	languages: string[];
	meaning: string;
	origin: string;
	qualities: string[];
}

export interface FilterState {
	initial: string;
	gender: string;
	languages: string[];
	qualities: string[];
}

export default function HomePage() {
	const searchParams = useSearchParams();

	const initialInitial = searchParams.get("initial") || "";
	const initialGender = searchParams.get("gender") || "";
	const initialLanguages = searchParams.getAll("languages") || [];
	const initialQualities = searchParams.getAll("qualities") || [];

	// Initialize the filter state from the URL on every render
	const [filters, setFilters] = useState<FilterState>({
		initial: initialInitial,
		gender: initialGender,
		languages: initialLanguages,
		qualities: initialQualities,
	});

	// Filter names based on initial filter values
	const [filteredNames, setFilteredNames] = useState<Name[]>(
		filterNames(namesData, filters),
	);

	useEffect(() => {
		const newSearchParams = new URLSearchParams();
		if (filters.initial !== "") newSearchParams.set("initial", filters.initial);
		if (filters.gender !== "") newSearchParams.set("gender", filters.gender);

		// Handle multiple values for languages and qualities
		filters.languages.forEach((lang) =>
			newSearchParams.append("languages", lang),
		);
		filters.qualities.forEach((quality) =>
			newSearchParams.append("qualities", quality),
		);

		// Only update the URL if it has changed
		if (newSearchParams.toString() !== searchParams.toString()) {
			setFilteredNames(filterNames(namesData, filters));
			window.history.replaceState(
				null,
				"",
				`${window.location.pathname}?${newSearchParams}`,
			);
		}
	}, [filters]);

	const handleFilterChange = (newFilters: Partial<FilterState>) => {
		setFilters((prevFilters) => ({
			...prevFilters,
			...newFilters,
		}));
		console.log(filters);
	};
	return (
		<div>
			<NameInitialSelector
				selectedInitial={filters.initial}
				onInitialSelect={(initial) => handleFilterChange({ initial })}
			/>
			<GenderSelector
				selectedGender={filters.gender}
				onGenderSelect={(gender) => handleFilterChange({ gender })}
			/>
			<LanguageMultiSelect
				selectedLanguages={filters.languages}
				onLanguagesSelect={(languages) => handleFilterChange({ languages })}
			/>
			<QualityMultiSelect
				selectedQualities={filters.qualities}
				onQualitiesSelect={(qualities) => handleFilterChange({ qualities })}
			/>

			{/* Render filtered names */}
			<div>
				{filteredNames.map((name) => (
					<NameCard key={name.name} name={name} />
				))}
			</div>
		</div>
	);
}
