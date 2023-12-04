import React from 'react';
import { NUM_OF_LETTERS_ALLOWED } from '../../constants';

function Input({ addGuess, gameStatus }) {
	const [input, setInput] = React.useState('');

	function inputController(event) {
		setInput(event.target.value.toUpperCase());
	}

	function handleFormSubmit(event) {
		event.preventDefault();

		addGuess(input);

		setInput('');
	}

	return (
		<form className='guess-input-wrapper' onSubmit={handleFormSubmit}>
			<label html-for='guess-input'>Enter guess:</label>
			<input
				required
				id='guess-input'
				type='text'
				pattern='[A-Za-z]{5}'
				title={`Must contain only ${NUM_OF_LETTERS_ALLOWED} letters`}
				value={input}
				onChange={inputController}
				disabled={gameStatus != 'running'}
			/>
		</form>
	);
}

export default Input;
