import React from 'react';
import { range } from '../../utils';
import { NUM_OF_LETTERS_ALLOWED } from '../../constants';

function Guess({ value }) {
	return (
		<p className='guess'>
			{range(NUM_OF_LETTERS_ALLOWED).map((number) => (
				<span className={`cell ${value == undefined ? '' : value[number].status}`} key={number}>
					{value == undefined ? undefined : value[number].letter}
				</span>
			))}
		</p>
	);
}

export default Guess;
