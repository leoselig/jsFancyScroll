module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg:   grunt.file.readJSON('package.json'),
		build: 'build/',

		clean: {
			build: {
				src: ['<%= build %>']
			},

			less: {
				src: ['<%= build %>less']
			}
		},

		copy: {
			dev: {
				cwd:    'src/',
				src:    '**',
				dest:   '<%= build %>',
				expand: true
			}
		},

		less: {
			main: {
				files: {
					'<%= build %>style.css': '<%= build %>less/style.less'
				}
			}
		},

		uglify: {
			main: {
				files: {
					'<%= build %>plugin.js': ['<%= build %>/**/*.js']
				}
			}
		},

		watch: {
			main: {
				files: 'src/**',
				tasks: ['dev']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('dev', [ 'clean:build', 'copy:dev', 'less', 'clean:less' ]);

	grunt.registerTask('prod', [ 'dev', 'uglify' ]);

	grunt.registerTask('default', [ 'prod' ]);
};