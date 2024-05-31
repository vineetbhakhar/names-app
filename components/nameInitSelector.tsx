// NameInitialSelector.tsx
import React, { ChangeEvent } from 'react';

interface NameInitialSelectorProps {
	selectedInitial: string;
	onInitialSelect: (initial: string) => void;
}

const allInitials = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)); // A-Z

const NameInitialSelector: React.FC<NameInitialSelectorProps> = ({
	selectedInitial,
	onInitialSelect,
}) => (
	<select value={selectedInitial} onChange={(e) => onInitialSelect(e.target.value)}>
		<option value="">All Initials</option>
		{allInitials.map((initial) => (
			<option key={initial} value={initial}>
				{initial}
			</option>
		))}
	</select>
);

export default NameInitialSelector;