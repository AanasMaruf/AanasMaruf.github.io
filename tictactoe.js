let moveCount = 0;

//below is a hack to put together
//a "2D" array in javascript which
//does not have 2D arrays

var decisionArray = [];
for (var i = 0; i < 3; i++) {
  decisionArray[i] = [];
}

var tempArray = [];
for (var i = 0; i < 3; i++) {
  tempArray[i] = [];
}

function setup() {
  createCanvas(400, 400);
  background("yellow");
  textSize("12");

  line(0, 133, 400, 133);
  line(0, 266, 400, 266);
  line(133, 0, 133, 400);
  line(266, 0, 266, 400);

  //reset decisionArray with 0's

  initArray(decisionArray);
  initArray(tempArray);
  console.log(decisionArray[0][0]);
} //setup
function initArray(x) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      x[i][j] = "0";
    } //for j
  } //for i
}

function outputMove() {
  if (
    mouseX > 0 &&
    mouseX < 133 &&
    mouseY > 0 &&
    mouseY < 133 &&
    mouseIsPressed &&
    decisionArray[0][0] == "0"
  ) {
    drawX(1);
    moveCount++;
    decisionArray[0][0] = "X";
    consoleOutput(decisionArray);
  } //if

  if (
    mouseX > 133 &&
    mouseX < 266 &&
    mouseY > 0 &&
    mouseY < 133 &&
    mouseIsPressed &&
    decisionArray[0][1] == "0"
  ) {
    drawX(2);
    moveCount++;
    decisionArray[0][1] = "X";
    consoleOutput(decisionArray);
  } //if

  if (
    mouseX > 266 &&
    mouseX < 400 &&
    mouseY > 0 &&
    mouseY < 133 &&
    mouseIsPressed &&
    decisionArray[0][2] == "0"
  ) {
    drawX(3);
    moveCount++;
    decisionArray[0][2] = "X";
    consoleOutput(decisionArray);
  } //if

  if (
    mouseX > 0 &&
    mouseX < 133 &&
    mouseY > 133 &&
    mouseY < 266 &&
    mouseIsPressed &&
    decisionArray[1][0] == "0"
  ) {
    drawX(4);
    moveCount++;
    decisionArray[1][0] = "X";
    consoleOutput(decisionArray);
  } //if

  if (
    mouseX > 133 &&
    mouseX < 266 &&
    mouseY > 133 &&
    mouseY < 266 &&
    mouseIsPressed &&
    decisionArray[1][1] == "0"
  ) {
    drawX(5);
    moveCount++;
    decisionArray[1][1] = "X";
    consoleOutput(decisionArray);
  } //if

  if (
    mouseX > 266 &&
    mouseX < 400 &&
    mouseY > 133 &&
    mouseY < 266 &&
    mouseIsPressed &&
    decisionArray[1][2] == "0"
  ) {
    drawX(6);
    moveCount++;
    decisionArray[1][2] = "X";
    consoleOutput(decisionArray);
  } //if

  if (
    mouseX > 0 &&
    mouseX < 133 &&
    mouseY > 266 &&
    mouseY < 400 &&
    mouseIsPressed &&
    decisionArray[2][0] == "0"
  ) {
    drawX(7);
    moveCount++;
    decisionArray[2][0] = "X";
    consoleOutput(decisionArray);
  } //if

  if (
    mouseX > 133 &&
    mouseX < 266 &&
    mouseY > 266 &&
    mouseY < 400 &&
    mouseIsPressed &&
    decisionArray[2][1] == "0"
  ) {
    drawX(8);
    moveCount++;
    decisionArray[2][1] = "X";
    consoleOutput(decisionArray);
  } //if

  if (
    mouseX > 266 &&
    mouseX < 400 &&
    mouseY > 266 &&
    mouseY < 400 &&
    mouseIsPressed &&
    decisionArray[2][2] == "0"
  ) {
    drawX(9);
    moveCount++;
    decisionArray[2][2] = "X";
    consoleOutput(decisionArray);
  } //if
} //outputMove

