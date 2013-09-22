var http = require('http');
var bl = require('bl');

var reqs = {};

var showData = function(order) {
	return function(req) {
		req.pipe(bl(function(err, data) {
			if (err) return console.log(err);

			reqs[order] = data.toString();

			if (Object.keys(reqs).length === 3) {
				console.log(reqs[0]);
				console.log(reqs[1]);
				console.log(reqs[2]);
			}
		}));
	};
};

http.get(process.argv[2], showData(0));
http.get(process.argv[3], showData(1));
http.get(process.argv[4], showData(2));