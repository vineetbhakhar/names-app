import React, { ChangeEvent } from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectGroup,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

interface GenderSelectorProps {
	selectedGender: string;
	onGenderSelect: (gender: string) => void;
}

const genderOptions = [
	{ id: "", value: "", label: "Neutral" },
	{ id: "male", value: "Male", label: "Male" },
	{ id: "female", value: "Female", label: "Female" },
];

const GenderSelector = ({
	selectedGender,
	onGenderSelect,
}: GenderSelectorProps) => {
	return (
		<Select
			value={selectedGender}
			onValueChange={(e) => onGenderSelect(e)}>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Select gender" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{genderOptions.map((option) => (
						<SelectItem key={option.id} value={option.label}>
							{option.label}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};

export default GenderSelector;
