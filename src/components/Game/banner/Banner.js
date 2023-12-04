import React from 'react';
import WonBanner from './WonBanner';
import LostBanner from './LostBanner';

function Banner({ type, numOfGuesses, answer }) {
	return type == 'won' ? <WonBanner numOfGuesses={numOfGuesses} /> : <LostBanner answer={answer} />;
}

export default Banner;
