import React from 'react';

function Input() {
	const [input, setInput] = React.useState('');

	function inputController(event) {
		setInput(event.target.value.toUpperCase());
	}

	function handleFormSubmit(event) {
		event.preventDefault();

		console.info(input);

		setInput('');
	}

	return (
		<form className='guess-input-wrapper' onSubmit={handleFormSubmit}>
			<label html-for='guess-input'>Enter guess:</label>
			<input required id='guess-input' type='text' pattern='[A-Za-z]{5}' title='Must contain only 5 letters' value={input} onChange={inputController} />
		</form>
	);
}

export default Input;
