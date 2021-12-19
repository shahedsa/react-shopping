const gulp = require('gulp') 
const gulpSass = require('gulp-sass')
const sass = gulpSass(require('sass'))
// vi lager en script i json file for å kjøre sass funksjon
gulp.task('sass', async function (){
    gulp.src('src/Components/**/*.scss').pipe(sass()).pipe(gulp.dest('src/css'))

})