document.addEventListener('DOMContentLoaded', () => {
    const gridDisplay = document.querySelector('.grid')
    const resultDisplay = document.getElementById(' result')
    const keyboard = document.querySelector('.key-container')
    const keys = [
        'Q',
        'W',
        'E',
        'R',
        'T',
        'Y',
        'U',
        'I',
        'O',
        'P',
        'A',
        'S',
        'D',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        'ENTER',
        'Z',
        'X',
        'C',
        'V',
        'B',
        'N',
        'M',
        'New Letter'
    ]
    const handleClick = () => {
        console.log('clicked')
    }
     
    var grid = document.getElementByClassName("grid"); 
  function colors(){
  var children = grid.children;
  for(var i=0; i<children.length; i++) {
    var child = children[i];
    child.style.backgroundcolor = 'red';
  }
}
    
  const width = 5
  const height = 6
  let squares = []
  const words = ['fight', 'aloud', 'mount', 'irate', 'prize', 'lance', 'jokes', 'happy', 'alert', 'crash', 'chose', 'rites', 'dares']

  function createBoard() {
    for (let i=0; i < width*height; i++){
        let square = document.createElement('div')
        square.innerHTML = ''
        gridDisplay.appendChild(square)
        squares.push(square)
    } 
    generate()
}
createBoard()
console.log(squares)
 //random grid
  

  function generate() {
      let randomNumber = Math.floor(Math.random() * 20 + 10)
       if (squares[randomNumber].innerHTML == '') {
          squares[randomNumber].innerHTML = '-'
       } else generate()
  }

  keys.forEach(key => {
      const buttonElement = document.createElement('button')
      buttonElement.textContent = key
      keyboard.append(buttonElement)
      buttonElement.addEventListener('click', handleClick)
  })

  function moveRight() {
    for (let i=0; i < 30; i= i+5) {
        let spotOne = squares[i].innerHTML
        let spotTwo = squares[i+1].innerHTML
        let spotThree = squares[i+2].innerHTML
        let spotFour = squares[i+3].innerHTML
        let spotFive = squares[i+4].innerHTML
        let row = [spotOne,spotTwo,spotThree,spotFour,spotFive];
        let filteredRow = row.filter(row => row != '')
        if (filteredRow.length == 5){
            squares[i].innerHTML = filteredRow[0]
            squares[i +1].innerHTML = filteredRow[1]
            squares[i +2].innerHTML = filteredRow[2]
            squares[i +3].innerHTML = filteredRow[3]
            squares[i +4].innerHTML = filteredRow[4]
        }
        if (filteredRow.length == 4){
            squares[i].innerHTML = ''
            squares[i +1].innerHTML = filteredRow[0]
            squares[i +2].innerHTML = filteredRow[1]
            squares[i +3].innerHTML = filteredRow[2]
            squares[i +4].innerHTML = filteredRow[3]
        }
        if (filteredRow.length == 3){
            squares[i].innerHTML = ''
            squares[i +1].innerHTML = ''
            squares[i +2].innerHTML = filteredRow[0]
            squares[i +3].innerHTML = filteredRow[1]
            squares[i +4].innerHTML = filteredRow[2]
        }
        if (filteredRow.length == 2){
            squares[i].innerHTML = ''
            squares[i +1].innerHTML = ''
            squares[i +2].innerHTML = ''
            squares[i +3].innerHTML = filteredRow[0]
            squares[i +4].innerHTML = filteredRow[1]
        }
        if (filteredRow.length == 1){
            squares[i].innerHTML = ''
            squares[i +1].innerHTML = ''
            squares[i +2].innerHTML = ''
            squares[i +3].innerHTML = ''
            squares[i +4].innerHTML = filteredRow[0]
        }
        if (filteredRow.length == 0){
            squares[i].innerHTML = ''
            squares[i +1].innerHTML = ''
            squares[i +2].innerHTML = ''
            squares[i +3].innerHTML = ''
            squares[i +4].innerHTML = ''
        }
    }
  }

  function moveLeft() {
    for (let i=0; i < 30; i= i+5) {
        let spotOne = squares[i].innerHTML
        let spotTwo = squares[i+1].innerHTML
        let spotThree = squares[i+2].innerHTML
        let spotFour = squares[i+3].innerHTML
        let spotFive = squares[i+4].innerHTML
        let row = [spotOne,spotTwo,spotThree,spotFour,spotFive];
        let filteredRow = row.filter(row => row != '')
        if (filteredRow.length == 5){
            squares[i].innerHTML = filteredRow[0]
            squares[i +1].innerHTML = filteredRow[1]
            squares[i +2].innerHTML = filteredRow[2]
            squares[i +3].innerHTML = filteredRow[3]
            squares[i +4].innerHTML = filteredRow[4]
        }
        if (filteredRow.length == 4){
            squares[i].innerHTML = filteredRow[0]
            squares[i +1].innerHTML = filteredRow[1]
            squares[i +2].innerHTML = filteredRow[2]
            squares[i +3].innerHTML = filteredRow[3]
            squares[i +4].innerHTML = ''
        }
        if (filteredRow.length == 3){
            squares[i].innerHTML = filteredRow[0]
            squares[i +1].innerHTML = filteredRow[1]
            squares[i +2].innerHTML = filteredRow[2]
            squares[i +3].innerHTML = ''
            squares[i +4].innerHTML = ''
        }
        if (filteredRow.length == 2){
            squares[i].innerHTML = filteredRow[0]
            squares[i +1].innerHTML = filteredRow[1]
            squares[i +2].innerHTML = ''
            squares[i +3].innerHTML = ''
            squares[i +4].innerHTML = ''
        }
        if (filteredRow.length == 1){
            squares[i].innerHTML = filteredRow[0]
            squares[i +1].innerHTML = ''
            squares[i +2].innerHTML = ''
            squares[i +3].innerHTML = ''
            squares[i +4].innerHTML = ''
        }
        if (filteredRow.length == 0){
            squares[i].innerHTML = ''
            squares[i +1].innerHTML = ''
            squares[i +2].innerHTML = ''
            squares[i +3].innerHTML = ''
            squares[i +4].innerHTML = ''
        }
    }
  }

  function moveUp() {
    for (let i=0; i < 5; i++) {
        let spotOne = squares[i].innerHTML
        let spotTwo = squares[i+5].innerHTML
        let spotThree = squares[i+10].innerHTML
        let spotFour = squares[i+15].innerHTML
        let spotFive = squares[i+20].innerHTML
        let spotSix = squares [i+25].innerHTML
        let row = [spotOne,spotTwo,spotThree,spotFour,spotFive,spotSix];
        let filteredRow = row.filter(row => row != '')
        if (filteredRow.length == 6){
            squares[i].innerHTML = filteredRow[0]
            squares[i +5].innerHTML = filteredRow[1]
            squares[i +10].innerHTML = filteredRow[2]
            squares[i +15].innerHTML = filteredRow[3]
            squares[i +20].innerHTML = filteredRow[4]
            squares[i+25].innerHTML = filteredRow[5]
        }
        if (filteredRow.length == 5){
            squares[i].innerHTML = filteredRow[0]
            squares[i +5].innerHTML = filteredRow[1]
            squares[i +10].innerHTML = filteredRow[2]
            squares[i +15].innerHTML = filteredRow[3]
            squares[i +20].innerHTML = filteredRow[4]
            squares[i+25].innerHTML = ''
        }
        if (filteredRow.length == 4){
            squares[i].innerHTML = filteredRow[0]
            squares[i +5].innerHTML = filteredRow[1]
            squares[i +10].innerHTML = filteredRow[2]
            squares[i +15].innerHTML = filteredRow[3]
            squares[i +20].innerHTML = ''
            squares[i+25].innerHTML = ''
        }
        if (filteredRow.length == 3){
            squares[i].innerHTML = filteredRow[0]
            squares[i +5].innerHTML = filteredRow[1]
            squares[i +10].innerHTML = filteredRow[2]
            squares[i +15].innerHTML = ''
            squares[i +20].innerHTML = ''
            squares[i+25].innerHTML = ''
        }
        if (filteredRow.length == 2){
            squares[i].innerHTML = filteredRow[0]
            squares[i +5].innerHTML = filteredRow[1]
            squares[i +10].innerHTML = ''
            squares[i +15].innerHTML = ''
            squares[i +20].innerHTML = ''
            squares[i+25].innerHTML = ''
        }
        if (filteredRow.length == 1){
            squares[i].innerHTML = filteredRow[0]
            squares[i +5].innerHTML = ''
            squares[i +10].innerHTML = ''
            squares[i +15].innerHTML = ''
            squares[i +20].innerHTML = ''
            squares[i+25].innerHTML = ''
        }
        if (filteredRow.length == 0){
            squares[i].innerHTML = ''
            squares[i +5].innerHTML = ''
            squares[i +10].innerHTML = ''
            squares[i +15].innerHTML = ''
            squares[i +20].innerHTML = ''
            squares[i+25].innerHTML = ''
        }
    }
  }

  function moveDown() {
    for (let i=0; i < 5; i++) {
        let spotOne = squares[i].innerHTML
        let spotTwo = squares[i+5].innerHTML
        let spotThree = squares[i+10].innerHTML
        let spotFour = squares[i+15].innerHTML
        let spotFive = squares[i+20].innerHTML
        let spotSix = squares [i+25].innerHTML
        let row = [spotOne,spotTwo,spotThree,spotFour,spotFive,spotSix];
        let filteredRow = row.filter(row => row != '')
        if (filteredRow.length == 6){
            squares[i].innerHTML = filteredRow[0]
            squares[i +5].innerHTML = filteredRow[1]
            squares[i +10].innerHTML = filteredRow[2]
            squares[i +15].innerHTML = filteredRow[3]
            squares[i +20].innerHTML = filteredRow[4]
            squares[i+25].innerHTML = filteredRow[5]
        }
        if (filteredRow.length == 5){
            squares[i].innerHTML = ''
            squares[i +5].innerHTML = filteredRow[0]
            squares[i+10].innerHTML = filteredRow[1]
            squares[i+15].innerHTML = filteredRow[2]
            squares[i +20].innerHTML = filteredRow[3]
            squares[i +25].innerHTML = filteredRow[4]
        }
        if (filteredRow.length == 4){
            squares[i].innerHTML = ''
            squares[i +5].innerHTML = ''
            squares[i+10].innerHTML = filteredRow[0]
            squares[i+15].innerHTML = filteredRow[1]
            squares[i +20].innerHTML = filteredRow[2]
            squares[i +25].innerHTML = filteredRow[3]
        }
        if (filteredRow.length == 3){
            squares[i].innerHTML = ''
            squares[i +5].innerHTML = ''
            squares[i+10].innerHTML = ''
            squares[i+15].innerHTML = filteredRow[0]
            squares[i +20].innerHTML = filteredRow[1]
            squares[i +25].innerHTML = filteredRow[2]
        }
        if (filteredRow.length == 2){
            squares[i].innerHTML = ''
            squares[i +5].innerHTML = ''
            squares[i +10].innerHTML = ''
            squares[i+15].innerHTML = ''
            squares[i+20].innerHTML = filteredRow[0]
            squares[i +25].innerHTML = filteredRow[1]
        }
        if (filteredRow.length == 1){
            squares[i].innerHTML = ''
            squares[i +5].innerHTML = ''
            squares[i +10].innerHTML = ''
            squares[i +15].innerHTML = ''
            squares[i +20].innerHTML = ''
            squares[i+25].innerHTML = filteredRow[0]
        }
        if (filteredRow.length == 0){
            squares[i].innerHTML = ''
            squares[i +5].innerHTML = ''
            squares[i +10].innerHTML = ''
            squares[i +15].innerHTML = ''
            squares[i +20].innerHTML = ''
            squares[i+25].innerHTML = ''
        }
    }
  }

function addLetter(letter) {
    for (let i = 0; i < width * height; i++) {
       if (squares[i].innerHTML == '-'){
            squares[i].innerHTML = letter
        }
    }
}

function deleteLetter(){
    for (let i = 0; i < width * height; i++) {
        if (squares[i].innerHTML != ''){
             squares[i].innerHTML = '-'
         }
 }
}

  document.onkeydown = function(e) {
    e.preventDefault();
    switch (e.keyCode) {
        case 13: //enter
            generate();
            break;
        case 37: //left arrow
            moveLeft();
            break;
        case 38: //up arrow
            moveUp();
            break;
        case 39: //right arrow
            moveRight();
            break;
       case 40: //down arrow
           moveDown();
            break;
        case 65: //letter a
            addLetter('A');  
            break; 
        case 66: 
            addLetter('B');  
            break;  
        case 67: 
            addLetter('C');  
            break;  
         case 68: 
            addLetter('D');  
            break;
         case 69: 
            addLetter('E');  
            break;  
        case 70: 
            addLetter('F');  
            break;  
        case 71: 
            addLetter('G');  
            break;   
        case 72: 
            addLetter('H');  
            break;   
        case 73: 
            addLetter('I');  
            break;  
        case 74:
            addLetter('J'); 
            break; 
        case 75: 
            addLetter('K');  
            break;  
        case 76: 
            addLetter('L');  
            break;  
        case 77: 
            addLetter('M');  
            break;  
        case 78: 
            addLetter('N');  
            break;  
        case 79: 
            addLetter('O');  
            break;  
         case 80: 
            addLetter('P');  
            break;  
        case 81: 
            addLetter('Q');  
            break;  
        case 82: 
            addLetter('R');  
            break; 
        case 83: 
            addLetter('S');  
            break;  
        case 84: 
            addLetter('T');  
            break;
        case 85: 
            addLetter('U');  
            break;   
        case 86: 
            addLetter('V');  
            break; 
        case 87: 
            addLetter('W');  
            break; 
        case 88: 
            addLetter('X');  
            break; 
        case 89: 
            addLetter('Y');  
            break; 
        case 90: 
            addLetter('Z');  
            break; 
      case 8:
            deleteLetter(); 
            break;  
            
    }
 }
 
})
