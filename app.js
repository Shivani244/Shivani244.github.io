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
        if (squares[i + 1].innerHTML == '' && squares[i].innerHTML == '-' && i != 4 && i!= 9 && i!= 14 && i!=19 && i!=24 && i!=29){
            squares[i + 1].innerHTML = '-'
            squares[i].innerHTML = ''
        }
    }
  }

  function moveLeft() {
    for (let i= width*height; i>0; i--) {
        if (squares[i - 1].innerHTML == '' && squares[i].innerHTML == '-' && i != 0 && i!= 5 && i!= 10 && i!=15 && i!=20 && i!=25){
            squares[i - 1].innerHTML = '-'
            squares[i].innerHTML = ''
        }
    }
  }

  function moveUp() {
    for (let i= width*height; i>0; i--) {
        if (squares[i - 5].innerHTML == '' && squares[i].innerHTML == '-' && i != 0 && i!= 1 && i!= 2 && i!=3 && i!=4){
            squares[i - 5].innerHTML = '-'
            squares[i].innerHTML = ''
        }
    }
  }

  function moveDown() {
    for (let i = 0; i < width * height; i++) {
        if (squares[i + 5].innerHTML == '' && squares[i].innerHTML == '-' && i != 24 && i!= 25 && i!= 26 && i!=27 && i!=28 && i!=29){
            squares[i + 5].innerHTML = '-'
            squares[i].innerHTML = ''
        }
    }
  }

  document.onkeydown = function(e) {
    e.preventDefault();
    switch (e.keyCode) {
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
    }
 }

  })
