// 加载模块
const { task, src, dest, watch, series, parallel } = require('gulp');
// 用于加载其他gulp插件
const load = require('gulp-load-plugins')();
// nodejs的del模块用于删除文件
const del = require('del');

// 删除dist目录
task('delDist', async () => {
  await del('./dist');
})

// 处理图片
task('image', async () => {
  src('./image/*.*')
    .pipe(dest('./dist/image'))
    .pipe(load.connect.reload())
})

// 处理sass
task('sass', async () => {
  src('./sass/*.scss')
    .pipe(load.sass())
    .pipe(dest('./dist/css'))
    .pipe(load.connect.reload())
})

// 处理icon
task('icon', async () => {
  src('./iconfont/*.*')
    .pipe(dest('./dist/iconfont'))
    .pipe(load.connect.reload())
})

// 处理js
task('js', async () => {
  src('./js/*.js')
    .pipe(dest('./dist/js'))
    .pipe(load.connect.reload())
})

//处理moudel
task('modules', async () => {
  src('./js/modules/**/*.js')
    .pipe(dest('./dist/js/modules'))
    .pipe(load.connect.reload())
})

// 处理lib
task('lib', async ()=>{
  src('./js/lib/*.js')
  .pipe(dest('./dist/js/lib'))
  .pipe(load.connect.reload())
})

// 处理json
task('json', async () => {
  src('./data/*.json')
    .pipe(dest('./dist/data'))
    .pipe(load.connect.reload())
})


// 处理html
task('html', async () => {
  src('./pages/*.html')
    .pipe(dest('./dist/pages'))
    .pipe(load.connect.reload())
})

// 监听文件变化
task('watch', async () => {
  watch('./image/*.*', series('image'));
  watch('./sass/*.scss', series('sass'));
  watch('./js/*.js', series('js'));
  watch('./js/modules/**/*.js', series('modules'));
  watch('./pages/*.html', series('html'));
  watch('./data/*.jaon', series('json'));
})

// 启动服务，自动刷新
task('connect', async () => {
  load.connect.server({
    root: './dist',
    livereload: true,
    port: 3000
  });
})

// 构建开发包
task('dev', series('delDist', 'image', 'sass','json', 'icon', 'js','modules','lib', 'html', 'connect', 'watch'))
