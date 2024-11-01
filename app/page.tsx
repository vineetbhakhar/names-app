import FilterSection, { Filters } from "@/components/filterSection";
import NameCard from "@/components/nameCard";
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
  searchParams?: Promise<{ initial?: string, gender?: string, languages?: string| string[], qualities?: string | string[] }>;
}
) {
  const rawSearchParams = await props.searchParams; // Get the raw search parameters
  console.log("rawSearchParams:", rawSearchParams);

  const parsedSearchParams = parseSearchParams(rawSearchParams);

  console.log("parsedSearchParams:", parsedSearchParams);
  return (
    <div>
      <FilterSection />
      {/* <FilteredNamesList query={parsedSearchParams} /> */}
      <FilteredNamesList query={parsedSearchParams} />
    </div>
  );
}

function parseSearchParams(params?: { initial?: string, gender?: string, languages?: string| string[], qualities?: string | string[] }) : Filters{
  if (!params) return {initial: "", gender: "", languages: [], qualities: []};
  var langs: string[], quals : string[];
  if (Array.isArray(params.languages)){
    langs = params.languages;
  } else {
    langs = params?.languages ? [params.languages] : [];
  }

  if (Array.isArray(params.qualities)){
    quals = params.qualities;
  } else {
    quals = params?.qualities ? [params.qualities] : [];
  }
  return {
    initial: params?.initial || "",
    gender: params?.gender || "",
    languages: langs,
    qualities: quals
  }
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

interface FilteredNamesListProps {
  query?: Filters
}
function FilteredNamesList(props: FilteredNamesListProps) {

  const names = filterNames(namesData, props.query);
  return (
    <NameList names={names} />
  );
}