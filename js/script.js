'use strict';

class Player {
    constructor(x, y) {
        this.X = x;
        this.Y = y
    }
}

var direction = { "UP" : 'UP', "DOWN" : 'DOWN', "LEFT" : 'LEFT', "RIGHT": 'RIGHT'}
Object.freeze(direction);

var player;
var destinationTileType;

var map = tileMap;

document.addEventListener('keydown', function(event){
    const key = event.key;
    var player = document.getElementById("player");
    var x, y;
    switch (key) {
        case "ArrowDown":
            x = 1;
            y = 0;
            moveToCell(x, y, direction.DOWN);
            break;
        case "ArrowUp":
            x = -1;
            y = 0;
            moveToCell(x, y, direction.UP);
            break;
        case "ArrowLeft":
            x = 0;
            y = -1;
            moveToCell(x, y, direction.LEFT);
            break;
        case "ArrowRight":
            x = 0;
            y = 1;
            moveToCell(x, y, direction.RIGHT);
            break;
        default:
        break;
    }
})

function setUpGame() {
    var board = document.getElementById('board');

    console.log(map.width + " " + map.height);

    for (var i = 0; i < map.height; i++) {
        var row = board.insertRow(i);
        for(var j = 0; j < map.width; j++){
            var cell = row.insertCell(j);
            
            var tileType = map.mapGrid[i][j].toString();
            if(tileType === " "){            
                continue;
            } else if(tileType === "G"){
                cell.classList.add('goal-node');
            } 
            else {
                cell.appendChild(paintBlock(tileType, direction.UP));
            }

            if(tileType === "P"){
                player = new Player(i,j)
            }
        }    
    }
    populateData();
}

function moveToCell(x, y, direction){
    var x1 = player.X + x;
    var y1 = player.Y + y;    
    
    if(!checkWallCollision(x1, y1)){
        return;
    } 

    if(!checkBlockCollision(x1, y1, direction)){
        return;        
    }

    //console.log("New value: " + x1 + " " + y1)

    //Nothing is blocked, get on with it!    
    destinationTileType = map.mapGrid[x1][y1][0];
    if(destinationTileType === "B"){
        console.log("PUSH BLOCK");
        pushBlock(x1, y1, direction);
    }    

    var table = document.getElementById("table-board");
    var cell = table.rows[x1].cells[y1]
    //console.log(cell)
    //console.log(map.mapGrid[x1][y1])

    

    //All checks passed, assign new values    
    player.X = x1;
    player.Y = y1;

    map.mapGrid[x1][y1][0] = "P";


    //Paint all new tiles
    var tileType = map.mapGrid[x1][y1].toString();
    cell.appendChild(paintBlock(tileType, direction))

    //Check if the previous tile was a tile occupied by a player, if so, remove it
    if(map.mapGrid[x1 - x][y1 - y][0] === "P"){
        map.mapGrid[x1 - x][y1 - y][0] = ' '

        var oldCell = table.rows[x1 - x].cells[y1 - y];

        for (let index = 0; index < oldCell.childNodes.length; index++) {

            var element = oldCell.childNodes[index];
            if(element.getAttribute('id') == 'player'){
                oldCell.removeChild(element);
            }                                 
        }
    }
}

function pushBlock(x, y, direction){
    var table = document.getElementById("table-board");    
    var cell = table.rows[x].cells[y]

    if(direction == "LEFT"){
        map.mapGrid[x][y - 1][0] = "B";
         
    } 
    else if (direction == "RIGHT"){
        map.mapGrid[x][y + 1][0] = "B";
    }
    else if (direction == "UP"){
        map.mapGrid[x - 1][y][0] = "B";
    } else {
        map.mapGrid[x + 1][y][0] = "B";
    }
}

function checkBlockCollision(x, y, direction){
    var dir = direction;

    if(map.mapGrid[x][y][0] === "B"){
        switch (dir) {
            case "LEFT":
                if(map.mapGrid[x][y - 1][0] === "B" || map.mapGrid[x][y - 1][0] === "W"){
                    //console.log("BLOCKED BY " + map.mapGrid[x][y - 1][0])
                    return false;
                }
                break;

            case "RIGHT":
                if(map.mapGrid[x][y + 1][0] === "B" || map.mapGrid[x][y + 1][0] === "W"){
                    //console.log("BLOCKED BY " + map.mapGrid[x][y + 1][0])
                    return false;
                }                         
                break;

            case "UP":
                if(map.mapGrid[x - 1][y][0] === "B" || map.mapGrid[x - 1][y][0] === "W"){
                    //console.log("BLOCKED BY " + map.mapGrid[x - 1][y][0])
                    return false;
                }
                break;

            case "DOWN":
                if(map.mapGrid[x + 1][y][0] === "B" || map.mapGrid[x + 1][y][0] === "W"){
                    //console.log("BLOCKED BY " + map.mapGrid[x + 1][y][0])
                    return false;
                }
                break;

            default:                
                return false;
                break;
        }
    }
    return true;
}

function checkWallCollision(x, y){
    if(map.mapGrid[x][y][0] === "W"){
        return false;
    }
    return true;
}

function paintBlock(blockChar, d) {    
    var dir = d;    

    var imageSource;
    var isPlayerBlock = false;
    switch (blockChar) {
        case "W":
            imageSource = "block_08";
            break;
        case "B":
            imageSource = "crate_06";
            break;
        case "E":
            imageSource = "PlayerFace_dark"
            break; 
        case "P":           
            if(dir == direction.UP){
                imageSource = "player/player_08"
            };
            if(dir == direction.DOWN){
                imageSource = "player/player_05"
            }
            if(dir == direction.LEFT){
                imageSource = "player/player_20"
            }
            if(dir == direction.RIGHT){
                imageSource = "player/player_17"
            }            
            isPlayerBlock = true;
            break;   
        default:
            break;
    }
    
    if(blockChar === "W"){
        imageSource = "block_08";
    }

    var img = document.createElement("img");
    img.setAttribute('src', 'images/' + imageSource + '.png');
    if(isPlayerBlock){
        img.setAttribute('id', 'player')
    }
    return img;        
}

function populateData() {
    var table = document.getElementById("table-board");
    var rIndex, cIndex;

    for (var i = 0, row; row = table.rows[i]; i++) {
        //iterate through rows
        //rows would be accessed using the "row" variable assigned in the for loop
        for (var j = 0, col; col = row.cells[j]; j++) {
            //iterate through columns
            //columns would be accessed using the "col" variable assigned in the for loop
            table.rows[i].cells[j].onclick = function()
            {
                rIndex = this.parentElement.rowIndex;
                cIndex = this.cellIndex //+1;
                console.log("Row : "+rIndex+" , Cell : "+cIndex + " MAP: " + map.mapGrid[rIndex][cIndex][0]);
            };
        }  
    }    
}