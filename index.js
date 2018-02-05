var path = require('path'),
    borschikHash = require('borschik-hash');

module.exports = {
    file: function file(options) {
        return function(url) {
            if (url.indexOf('http') === 0) {
                return url;
            }

            return borschikHash(path.resolve(options.folder, url))
                .replace(path.resolve(options.cutPrefix), '');
        };
    }
}

