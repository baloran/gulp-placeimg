'use_strict'

var Transform = require('readable-stream/transform');
var fs        = require("fs");
var File      = require('vinyl');
var _ = require('underscore');
var cheerio = require('cheerio');
var async     = require('async');

var IMAGES_YOLO = [
  {
    name: 'ncage',
    src: ['https://upload.wikimedia.org/wikipedia/commons/3/33/Nicolas_Cage_2011_CC.jpg', 'http://s.tf1.fr/mmdia/i/59/9/tf1-lci-nicolas-cage-2184599_1713.jpg', 'http://screencrush.com/442/files/2014/09/cage-satan.jpg']
  }
]

// Regex
var taskRegexPatt = / \*\s{1,4}- [a-zA-Z0-9 ]+/;
var tasRegex      = new RegExp(taskRegexPatt);

module.exports = function gulpTrello (options) {
  return new Transform({
    objectMode: true,
    transform: function trelloTransform (file, encoding, cb) {
      if (file.isNull()) {
        cb(null, true);
        return;
      }

      var self = this;

      if (file.isStream()) {
        console.log('isStream');
        this.emit('error', new gutil.PluginError('gulp-img64', 'Streaming not supported'));
        return callback();
      }

      var $ = cheerio.load(String(file.contents));

      var images = _.findWhere(IMAGES_YOLO, {name: 'ncage'});

      var allImg = $('img');

      allImg.each(function () {
        this.attribs.src =  images.src[Math.floor(Math.random()*images.src.length)];
      });

      var output = $.html();

      file.contents = new Buffer(output);
      return cb(null, file);
    }
  });
};