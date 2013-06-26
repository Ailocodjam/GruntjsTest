module.exports = function(grunt){
    //配置
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'), 
        //合并
        concat:{
            domop:{
                src:['src/ajax.js','src/selector.js'], 
                dest:'dest/domop.js'
            }
        },            
        //压缩
        uglify:{
            options:{
                banner:'/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n' 
            }, 
            build:{
                src:'dest/domop.js', 
                dest:'dest/domop.min.js'
            } 
        },
        jshint:{
            files:['Gruntfile.js','lib/**/*.js']
        },
        //自定义
        log:{
            foo:[1,2,3],
            bar:'hello world',
            baz:false
        }
    });
    //gruntjs.option ....
    grunt.option('staging',false);
    var isDev = grunt.option('no-staging');   //return true;
    //grunt template...
    var obj = {
        foo:'c', 
        bar:'b<% = foo %>d',
        baz:'a<% = bar %>e'
    };
    grunt.template.process('<%= baz %>',"{data:obj}"); //abcd
    //加载package.json想用的插件
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.loadNpmTasks('grunt-contrib-watch');
    
    //默认会执行default任务
    grunt.registerTask('default',['concat','uglify']);
    //多事务
    grunt.task.registerMultiTask('log','Log staff.',function(){
        grunt.log.writeln(this.target+': '+this.data); 
    });
    grunt.task.run([]);
    
    //grunt.event.on(event,listener);
    //grunt.fail.warn(error[,errorCode]);

    //函数式编程
    function add1(a,b){
        return a+b; 
    }
    var fn1 = grunt.util.callbackify(add1);
    fn1(1,2,function(result){
        return result; 
    });
    
    //this.files
    this.files.forEach(function(file){
        var contents = file.src.filter(function(filpath){
            if(!grunt.file.exist(filepath)){
                grunt.log.warn('source file"'+filepath+'" not found.'); 
                return false;
            }else{
                return true;         
            } 
        }).map(function(filepath){
            return grunt.file.read(filepath); 
        }).join("\n"); 
        grunt.file.write(file.dest,contents);
        grunt.log.writeln('File:'+file.dest+'created');
    }); 
};

//2013/6/26 @lgm https://github.com/qhwa/grunt-demo