import React from 'react';

function GuessResults({ pastGuesses }) {
	return (
		<div className='guess-results'>
			{pastGuesses.map(({ guess, id }) => (
				<p className='guess' key={id}>
					{guess}
				</p>
			))}
		</div>
	);
}

export default GuessResults;
