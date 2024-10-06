import { FilterState } from "@/app/page"
import GenderSelector from "./genderSelect"
import LanguageMultiSelect from "./langMultiSelect"
import NameInitialSelector from "./nameInitSelector"
import QualityMultiSelect from "./qualityMultiSelect"

const Filters = (filters: FilterState, handleFilterChange: (newFilters: Partial<FilterState>) => void) => {

    return (
        <div>
			<div className = 'flex w-60 p-4 items-center'>
				<div className = "p-2">Initial: </div>
    <NameInitialSelector
        selectedInitial={filters.initial}
        onInitialSelect={(initial) => handleFilterChange({ initial })}
    />
			</div >
			<div className='flex w-60 p-4 items-center '>
			<div className="p-2">Gender: </div>
				<GenderSelector
				selectedGender={filters.gender}
				onGenderSelect={(gender) => handleFilterChange({ gender })}
			/>
			</div>
			<LanguageMultiSelect
				selectedLanguages={filters.languages}
				onLanguagesSelect={(languages) => handleFilterChange({ languages })}
			/>
			<QualityMultiSelect
				selectedQualities={filters.qualities}
				onQualitiesSelect={(qualities) => handleFilterChange({ qualities })}
			/>

            </div >)
}

export default Filters;