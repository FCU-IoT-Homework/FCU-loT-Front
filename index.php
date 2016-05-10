<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1 ,user-scalable=1">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="msapplication-TileColor" content="#3372DF">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>家庭控制管理中心</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://storage.googleapis.com/code.getmdl.io/1.0.1/material.orange-light_blue.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.3.0/animate.min.css">
    <link rel="stylesheet" href="css/dashboard.css">
    <link rel="stylesheet" href="css/main.css">
</head>

<body ng-app="hackathon" ng-controller="mainCon">
    <div class="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
        <header class="demo-header mdl-layout__header mdl-color--header mdl-color-text--white">
            <div class="mdl-layout__header-row">
                <span class="mdl-layout-title">UI Test</span>
            </div>
        </header>
        <div class="demo-drawer mdl-layout__drawer mdl-color--blue-grey-200 mdl-color-text--blue-grey-900" style="border: none;">
            <nav class="demo-navigation mdl-navigation mdl-color--blue-grey-50">
                <a class="mdl-navigation__link active" href="#/home/1"><i class="mdl-color-text--blue-grey-400 material-icons">redeem</i>掃描</a>
                <a class="mdl-navigation__link" href="#/setting"><i class="mdl-color-text--blue-grey-400 material-icons">settings</i>設定</a>
                <a class="mdl-navigation__link" href="#about"><i class="mdl-color-text--blue-grey-400 material-icons">info_outline</i>關於</a>
            </nav>
        </div>
        <main class="mdl-layout__content mdl-color--grey-100">
            <div ng-view></div>
        </main>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.3/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.3/angular-route.js" defer></script>
    <script src="https://storage.googleapis.com/code.getmdl.io/1.0.1/material.min.js" defer></script>

    <script src="js/prefixfree.min.js"></script>
    <script src="js/modernizr.js"></script>
    <script src="js/require.js" defer></script>
    <script src="js/main.js" defer></script>
    <script src="js/controllers/mainCon.js" defer></script>
    <script src="js/controllers/homeCon.js" defer></script>
    <script src="js/controllers/settingCon.js" defer></script>
    <script src="js/controllers/trackCon.js" defer></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
	<script>
        window.open("#/home/1", "_self");

        function fadeout(a) {
            a.css({
                transition: "0.3s all",
                opacity: 0,
                transform: "translate(110%,0)"
            }), setTimeout(function () {
                a.css("display", "none")
            }, 300)
        }
        $(function () {
            $(".mdl-navigation__link").click(function () {
                $(".mdl-navigation__link").removeClass("active"), $(this).addClass("active")
            }), $("#info").click(function (a) {
                var t = 83 * $("i", $("#info")).attr("data-badge") + 5;
                5 == t && (t = 88, $("#noninfo").css("display", "block")), "0px" == $(".extra_panel").css("width") ? ($(".extra_panel").css({
                    padding: "20px 10px",
                    right: document.body.offsetWidth - a.pageX,
                    top: a.pageY,
                    width: "",
                    height: t + "px",
                    "max-height": .6 * document.body.offsetHeight,
                    "overflow-y": "auto"
                }), $(".extra_panel").addClass("open")) : ($(".extra_panel").css({
                    padding: "0px",
                    width: "0",
                    height: "0",
                    "overflow-y": "hidden"
                }), $(".extra_panel").removeClass("open")), a.stopPropagation()
            }), $("body").click(function () {
                $(".extra_panel").css({
                    padding: "0px",
                    width: "0",
                    height: "0",
                    "overflow-y": "hidden"
                }), $(".extra_panel").removeClass("open")
            })
        });
    </script>
</body>

</html>
