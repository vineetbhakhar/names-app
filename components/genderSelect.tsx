// GenderSelector.tsx
import React, { ChangeEvent } from 'react';

interface GenderSelectorProps {
	selectedGender: string;
	onGenderSelect: (gender: string) => void;
}

const GenderSelector: React.FC<GenderSelectorProps> = ({
	selectedGender,
	onGenderSelect,
}) => {
	const handleGenderSelect = (event: ChangeEvent<HTMLSelectElement>) => {
		onGenderSelect(event.target.value);
	};

	return (
		<select id="gender" value={selectedGender} onChange={handleGenderSelect}>
			<option id="" value="">All Genders</option>
			<option id="male" value="male">Male</option>
			<option id="female" value="female">Female</option>
		</select>
	);
};

export default GenderSelector;