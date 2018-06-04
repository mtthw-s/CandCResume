(function(window){
    function TTTControl(){
        var getCurrentBoard = function(){
            var currentBoard = [];
            //var buttons = document.getElementsByClassName("btn");
            for(var i = 0; i < 9; i++){
                currentBoard.push(document.getElementById("btn" + i).value);
            }
            return currentBoard;
        };
        
        this.UserClicked = function(ele){
            var state = new TTTState();
            state.board = getCurrentBoard();
            state.currentMarker = "x";
            var user = new TTTUser(state.currentMarker);
            var ui = new TTTUI();
            var cell = parseInt(ele.id.substr(3,1));
            state = user.PerformMove(state, cell);
            ui.DisplayState(state);
            if(state.CheckPlayerWon(user.marker, state.board)){
                alert("Player won!");
                return;
            }
            if(state.checkDraw(state.board)){
                alert("It's a draw!")
                return;
            }
            var ai = new TTTAI(state, "o");
            state = ai.performMove();
            ui.DisplayState(state);    
            if(state.CheckPlayerWon("o", state.board)){
                alert("Computer won!");
                return;
            }
            if(state.checkDraw(state.board)){
                alert("It's a draw!")
            }
        };
    }
    window.TTTControl = new TTTControl();
})(window)
