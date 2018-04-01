const gulp = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const webserver = require('gulp-webserver');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const embedTemplates = require('gulp-angular-embed-templates');

const plumberConfig = {
  handleError: function (err) {
    console.log(err);
    this.emit('end');
  }
};

gulp.task('scripts', function() {
  return gulp.src([
        './node_modules/**/angular.min.js',
        './node_modules/**/angular-resource.min.js',
        './src/**/app.js', 
        './src/app/**/*.js'
    ])
    .pipe(plumber(plumberConfig))
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(embedTemplates())
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/js'));
});

gulp.task('styles', function() {
    return gulp.src([
            './src/styles/main.css',
            './src/**/*.css'
        ])
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./public/css'));
  });

gulp.task('watch', function() {
    gulp.watch('./src/**/*.js', ['scripts']);
    gulp.watch('./src/styles/**/*.css', ['styles']);
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