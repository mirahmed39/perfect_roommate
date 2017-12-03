module.exports = function (grunt) {
  // do the cool stuff here.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        /* turns out that uglify does not support ES6 yet.
        uglify: {
            files: {
                src: 'public/javascript/change-question.js',
                dest: 'public/javascript/change-question.min.js'
            }
        }, */
        less: {
            files: {
                src: 'public/css/main.less',
                dest: 'public/css/main.css'
            }
        },
        cssmin: {
            files: {
                src: 'public/css/main.css',
                dest: 'public/css/main.min.css'
            }
        }

    });
    // load the plugin that compiles the .less file(s)
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['less', 'cssmin']);
};
