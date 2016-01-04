[![Dependency Status](https://david-dm.org/baloran/gulp-placeimg.svg?style=flat)](https://david-dm.org/baloran/gulp-placeimg)
[![devDependency Status](https://david-dm.org/baloran/gulp-placeimg/dev-status.svg?style=flat)](https://david-dm.org/baloran/gulp-placeimg#info=devDependencies)

# Gulp PlaceImg

> An images PlaceHolder plugin for gulp.

Replace all pictures by pictures of your choice or by a selection of pictures… with swag.

## Installation

Install via [npm](https://npmjs.org/package/gulp-placeimg):
```
npm install gulp-placeimg --save-dev
```

## Exemple
```js
var gulp = require('gulp');
var placeimg = require('gulp-placeimg');

gulp.task('default', function () {
  return gulp.src('dev/index.html')
        .pipe(placeimg())
        .pipe(gulp.dest('dist'));
});
```

All src will be replaced.

### Configuration

> Forthcoming

## Contributing

Pull requests are welcome.