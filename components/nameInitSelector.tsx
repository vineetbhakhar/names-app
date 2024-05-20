// NameInitialSelector.tsx
import React, { ChangeEvent } from 'react';

interface NameInitialSelectorProps {
	selectedInitial: string;
	onInitialSelect: (initial: string) => void;
}

const NameInitialSelector: React.FC<NameInitialSelectorProps> = ({
	selectedInitial,
	onInitialSelect,
}) => {
	const allInitials = [
		'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
		'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
	];

	const handleInitialSelect = (event: ChangeEvent<HTMLSelectElement>) => {
		onInitialSelect(event.target.value);
	};

	return (
		<select id="initial" value={selectedInitial} onChange={handleInitialSelect}>
			<option value="">All Initials</option>
			{allInitials.map((initial) => (
				<option id={initial} key={initial} value={initial}>
					{initial}
				</option>
			))}
		</select>
	);
};

export default NameInitialSelector;