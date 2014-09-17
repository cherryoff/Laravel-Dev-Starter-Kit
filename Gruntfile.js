module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        exec: {
            warmscript: {
                cmd: 'php artisan asset:warm script'
            },
            warmstyle: {
                cmd: 'php artisan asset:warm style'
            },
            clearcss: {
                cmd: 'if [ -d \"public/css/\" ] \nthen \nrm -rf public/css/*.css \nfi'
            },
            clearjs: {
                cmd: 'if [ -d \"public/js/\" ] \nthen \nrm -rf public/js/*.js \nfi'
            }
        },
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: ['assets/static/less/*.less', 'assets/static/css/*.css'],
                tasks: ['exec:warmstyle']
            },
            js: {
                files: ['assets/static/js/*.js'],
                tasks: ['exec:warmscript']
            },
            html: {
                files: ['app/views/*.php', 'app/views/**/*.php']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-exec');

    grunt.registerTask('default', ['exec', 'watch']);

};