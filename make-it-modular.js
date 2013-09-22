var ls = require('./ls');

var dir = process.argv[2];
var ext = process.argv[3];

ls(dir, ext, function(err, files) {
	if (err) 
		return console.error(err);

	console.log(files.join('\n'));
});
