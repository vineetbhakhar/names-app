"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import namesData from "../assets/data/names.json";
import NameInitialSelector from "@/components/nameInitSelector";
import GenderSelector from "@/components/genderSelect";
import LanguageMultiSelect from "@/components/langMultiSelect";
import QualityMultiSelect from "@/components/qualityMultiSelect";
import NameCard from "@/components/nameCard";
import filterNames from "../lib/filterName";

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
  const [filters, setFilters] = useState<FilterState>(getInitialFilters(searchParams));
  const [filteredNames, setFilteredNames] = useState<Name[]>(() => filterNames(namesData, filters));

  useEffect(() => {
    updateURL(filters);
    setFilteredNames(filterNames(namesData, filters));
  }, [filters]);

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  return (
    <div>
      <FilterSection filters={filters} onFilterChange={handleFilterChange} />
      <NameList names={filteredNames} />
    </div>
  );
}

function getInitialFilters(searchParams: URLSearchParams): FilterState {
  return {
    initial: searchParams.get("initial") || "",
    gender: searchParams.get("gender") || "",
    languages: searchParams.getAll("languages"),
    qualities: searchParams.getAll("qualities"),
  };
}

function updateURL(filters: FilterState) {
  const newSearchParams = new URLSearchParams();
  if (filters.initial) newSearchParams.set("initial", filters.initial);
  if (filters.gender) newSearchParams.set("gender", filters.gender);
  filters.languages.forEach((lang) => newSearchParams.append("languages", lang));
  filters.qualities.forEach((quality) => newSearchParams.append("qualities", quality));

  // replaces the current URL with the new one
  window.history.replaceState(
    null,
    "",
    `${window.location.pathname}?${newSearchParams}`
  );
}

interface FilterSectionProps {
  filters: FilterState;
  onFilterChange: (newFilters: Partial<FilterState>) => void;
}

function FilterSection({ filters, onFilterChange }: FilterSectionProps) {
  return (
    <>
      <FilterItem>
        <NameInitialSelector
			label="Initial"
          selectedInitial={filters.initial}
          onInitialSelect={(initial) => onFilterChange({ initial })}
        />
      </FilterItem>
      <FilterItem>
        <GenderSelector
			label="Gender"
          selectedGender={filters.gender}
          onGenderSelect={(gender) => onFilterChange({ gender })}
        />
      </FilterItem>
      <LanguageMultiSelect
		label="Languages"
        selectedLanguages={filters.languages}
        onLanguagesSelect={(languages) => onFilterChange({ languages })}
      />
      <QualityMultiSelect
		label="Qualities"
        selectedQualities={filters.qualities}
        onQualitiesSelect={(qualities) => onFilterChange({ qualities })}
      />
    </>
  );
}

function FilterItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-60 p-4 items-center">
      {children}
    </div>
  );
}


function NameList({ names }: { names: Name[] }) {
  return (
    <div>
      {names.map((name) => (
        <NameCard key={name.name} name={name} />
      ))}
    </div>
  );
}