'use_strict'

var assert = require('assert');
var es = require('event-stream');
var File = require('vinyl');
var gulp = require('gulp');
var placeimg = require('../');

describe('gulp-placeimg', function() {
  describe('in buffer mode', function() {

    it('should replace all img to other image', function(done) {

      var stream = gulp.src('dev/index.html')
        .pipe(placeimg())
        .pipe(gulp.dest('dist'));

      stream.on('finish', function () {
        done();
      });

      stream.on('error', function(err) {
        done(err);
      });
    });
  });
});