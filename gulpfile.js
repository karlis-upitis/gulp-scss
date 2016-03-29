/*-------------------------------------
	Register NPM Modules
-------------------------------------*/
var gulp = require('gulp'),
	sass = require('gulp-sass');
	

/*-------------------------------------
	Compile and process CSS
-------------------------------------*/
gulp.task('css', function () {
	// take files with extension .scss from /scss folder
	return gulp.src('scss/*.scss')

		// use scss module on it
		.pipe(sass({
				// - - - - - - - - - - 
				// list of compile options you can see here:
				// https://github.com/sass/node-sass
				// - - - - - - - - - - 
				
				// allows easier debug scss files
	            // sourceComments: true,
	            
	            // when moving project on production - generate compressed version of css
	            // outputStyle: 'compressed'
        	}).on('error', sass.logError)
		)
		// return into css folder
		.pipe(gulp.dest('css/'))
});




/*-------------------------------------
	watch
-------------------------------------*/
// on specific file change execute task
gulp.task('watch', function() {
	// watch .scss files - on file-change execute css task (compile scss)
	gulp.watch('scss/**/*.scss', ['css']);
});

/*-------------------------------------
	default tasks
-------------------------------------*/
// when calling 
// > gulp
// execute css & watch tasks.
gulp.task('default', ['css', 'watch']);
