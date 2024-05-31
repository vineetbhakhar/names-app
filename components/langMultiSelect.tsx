// LanguageMultiSelect.tsx
import React, { ChangeEvent } from 'react';

interface LanguageMultiSelectProps {
	selectedLanguages: string[];
	onLanguagesSelect: (languages: string[]) => void;
}

const allLanguages = [
	{ id: "english", value: "English", label: "English" },
	{ id: "latin", value: "Latin", label: "Latin" },
	// ... other language options
];

const LanguageMultiSelect: React.FC<LanguageMultiSelectProps> = ({
	selectedLanguages,
	onLanguagesSelect,
}) => {
	const handleLanguageSelect = (event: ChangeEvent<HTMLInputElement>) => {
		const { value, checked } = event.target;
		onLanguagesSelect(
			checked
				? [...selectedLanguages, value]
				: selectedLanguages.filter((lang) => lang !== value)
		);
	};

	return (
		<div>
			{allLanguages.map((language) => (
				<label key={language.id}>
					<input
						type="checkbox"
						value={language.value}
						checked={selectedLanguages.includes(language.value)}
						onChange={handleLanguageSelect}
					/>
					{language.label}
				</label>
			))}
		</div>
	);
};

export default LanguageMultiSelect;