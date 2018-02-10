function generateAntWinLikelihoodCalculator() {
	var delay = 3000 + Math.random() * 3000;
	var likelihoodOfAntWinning = Math.random();

	return function(callback) {
		setTimeout(function() {
			callback(likelihoodOfAntWinning);
		}, delay);
	};
}

export default generateAntWinLikelihoodCalculator;
