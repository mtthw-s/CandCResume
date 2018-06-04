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
    .when('/comment', {
        templateUrl: 'partials/contactme.html',
        controller: 'CommentController'
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
	.when('/apps/mastermind', {
        templateUrl: 'partials/apps/mm/mastermind.html',
        controller: 'MainController'
    })
    .when('/apps/puzzle', {
        templateUrl: 'partials/apps/Puzzle/npuzzle.html',
        controller: 'puzzleController'
    })
    .when('/apps/ttt', {
        templateUrl: 'partials/apps/ttt/TTT.html',
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