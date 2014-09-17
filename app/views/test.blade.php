@extends('layouts.main')

@section('title')
    Тестовая страница
@stop

@section('styles')
    {{ HTML::style(Asset::url('style')) }}
@stop

@section('scripts')
    {{ HTML::script(Asset::url('script')) }}
@stop

@section('content')
    <div class="container">
        <h1 class="page-header">
            Похоже на то, что все работает!<br>
            <small>проверьте эти пункты, чтобы убедиться, что все работает правильно</small>
        </h1>
        <ul>
            <li>В консоли выполните grunt</li>
            <li>При редактировании файлов /assets/static/less/var.less куб должен менять цвет</li>
            <li>Загляните в консоль, убедитесь, что js работает</li>
        </ul>
        <div class="box-one"></div>
    </div>
@stop