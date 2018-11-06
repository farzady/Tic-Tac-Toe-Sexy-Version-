//Project: Tic Tac Toe (Sexy Version)
//All my ❤ to: Digital.Spirit
//Date: 2018-10-20

var F_num = 3;
var F_score;
var F_moves;
var F_boxes = []; //Empty array 
var F_EMPTY = "&nbsp;";
var F_turn = "X";


/*
 * Initializes the OX board and starts the game.
 */
function OX() {
    var board = document.createElement('table'); //Create a <table> element.
    board.setAttribute("border", 1); //Add a border attribute with a value of "1" to <table> element.
    board.setAttribute("cellspacing", 0); //Add a border attribute with a value of "1" to <table> element.

    for (var i = 0; i < F_num; i++) {

        var row = document.createElement('tr'); //Create a <tr> element.
        board.appendChild(row); //Append row item in the table.
        for (var j = 0; j < F_num; j++) {

            var cell = document.createElement('td'); //Create a <td> element.
            cell.setAttribute('height', 120); //Add a height attribute with a value of "120" to <td> element.
            cell.setAttribute('width', 120); //Add a width attribute with a value of "120" to <td> element.
            cell.setAttribute('align', 'center'); //Add a align attribute with a value of "center" to <td> element.
            cell.setAttribute('valign', 'center'); //Add a valign attribute with a value of "center" to <td> element.
            cell.setAttribute('bgcolor', 'black'); //Add a bgcolor attribute with a value of "black" to <td> element.
            cell.classList.add('col' + j, 'row' + i); //Add the "col + j" class and "row' + i" to cell element.       

            if (i === j) { //check if i is equal to j.
                cell.classList.add('sexy0'); //Add the "sexy0" class to cell element
            }
            if (j === F_num - i - 1) { //check if j is equal to 3 - i - 1 .
                cell.classList.add('sexy1'); //Add the "sexy1" class to cell element
            }

            cell.addEventListener("click", setOX); //Attach a click event to the <td> element.
            cell.addEventListener("click", bgCellOX); //Attach a click event to the <td> element.

            row.appendChild(cell); //Append cell item in the row.

            F_boxes.push(cell); //Add cell value to the "F_boxes" array.

        }
    }
    document.getElementById("F_OX").appendChild(board); //Append board to <div> with id="F_OX".
    startNewOX(); //Start new OX game
}

/*
 * Start new OX game
 */
function startNewOX() {
    F_score = {"X": 0, "O": 0}; //Create an object with objectNames of "X" AND "O".
    F_moves = 0;
    F_turn = "X";

    F_boxes.forEach(function (item) { //sets 'F_EMPTY' value to the HTML content for each 'F_boxes' array element.
        item.innerHTML = F_EMPTY;
    });
//////We can use it instead "forEach"/////
//    for (var i = 0; i < F_boxes.length; i++) { 
//        F_boxes[i].innerHTML = F_EMPTY;
//    }
    bgCellOXClear(); // Change Background Color to default.
}

/*
 * Check if a win or not
 */
function win(clicked) {

    var memberOf = clicked.className.split(/\s+/); //Get all cell classes
    for (var i = 0; i < memberOf.length; i++) { //Run to the number of classes.
        var testClass = '.' + memberOf[i]; //Add points to all classes
        
        var items = contains('#F_OX ' + testClass, F_turn);;
        
        if (items.length === F_num) {  // winning condition: turn === F_num [3].
            return true;
        }
    }
    return false;
}

function contains(selector, text) {
    var elements = document.querySelectorAll(selector); //Get all elements in the document with class "selector".
    return [].filter.call(elements, function (element) {
        return RegExp(text).test(element.textContent); // If X = X return true
    });
}

/*
 * Sets clicked square and also updates the turn.
 */
function setOX() {
    if (this.innerHTML !== F_EMPTY) { // check if board is EMPTY or not
        return alert('The Board Is Not EMPTY Bitches!');
    }
    this.innerHTML = F_turn; //who's turn is it ?
    F_moves += 1;

    if (win(this)) { //Check out who wins
        alert('Player ' + F_turn + ' Is The Winner Bitches!');
        startNewOX(); //If we have a winner, Start new OX game!
    } else if (F_moves === F_num * F_num) { //Run if the number of moves is 9
        alert("The Game Is Draw Bitches!");
        startNewOX(); //If we do not have a winner, Start new OX game!
    } else {
        F_turn = F_turn === "X" ? "O" : "X"; // agar nobate X bod O ro neshon bede age nabod X ro neshon bede.
//////////We can use this instead "? : Condition"/////
//        if (F_turn === "X") {
//            F_turn = "O";
//        } else {
//            F_turn = "X";
//        }
        document.getElementById('turn').textContent = 'Player ' + F_turn; // Get the text content of an element:
    }
}

/*
 *  Change The BackGround Color of <td> element.
 */
function bgCellOX() {
    this.style.backgroundColor = '#ffccff';
}

/*
 *  Change The BackGround Color of <td> elements to default color.
 */
function bgCellOXClear() {
    var cells = document.getElementById("SexyTable").getElementsByTagName("td");
    for (var i = 0; i < cells.length; i++) {
       cells[i].style.backgroundColor = 'black';
    }
}

OX(); // Run The 'OX' Function.

//      ___           ___           ___           ___           ___     
//     /\  \         /\__\         /\  \         /\  \         /\  \    
//    /::\  \       /:/ _/_       /::\  \       /::\  \       /::\  \   
//   /:/\ \  \     /:/ /\__\     /:/\:\  \     /:/\:\  \     /:/\:\  \  
//  _\:\~\ \  \   /:/ /:/ _/_   /::\~\:\  \   /::\~\:\  \   /:/  \:\  \ 
// /\ \:\ \ \__\ /:/_/:/ /\__\ /:/\:\ \:\__\ /:/\:\ \:\__\ /:/__/ \:\__\
// \:\ \:\ \/__/ \:\/:/ /:/  / \:\~\:\ \/__/ \/__\:\/:/  / \:\  \  \/__/
//  \:\ \:\__\    \::/_/:/  /   \:\ \:\__\        \::/  /   \:\  \      
//   \:\/:/  /     \:\/:/  /     \:\ \/__/         \/__/     \:\  \     
//    \::/  /       \::/  /       \:\__\                      \:\__\    
//     \/__/         \/__/         \/__/                       \/__/    