function winConfirmed(n) {
  if (
    (n[0][0] == n[0][1] && n[0][0] == n[0][2] && n[0][0] != "0") ||
    (n[1][0] == n[1][1] && n[1][0] == n[1][2] && n[1][0] != "0") ||
    (n[2][0] == n[2][1] && n[2][0] == n[2][2] && n[2][0] != "0") ||
    (n[0][0] == n[1][0] && n[0][0] == n[2][0] && n[0][0] != "0") ||
    (n[0][1] == n[1][1] && n[0][1] == n[2][1] && n[0][1] != "0") ||
    (n[0][2] == n[1][2] && n[0][2] == n[2][2] && n[0][2] != "0") ||
    (n[0][0] == n[1][1] && n[0][0] == n[2][2] && n[0][0] != "0") ||
    (n[0][2] == n[1][1] && n[0][2] == n[2][0] && n[0][2] != "0")
  ) {
    return true;
  } else {
    return false;
  }//else
} //wc
//grid1 = decisionArray
//grid2 = tempArray
//will return our best move

function computerRandomMove(grid1, grid2) {
  //consoleOutput(decisionArray)
  let row, col, squareNumber;

  //create copy of decisionArray
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      grid2[i][j] = grid1[i][j];
    } //j
  } //i

  for (let k = 1; k <= 9; k++) {
    row = floor((k - 1) / 3);
    col = (k - 1) % 3;

    //check to see if this wins
    if (grid2[row][col] == "0") {
      grid2[row][col] = "O";

      if (winConfirmed(grid2)) {
        grid1[row][col] = "O";
        return k;
      } //if
      grid2[row][col] = "0";
    } //if
  } //k
  for (let k = 1; k <= 9; k++) {
    row = floor((k - 1) / 3);
    col = (k - 1) % 3;

    //check to see if this wins
    if (grid2[row][col] == "0") {
      grid2[row][col] = "X";

      if (winConfirmed(grid2)) {
        grid1[row][col] = "O";
        return k;
      } //if
      grid2[row][col] = "0";
    } //if
  } //k

  //block corner
  if (moveCount == 1) {
    //nested if
    if (
      grid1[0][0] == "X" ||
      grid1[0][2] == "X" ||
      grid1[2][0] == "X" ||
      grid1[2][2] == "X"
    ) {
      grid1[1][1] = "O";
      return 5;
    } //if
  }//if mc == 1
  if (moveCount == 1){ 
  if (grid1[1][1] == "X") {
      grid1[0][2] = "O";
      return 3;
    } //if
  }//if mc==1
  //block side
  if (moveCount == 1) {
    
    if (
      grid1[0][1] == "X" ||
      grid1[1][2] == "X" ||
      grid1[1][0] == "X" ||
      grid1[2][1] == "X"
    ) {
      grid1[1][1] = "O";
      return 5;
    }//if
  }//if mc == 1

  if (moveCount == 3) {
    
    if (grid1[0][0] == "X" && grid1[2][2] == "X") {
      grid1[1][2] = "O";
      return 6;
    }//if

   else if (grid1[0][2] == "X" && grid1[2][0] == "X") {
      grid1[1][2] = "O";
      return 6;
    } //else if
  }//if mc == 3
  
    if (moveCount == 3){
      
    if (grid1[0][1] == "X" && grid1[2][0] == "X"){
      grid1[0][0] = "O"
      return 1
    }//if
      
      else if(grid1[2][0] == "X" && grid1[1][2] == "X"){
       grid1[2][2] = "O"
      return 9
       }//else if
      
      else if (grid1[0][0] == "X" && grid1[1][2] == "X"){
        grid1[0][2] = "O"
        return 3
      }//else if
      
      else if (grid1[0][0] == "X" && grid1[2][1] == "X"){
        grid1[2][0] = "O"
        return 7
      }//else if
      
      else if(grid1[0][2] == "X" && grid1[1][0] == "X"){
        grid1[0][0] = "O"
        return 1
        
      }//else if
      else if(grid1[0][1] == "X" && grid1[2][2] == "X"){
        grid1[0][2] = "O"
        return 3
      }//else if
      
      else if(grid1[1][0] == "X" && grid1[2][2] == "X"){
        grid1[0][0] = "O"
        return 1
      }//else if
      
      else if(grid1[0][2] == "X" && grid1[2][1] == "X"){
        grid1[2][2] = "O"
        return 9
      }//else if
    }//if mc == 3
  
  if (moveCount == 3) {
    
    if (grid1[1][0] == "X" && grid1[0][1] == "X") {
      grid1[0][0] = "O";
      return 1;
    } //if
    
    else if (grid1[1][2] == "X" && grid1[0][1] == "X") {
      grid1[0][2] = "O";
      return 3;
    } //else if
    
    else if (grid1[1][2] == "X" && grid1[2][1] == "X") {
      grid1[2][2] = "O";
      return 9;
    } //else if
    
    else if (grid1[1][0] == "X" && grid1[2][1] == "X") {
      grid1[2][0] = "O";
      return 7;
    } //else if
  } //if mc == 3

  if (moveCount == 3) {
    
    if (grid1[1][1] == "X" && grid1[2][0] == "X") {
      grid1[0][0] = "O";
      return 1;
    } //if
  } //if mc == 3

  //looking for a square to move to
  let looking = true;

  while (looking) {
    squareNumber = round(random(1, 9));

    row = floor((squareNumber - 1) / 3);
    col = (squareNumber - 1) % 3;
    if (grid1[row][col] == "0") {
      looking = false;
    } //if
  } //while

  grid1[row][col] = "O";
  return squareNumber;
} //computerRandomMove
function checkWin(n) {
  if (winConfirmed(n)) {
    noLoop();

    if (moveCount % 2 == 1) {
      textSize(40);
      text("X wins!", 150, 200);
      console.log("X wins!");
      noLoop();
    } else {
      textSize(40);
      text("O wins!", 150, 200);
      console.log("O wins!");
      noLoop();
    }//else
  } else {
    if (moveCount == 9) {
      textSize(40);
      text("Game Tied!", 125, 200);
      console.log("Game Tied!");
      noLoop();
    }//if mc == 9
  }//else
} //if

