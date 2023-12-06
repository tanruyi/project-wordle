import React from 'react';
import { NUM_OF_LETTERS_ALLOWED } from '../../constants';

// pastGuesses = [[{'letter': 'A', status: 'correct'}...],[{'letter': 'A', status: 'correct'},,,]]
function Keyboard({ validatedGuesses }) {
	const KEYBOARDKEYS = [
		['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
		['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
		['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
	];

	// consolidate status of letters from all guesses
	const letterStatus = {};

	validatedGuesses.forEach((guess) => {
		guess.forEach(({ letter, status }) => {
			letterStatus[letter] = status;
		});
	});

	return (
		<div className='keyboard-wrapper'>
			{KEYBOARDKEYS.map((row, index) => (
				<div key={index} className='keyboard-row'>
					{row.map((letter) => (
						// letters are unique, can use as key
						<div key={letter} className={`keyboard-key ${letterStatus[letter] || ''}`}>
							{letter}
						</div>
					))}
				</div>
			))}
		</div>
	);
}

export default Keyboard;
