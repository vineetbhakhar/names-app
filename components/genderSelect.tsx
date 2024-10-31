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
	label: string;
	selectedGender: string;
	onGenderSelect: (gender: string) => void;
}

const genderOptions = [
	{ id: "", value: "", label: "Neutral" },
	{ id: "male", value: "Male", label: "Male" },
	{ id: "female", value: "Female", label: "Female" },
];

const GenderSelector = ({
	label,
	selectedGender,
	onGenderSelect,
}: GenderSelectorProps) => {
	if (selectedGender === null || selectedGender === undefined) {
		throw new Error("selectedGender should not be null or undefined");
	}

	return (
		<div>
			<div>{label}</div>
			<Select
				value={selectedGender}
				onValueChange={(e) => {
					if (e === null || e === undefined) {
						throw new Error("onGenderSelect should not be null or undefined");
					}
					onGenderSelect(e);
				}}>
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
		</div>
	);
};

export default GenderSelector;
