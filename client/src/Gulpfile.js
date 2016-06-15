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
    concat = require('gulp-concat'),
    changed = require('gulp-changed'),
    plumber = require('gulp-plumber'),
    rename = require("gulp-rename"),
    minify = require('gulp-minifier'),
    buildDirectory = '../build';


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
    .pipe(gulp.dest(buildDirectory + '/js'));
});

gulp.task('libscripts', function() {
  gulp.src(['./js/lib/**/*.js'])
    .pipe(plumber())
    .pipe(include())
    .pipe(gulp.dest(buildDirectory + '/js/lib'));
});

gulp.task('styles', function() {
  gulp.src(['./scss/style.scss','./components/**/*.scss'], {base: 'src'})
    .pipe(concat('temp.scss'))
    .pipe(gulp.dest('scss'))
    .pipe(sass({onError: function(e) { console.log(e); } }))
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
    .pipe(rename('main.css'))
    .pipe(gulp.dest(buildDirectory + '/styles'));
    
});

gulp.task('markup', function() {
  gulp.src(['./templates/pages/**/*.jade','./templates/*.jade'])
    .pipe(plumber())
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(buildDirectory + '/html'));
});

gulp.task('copy-data', function() {
  gulp.src('./data/*.json')
    .pipe(changed('./data/*.json'))
    .pipe(gulp.dest(buildDirectory + '/data'));
});

// gulp.task('copy-lib', function() {
//   gulp.src('./js/lib/*')
//     .pipe(changed('./js/lib/*'))
//     .pipe(gulp.dest(buildDirectory + '/js/lib'));
// });

gulp.task('copy-media', function() {
  gulp.src('./media/**/*')
    .pipe(changed('./media/**/*'))
    .pipe(gulp.dest(buildDirectory + '/media'));
});

//this needs to be run manually when you want to minify - 'gulp minify'
gulp.task('minify', function() {
  gulp.src(buildDirectory + '/**/*').pipe(minify({
    minify: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    minifyJS: true,
    minifyCSS: true
  })).pipe(gulp.dest(buildDirectory + '/'));
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
                './components/**/*.scss', 
                '!./scss/temp.scss'
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

gulp.task('default', ['scripts', 'styles', 'markup', 'copy-data', 'libscripts', 'copy-media', 'watch' ]);


