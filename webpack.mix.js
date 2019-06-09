const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .js('resources/js/utilities/Errors.js', 'public/js/utilities')
   .js('resources/js/utilities/Form.js', 'public/js/utilities')
   .sass('resources/sass/app.scss', 'public/css')
   .copyDirectory('resources/styles', 'public/styles')
   .copyDirectory('resources/img','public/img');