import FilterSection, { Filters } from "@/components/filterSection";
import NameCard from "@/components/nameCard";
import { useRouter } from "next/navigation";
import { useState } from "react";
import namesData from "../assets/data/names.json";
import filterNames from "../lib/filterName";

export interface Name {
  name: string;
  gender: string;
  languages: string[];
  meaning: string;
  origin: string;
  qualities: string[];
}



export default async function HomePage(props: {
  searchParams?: Promise<Filters>;
}
) {
  const searchParams = await props.searchParams;


  return (
    <div>
      <FilterSection />
      <FilteredNamesList query={searchParams} />
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

interface FilteredNamesListProps{
  query?: Filters
}
function FilteredNamesList(props: FilteredNamesListProps) {
  
  const names = filterNames(namesData, props.query);
  return (
    <NameList names={names} />
  );
}