var app = angular.module("hackathon", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when("/home", {
            templateUrl: "views/home.html",
            controller: "homeCon"
        }).when("/setting", {
            templateUrl: "views/setting.html",
            controller: "settingCon"
        }).when("/about", {
            templateUrl: "views/about.html"
        }).when("/remote", {
            templateUrl: "views/remote.html"
        }).otherwise({
            redirectTo: "/"
        });
});