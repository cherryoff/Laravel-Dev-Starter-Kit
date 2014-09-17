<?php
/**
 * Configure laravel-assetic in this file.
 * File modified by AARYAN ADITYA
 * @package slushie/laravel-assetic
 */

return array(

  'groups' => array(

      'script' => array(
          'filters' => array(
              'js_min'
          ),
          'assets' => array(
              'jquery',
              'bootstrapjs',
              'basejs'
          ),
          'output' => 'js/base.js'
      ),

      'style' => array(
          'filters' => array(
              'css_import',
              'css_rewrit',
              'less',
              'css_min'
          ),
          'assets' => array(
              'bootstrapcss',
              'baseless',
              'basecss'
          ),
          'output' => 'css/base.css'
      ),
  ),

  'filters' => array(

//    'emed_css'    => 'Assetic\Filter\PhpCssEmbedFilter',

      'css_import'  => 'Assetic\Filter\CssImportFilter',
      'css_rewrit'  => 'Assetic\Filter\CssRewriteFilter',
      'css_min'     => 'Assetic\Filter\CssMinFilter',
      'less'        => 'Assetic\Filter\LessphpFilter',

      'js_min'  => 'Assetic\Filter\JsMinFilter'
  ),

  'assets' => array(
      'jquery'          => base_path('assets/bower/jquery/jquery.js'),
      'bootstrapjs'     => base_path('assets/bower/bootstrap/dist/js/bootstrap.js'),
      'basejs'          => base_path('assets/static/js/*.js'),

      'bootstrapcss'    => base_path('assets/bower/bootstrap/dist/css/bootstrap.css'),
      'baseless'        => base_path('assets/static/less/*.less'),
      'basecss'         => base_path('assets/static/css/*.css')
  )
);