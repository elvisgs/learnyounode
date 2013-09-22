var sum = process.argv
	.slice(2)
	.map(Number)
	.reduce(function(a, b) { return a + b; }, 0);

console.log(sum);