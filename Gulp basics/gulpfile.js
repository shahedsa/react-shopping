// top level funksjon (task, src, dest,watch)

const gulp = require('gulp') // يعني طلب المكتبه الي سطبناها
const gulpSass = require('gulp-sass')
const sass = gulpSass(require('sass'))// for å bruke sass direkte for å overføre sass til css

gulp.task('sass', async function() {
    gulp.src('index.scss').pipe(sass()).pipe(gulp.dest('css'))
})
    
    
        
