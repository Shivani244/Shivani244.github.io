document.addEventListener('DOMContentLoaded', () => {
  const gridDisplay = document.querySelector('.grid')
  const resultDisplay = document.getElementById(' result')
const width = 4 
let squares = []

function createBoard() {
    for (let i=0; i < width*width; i++){
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
    let randomNumber = Math.floor(Math.random() * squares.length)
     (squares[randomNumber].innerHTML == 0)
        squares[randomNumber].innterHTML = 2

}





})
