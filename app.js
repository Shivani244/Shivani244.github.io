document.addEventListener('DOMContentLoaded', () => {
  const gridDisplay = document.querySelector('.grid')
  const resultDisplay = document.getElementById(' result')
const width = 5
const height = 6
let squares = []


function createBoard() {
    for (let i=0; i < width*height; i++){
        square = document.createElement('div')
        square.innerHTML = 0
        gridDisplay.appendChild(square)
        squares.push(square)
   
    }
    generate()  
}

createBoard()

//random grid

function generate() {
    let randomNumber = Math.floor(Math.random() * 30)
     if (squares[randomNumber].innerHTML == 0) {
        squares[randomNumber].innerHTML = 2
     }
}


})
