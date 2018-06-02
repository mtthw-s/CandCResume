var AppControllers = angular.module("AppControllers", []);

AppControllers.controller("MainController", ['$scope', '$http', function($scope, $http){
    
}]);

AppControllers.controller("CommentController", ['$scope', '$http', function($scope, $http){
    $scope.comment = {};
    $scope.SubmitComment = function(){
        alert($scope.comment.name + "\n" + $scope.comment.email + "\n" + $scope.comment.comment );
    }
    $scope.ClearComment = function(){
        $scope.comment = {};
    }
}]);