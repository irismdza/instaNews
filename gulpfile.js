var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    eslint = require('gulp-eslint'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify');

var plumberErrorHandler = {
    errorHandler: notify.onError({
        title: 'Gulp',
        message: 'Error: <%= error.message %>'
        })
    };

gulp.task('scripts', function() {
    gulp.src('./js/*.js')
        .pipe(plumber(plumberErrorHandler))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('./build/js'))
}); 

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch(['build/css/*.css', 'build/js/*.js']).on('change', browserSync.reload);
});

gulp.task('watch', function() {
   gulp.watch('js/*.js', ['scripts']);
});

gulp.task('lint', function() {
    return gulp.src(['./js/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('default', ['watch', 'browser-sync', 'lint']);

