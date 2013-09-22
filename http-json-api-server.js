var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
	if (req.method !== 'GET') {
		res.statusCode = '404';
		return res.end();
	}

	var urlparts = url.parse(req.url, true);
	var pathname = urlparts.pathname;
	var date = new Date(urlparts.query.iso);
	var json;

	if (pathname === '/api/parsetime') {
		json = {
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		};
	}

	if (pathname === '/api/unixtime') {
		json = { unixtime: date.getTime() };
	}

	if (json) {
		res.writeHead(200, { 'Content-Type': 'application/json'});
		res.end(JSON.stringify(json));
	}
	else {
		res.writeHead(404);
		res.end();
	}
});

server.listen(8000);