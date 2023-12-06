import React from 'react';

function RestartButton({ restartGame }) {
	return (
		<button type='reset' id='restart-button' onClick={restartGame}>
			Restart Game
		</button>
	);
}

export default RestartButton;
