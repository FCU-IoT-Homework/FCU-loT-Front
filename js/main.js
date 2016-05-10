var app = angular.module("hackathon", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when("/home/:id", {
            templateUrl: "views/home.html",
            controller: "homeCon"
        }).when("/setting", {
            templateUrl: "views/setting.html",
            controller: "settingCon"
        }).when("/about", {
            templateUrl: "views/about.html"
        }).when("/progress", {
            templateUrl: "views/progress.html"
        }).when("/remote", {
            templateUrl: "views/remote.html"
        }).otherwise({
            redirectTo: "/"
        });
});