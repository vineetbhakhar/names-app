import FilterSection from "@/components/filterSection";
import FilteredNamesList from "@/components/filteredNamesList";
import { Suspense } from "react";

export default async function HomePage(props: {
  searchParams: Promise<{ initial?: string, gender?: string, languages?: string | string[], qualities?: string | string[] }>;
}
) {
  return (
    <div className="mx-8 lg:mx-64 shadow-lg">
      <div>something</div>
      <Suspense fallback={<div>Loading...</div>}>
        <FilterSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <FilteredNamesList />
      </Suspense>
    </div>
  );
}