//tableSpec.js
 var Table = require('./table.js');

describe('table', function (){
	
	
	var table;
        table = new Table();		


 // return the number of ships according the size of the table
	describe('return the size of the ship',function(){	
	
		it('should add to integer number.' , function(){
				var numRandom = (parseInt(Math.random()* 4))+3;
				var actRes = table.numShip(numRandom.toString());
				var expRes = 0; 		
				switch (numRandom.toString()){
					case '3': expRes = 2;
					break;
					case '4': expRes = 3;
					break
					case '5': expRes = 4;
					break
					case '6': expRes = 6;
					break
					default : expRes = 8;
					};				
			  expect(actRes).toEqual(expRes); 
			});		
	});
 // return the size of the ship randomly	
	describe('return the size of the ship',function(){
		
			
		it('should add to integer number.' , function(){
			
			    var numRandom = parseInt(Math.random()* 8)
				var actRes = table.getShipRandomSize(numRandom.toString());
				var expRes = 0;
			if(numRandom<5)
			{var expRes = parseInt(Math.random()* 1)+2;}
			else if(numRandom<8)
			{var expRes = parseInt(Math.random()* 2)+2;}
			else
			{var expRes = parseInt(Math.random()* 3)+2;}
 
			  expect(actRes).toEqual(expRes); 
			});		
	});
	
// create the table of the game
	
	describe('create the table',function(){
		
			
		it('return the table with a size espesific.' , function(){
			
			    var numRandom = (parseInt(Math.random()* 4))+3;
				var actRes = table.initGrid(numRandom());
				var expRes = new Array();

				var EMPTY_CELL = '0';
				for (var i = 0; i < numRandom; i++)
				{
					this.grid[i] = new Array(numRandom);
				}
				for (var i = 0; i < numRandom; i++)
				{
					for (var j = 0; j < numRandom; j++) {
					this.grid[i][j] = EMPTY_CELL;
				}

				}	
				expRes =this.grid[i][j];
				
 
			  expect(actRes).toEqual(expRes); 
			});		
	});

});