import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from './Input';
import GuessResults from './GuessResults';
import { checkGuess } from '../../game-helpers';
import Banner from './Banner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [pastGuesses, setPastGuesses] = React.useState([]);
	const [gameOver, setGameOver] = React.useState(false);
	const [result, setResult] = React.useState('');

	function addGuess(newGuess) {
		const nextGuess = checkGuess(newGuess, answer);
		const newGuessList = [...pastGuesses, nextGuess];

		setPastGuesses(newGuessList);

		const won = nextGuess.every((item) => item.status == 'correct');

		if (won) {
			setResult('win');
			setGameOver(true);
		} else if (newGuessList.length == NUM_OF_GUESSES_ALLOWED) {
			setResult('lose');
			setGameOver(true);
		}
	}

	return (
		<>
			<GuessResults pastGuesses={pastGuesses}></GuessResults>
			<Input addGuess={addGuess} disabled={gameOver}></Input>
			{gameOver && <Banner type={result} numOfGuesses={pastGuesses.length} answer={answer}></Banner>}
		</>
	);
}

export default Game;
