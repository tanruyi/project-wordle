import React from 'react';
import { range } from '../../utils';
import { NUM_OF_LETTERS_ALLOWED } from '../../constants';

function Guess({ value }) {
	return (
		<p className='guess'>
			{range(NUM_OF_LETTERS_ALLOWED).map((number) => (
				<span className='cell' key={number}>
					{value[number]}
				</span>
			))}
		</p>
	);
}

export default Guess;
