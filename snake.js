var blockSize = 25;
var rows = 20;
var cols= 20;
var board;
var context;

var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var velocityX = 0;
var velocityY = 0;

var snakeBody = [];

var foodX;
var foodY;

var gameOver = false;

window.onload = function(){
    board = document.getElementById("board");
    board.height = rows *blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d");

    placeFood();
    document.addEventListener("keyup", changeDirection);
    setInterval(update, 1000/10);
}

function update(){
    if (gameOver){
        return;
    }

    context.fillStyle="black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillRect(foodX, foodY, blockSize, blockSize);
    
    if (snakeX == foodX && snakeY == foodY){
        snakeBody.push([foodX, foodY]);
        placeFood();
    }

    for (let i= snakeBody.length-1; i >0; i--){
        snakeBody.body[i] = snakeBody[i-1];
    }
    
}