Path = require('path')
fs = require('fs')

module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON("package.json")

    coffee:
      compile:
        expand: true
        flatten: true
        src: ['coffee/*.coffee']
        dest: 'js/'
        ext: '.js'

    watch:
      options:
        atBegin:
          true
      coffee:
        files: ['coffee/*']
        tasks: ["coffee", "uglify"]

    uglify:
      options:
        banner: "/*! <%= pkg.name %> <%= pkg.version %> */\n"

      dist:
        src: ['js/*']
        dest: 'offline-simulate-ui.min.js'
        
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-coffee'

  grunt.registerTask 'default', ['coffee', 'uglify']