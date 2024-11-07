import React, { ChangeEvent } from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectGroup,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Label } from "./ui/label";

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
		<div className='flex flex-col gap-2'>
			<Label htmlFor='gender'>{label}</Label>
			<Select
				defaultValue={selectedGender}
				onValueChange={onGenderSelect}>
				<SelectTrigger className="h-8">
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
