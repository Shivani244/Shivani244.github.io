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
        if(squares[i + 1].innerHTML == '' && squares[i].innerHTML != '-' && squares[i].innerHTML != '' && i != 4 && i!= 9 && i!= 14 && i!=19 && i!=24 && i!=29){
            squares[i + 1].innerHTML = squares[i].innerHTML
            squares[i].innerHTML = ''
        }
    }
  }

  function moveLeft() {
    for (let  i=29; i>0; i--) {
        if (squares[i - 1].innerHTML == '' && squares[i].innerHTML != '-' && squares[i].innerHTML != '' && i != 0 && i!= 5 && i!= 10 && i!=15 && i!=20 && i!=25){
            squares[i - 1].innerHTML = squares[i].innerHTML
            squares[i].innerHTML = ''
        
        }
    }
  }

  function moveUp() {
    for (let i=29; i>0; i--) {
        if (squares[i - 5].innerHTML == '' && squares[i].innerHTML != '-' && squares[i].innerHTML != '' && i != 0 && i!= 1 && i!= 2 && i!=3 && i!=4){
            squares[i - 5].innerHTML = squares[i].innerHTML
            squares[i].innerHTML = ''
        }
    }
  }

  function moveDown() {
    for (let i = 0; i < width * height; i++) {
        if(squares[i+5].innerHTML == '' && squares[i].innerHTML != '-' && squares[i].innerHTML != '' && i != 25 && i!= 26 && i!= 27 && i!=28 && i!=29){
            squares[i + 5].innerHTML = squares[i].innerHTML
            squares[i].innerHTML = ''
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
