/**
 * Created by zhs007 on 2015/1/14.
 */

var jadecache = require('../jadecache');
var timeutils = require('heyutils').timeutils;

var p0 = new timeutils.Performance();
var str0 = jadecache.render2str('samples/index.jade', {title: 'jadecache'});
console.log('t0 = ' + p0.end());
console.log(str0);

var p1 = new timeutils.Performance();
var str1 = jadecache.render2str('samples/index.jade', {title: 'jadecache'});
console.log('t1 = ' + p1.end());
console.log(str1);