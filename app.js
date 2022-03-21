document.addEventListener('DOMContentLoaded', () => {
  const gridDisplay = document.querySelector('.grid')
  const resultDisplay = document.getElementById(' result')
const width = 5
const height = 6
let squares = []


function createBoard() {
    for (let i=0; i < width*height; i++){
        square = document.createElement('div')
        square.innerHTML = ''
        gridDisplay.appendChild(square)
        squares.push(square)
   
    }
    generate()  
}

createBoard()

//random grid

function generate() {
    let randomNumber = Math.floor(Math.random() * 30)
     if (square[randomNumber].innerHTML == '' ) {
        square[randomNumber].innerHTML = '_'
     }
}
)
