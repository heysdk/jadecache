/**
 * Created by zhs007 on 2015/1/14.
 */

var fs = require('fs');
var jade = require('jade');

var lstCache = {};

function render2str(filename, locals) {
    if (lstCache.hasOwnProperty(filename)) {
        return lstCache[filename](locals);
    }

    fn = jade.compile(fs.readFileSync(filename, 'utf8'), {filename: filename});
    lstCache[filename] = fn;

    return fn(locals);
}

exports.render2str = render2str;