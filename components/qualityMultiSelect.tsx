// QualityMultiSelect.tsx
import React, { ChangeEvent, useState } from 'react';
import { MultiSelect } from './ui/multi-select';

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
		{id: "gentle", value: "Gentle", label: "Gentle"},
		{id: "ambitious", value: "Ambitious", label: "Ambitious"},
	];

	const [_, setSelectedQualities] = useState<string[]>([]);

	const handleQualitySelection = (selectedQualities: string[]) => {
		setSelectedQualities(selectedQualities);
		onQualitiesSelect(selectedQualities);
	}

	return (
		<div>
			<div>{label}</div>
			<div>
				<div className="p-4 max-w-xl">
					<MultiSelect
						options={allQualities}
						onValueChange={handleQualitySelection}
						defaultValue={selectedQualities}
						placeholder="Select qualities"
						variant="inverted"
						animation={0}
						maxCount={3}
					/>
				</div>
			</div>
		</div>


	);
};

export default QualityMultiSelect;