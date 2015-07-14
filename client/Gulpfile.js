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
    changed = require('gulp-changed'),
    plumber = require('gulp-plumber');

gulp.task('lint', function() {
  gulp.src('./src/js/*.js')
    .pipe(jslint())
    .pipe(jslint.reporter('default'));
});

gulp.task('scripts', function() {
  gulp.src('./src/js/main.js')
    .pipe(plumber())
    .pipe(include())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('styles', function() {
  gulp.src('./src/scss/style.scss')
    .pipe(sass({onError: function(e) { console.log(e); } }))
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
    .pipe(gulp.dest('./build/styles'))
    .pipe(connect.reload());
});

// NON-SPA
gulp.task('markup', function() {
  gulp.src('./src/templates/pages/index.jade')
    .src('./src/templates/pages/**/*.jade')
    .pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest('./build/html'))    
    .pipe(connect.reload());
});
// END NON_SPA

// SPA
// gulp.task('basemarkup', function() {
//   gulp.src('./src/templates/index.jade')
//     .pipe(plumber())
//     .pipe(jade())
//     .pipe(gulp.dest('./build'))    
//     .pipe(connect.reload());
// });

// gulp.task('pages', function() {
//   gulp.src('./src/templates/pages/**/*.jade')
//     .pipe(plumber())
//     .pipe(jade())
//     .pipe(gulp.dest('./build/pages'))
//     .pipe(connect.reload());
// });

// gulp.task('components', function() {
//   gulp.src('./src/components/**/*.jade', {base: './src/components/'})
//     .pipe(plumber())
//     .pipe(jade())
//     .pipe(gulp.dest('./build/components'))
//     .pipe(connect.reload());
// });
// END SPA

gulp.task('server', function() {
  connect.server({
    livereload: true,
    root: 'build'
  });
});

gulp.task('copy-data', function() {
  gulp.src('./src/data/*.json')
    .pipe(changed('./src/data/*.json'))
    .pipe(gulp.dest('./build/data'));
});

gulp.task('copy-lib', function() {
  gulp.src('./src/js/lib/*.js')
    .pipe(changed('./src/js/lib/*.js'))
    .pipe(gulp.dest('./build/js/lib'));
});

gulp.task('copy-media', function() {
  gulp.src('./src/media/**/*')
    .pipe(changed('./src/media/**/*'))
    .pipe(gulp.dest('./build/media'));
});

gulp.task('watch', function() {
  // SPA Markup tasks - Set up for page and component "chunks" of html for angular
  // gulp.watch('./src/templates/*.jade', ['basemarkup']);
  // gulp.watch('./src/templates/**/*.jade', ['basemarkup']);
  // gulp.watch('./src/templates/layouts/*.jade', ['basemarkup','pages']);
  // gulp.watch('./src/templates/pages/*.jade', ['pages']);
  // gulp.watch('./src/components/**/*.jade', ['components', 'pages', 'basemarkup']);  

  // NON-SPA Markup tasks
  gulp.watch('./src/components/**/*.jade', ['markup']);
  gulp.watch('./src/templates/**/*.jade', ['markup']);
  gulp.watch('./src/templates/pages/index.jade', ['markup']);
  gulp.watch('./src/templates/pages/**/*.jade', ['markup']);
  gulp.watch('./src/templates/layouts/*.jade', ['markup']);
  
  //style sheets
  gulp.watch('./src/scss/*.scss', ['styles']);
  gulp.watch('./src/components/**/*.scss', ['styles']);
  
  //plain old copy stuff over
  gulp.watch('./src/scripts/lib/*.js', ['copy-lib']);
  gulp.watch('./src/data/*.json', ['copy-data']);

  //scripts
  gulp.watch('./src/js/*.js', ['scripts']);
  gulp.watch('./src/components/**/*.js', ['scripts']);
  gulp.watch('./src/templates/pages/**/*.js', ['scripts']);
});

// gulp.task('default', ['scripts', 'styles', 'basemarkup', 'phonegap-basemarkup', 'pages', 'components', 'server', 'copy-data', 'copy-lib', 'copy-media', 'watch' ]);
gulp.task('default', ['scripts', 'styles', 'markup', 'server', 'copy-data', 'copy-lib', 'copy-media', 'watch' ]);


