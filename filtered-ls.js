var fs = require('fs');

var dir = process.argv[2];
var ext = process.argv[3];
var regex = new RegExp('\\.' + ext + '$');

fs.readdir(dir, function(err, files) {
	var list = files.filter(function(file) {
		return regex.test(file);
	});

	console.log(list.join('\n'));
});