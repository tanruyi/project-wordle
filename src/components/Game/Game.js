import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from './Input';
import GuessResults from './GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [pastGuesses, setPastGuesses] = React.useState([]);

	function addGuess(newGuess) {
		const newGuessList = [...pastGuesses, newGuess];

		setPastGuesses(newGuessList);
	}

	return (
		<>
			<GuessResults pastGuesses={pastGuesses}></GuessResults>
			<Input addGuess={addGuess}></Input>
		</>
	);
}

export default Game;
