module.exports = function (grunt) {
  // do the cool stuff here.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            files: {
                src: 'public/css/main.less',
                dest: 'public/css/main.css'
            }
        }
    });
    // load the plugin that compiles the .less file(s)
    grunt.loadNpmTasks('grunt-contrib-less');
};
