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

    var fn = jade.compile(fs.readFileSync(filename, 'utf8'), {filename: filename});
    lstCache[filename] = fn;

    return fn(locals);
}

function rendercache2str(jadename, jadecache, locals) {
    if (lstCache.hasOwnProperty(jadename)) {
        return lstCache[jadename](locals);
    }

    var fn = jade.compile(jadecache, {filename: jadename});
    lstCache[jadename] = fn;

    return fn(locals);
}

exports.render2str = render2str;
exports.rendercache2str = rendercache2str;