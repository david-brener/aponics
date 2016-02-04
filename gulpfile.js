var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    minifycss = require('gulp-minify-css');

// Styles

gulp.task('styles', function() {
  return sass('design/scss/**/*.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

// Watch
gulp.task('watch', function() {
    

  // Watch .scss files
  gulp.watch('design/scss/**/*.scss', ['styles']);
    });