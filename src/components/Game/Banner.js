import React from 'react';

function Banner({ type = 'win', numOfGuesses, answer }) {
	const winBanner = (
		<div className='happy banner'>
			<p>
				<strong>Congratulations!</strong> Got it in <strong>{numOfGuesses} guesses</strong>.
			</p>
		</div>
	);

	const loseBanner = (
		<div className='sad banner'>
			<p>
				Sorry, the correct answer is <strong>{answer}</strong>.
			</p>
		</div>
	);

	return type == 'win' ? winBanner : loseBanner;
}

export default Banner;
