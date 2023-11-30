import React from 'react';
import Guess from './Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessResults({ pastGuesses }) {
	return (
		<div className='guess-results'>
			{range(NUM_OF_GUESSES_ALLOWED).map((number) => (
				<Guess key={number} value={pastGuesses[number]}></Guess>
			))}
		</div>
	);
}

export default GuessResults;
