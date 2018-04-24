var gulp = require("gulp");
var stylus = require("gulp-stylus");
var plumber = require("gulp-plumber");
var browserSync = require("browser-sync");
var notify = require("gulp-notify");
var pug = require("gulp-pug");

gulp.task('default', ['stylus', 'browser-sync', 'pug', 'watch']);

//sassとpugの監視をして変換処理させる
gulp.task('watch', () => {
    gulp.watch(['./src/stylus/**'], () => {
        gulp.start(['stylus']);
    });
    gulp.watch(['./src/pug/**'], () => {
        gulp.start(['pug']);
    });
});

//ブラウザ表示
gulp.task('browser-sync', () => {
    browserSync({
        server: {
            baseDir: "./"   //サーバとなるrootディレクトリ
        }
    });
    //ファイルの監視
    //以下のファイルが変わったらリロードする
    gulp.watch("./dst/js/**/*.js",     ['reload']);
    gulp.watch("./dst/*.html",         ['reload']);
});

//stylをcssに変換
gulp.task('stylus', function() {
    return gulp.src("./src/stylus/**/*.styl")
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(stylus({
            compress: true,
            use: [
                // 例
                // koutoSwiss(),
            ]
        }))
        .pipe(gulp.dest("./dst/css"))
        //reloadせずにinjectする
        .pipe(browserSync.stream())
});
//pugをhtmlに変換
gulp.task("pug", () => {
    var option = {
        pretty: true
    }
    gulp.src("./src/pug/**/*.pug")
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(pug(option))
        .pipe(gulp.dest("./"))
});

//ブラウザリロード処理
gulp.task('reload', () => {
    browserSync.reload();
});
