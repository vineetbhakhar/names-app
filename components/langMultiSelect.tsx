// LanguageMultiSelect.tsx
import React, { ChangeEvent } from 'react';

interface LanguageMultiSelectProps {
	selectedLanguages: string[];
	onLanguagesSelect: (languages: string[]) => void;
}

const LanguageMultiSelect: React.FC<LanguageMultiSelectProps> = ({
	selectedLanguages,
	onLanguagesSelect,
}) => {
	const allLanguages = ['English', 'Latin', 'Italian', 'Spanish', 'Greek', 'Hebrew', 'German'];

	const handleLanguageSelect = (event: ChangeEvent<HTMLInputElement>) => {
		const { value, checked } = event.target;
		if (checked) {
			onLanguagesSelect([...selectedLanguages, value]);
		} else {
			onLanguagesSelect(selectedLanguages.filter((lang) => lang !== value));
		}
	};

	return (
		<div>
			{allLanguages.map((language) => (
				<label key={language} >
					<input
						type="checkbox"
						id={language}
						value={language}
						checked={selectedLanguages.includes(language)}
						onChange={handleLanguageSelect}
					/>
					{language}
				</label>
			))}
		</div>
	);
};

export default LanguageMultiSelect;