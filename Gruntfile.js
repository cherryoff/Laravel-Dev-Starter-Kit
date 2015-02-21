/**
 *
 * Собирает библиотеки (libs)
 * и файлы пользователя (assets)
 * шрифты копирует все в одну папку
 * картинки с сохранением древа директорий
 *
 * libs.js
 * script.js
 * scripts.js
 * scripts.min.js
 *
 * libs.css
 * style.css
 * styles.css
 *
**/

var
    libs_path = 'assets/bower/',
    assets_path = 'assets/static/',
    libs = {
        js: [
            //libs_path+'angular/angular.js',
            libs_path+'jquery/dist/jquery.js',
            libs_path+'bootstrap/dist/js/bootstrap.js',
            libs_path+'plax/js/plax.js'
        ],
        css: [],
        less: [
            libs_path+'bootstrap/less/bootstrap.less'
        ],
        images: [],
        fonts: [
            libs_path+'bootstrap/fonts/*'
        ]
    },
    assets = {
        js: [
            assets_path+'js/**/*.js'
        ],
        css: [],
        less: [
            assets_path+'less/theme.less'
        ],
        images: [],
        fonts: []
    };

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            libs: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    'public/static/css/libs.css': libs.less.concat(libs.css)
                }
            },
            assets: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    'public/static/css/style.css': assets.less.concat(assets.css)
                }
            }
        },
        concat: {
            libs: {
                src: libs.js,
                dest: 'public/static/js/libs.js'
            },
            assets: {
                src: assets.js,
                dest: 'public/static/js/script.js'
            },
            scripts: {
                src: ['public/static/js/libs.js', 'public/static/js/script.js'],
                dest: 'public/static/js/scripts.js'
            },
            styles: {
                src: ['public/static/css/libs.css', 'public/static/css/theme.css'],
                dest: 'public/static/css/styles.css'
            }
        },
        uglify: {
            libs: {
                files: {
                    'public/static/js/libs.min.js':['<%= concat.libs.dest %>']
                }
            },
            all: {
                files: {
                    'public/static/js/scripts.min.js':['<%= concat.scripts.dest %>']
                }
            }
        },
        copy: {
            fonts: {
                src: libs.fonts.concat(assets.fonts),
                dest: 'public/static/fonts/',
                //filter: 'isFile',
                flatten: true,
                expand: true
            }
            //,
            //images: {
            //    cwd: libs.images.concat(assets.images),
            //    src: '**/*',
            //    dest: 'public/static/images/',
            //    //flatten: true,
            //    expand: true
            //}
        },
        watch: {
            styles: {
                options: {
                    nospawn: true,
                    livereload: true
                },
                files: ['assets/static/less/*.less', 'assets/static/less/**/*.less'],
                tasks: ['less:assets']
            },
            js: {
                options: {
                    nospawn: true,
                    livereload: true
                },
                files: ['assets/static/js/**/*.js', 'assets/static/js/*.js'],
                tasks: ['concat:assets']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('makegood', ['less', 'concat', 'uglify', 'copy']);

};