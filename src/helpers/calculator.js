function generateAntWinLikelihoodCalculator() {
	var delay = 2000 + Math.random() * 2000;
	var likelihoodOfAntWinning = Math.random();

	return function(callback) {
		setTimeout(function() {
			callback(likelihoodOfAntWinning);
		}, delay);
	};
}

export default generateAntWinLikelihoodCalculator;
