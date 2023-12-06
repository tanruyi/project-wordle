import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from './Input';
import GuessResults from './GuessResults';
import { checkGuess } from '../../game-helpers';
import Banner from './banner/Banner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Keyboard from './Keyboard';
import RestartButton from './RestartButton';

function Game() {
	// Pick a random word on every pageload.
	const [answer, setAnswer] = React.useState(() => sample(WORDS));

	// for easier debugging
	console.info({ answer });

	// save all prior guesses
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

	function restartGame() {
		setAnswer(() => sample(WORDS));
		setPastGuesses([]);
		setGameStatus('running');
	}

	return (
		<>
			{gameStatus != 'running' && <RestartButton restartGame={restartGame}></RestartButton>}
			<GuessResults pastGuesses={pastGuesses}></GuessResults>
			<Input addGuess={addGuess} gameStatus={gameStatus}></Input>
			{gameStatus != 'running' && <Banner type={gameStatus} numOfGuesses={pastGuesses.length} answer={answer}></Banner>}
			<Keyboard pastGuesses={pastGuesses} />
		</>
	);
}

export default Game;
