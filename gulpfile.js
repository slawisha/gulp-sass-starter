var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var notify= require('gulp-notify');

gulp.task('css', function(){
	return gulp.src('sass/main.scss')
		.pipe(sass())
		.pipe(autoprefixer('last 10 version'))
		.pipe(gulp.dest('css'))
		.pipe(notify({message: 'Gulp has finished'}));
});

gulp.task('default', function(){
	gulp.run('css');

	gulp.watch('sass/**/*.scss', function(){
		gulp.run('css');
	});
});

