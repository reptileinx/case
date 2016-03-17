//when module is invoked grunt is passed in so we can configure it using json formatted
// instructions
module.exports = function(grunt){
    grunt.initConfig({
        jshint:{
            files: ['lib/**/*.js', 'models/**/*.js']
        },
        watch:{
            files: ['lib/**/*.js', 'models/**/*.js'],
            tasks:['jshint']
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
};