'use strict';
//should correspond to what's in package.json
var gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    jslint  = require('gulp-jslint'),
    sass    = require('gulp-sass'),
    jade    = require('gulp-jade'),
    notify  = require('gulp-notify'),
    autoprefixer = require('gulp-autoprefixer'),
    include = require('gulp-include'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    changed = require('gulp-changed'),
    plumber = require('gulp-plumber');


gulp.task('lint', function() {
  gulp.src('./js/*.js')
    .pipe(jslint())
    .pipe(jslint.reporter('default'));
});

gulp.task('scripts', function() {
  gulp.src(['./js/main.js','./components/**/*.js'])
    .pipe(plumber())
    .pipe(include())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('../build/js'));
});

gulp.task('styles', function() {
  gulp.src(['./scss/style.scss','./components/**/*.scss'])
    .pipe(concat('style.scss'))
    .pipe(sass({onError: function(e) { console.log(e); } }))
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
    .pipe(gulp.dest('../build/styles'));
});


gulp.task('markup', function() {
  gulp.src(['./templates/pages/**/*.jade','./templates/*.jade'])
    .pipe(plumber())
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('../build/html'));
});


gulp.task('server', function() {
  connect.server({
    livereload: true,
    root: '../build'
  });
});

gulp.task('copy-data', function() {
  gulp.src('./data/*.json')
    .pipe(changed('./data/*.json'))
    .pipe(gulp.dest('../build/data'));
});

gulp.task('copy-lib', function() {
  gulp.src('./js/lib/*')
    .pipe(changed('./js/lib/*'))
    .pipe(gulp.dest('../build/js/lib'));
});

gulp.task('copy-media', function() {
  gulp.src('./media/**/*')
    .pipe(changed('./media/**/*'))
    .pipe(gulp.dest('../build/media'));
});

gulp.task('watch', function() {

  gulp.watch([  './components/**/*.jade',
                './templates/**/*.jade',
                './templates/pages/index.jade',
                './templates/pages/**/*.jade',
                './templates/layouts/*.jade'
              ], ['markup']);
  
  //style sheets
  gulp.watch([  './scss/*.scss',
                './components/**/*.scss'
              ], ['styles']);
  
  //plain old copy stuff over
  gulp.watch('./js/lib/*.js', ['copy-lib']);
  gulp.watch('./data/*.json', ['copy-data']);

  //scripts
  gulp.watch([  './js/*.js',
                './components/**/*.js',
                './templates/pages/**/*.js'
              ], ['scripts']);

});

gulp.task('default', ['scripts', 'styles', 'markup', 'server', 'copy-data', 'copy-lib', 'copy-media', 'watch' ]);


