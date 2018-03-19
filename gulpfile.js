const gulp = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const webserver = require('gulp-webserver');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');

const plumberConfig = {
  handleError: function (err) {
    console.log(err);
    this.emit('end');
  }
};

gulp.task('scripts', function() {
  return gulp.src(['./node_modules/**/angular.min.js',
                   './src/**/app.js', 
                   './src/app/**/*.js'
    ])
    .pipe(plumber(plumberConfig))
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/js'));
});

gulp.task('watch', function() {
  gulp.watch('./src/scripts/**/*.js', ['scripts']);
});

gulp.task('server', function() {
    return gulp.src('./public')
        .pipe(webserver({
            port: 8085,
            livereload: true,
            open: true
        }));
});

gulp.task('start', ['scripts','watch', 'server']);