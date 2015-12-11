//配置图片原始及输出路径、缩放比例
var path = "H:/gulp/test/assets/style/img/1080"
var out = [{
        path:"H:/gulp/test/dist/style/img/540",
        scale:0.5
    },{
        path:"H:/gulp/test/dist/style/img/750",
        scale:0.7
    },{
        path:"H:/gulp/test/dist/style/img/1080",
        scale:1
    }]


var gulp = require('gulp'),
    imageResize = require('gulp-image-resize'),
    clean = require('gulp-clean'),
    sizeOf = require('image-size'),
    less=require('gulp-less');

var getFile=require('./getFile');


//输出图片
gulp.task('image', function () {
    var filesList = getFile(path);
    for (var j=0;j<out.length ; j++){
        for(var i=0;i<filesList.length;i++){
            var item = filesList[i];
            var dimensions = sizeOf(item.path);
            gulp.src(item.path)
                .pipe(imageResize({ 
                    width : dimensions.width*out[j].scale,
                    height : dimensions.height*out[j].scale,
                    //quality:1,   //输出图片质量0~1 ，没有对png图进行压缩
                    crop : true,
                    upscale : false
                }))
                .pipe(gulp.dest(out[j].path));
        }
    }
});

//输出样式
gulp.task('css', function () {
    gulp.src('assets/style/*.less')
    .pipe(less({ compress: true }))
    .pipe(gulp.dest('dist/style/'));
});

gulp.task('copy', function () {
    gulp.src('assets/js/*.js')
        .pipe(gulp.dest('dist/js'));
    gulp.src('assets/style/img/**')
        .pipe(gulp.dest('dist/style/img/'));
    gulp.src('assets/*.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('html', function () {
    gulp.src('assets/*.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function() {
    gulp.watch('assets/style/*.less',['css']);
    gulp.watch('assets/*.html',['html']);
});

gulp.task('clean', function() {
    gulp.src('dist')
        .pipe(clean());
});

gulp.task('default', ['image', 'css','html','copy','watch']);
gulp.task('dist', ['image', 'css','html','copy']);



