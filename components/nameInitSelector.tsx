import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectGroup,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface NameInitialSelectorProps {
    label: string;
    selectedInitial: string;
    onInitialSelect: (initial: string) => void; 
}
const allInitials = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)); // A-Z

const NameInitialSelector = ({
    label,
    selectedInitial,
    onInitialSelect,
}: NameInitialSelectorProps) => {
    return (
		<div>
            <div>{label}</div>
        <Select value={selectedInitial} onValueChange={onInitialSelect}>
            <SelectTrigger className="w-180">
                <SelectValue placeholder="Select initial" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="All">All Initials</SelectItem>
                    {allInitials.map((initial) => (
                        <SelectItem key={initial} value={initial}>
                            {initial}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
		</div>
    );
};export default NameInitialSelector;