var http = require('http');

var url = process.argv[2];

http.get(url, function(req) {
	var allData = '';

	req.setEncoding('utf-8');

	req.on('data', function(data) {
		allData += data;
	});

	req.on('error', console.log);

	req.on('end', function() {
		console.log(allData.length);
		console.log(allData);
	});
});