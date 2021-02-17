<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono">

    <link rel="stylesheet" href="/dist/app.css">
</head>
<body>
    @inertia

    @if(env('APP_DEBUG'))
        <script type="text/javascript">window.HMR_WEBSOCKET_URL="ws://localhost:12321";</script>
        <script src="/_snowpack/hmr-client.js" type="module"></script>
        <script src="/_snowpack/hmr-error-overlay.js" type="module"></script>

        <script src="/dist/index.js" type="module"></script>
    @endif
</body>
</html>
