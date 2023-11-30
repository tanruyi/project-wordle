import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from './Input';
import PastGuesses from './PastGuesses';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [numOfPastGuesses, setNumOfPassGuesses] = React.useState(0);

	const [pastGuesses, setPastGuesses] = React.useState([]);

	function addPastGuess(newGuess) {
		const newGuessObject = {
			guess: newGuess,
			id: numOfPastGuesses + 1,
		};

		const newGuessList = [...pastGuesses, newGuessObject];

		setPastGuesses(newGuessList);
		setNumOfPassGuesses(numOfPastGuesses + 1);

		console.info(newGuessList);
	}

	return (
		<>
			<PastGuesses pastGuesses={pastGuesses}></PastGuesses>
			<Input addPastGuess={addPastGuess}></Input>
		</>
	);
}

export default Game;
