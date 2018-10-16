ageasApp.config( function ($routeProvider) {
    $routeProvider.caseInsensitiveMatch = true;
    $routeProvider
        .when('/', {
            templateUrl: 'Templates/home.html',
            controller: 'homeController',
            controllerAs: 'homeCtrl'

        })
        .when('/post', {
            templateUrl: 'Templates/post.html',
            controller: 'postController',
            controllerAs: 'postCtrl'
        })
        .when("/edit/:id", {
            templateUrl: "Templates/edit.html",
            controller: "editController",
            controllerAs: 'editCtrl'
        })
        .otherwise({
            redirectTo: "/"
        })
//    $locationProvider.html5Mode(true);

});
