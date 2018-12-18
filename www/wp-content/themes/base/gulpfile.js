//npm i gulp gulp-sass gulp-concat gulp-uglifyjs gulp-cssnano gulp-rename gulp-autoprefixer --save-dev
let gulp = require('gulp'), //Подключаем Gulp
    sass = require('gulp-sass'), //Подключаем Sass пакет
    concat = require('gulp-concat'), //Подключаем gulp-concat (для конкатенации/склейки файлов)
    uglify = require('gulp-uglifyjs'), //Подключаем gulp-uglifyjs (для сжатия JS)
    cssnano = require('gulp-cssnano'), //Подключаем пакет для минификации CSS
    rename = require('gulp-rename'), //Подключаем библиотеку для переименования файлов
    autoprefixer = require('gulp-autoprefixer'); //Подключаем библиотеку для автоматического добавления префиксов

gulp.task('sass', function () { //Создаем таск Sass
    return gulp.src([
        'src/scss/style.scss'
    ]) //Указываем откуда брать файлы
        .pipe(sass({uotputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer([ // Создаем префиксы и делаем их настройку
                'last 15 version',
                'ie 10',
                'ie 9'],
            {cascade: true}))
        .pipe(gulp.dest('assets/css/')) //Выгружаем результата
});

gulp.task('sass_core', function () { //Создаем таск Sass_core
    return gulp.src([
        'src/scss/core.scss'
    ]) //Указываем откуда брать файлы
        .pipe(sass({uotputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer([ // Создаем префиксы и делаем их настройку
                'last 15 version',
                'ie 10',
                'ie 9'],
            {cascade: true}))
        .pipe(gulp.dest('assets/css/')) //Выгружаем результата
});

gulp.task('css', ['sass', 'sass_core'], function () { //Выбираем файл для минификации
    return gulp.src([
        'assets/css/style.css',
        'assets/css/core.css'
    ])
        .pipe(cssnano()) //Сжимаем
        .pipe(rename({suffix: '.min'})) //Добавляем суффикс .min
        .pipe(gulp.dest('assets/css/')); //Выгружаем в папку
});

gulp.task('scripts', ['scripts_core'], function() {
    return gulp.src([ // Берем все необходимые скрипты
        'src/js/*.js'
    ])
        .pipe(concat('scripts.min.js')) // Собираем их в кучу в новом файле scripts.min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('assets/js')); // Выгружаем в папку assets/js
});

gulp.task('scripts_core', function() {
    return gulp.src([ // Берем все необходимые скрипты
        'src/js/core/jquery-3.3.1.min.js', // Берем jQuery
    ])
        .pipe(concat('core.min.js')) // Собираем их в кучу в новом файле libs.min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('assets/js/core')); // Выгружаем в папку core/js/libs
});

gulp.task('watch', ['css', 'scripts'], function() {
    gulp.watch('src/scss/**/*.scss', ['css']); // Наблюдение за scss файлами
    gulp.watch('src/js/**/*.js', ['scripts']); // Наблюдение за JS файлами в папке js
});

