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
    
  const width = 5
  const height = 6
  let squares = []
  
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
    for (let i = 0; i < width * height; i++) {
        if(squares[i + 1].innerHTML == '' && squares[i].innerHTML != '' && i != 4 && i!= 9 && i!= 14 && i!=19 && i!=24 && i!=29){
            squares[i + 1].innerHTML = squares[i].innerHTML
            squares[i].innerHTML = ''
        }
    }
  }

  function moveLeft() {
    for (let  i= width*height; i>0; i--) {
        if (squares[i - 1].innerHTML == '' && squares[i].innerHTML != '' && i != 0 && i!= 5 && i!= 10 && i!=15 && i!=20 && i!=25){
            squares[i - 1].innerHTML = square[i].innerHTML
            squares[i].innerHTML = ''
        
        }
    }
  }

  function moveUp() {
    for (let i= width*height; i>0; i--) {
        if (squares[i - 5].innerHTML == '' && squares[i].innerHTML != '' && i != 0 && i!= 1 && i!= 2 && i!=3 && i!=4){
            squares[i - 5].innerHTML = squares[i].innerHTML
            squares[i].innerHTML = ''
        }
    
    }
  }

  function moveDown() {
    for (let i = 0; i < width * height; i++) {
        if(squares[i].innerHTML == '' && squares[i].innerHTML != '' && i != 25 && i!= 26 && i!= 27 && i!=28 && i!=29){
            squares[i + 5].innerHTML = squares[i].innerHTML
            squares[i].innerHTML = ''
        }
    }
  }

function addLetterA() {
    for (let i = 0; i < width * height; i++) {
       if (squares[i].innerHTML == '-'){
            squares[i].innerHTML = 'A'

        }
}
}
function addLetterB() {
    for (let i = 0; i < width * height; i++) {
       if (squares[i].innerHTML == '-'){
            squares[i].innerHTML = 'B'

        }
}
}
function addLetterC() {
    for (let i = 0; i < width * height; i++) {
       if (squares[i].innerHTML == '-'){
            squares[i].innerHTML = 'C'

        }
}
}
function addLetterD() {
    for (let i = 0; i < width * height; i++) {
       if (squares[i].innerHTML == '-'){
            squares[i].innerHTML = 'D'

        }
}
}
function addLetterE() {
    for (let i = 0; i < width * height; i++) {
       if (squares[i].innerHTML == '-'){
            squares[i].innerHTML = 'E'

        }
}
}
function addLetterF() {
    for (let i = 0; i < width * height; i++) {
       if (squares[i].innerHTML == '-'){
            squares[i].innerHTML = 'F'

        }
}
}
function addLetterG() {
    for (let i = 0; i < width * height; i++) {
       if (squares[i].innerHTML == '-'){
            squares[i].innerHTML = 'G'

        }
}
}
function addLetterH() {
    for (let i = 0; i < width * height; i++) {
       if (squares[i].innerHTML == '-'){
            squares[i].innerHTML = 'H'

        }
}
}
function addLetterI() {
    for (let i = 0; i < width * height; i++) {
       if (squares[i].innerHTML == '-'){
            squares[i].innerHTML = 'I'

        }
}
}
function addLetterJ() {
    for (let i = 0; i < width * height; i++) {
       if (squares[i].innerHTML == '-'){
            squares[i].innerHTML = 'J'

        }
}
}
function addLetterK() {
    for (let i = 0; i < width * height; i++) {
       if (squares[i].innerHTML == '-'){
            squares[i].innerHTML = 'K'

        }
}
}
function addLetterL() {
    for (let i = 0; i < width * height; i++) {
       if (squares[i].innerHTML == '-'){
            squares[i].innerHTML = 'L'

        }
}
}
function addLetterM() {
    for (let i = 0; i < width * height; i++) {
       if (squares[i].innerHTML == '-'){
            squares[i].innerHTML = 'M'

        }
}
}
function addLetterN() {
    for (let i = 0; i < width * height; i++) {
       if (squares[i].innerHTML == '-'){
            squares[i].innerHTML = 'N'

        }
}
}
function addLetterO() {
    for (let i = 0; i < width * height; i++) {
       if (squares[i].innerHTML == '-'){
            squares[i].innerHTML = 'O'

        }
}
}
function addLetterP() {
    for (let i = 0; i < width * height; i++) {
       if (squares[i].innerHTML == '-'){
            squares[i].innerHTML = 'P'

        }
}
}
function addLetterQ() {
    for (let i = 0; i < width * height; i++) {
       if (squares[i].innerHTML == '-'){
            squares[i].innerHTML = 'Q'

        }
}
}
function addLetterR() {
    for (let i = 0; i < width * height; i++) {
       if (squares[i].innerHTML == '-'){
            squares[i].innerHTML = 'R'

        }
}
}
function addLetterS() {
    for (let i = 0; i < width * height; i++) {
       if (squares[i].innerHTML == '-'){
            squares[i].innerHTML = 'S'

        }
}
}
function addLetterT() {
    for (let i = 0; i < width * height; i++) {
       if (squares[i].innerHTML == '-'){
            squares[i].innerHTML = 'T'

        }
}
}
function addLetterU() {
    for (let i = 0; i < width * height; i++) {
       if (squares[i].innerHTML == '-'){
            squares[i].innerHTML = 'U'

        }
}
}
function addLetterV() {
    for (let i = 0; i < width * height; i++) {
       if (squares[i].innerHTML == '-'){
            squares[i].innerHTML = 'V'

        }
}
}
function addLetterW() {
    for (let i = 0; i < width * height; i++) {
       if (squares[i].innerHTML == '-'){
            squares[i].innerHTML = 'W'

        }
}
}
function addLetterX() {
    for (let i = 0; i < width * height; i++) {
       if (squares[i].innerHTML == '-'){
            squares[i].innerHTML = 'X'

        }
}
}
function addLetterY() {
    for (let i = 0; i < width * height; i++) {
       if (squares[i].innerHTML == '-'){
            squares[i].innerHTML = 'Y'

        }
}
}
function addLetterZ() {
    for (let i = 0; i < width * height; i++) {
       if (squares[i].innerHTML == '-'){
            squares[i].innerHTML = 'Z'

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
            addLetterA();  
            break; 
        case 66: 
            addLetterB();  
            break;  
        case 67: 
            addLetterC();  
            break;  
         case 68: 
            addLetterD();  
            break;
         case 69: 
            addLetterE();  
            break;  
        case 70: 
            addLetterF();  
            break;  
        case 71: 
            addLetterG();  
            break;   
        case 72: 
            addLetterH();  
            break;   
        case 73: 
            addLetterI();  
            break;  
        case 74:
            addLetterJ(); 
            break; 
        case 75: 
            addLetterK();  
            break;  
        case 76: 
            addLetterL();  
            break;  
        case 77: 
            addLetterM();  
            break;  
        case 78: 
            addLetterN();  
            break;  
        case 79: 
            addLetterO();  
            break;  
         case 80: 
            addLetterP();  
            break;  
        case 81: 
            addLetterQ();  
            break;  
        case 82: 
            addLetterR();  
            break; 
        case 83: 
            addLetterS();  
            break;  
        case 84: 
            addLetterT();  
            break;
        case 85: 
            addLetterU();  
            break;   
        case 86: 
            addLetterV();  
            break; 
        case 87: 
            addLetterW();  
            break; 
        case 88: 
            addLetterX();  
            break; 
        case 89: 
            addLetterY();  
            break; 
        case 90: 
            addLetterZ();  
            break; 
            
    }
 }

})


