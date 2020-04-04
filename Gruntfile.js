module.exports = function (grunt) {
  grunt.initConfig({
    autoprefixer: {
      dist: {
        files: {
          "build/style.css": "assets/css/style.css",
        },
      },
    },
    watch: {
      styles: {
        files: ["assets/css/style.css"],
        tasks: ["autoprefixer"],
      },
    },
  });
  grunt.loadNpmTasks("grunt-autoprefixer");
  grunt.loadNpmTasks("grunt-contrib-watch");
};
