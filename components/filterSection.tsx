'use client';

import { useRouter, useSearchParams } from "next/navigation";
import NameInitialSelector from "./nameInitSelector";
import GenderSelector from "./genderSelect";
import LanguageMultiSelect from "./langMultiSelect";
import QualityMultiSelect from "./qualityMultiSelect";


export interface Filters {
    initial: string;
    gender: string;
    languages: string[];
    qualities: string[];
  }
  
function FilterSection() {
    const searchParams = useSearchParams();
  
    const gotInitial = searchParams.get("initial");
    const gotGender = searchParams.get("gender");
    const gotLanguages = searchParams.getAll("languages");
    const gotQualities = searchParams.getAll("qualities");

    const filters: Filters = {
        initial: gotInitial || "",
        gender: gotGender || "",
        languages: gotLanguages || [],
        qualities: gotQualities || [],
    }
    const router = useRouter();
  
    const updatesFilters = (newFilter: Partial<Filters>) => {
        // use filter object to update filters
        if (newFilter.initial) filters.initial = newFilter.initial;
        if (newFilter.gender) filters.gender = newFilter.gender;
        // prevent duplicates in languages and qualities while adding
        if (newFilter.languages) filters.languages = [...new Set([...filters.languages, ...newFilter.languages])];
        if (newFilter.qualities) filters.qualities = [...new Set([...filters.qualities, ...newFilter.qualities])];
        console.log(filters);
        updateUrl(filters);
    }
    const updateUrl = (filter: Filters) => {
      const newSearchParams = new URLSearchParams();
      
      if (filter.initial) newSearchParams.append("initial", filter.initial);
      if (filter.gender) newSearchParams.append("gender", filter.gender);
      if (filter.languages.length > 0) newSearchParams.append("languages", filter.languages.join(","));
      if (filter.qualities.length > 0) newSearchParams.append("qualities", filter.qualities.join(","));

      console.log(newSearchParams.toString());
      router.replace(window.location.pathname + '?' + newSearchParams.toString());
    }
    return (
      <>
        <FilterItem>
          <NameInitialSelector
            label="Initial"
            selectedInitial={gotInitial || ""}
            onInitialSelect={(initial) => updatesFilters({ initial })}
          />
        </FilterItem>
        <FilterItem>
          <GenderSelector
            label="Gender"
            selectedGender={gotGender || ""}
            onGenderSelect={(gender) => updatesFilters({ gender })}
          />
        </FilterItem>
        <LanguageMultiSelect
          label="Languages"
          selectedLanguages={gotLanguages}
          onLanguagesSelect={(languages) => updatesFilters({ languages })}
        />
        <QualityMultiSelect
          label="Qualities"
          selectedQualities={gotQualities}
          onQualitiesSelect={(qualities) => updatesFilters({ qualities })}
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

  export default FilterSection;