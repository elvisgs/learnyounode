var http = require('http');

var url = process.argv[2];

http.get(url, function(req) {
	req.setEncoding('utf-8');

	req.on('data', console.log);
	req.on('error', console.log);
});