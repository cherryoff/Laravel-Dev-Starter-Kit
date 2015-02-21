<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="utf-8">
        <title>
            @yield('title')
        </title>
        <link rel="shortcut icon" href="/favicon.ico">
        <!--[if lt IE 9]>
            <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
        @yield('styles')
        @yield('bscripts')
    </head>
    <body>
        @yield('content')
        @yield('scripts')
</body>
</html>