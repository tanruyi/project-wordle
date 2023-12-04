import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from './Input';
import GuessResults from './GuessResults';
import { checkGuess } from '../../game-helpers';
import Banner from './banner/Banner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Keyboard from './Keyboard';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [pastGuesses, setPastGuesses] = React.useState([]);

	// running, won, lost
	const [gameStatus, setGameStatus] = React.useState('running');

	function addGuess(newGuess) {
		const nextGuess = checkGuess(newGuess, answer);
		const newGuessList = [...pastGuesses, nextGuess];

		setPastGuesses(newGuessList);

		if (newGuess === answer) {
			setGameStatus('won');
		} else if (newGuessList.length == NUM_OF_GUESSES_ALLOWED) {
			setGameStatus('lost');
		}
	}

	return (
		<>
			<GuessResults pastGuesses={pastGuesses}></GuessResults>
			<Input addGuess={addGuess} gameStatus={gameStatus}></Input>
			{gameStatus != 'running' && <Banner type={gameStatus} numOfGuesses={pastGuesses.length} answer={answer}></Banner>}
		</>
	);
}

export default Game;
