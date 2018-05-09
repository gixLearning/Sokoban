'use strict';

class Player {
    constructor(x, y) {
        this.X = x;
        this.Y = y
    }
}
var player;
var map = tileMap;

document.addEventListener('keydown', function(event){
    const key = event.key;
    var player = document.getElementById("player");
    var x, y;
    switch (key) {
        case "ArrowDown":
            console.log(key);
            x = 1;
            y = 0;
            moveToCell(x, y);
            break;
        case "ArrowUp":
            console.log(key)
            x = -1;
            y = 0;
            moveToCell(x, y);
            break;
        case "ArrowLeft":
            console.log(key)
            x = 0;
            y = -1;
            moveToCell(x, y);
            break;
        case "ArrowRight":
            console.log(key)
            x = 0;
            y = 1;
            moveToCell(x, y);
            break;

        default:
        break;
    }

    console.log(player, x, y)
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
            } else {
                cell.appendChild(paintBlock(tileType));
            }

            if(tileType === "P"){
                player = new Player(i,j)
            }
        }    
    }
    populateData();
}

function moveToCell(x, y){
    var x1 = player.X + x;
    var y1 = player.Y + y;
    console.log("New value: " + x1 + " " + y1)

    var table = document.getElementById("table-board");
    var cell = table.rows[x1].cells[y1]
    console.log(cell)

    if(!checkCollision(x1, y1)){
        return;
    }

    cell.style.background = "green";
    console.log(map.mapGrid[x1][y1][0])
    if(map.mapGrid[x1][y1][0] === "G"){
        cell.style.background = "red";
    }   

    player.X = x1;
    player.Y = y1;   

    map.mapGrid[x1][y1][0] = "P";
}

function checkCollision(x, y){
    if(map.mapGrid[x][y][0] === "W"){
        return false;
    }
    return true;
}

function paintBlock(blockChar) {

    var imageSource;
    var isPlayerBlock = false;
    switch (blockChar) {
        case "W":
            imageSource = "block_08";
            break;
        case "B":
            imageSource = "crate_06";
            break;
        case "G":
            imageSource = "environment_02";
            break;
        case "E":
            imageSource = "PlayerFace_dark"
            break; 
        case "P":
            imageSource = "player/player_05"
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
                console.log("Row : "+rIndex+" , Cell : "+cIndex);
            };
        }  
    }    
}