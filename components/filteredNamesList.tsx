'use client';

import { useSearchParams } from "next/navigation";
import NameCard, { LoadingNameCard } from "./nameCard";
import { Filters } from "./filterSection";
import filterNames from "@/lib/filterName";
import namesData from "../assets/data/names.json";

export interface Name {
    name: string;
    gender: string;
    languages: string[];
    meaning: string;
    origin: string;
    qualities: string[];
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

export default function FilteredNamesList() {
    const searchParams = useSearchParams();

    const gotInitial = searchParams.get("initial");
    const gotGender = searchParams.get("gender");
    const gotLanguages = searchParams.getAll("languages");
    const gotQualities = searchParams.getAll("qualities");

    const query: Filters = {
        initial: gotInitial || "",
        gender: gotGender || "",
        languages: gotLanguages || [],
        qualities: gotQualities || [],
    }
    const names = filterNames(namesData, query);
    return (
        <div className="p-4">
            <NameList names={names} />
        </div>
    );
}

export function FilteredNamesListLoading() {
    return (
        <div className="p-4">
            <LoadingNameCard />
            <LoadingNameCard />
            <LoadingNameCard />
        </div>
    );
}
