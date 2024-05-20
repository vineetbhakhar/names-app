// QualityMultiSelect.tsx
import React, { ChangeEvent } from 'react';

interface QualityMultiSelectProps {
	selectedQualities: string[];
	onQualitiesSelect: (qualities: string[]) => void;
}

const QualityMultiSelect: React.FC<QualityMultiSelectProps> = ({
	selectedQualities,
	onQualitiesSelect,
}) => {
	const allQualities = [
		'Gentle', 'Ambitious', 'Curious', 'Empathetic', 'Resilient', 'Joyful', 'Thoughtful',
		'Dependable', 'Innovative', 'Confident', 'Nurturing', 'Adventurous', 'Honest', 'Elegant',
		'Passionate',
	];

	const handleQualitySelect = (event: ChangeEvent<HTMLInputElement>) => {
		const { value, checked } = event.target;
		if (checked) {
			onQualitiesSelect(Array.from(new Set([...selectedQualities, value])));
		} else {
			onQualitiesSelect(selectedQualities.filter((quality) => quality !== value));
		}
	};

	return (
		<div>
			{allQualities.map((quality) => (
				<label key={quality}>
					<input
						type="checkbox"
						id={quality}
						value={quality}
						checked={selectedQualities.includes(quality)}
						onChange={handleQualitySelect}
					/>
					{quality}
				</label>
			))}
		</div>
	);
};

export default QualityMultiSelect;