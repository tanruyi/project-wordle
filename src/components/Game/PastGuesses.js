import React from 'react';

function PastGuesses({ pastGuesses }) {
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

export default PastGuesses;
