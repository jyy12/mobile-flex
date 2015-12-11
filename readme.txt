1、在gulpfile.js里配置图片原始及输出路径，缩放倍数
2、gulp-image-resize需另外安装GraphicsMagick或ImageMagick，并设置相应环境变量
3、PNG图片压缩不理想，可用firework进一步压缩
4、在style.less中配置响应式的图片路径
.media-set (@path: '750/') {
    .aa{background:url('img/@{path}aa.jpg') no-repeat 0 0;}
    .bb{color:green;}
}

@media (min-width:100px){
    .media-set('540/')
}

@media (min-width:200px){
    .media-set;
}

@media (min-width:300px){
    .media-set('1080/')
}