//as you would think
function consoleOutput(x) {
  for (var i = 0; i < 3; i++) {
    print(i + ": " + x[i][0] + " " + x[i][1] + " " + x[i][2] + " ");
  } //endfor
} //consoleoutput
function drawX(n) {
  line(
    ((n - 1) % 3) * 134 + 33,
    floor((n - 1) / 3) * 134 + 33,
    ((n - 1) % 3) * 134 + 100,
    floor((n - 1) / 3) * 134 + 100
  );
  line(
    ((n - 1) % 3) * 134 + 33,
    floor((n - 1) / 3) * 134 + 100,
    ((n - 1) % 3) * 134 + 100,
    floor((n - 1) / 3) * 134 + 33
  );
  text(n, 66 + ((n - 1) % 3) * 134, 66 + floor((n - 1) / 3) * 134);
}//drawX
function drawCircle(n) {
  circle(66 + ((n - 1) % 3) * 134, 66 + floor((n - 1) / 3) * 134, 100);
  text(n, 66 + ((n - 1) % 3) * 134, 66 + floor((n - 1) / 3) * 134);
}//drawCircle
function draw() {
  if (moveCount % 2 == 0) {
    outputMove();
  } //if
  else {
    drawCircle(computerRandomMove(decisionArray, tempArray));
    consoleOutput(decisionArray);
    moveCount++;
    console.log("Move Count - " + moveCount);
  }//else
  checkWin(decisionArray);
  if (moveCount == 9) {
    //do your draw code here
    noLoop();
  } //if
} //drawloop