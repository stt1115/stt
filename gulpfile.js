//gulp的配置文件
var gulp = require("gulp");//加载gulp模块
var connect = require("gulp-connect");//服务器模块
var sass = require("gulp-sass");//将sass文件转换成css文件的模块
var sourcemaps = require('gulp-sourcemaps');//让编译后的文件和源文件的关联的模块
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var babel = require("gulp-babel");
//
gulp.task("copyHtml",function(){
	gulp.src("*.html").pipe(gulp.dest("dist/html")).pipe(connect.reload());
})
gulp.task("copyImg",function(){
	gulp.src("img/*").pipe(gulp.dest("dist/img")).pipe(connect.reload());
})
gulp.task("copyJs",function(){
	gulp.src("js/*.js").pipe(gulp.dest("dist/js")).pipe(connect.reload());
})

//sass
gulp.task("sass",function(){
	gulp.src("css/*.css")
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle:"compressed"}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest("dist/css")).pipe(connect.reload());
})
//监听
gulp.task("watch",function(){
	gulp.watch("*.html",["copyHtml"]);
	gulp.watch("sass/*.scss",["sass"]);
	gulp.watch("img/*",["copyImg"]);
	gulp.watch("js/*.js",["copyJs"]);
})
//自动刷新
gulp.task('server',function(){ 
	connect.server({
		root:'dist',
		livereload:true
		});
})
//多个默认 任务[任务名1，任务名2，。。。。] 执行
gulp.task("default",["server","watch"]);

