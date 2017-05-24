
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var uglifyInline = require('gulp-uglify-inline');
var minifyInline = require('gulp-minify-inline');
var cleanCSS = require('gulp-clean-css');
var minify = require('gulp-minify');
var jsonminify = require('gulp-jsonminify');
var gulpsync = require('gulp-sync')(gulp);


gulp.task('minify-jsp', function() {
   return gulp.src(['./source/**/*.jsp','!./source/jsp/thk/greenlight.jsp','!./source/jsp/dish/*.jsp','!./source/jsp/email/*.jsp','!./source/jsp/ntsl/*.jsp'])
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(uglifyInline())
    .pipe(minifyInline())
    .pipe(gulp.dest('dist/'));
});

gulp.task('minify-css', function() {
    return gulp.src(['./source/**/*.css','!./source/assets/css/page.css','!./source/assets/css/materialdesignicons.min.css'])
        .pipe(cleanCSS({debug: true}))
        .pipe(gulp.dest('dist/'));
});
 gulp.task('minify-js',function(){
 	 gulp.src('./source/**/*.js')
    .pipe(minify( {ext:{
            src:'-debug.js',
            min:'.js'
        },
         ignoreFiles: ['.combo.js', '-min.js']

    }))
    .pipe(gulp.dest('dist/'))
 })
 gulp.task('minify-json', function () {
    return gulp.src(['./source/**/*.json'])
        .pipe(jsonminify())
        .pipe(gulp.dest('dist/'));
});

 gulp.task('minify-html',function(){
 	return gulp.src(['./source/**/*.html',
 		'!./source/assets/components/task-detail-element/task-detail-element.html',
 		'!./source/assets/components/map-element/map-element.html',
 		'!./source/assets/components/stock-chart-element/stock-chart-element.html',
 		'!./source/assets/components/askme-element/askmechart.html'])
    .pipe(htmlmin({
    	removeComments: true
    	,cssmin: true
    	,caseSensitive: true
    	,collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist/'))
 })
 gulp.task('minify-inline-html', function() {
  gulp.src(['./source/**/*.html',
 		'!./source/assets/components/askme-element/askmechart.html',
 		'!./source/assets/components/askme-element/askmetable.html',
 		'!./source/assets/components/chart-element/chart-element.html',
 		'!./source/assets/components/map-element/map-element.html',
 		'!./source/assets/components/stock-chart-element/stock-chart-element.html',
 		'!./source/assets/components/task-detail-element/task-detail-element.html',
 		'!./source/assets/components/data-element/data-element.html',
 		'!./source/assets/components/timeline-element/timeline-element.html',
 		'!./source/assets/components/visualization-element/visualization-element.html',
 		'!./source/assets/components/task-view-element/task-element.html'])
    .pipe(htmlmin({removeComments: true,cssmin: true,caseSensitive: true,collapseWhitespace: true}))
    .pipe(minifyInline())
    .pipe(gulp.dest('dist/'))
});


 gulp.task('copytotemp',function(){
 	return gulp.src(['./source/**/*.jsp','./source/**/*.css','./source/**/*.js','./source/**/*.json','./source/**/*.html'])
 	.pipe(gulp.dest('dist/'))
 })

 gulp.task('override',gulpsync.sync(['minify-css','minify-js','minify-html','minify-inline-html']))

 gulp.task('prod',gulpsync.sync(['copytotemp','override']))