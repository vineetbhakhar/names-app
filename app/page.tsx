import FilterSection from "@/components/filterSection";
import FilteredNamesList, { FilteredNamesListLoading } from "@/components/filteredNamesList";
import { Suspense } from "react";
import { FilterSelectionLoading } from "@/components/filterSection";

export default async function HomePage(props: {
  searchParams: Promise<{ initial?: string, gender?: string, languages?: string | string[], qualities?: string | string[] }>;
}
) {
  return (
    <div className="mx-8 lg:mx-64 shadow-lg">
      <Suspense fallback={<FilterSelectionLoading />}>
        <FilterSection />
      </Suspense>
      <Suspense fallback={<FilteredNamesListLoading />}>
        <FilteredNamesList />
      </Suspense>
    </div>
  );
}

/*
    Gentle - Warm, soothing, and kind
    Ambitious - Driven, determined, and goal-oriented
    Curious - Inquisitive, eager to learn, and adventurous
    Empathetic - Compassionate, understanding, and considerate
    Resilient - Adaptable, strong-willed, and persevering
    Joyful - Cheerful, optimistic, and light-hearted
    Thoughtful - Reflective, insightful, and contemplative
    Dependable - Reliable, trustworthy, and responsible
    Innovative - Creative, imaginative, and pioneering
    Confident - Self-assured, poised, and assertive
    Nurturing - Caring, supportive, and maternal/paternal
    Adventurous - Daring, risk-taking, and open to new experiences
    Honest - Sincere, transparent, and truthful
    Elegant - Graceful, refined, and sophisticated
    Passionate - Enthusiastic, driven, and emotionally expressive
    */