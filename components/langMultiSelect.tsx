// LanguageMultiSelect.tsx
import React, { ChangeEvent, useState } from 'react';
import { Checkbox } from "@/components/ui/checkbox"
import { MultiSelect } from './ui/multi-select';
import { Label } from './ui/label';


interface LanguageMultiSelectProps {
	label: string,
	selectedLanguages: string[];
	onLanguagesSelect: (languages: string[]) => void;
}

const allLanguages = [
	{ id: "english", value: "English", label: "English" },
	{ id: "latin", value: "Latin", label: "Latin" },
	// ... other language options
];

const LanguageMultiSelect = ({
	label,
	selectedLanguages,
	onLanguagesSelect
}: LanguageMultiSelectProps
) => {
	return (
		<div className='filter-selection'>
			<Label htmlFor='languages'>{label}</Label>
			<MultiSelect
				className="h-8"
				options={allLanguages}
				onValueChange={onLanguagesSelect}
				defaultValue={selectedLanguages}
				placeholder="Select languages"
				variant="inverted"
				animation={0}
				maxCount={3}
			/>
		</div>
	);
};

export default LanguageMultiSelect;