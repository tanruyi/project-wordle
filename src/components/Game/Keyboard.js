import React from 'react';
import { NUM_OF_LETTERS_ALLOWED } from '../../constants';

// pastGuesses = [[{'letter': 'A', status: 'correct'}...],[{'letter': 'A', status: 'correct'},,,]]
function Keyboard({ pastGuesses }) {
	let letters = [
		['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
		['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
		['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
	];

	let lettersStatus = [];

	// create array of objects containing all letters from past guesses & letter's current status
	for (let i = 0; i < pastGuesses.length; i++) {
		for (let j = 0; j < NUM_OF_LETTERS_ALLOWED; j++) {
			const currentLetterIndex = lettersStatus.findIndex((item) => pastGuesses[i][j]['letter'] == item['letter']);

            // if the letter is not found, add into array
			if (currentLetterIndex == -1) {
				lettersStatus.push(pastGuesses[i][j]);
            } else {
                // otherwise, check the letter's status against the array and update if necessary
				let prevStatus = lettersStatus[currentLetterIndex]['status'];
				let newStatus = pastGuesses[i][j]['status'];

				if (prevStatus == 'incorrect' && (newStatus == 'misplaced' || newStatus == 'correct')) {
					lettersStatus[currentLetterIndex]['status'] = pastGuesses[i][j]['status'];
				} else if (prevStatus == 'misplaced' && newStatus == 'correct') {
					lettersStatus[currentLetterIndex]['status'] = pastGuesses[i][j]['status'];
				}
			}
		}
	}

	function convertLettersToKeys(row) {
		let keys = [];

		for (let i = 0; i < row.length; i++) {
			const currentLetter = row[i];

			const currentLetterIndex = lettersStatus.findIndex((item) => item['letter'] == currentLetter);

			let keyClassName;

			if (currentLetterIndex == -1) {
				keyClassName = 'keyboard-key';
			} else {
				keyClassName = `keyboard-key ${lettersStatus[currentLetterIndex]['status']}`;
			}

			keys.push(
				<div key={i} className={keyClassName}>
					{currentLetter}
				</div>
			);
		}

		return keys;
	}

	let keyboard = letters.map((row, index) => (
		<div key={index} className='keyboard-row'>
			{convertLettersToKeys(row)}
		</div>
	));

	return <div className='keyboard-wrapper'>{keyboard}</div>;
}

export default Keyboard;
