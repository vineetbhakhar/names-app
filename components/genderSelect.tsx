import React, { ChangeEvent } from "react";

interface GenderSelectorProps {
	selectedGender: string;
	onGenderSelect: (gender: string) => void;
}

const genderOptions = [
	{ id: "", value: "", label: "Neutral" },
	{ id: "male", value: "Male", label: "Male" },
	{ id: "female", value: "Female", label: "Female" },
];

const GenderSelector: React.FC<GenderSelectorProps> = ({
	selectedGender,
	onGenderSelect,
}) => {
	return (
		<select
			value={selectedGender}
			onChange={(e) => onGenderSelect(e.target.value)}
		>
			{genderOptions.map((option) => (
				<option key={option.id} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
};

export default GenderSelector;
