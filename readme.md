# Laravel Dev Starter kit

`Version: 0.2.0 Beta`

Laravel Dev Starter kit is a sample application for development use Bower and Grunt with Laravel

## Features

* Include Bower
    * All packages in not public directory
    * Packages install and update with bower
* Include Grunt
    * Grunt watching the you static files for changes
* All style and js code is auto compilation, concatenation, and minfication
* Packages included:
    * Backend (Composer)
        * [Laravel IDE Helper](https://github.com/barryvdh/laravel-ide-helper)
    * Frontend (Bower)
        * [Bootstrap](https://github.com/twbs/bootstrap)
        * [Angular](https://github.com/angular/angular)

## Requirements
* PHP >= 5.4.0
* MCrypt PHP Extension
* Composer
* Node
* Bower
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

## Additional information

Any questions, feel free to [contact me](http://twitter.com/cherry_off)
