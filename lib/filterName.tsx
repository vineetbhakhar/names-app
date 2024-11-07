import { Name } from "@/components/filteredNamesList";
import { Filters } from "@/components/filterSection";



function filterNames(names: Name[], filters?: Filters): Name[] {
  console.log("filters for names:", filters); // prints: filters for names: { languages: 'Latin,English' }
  const filterInitial = filters?.initial?.toLowerCase() || ""; // Convert initial to lowercase for comparison
  const filterGender = filters?.gender?.toLowerCase() || ""; // Convert gender to lowercase for comparison
  console.log("filters.languages:", filters?.languages, Array.isArray(filters?.languages)); // prints: filters.languages: Latin,English false
  const filterLanguages = filters?.languages?.map(l => l.toLowerCase());  // Convert languages to lowercase for comparison
  const filterQualities = filters?.qualities?.map(q => q.toLowerCase()) || [];

  console.log(filterInitial, filterGender, filterLanguages, filterQualities); // prints:   [] []
  const filteredNames = names.filter((name) => {
    const initialMatch =
      filterInitial === "all" || name.name.toLowerCase().startsWith(filterInitial);
    const genderMatch =
      filterGender === "" || name.gender.toLowerCase() === filterGender;
    const languageMatch =
      !filterLanguages || filterLanguages.length === 0 ||
      filterLanguages.some((lang) =>
        name.languages.some((l) => l.toLowerCase() === lang),
      );
    const qualitiesMatch =
      !filterQualities || filterQualities.length === 0 ||
      filterQualities.some((quality) =>
        name.qualities.some((q) => q.toLowerCase() === quality),
      );
    const isTrue = initialMatch && genderMatch && languageMatch && qualitiesMatch;
    if (isTrue) {
      console.log(name.name, initialMatch, genderMatch, languageMatch, qualitiesMatch);
      console.log(name)
    }
    return isTrue;
  });
  // console.log(filteredNames);
  return filteredNames;
}

export default filterNames;
