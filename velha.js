/*

We need write a chess, for tic-tac-toe game, like this:
+---+---+---+
|   |   |   |
+---+---+---+
|   |   |   |
+---+---+---+
|   |   |   |
+---+---+---+

You can see this like a matrix: 
+---+---+---+
|0,0|0,1|0,2|
+---+---+---+
|1,0|1,1|1,2|
+---+---+---+
|2,0|2,1|2,2|
+---+---+---+
*/

// Array definido 
var gameBoard = Array(
	 Array(3)
	,Array(3)
	,Array(3)
);	

//                                   |       \       /
// Check if in axis a axis   ---  ,  |  ,     \  ,  /   anyone wins
//                                   |         \   /

function checkWinner(gameBoard) {
    console.log(gameBoard);

    let cross_point = 0;
	let circle_point = 0;

	// Check axis ---
	for(var x = 0; x < 3; x++){
        cross_point = 0;
        circle_point = 0;
        
		for(var y = 0; y < 3; y++){
			if(gameBoard[y][x] == 'cross' ){
				cross_point++;
			}
			
			if(gameBoard[y][x] == 'circle'){
				circle_point++;
			}
			
			if(cross_point == 3){
				return 'cross';
			}
			
			if(circle_point == 3){
				return 'circle';
			}
		}
	}
	
	// Check axis | 
	// Check axis | 
	// Check axis | 
	for(var y = 0; y < 3; y++){
        cross_point = 0;
        circle_point = 0;
		for(var x = 0; x < 3; x++){
			if(gameBoard[y][x] == 'cross' ){
				cross_point++;
			}
			
			if(gameBoard[y][x] == 'circle'){
				circle_point++;
			}
			if(cross_point == 3){
				return 'cross';
			}
			
			if(circle_point == 3){
				return 'circle';
			}
		}
	}
	
	// Check axis \
	// Check axis  \
	// Check axis   \
    cross_point = 0;
    circle_point = 0;
	for(var i = 0; i < 3; i++){
		
        if(gameBoard[i][i] == 'cross' ){
			cross_point++;
		}
		
		if(gameBoard[i][i] == 'circle' ){
			circle_point++;
		}
        console.log({cross_point});
		
		if(cross_point == 3){
			return 'cross';
		}
		
		if(circle_point == 3){
			return 'circle';
		}
	}	

	// Check axis   /
	// Check axis  /
	// Check axis /
    cross_point = 0;
    circle_point = 0;
	
    if(gameBoard[2][0] == 'cross' ){
        cross_point++;
    }

    if(gameBoard[1][1] == 'cross' ){
        cross_point++;
    }

    if(gameBoard[0][2] == 'cross' ){
        cross_point++;
    }

    
    if(gameBoard[2][0] == 'circle' ){
        circle_point++;
    }

    if(gameBoard[1][1] == 'circle' ){
        circle_point++;
    }

    if(gameBoard[0][2] == 'circle' ){
        circle_point++;
    }
    
    if(cross_point == 3){
        return 'cross';
    }
    
    if(circle_point == 3){
        return 'circle';
    }
	
	return false;
}


var cell = document.getElementsByClassName("cell");
for (var i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', function(){
		
		var cell_id = this.getAttribute("data-cell");
		
		var cell_xy = cell_id.split(',');
		var x = parseInt(cell_xy[1]);
		var y = parseInt(cell_xy[0]);
	
			
		if(gameBoard[x][y]){
			alert('Já foi clicado');
			return false;
		}

		this.innerHTML = '<div class="cross"></div>';
		gameBoard[x][y] = 'cross';
        
        if(checkWinner(gameBoard) == 'circle') {
			alert('Bolinha ganhou');
		}

		if(checkWinner(gameBoard) == 'cross') {
			alert('X ganhou');

		}


	}, false);
}

