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
    ]
    const handleClick = () => {
        console.log('clicked')
    }
    
    const width = 5
  //const height = 2
  const height1 = 6
  let squares = []
  
  function createBoard() {
    for (let i=0; i < width*height1; i++){
        let square = document.createElement('div')
        square.innerHTML = ''
        gridDisplay.appendChild(square)
        squares.push(square)
   
    } 
    generate()
}
createBoard()

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
  
})


