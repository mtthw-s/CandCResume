var PortfolioApp = angular.module('PortfolioApp', [
    'ngRoute',
    'AppControllers'
]);
    
PortfolioApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/main', {
        templateUrl: 'partials/main.html',
        controller: 'MainController'
    }).otherwise({
        redirectTo: '/list'
    });
}]);