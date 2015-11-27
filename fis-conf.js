/**
 * @file Describe the file
 *
 * fis3 编译配置文件，FIS3 的构建是不会对源码做修改的，
 * 而是构建产出到了另外一个目录，并且构建的结果才是用来上线使用的
 *
 * @writer zhangrongming
 *
 */


fis.hook('system');

// 编译 js 中的 ts
fis.match('{*.d.ts,_*.*}', {
  release: false
});
fis.match('static/**.ts', {
  parser: fis.plugin('typescript'),
  rExt: '.js',
  isMod: true
});

fis.match('static/**.scss', {
    parser: fis.plugin('sass'),
    rExt: '.css'
});

// swf关闭文件指纹
fis.match('*.{swf,html}', {
    useHash: false
});

// // 压缩优化
fis.match('*.js', {
    optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
    optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
    optimizer: fis.plugin('png-compressor')
});


fis.match('*', {
  useHash: true
});
fis.match('*.html', {
  useHash: false
});

// 默认media，fis3 release
fis.media('dev').match('*', {
    useHash: false,
    useSprite: false,
    optimizer: null
});
