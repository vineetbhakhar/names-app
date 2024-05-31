import { Name, FilterState } from "../app/page";

function filterNames(names: Name[], filters: FilterState): Name[] {
  const filterInitial = filters.initial.toLowerCase(); // Convert initial to lowercase for comparison
  const filterLanguages = filters.languages.map((lang) => lang.toLowerCase()); // Convert languages to lowercase for comparison
  const filterQualities = filters.qualities.map((quality) =>
    quality.toLowerCase(),
  ); // Convert qualities to lowercase for comparison
  const filterGender = filters.gender.toLowerCase(); // Convert gender to lowercase for comparison

  return names.filter((name) => {
    const initialMatch =
      filterInitial === "" || name.name.toLowerCase().startsWith(filterInitial);
    const genderMatch =
      filterGender === "" || name.gender.toLowerCase() === filterGender;
    const languageMatch =
      filterLanguages.length === 0 ||
      filterLanguages.some((lang) =>
        name.languages.map((l) => l.toLowerCase()).includes(lang),
      );
    const qualitiesMatch =
      filterQualities.length === 0 ||
      filterQualities.some((quality) =>
        name.qualities.map((q) => q.toLowerCase()).includes(quality),
      );

    return initialMatch && genderMatch && languageMatch && qualitiesMatch;
  });
}

export default filterNames;
