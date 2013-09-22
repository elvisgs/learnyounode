var fs = require('fs');

module.exports = function(dir, ext, callback) {
	var regex = new RegExp('\\.' + ext + '$');

	fs.readdir(dir, function(err, files) {
		if (err) return callback(err);

		var list = files.filter(function(file) {
			return regex.test(file);
		});

		callback(null, list);
	});
};