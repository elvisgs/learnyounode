var http = require('http');
var map = require('through2-map');

var server = http.createServer(function(req, res) {
	if (req.method !== 'POST') {
		res.statusCode = '404';
		return res.end();
	}

	req.pipe(map(function(chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(res);
});

server.listen(8000);