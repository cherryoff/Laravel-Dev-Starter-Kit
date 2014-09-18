# Laravel Dev Starter kit

`Version: 0.1.0 Beta`

Laravel Dev Starter kit is a sample application for development use Bower and Grunt with Laravel

## Features

* Include Bower
    * All packages in not public directory
    * Packages install and update with bower
* Include Grunt
    * Grunt watching the filesystem for changes
* All style and js code is auto compilation, concatenation, and minfication
* Easy using in view
```
    <script src="<?php echo Asset::url('basejs'); ?>"></script>
```
* Packages included:
    * Backend (Composer)
        * [Laravel-Assetic](https://github.com/slushie/laravel-assetic)
        * [LessPHP](https://github.com/leafo/lessphp)
        * [JSMin4Assetic](https://github.com/lmammino/jsmin4assetic)
        * [CssMin](https://github.com/natxet/CssMin)
    * Frontend (Bower)
        * [Bootstrap](https://github.com/twbs/bootstrap)
        * [jQuery](https://github.com/jquery/jquery)

## Requirements
* PHP >= 5.4.0
* MCrypt PHP Extension
* Composer
* Node
* Grunt

## Need

**Composer**

*locally*

    curl -sS https://getcomposer.org/installer | php
    or
    php -r "readfile('https://getcomposer.org/installer');" | php

*globally*

    curl -sS https://getcomposer.org/installer | php
    mv composer.phar /usr/local/bin/composer

**Node**

*Ubuntu*

    curl -sL https://deb.nodesource.com/setup | sudo bash -
    sudo apt-get install nodejs

**Bower**

    npm install -g bower

**Grunt**

    npm install -g grunt-cli

## Install

    php composer.phar install
*or*

    composer install
*and*

    bower install
    npm install
    grunt

## Additional information

Big thanks, based on [Terry Matula](http://www.terrymatula.com/development/2013/how-i-use-bower-and-grunt-with-my-laravel-projects/)
Any questions, feel free to [contact me](http://twitter.com/cherry_off)
