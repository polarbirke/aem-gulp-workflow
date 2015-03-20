var gulp = require('gulp'),
	shell = require('gulp-shell'),
	notify = require('gulp-notify'),
	plumber = require('gulp-plumber'),
    gutil = require('gulp-util'),
    livereload = require('gulp-livereload');

gulp.task('default', ['watch']);



/* EDIT THESE TO REFLECT YOUR LOCAL PATH AND PORT SETTINGS --------------------------------------------- */

var designsPath = "",  // must end with ../jcr_root/etc/designs/ (trailing slash)
    port = '4502';   // 4502 is the default setting, change only if your CQ is using a different port

/* ----------------------------------------------------------------------------------------------------- */



var path,
    pathArray,
    componentPath,
    fileName;

var beepError = function (err) {
	gutil.beep();
	console.log(err);
};

// Watch events

gulp.task('watch', function () {
    livereload.listen();

	gulp.watch(designsPath + '**/*.less', function (event) {
        path = event.path.replace(/\\/g, '/');
        pathArray = path.split('/');
        fileName = pathArray[pathArray.length - 1];
        componentPath = path.replace(designsPath, '');

		gulp.start('curl-vault-css');
	});
});

gulp.task('curl-vault-css', function () {
	return gulp.src('')
		.pipe(plumber({
			errorHandler: beepError
		}))
		.pipe(shell([
			'curl -u admin:admin -s -T ' + path + ' http://localhost:' + port + '/etc/designs/' + componentPath
		]))
		.pipe(notify({
			onLast: true,
			title: 'LESS update complete'
		}))
        .pipe(livereload());
});