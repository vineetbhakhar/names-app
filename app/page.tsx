"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import namesData from "../assets/data/names.json";
import NameInitialSelector from "@/components/nameInitSelector";
import GenderSelector from "@/components/genderSelect";
import LanguageMultiSelect from "@/components/langMultiSelect";
import QualityMultiSelect from "@/components/qualityMultiSelect";

interface Name {
	name: string;
	gender: string;
	languages: string[];
	meaning: string;
	origin: string;
	qualities: string[];
}
export default function Home() {
	const [nameData, setNameData] = useState<Name[]>(namesData);
	const [selectedInitial, setSelectedInitial] = useState<string>("");
	const [selectedGender, setSelectedGender] = useState<string>("");
	const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
	const [selectedQualities, setSelectedQualities] = useState<string[]>([]);
	const router = useRouter();
	const urlParams = useSearchParams();

	// set values from url
	useEffect(() => {
		// Apply filters from the URL on initial load
		const initial = urlParams?.get("initial");
		const gender = urlParams?.get("gender");
		const languages = urlParams?.get("languages");
		const qualities = urlParams?.get("qualities");

		setSelectedInitial(typeof initial === "string" ? initial : "");
		setSelectedGender(typeof gender === "string" ? gender : "");
		setSelectedLanguages(
			typeof languages === "string"
				? [languages]
				: Array.isArray(languages)
					? languages
					: [],
		);
		setSelectedQualities(
			typeof qualities === "string"
				? [qualities]
				: Array.isArray(qualities)
					? qualities
					: [],
		);
	}, [urlParams]);

	// update nameData
	useEffect(
		() => {
			// Filter the data based on the selected filters
			// setNameData(namesData);
			const filteredData = namesData.filter((name) => {
				const matchesInitial = selectedInitial
					? name.name[0].toLowerCase() === selectedInitial.toLowerCase()
					: true;
				const matchesGender = selectedGender
					? name.gender.toLowerCase() === selectedGender.toLowerCase()
					: true;
				const matchesLanguages = selectedLanguages.length
					? selectedLanguages.every((language) =>
						name.languages.includes(language),
					)
					: true;
				const matchesQualities = selectedQualities.length
					? selectedQualities.every((quality) =>
						name.qualities.includes(quality),
					)
					: true;
				return (
					matchesInitial &&
					matchesGender &&
					matchesLanguages &&
					matchesQualities
				);
			});
			setNameData(filteredData);
		},
		[selectedInitial, selectedGender, selectedLanguages, selectedQualities],
		// [urlParams]
	);

	// update url
	useEffect(() => {
		// Update the URL with the selected filters
		const searchParams = new URLSearchParams();
		if (selectedInitial) searchParams.set("initial", selectedInitial);
		if (selectedGender) searchParams.set("gender", selectedGender);
		if (selectedLanguages.length)
			searchParams.set("languages", selectedLanguages.join(","));
		if (selectedQualities.length)
			searchParams.set("qualities", selectedQualities.join(","));
		router.push(`?${searchParams.toString()}`);
	}, [
		selectedInitial,
		selectedGender,
		selectedLanguages,
		selectedQualities,
		// router,
	]);

	const handleInitialSelect = (initial: string) => {
		setSelectedInitial(initial);
	};

	const handleGenderSelect = (gender: string) => {
		setSelectedGender(gender);
	};

	const handleLanguagesSelect = (languages: string[]) => {
		setSelectedLanguages(languages);
	};

	const handleQualitiesSelect = (qualities: string[]) => {
		setSelectedQualities(qualities);
	};

	const clearAllFilters = () => {
		setSelectedInitial("");
		setSelectedGender("");
		setSelectedLanguages([]);
		setSelectedQualities([]);
	};

	return (
		<div>
			{/* Render the selector components */}
			<NameInitialSelector
				selectedInitial={selectedInitial}
				onInitialSelect={setSelectedInitial}
			/>
			<GenderSelector
				selectedGender={selectedGender}
				onGenderSelect={setSelectedGender}
			/>
			<LanguageMultiSelect
				selectedLanguages={selectedLanguages}
				onLanguagesSelect={setSelectedLanguages}
			/>
			<QualityMultiSelect
				selectedQualities={selectedQualities}
				onQualitiesSelect={setSelectedQualities}
			/>
			{
				nameData.length > 0 ? (
					nameData.map((name) => (
						// render full name values
						<div key={name.name}>{name.name}</div>
					))) :
					(<div>Loading..</div>)}
		</div>
	);
}
