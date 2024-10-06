// LanguageMultiSelect.tsx
import React, { ChangeEvent, useState } from 'react';
import { Checkbox } from "@/components/ui/checkbox"
import { MultiSelect } from './ui/multi-select';


interface LanguageMultiSelectProps {
	selectedLanguages: string[];
	onLanguagesSelect: (languages: string[]) => void;
}

const allLanguages = [
	{ id: "english", value: "English", label: "English" },
	{ id: "latin", value: "Latin", label: "Latin" },
	// ... other language options
];

const LanguageMultiSelect = ({
	selectedLanguages,
	onLanguagesSelect
}: LanguageMultiSelectProps
) => {
	const handleLanguageSelect = (value: string, checked: string | boolean) => {
		// const { value, checked } = event.target;
		onLanguagesSelect(
			checked
				? [...selectedLanguages, value]
				: selectedLanguages.filter((lang) => lang !== value)
		);
	};

	
	const [_, setSelectedLanguages] = useState<string[]>([]);
	
	const handleLanguageSelection = (langs : string[]) => {
		setSelectedLanguages(langs);
		onLanguagesSelect(langs);
	}

	return (
		<div>
			<div className="p-4 max-w-xl">
				<MultiSelect
					options={allLanguages}
					// onValueChange={setSelectedLanguages}
					onValueChange={handleLanguageSelection}
					defaultValue={selectedLanguages}
					placeholder="Select languages"
					variant="inverted"
					animation={0}
					maxCount={3}
				/>
			</div>
		</div>
	);
};

export default LanguageMultiSelect;