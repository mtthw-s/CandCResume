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

AppControllers.controller("puzzleController", ['$scope', '$http', function($scope, $http){
    function CreateRow(values, rowIndex){
        var row = [];
        for(var i = 0; i < values.length; i++){
            row.push({val:values[i],row: rowIndex, col: i, src:'/api/getimage/' + values[i]});
		    //var cell = row.insertCell(i);
		    //This is where the object is made, any HTML element can work.
		    //cell.innerHTML = "<input class='cell' type='button' id='" + rowIndex + "." + i + "' value='" + values[i] + "'>";
        }
        return row;
    }
    
    function CreateTable(values){
        var table = {rows: []};
        //table.SetUpBoard = SetUpBoard;
        var rowLength = Math.sqrt(values.length);
        var startVals = 0;
        for(var i = 0; i < rowLength; i++){
            table.rows.push({cells:CreateRow(values.slice(startVals, rowLength + startVals), i)});
            //CreateRow(brdArray.slice(startVals, rowLength + startVals), i);
            startVals += rowLength;
        }
        return table;
    }

    function AnimateBoards(count){
        if(count > 0){
            setTimeout(function(){
                count--;
                //$scope.table = CreateTable($scope.path[count].flatBoard);
                $('#btnNext').trigger('click');
                AnimateBoards(count);
            },  100);
        }
    }

    $scope.ShowNextMove = function(){
        var st = $scope.path.pop();
        if(st !== null){
            $scope.table = CreateTable(st.flatBoard);
            if($scope.path.length === 0){
                $scope.Solved = false;                
            }
        }
    }

    $scope.Run = function(){
        var res = Control.run($scope.table, $scope.boards[1]);
        $scope.path = res[0];//Control.run($scope.table, $scope.boards[1]);
        alert(res[1] + "\nWith " + $scope.path.length + " moves\n");
        $scope.Solved = true;
        AnimateBoards($scope.path.length);
        for(var j = $scope.path.length - 1; j >= 0; j--){
            // UI.DrawBoard(ans[j].flatBoard);
            //setTimeout(function(){ 
                //$scope.table = CreateTable($scope.path[j].flatBoard);
            //}, 500);
            // $scope.table = CreateTable(path[j].flatBoard);
            //start.SetUpBoard(ans[j].flatBoard);
            //console.log(ans[j].flatString + " score: " + ans[j].score + " distance: " + ans[j].distance + "</br>");
        }
    }

    function SetUpBoard(size){
        $scope.boards = Control.Setup(16);
        $scope.table = CreateTable($scope.boards[0]);
        
    }
    SetUpBoard();
}]);