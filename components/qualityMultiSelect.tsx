// QualityMultiSelect.tsx
import React from 'react';
import { MultiSelect } from './ui/multi-select';
import { Label } from './ui/label';

interface QualityMultiSelectProps {
	label: string,
	selectedQualities: string[];
	onQualitiesSelect: (qualities: string[]) => void;
}

const QualityMultiSelect: React.FC<QualityMultiSelectProps> = ({
	label,
	selectedQualities,
	onQualitiesSelect,
}: QualityMultiSelectProps) => {
	const allQualities = [
		// 'Gentle', 'Ambitious', 'Curious', 'Empathetic', 'Resilient', 'Joyful', 'Thoughtful',
		// 'Dependable', 'Innovative', 'Confident', 'Nurturing', 'Adventurous', 'Honest', 'Elegant',
		// 'Passionate',
		{ id: "gentle", value: "Gentle", label: "Gentle" },
		{ id: "ambitious", value: "Ambitious", label: "Ambitious" },
	];

	return (
		<div className='filter-selection'>
			<Label htmlFor='qualities'>{label}</Label>
			<div>
				<MultiSelect
					options={allQualities}
					onValueChange={onQualitiesSelect}
					defaultValue={selectedQualities}
					placeholder="Select qualities"
					variant="inverted"
					animation={0}
					maxCount={3}
				/>
			</div>
		</div>
	);
};

export default QualityMultiSelect;