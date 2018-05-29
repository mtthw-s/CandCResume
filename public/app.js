var PortfolioApp = angular.module('PortfolioApp', [
    'ngRoute',
    'AppControllers'
]);
    
PortfolioApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/education', {
        templateUrl: 'partials/education.html',
        controller: 'MainController'
    })
    .when('/apps/formletter', {
        templateUrl: 'partials/apps/SimpleFormLetter.html',
        controller: 'MainController'
    })
    .when('/apps/craps', {
        templateUrl: 'partials/apps/craps.html',
        controller: 'MainController'
    })
    .when('/apps/movie', {
        templateUrl: 'partials/apps/Movie.html',
        controller: 'MainController'
    })
    .when('/apps/change', {
        templateUrl: 'partials/apps/ChangeTemplate.html',
        controller: 'MainController'
    })
    .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainController'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);