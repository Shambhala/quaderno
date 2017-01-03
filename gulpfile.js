import gulp from 'gulp';
import svgmin from 'gulp-svgmin';
import svgstore from 'gulp-svgstore';
import path from 'path';
const appDir = path.join(__dirname, 'src');
const buildDir = path.join(__dirname, 'dist');

gulp.task('default', function() {

    return gulp
    .src('src/svg/**/*.svg', { base: 'src/svg' })
    .pipe(svgmin(function(file) {
        var prefix = path.basename(file.relative, path.extname(file.relative));
        return {
            plugins: [
                {
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }
            ]
        };
    }))
        .pipe(rename(function (file) {
            var name = file.dirname.split(path.sep);
            name.push(file.basename);
            file.basename = name.join('-');
        }))
    .pipe(svgstore())
    .pipe(gulp.dest('dist/img'));
});
