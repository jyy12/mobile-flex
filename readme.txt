1����gulpfile.js������ͼƬԭʼ�����·�������ű���
2��gulp-image-resize�����ⰲװGraphicsMagick��ImageMagick����������Ӧ��������
3��PNGͼƬѹ�������룬����firework��һ��ѹ��
4����style.less��������Ӧʽ��ͼƬ·��
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