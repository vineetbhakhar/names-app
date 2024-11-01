import { Name } from "@/app/page";
import { Filters } from "@/components/filterSection";



function filterNames(names: Name[], filters?: Filters): Name[] {
  console.log("filters for names:", filters);
  const filterInitial = filters?.initial?.toLowerCase() || ""; // Convert initial to lowercase for comparison
  const filterGender = filters?.gender?.toLowerCase() || ""; // Convert gender to lowercase for comparison
  const filterLanguages = Array.isArray(filters?.languages)
    ? filters?.languages.map((lang) => lang.toLowerCase())
    : [];  // Convert languages to lowercase for comparison
  const filterQualities = Array.isArray(filters?.qualities)
    ? filters.qualities.map((quality) => quality.toLowerCase())
    : []; // Convert qualities to lowercase for comparison

  console.log(filterInitial, filterGender, filterLanguages, filterQualities);
  const filteredNames = names.filter((name) => {
    const initialMatch =
      filterInitial === "all" || name.name.toLowerCase().startsWith(filterInitial);
    const genderMatch =
      filterGender === "" || name.gender.toLowerCase() === filterGender;
    const languageMatch =
      filterLanguages.length === 0 ||
      filterLanguages.some((lang) =>
        name.languages.some((l) => l.toLowerCase() === lang),
      );
    const qualitiesMatch =
      filterQualities.length === 0 ||
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
