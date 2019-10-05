var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var fileinclude = require('gulp-file-include');
var sass = require('gulp-sass');
const image = require('gulp-image');

sass.compiler = require('node-sass');
gulp.task('serve', ['fileinclude', 'sass', 'image'], function () {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
    gulp.watch(["app/*.html", "app/**/**/*.html"]).on('change', browserSync.reload);
    gulp.watch(["app/*.html", "app/**/**/*.html"], ['fileinclude', 'image']);
    gulp.watch(["app/assets/scss/*.scss"], ['sass', 'image']);
    gulp.watch(["app/assets/images/*"], ['image']);
    gulp.watch(['app/assets/scss/*.scss'], browserSync.reload);

    gulp.watch('app/temp/header/*.html', browserSync.reload); 
    gulp.watch('app/temp/dataview/*.html', browserSync.reload);

});
gulp.task('fileinclude', function() {
  gulp.src(['app/index.html','app/**/**/*.html','app/**/**/*.css', 'app/**/**/*.js'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./dist/'));
});
 
gulp.task('sass', function () {
  return gulp.src('app/assets/scss/*.scss')
  .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/assets/css/'));
});
gulp.task('image', function () {
  gulp.src('app/assets/images/*')
    .pipe(image())
    .pipe(gulp.dest('./dist/assets/images/'));
});
gulp.task('default', ['serve']);
