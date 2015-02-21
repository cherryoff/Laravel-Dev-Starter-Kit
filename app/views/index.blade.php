@section('title')
    Welcome page
@stop

@section('styles')
    {{ HTML::style('/static/css/styles.css') }}
@stop

@section('scripts')
    {{ HTML::script('/static/js/scripts.js') }}
@stop

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="page-header"><span class="glyphicon glyphicon-thumbs-up"></span> It works</h1>
            </div>
        </div>
    </div>
@stop