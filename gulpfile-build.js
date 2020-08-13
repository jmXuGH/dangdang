// 加载模块
const {task,src,dest,watch,series,parallel} = require('gulp');
// 用于加载其他gulp插件
const load = require('gulp-load-plugins')();
// nodejs的del模块用于删除文件
const del = require('del');

// 删除dist目录
task('delDist',async ()=>{
  await del('./dist');
})

// 处理图片
task('image', async ()=>{
  src('./image/*.*')
  .pipe(dest('./dist/image'))
})

// 处理sass
task('sass', async ()=>{
  src('./sass/*.scss')
  .pipe(load.sass())
  .pipe(load.rev())
  .pipe(load.minifyCss())
  .pipe(dest('./dist/css'))
  .pipe(load.rev.manifest())
  .pipe(dest('./rev/css'))
})

// 处理icon
task('icon', async () => {
  src('./iconfont/*.*')
    .pipe(dest('./dist/iconfont'))
    .pipe(load.connect.reload())
})

// 处理js
task('js', async ()=>{
  src('./js/*.js')
  .pipe(load.rev())
  .pipe(load.babel({presets: ['@babel/env']}))
  .pipe(load.uglify())
  .pipe(dest('./dist/js'))
  .pipe(load.rev.manifest())
  .pipe(dest('./rev/js'))
})

// 处理lib
task('lib', async ()=>{
  src('./js/lib/*.js')
  .pipe(load.uglify())
  .pipe(dest('./dist/js/lib'))
})

//处理moudel
task('modules', async ()=>{
  src('./js/modules/**/*.js')
  .pipe(load.babel({presets: ['@babel/env']}))
  .pipe(load.uglify())
  .pipe(dest('./dist/js/modules'))
})


// 处理html
task('html', async ()=>{
  src(['./rev/**/*.json','./pages/*.html'])
  .pipe(load.revCollector({replaceReved:true}))
  .pipe(load.minifyHtml())
  .pipe(dest('./dist/pages'))
})

// 监听文件变化
// task('watch',async ()=>{
//   watch('./image/*.*',series('image'));
//   watch('./style/*.css',series('style'));
//   watch('./js/*.js',series('js'));
//   watch('./pages/*.html',series('html'));
// })

// 启动服务，自动刷新
task('connect',async ()=>{
  load.connect.server({
    root: './dist',
    livereload: true,
    port: 3001
  });
})

// 构建生产包
task('build',series('delDist','image','sass','js','modules','lib','html','connect'))
