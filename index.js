var path = require('path'),
    borschikFreeze = require('borschik/lib/freeze');

module.exports = {
    file: function file(options) {
        return function(url) {
            if (url.indexOf('http') === 0) {
                return url;
            }

            var absFilePath = path.resolve(options.folder, url);

            return borschikFreeze.freeze(absFilePath).replace(path.resolve(options.cutPrefix), '');
        };
    }
}

