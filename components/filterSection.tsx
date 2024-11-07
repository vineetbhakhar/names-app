'use client';

import { useRouter, useSearchParams } from "next/navigation";
import NameInitialSelector from "./nameInitSelector";
import GenderSelector from "./genderSelect";
import LanguageMultiSelect from "./langMultiSelect";
import QualityMultiSelect from "./qualityMultiSelect";
import { Skeleton } from "./ui/skeleton";


export type Filters = {
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
    if (newFilter.initial) filters.initial = newFilter.initial;
    if (newFilter.gender) filters.gender = newFilter.gender;
    if (newFilter.languages) filters.languages = newFilter.languages;
    if (newFilter.qualities) filters.qualities = newFilter.qualities;
    console.log("updating filters:", filters);
    updateUrl(filters);
  }
  const updateUrl = (filter: Filters) => {
    const newSearchParams = new URLSearchParams();

    if (filter.initial) newSearchParams.append("initial", filter.initial);
    if (filter.gender) newSearchParams.append("gender", filter.gender);
    if (filters.languages.length > 0) {
      filters.languages.forEach(lang => newSearchParams.append("languages", lang));
    }
    if (filter.qualities.length > 0) {
      filter.qualities.forEach(qual => newSearchParams.append("qualities", qual));
    }

    console.log(newSearchParams.toString());
    router.replace(window.location.pathname + '?' + newSearchParams.toString());
  }
  return (
    <>
      <div className="p-8 pt-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="">
            <FilterItem>
              <NameInitialSelector
                label="Initial"
                selectedInitial={gotInitial || ""}
                onInitialSelect={(initial) => updatesFilters({ initial })}
              />
            </FilterItem>
          </div>

          <div className="col-span-2">
            <LanguageMultiSelect
              label="Languages"
              selectedLanguages={gotLanguages}
              onLanguagesSelect={(languages) => updatesFilters({ languages })}
            />
          </div>

          <div className="">
            <FilterItem>
              <GenderSelector
                label="Gender"
                selectedGender={gotGender || ""}
                onGenderSelect={(gender) => updatesFilters({ gender })}
              />
            </FilterItem>
          </div>

          <div className="col-span-2">
            <QualityMultiSelect
              label="Qualities"
              selectedQualities={gotQualities}
              onQualitiesSelect={(qualities) => updatesFilters({ qualities })}
            />
          </div>
        </div>
      </div>
    </>
  );
}

function FilterItem({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}

export function FilterSelectionLoading() {
  return (
    <div className="p-8 pt-4">
      <div className="grid grid-cols-3 gap-4">
        <Skeleton className="h-11 w-full"></Skeleton>
        <Skeleton className="col-span-2 h-11 w-full"></Skeleton>
        <Skeleton className="h-11 w-full"></Skeleton>
        <Skeleton className="col-span-2 h-11 w-full"></Skeleton>
      </div>
    </div>
  );
}

export default FilterSection;