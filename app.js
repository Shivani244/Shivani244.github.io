import {wordarray} from './words.js';
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
const wordList = ['fight',
   'aloud',
   'aback',
   'abate',
   'array',
   'abort',
   'abode',
   'about',
   'abyss',
   'abuse',
   'acorn',
   'acute',
   'adult',
   'again',
   'agony',
   'aisle',
   'motor',
   'knock',
   'alibi',
   'alien',
   'basis',
   'beach',
   'beady',
   'begin',
   'beige',
   'bench',
   'bingo',
   'blink',
   'bloom',
   'blown',
   'bugle',
   'bulky',
   'canal',
   'canoe',
   'carve',
   'caulk',
   'cause',
   'cease',
   'audio',
   'uncle',
   'juice',
   'jewel',
   'judge',
   'idiot',
   'issue',
   'jelly',
   'intro',
   'inner',
   'joint',
   'knife',
   'known',
   'lemon',
   'legal',
   'layer',
   'lunar',
   'logic',
   'moose',
   'march',
   'money',
   'movie',
   'crumb',
   'diner',
   'diary',
   'dairy',
   'donut',
   'doing',
   'drama',
   'eager',
   'easel',
   'edict',
   'elegy',
   'elbow',
   'enact',
   'enemy',
   'exact',
   'exile',
   'ferry',
   'feign',
   'fever',
   'finch',
   'flood',
   'funny',
   'grace',
   'glass',
   'graph',
   'great',
   'giver',
   'habit',
   'handy',
   'heart',
   'shape',
   'mount',
   'irate', 
   'prize', 
   'lance', 
   'jokes', 
   'happy', 
   'alert', 
   'crash', 
   'chose', 
   'rites', 
   'dares',
   'cynic',
   'pride',
   'color',
   'split', 
   'slide',
   'stars',
   'water',
   'under',
   'trash',
   'phone',
   'sugar',
   'small',
   'large',
   'stone',
   'other',
   'order', 
   'brain',
   'bunny',
   'where',
   'floor',
]
let word = []
let grid = document.getElementsByClassName("grid"); 
let divs = document.getElementsByTagName("div")

function createBoard() {
    for (let i=0; i < width*height; i++){
        let square = document.createElement('div')
        square.innerHTML = ''
        gridDisplay.appendChild(square)
        squares.push(square)
    } 
    generate()
    word = wordList[Math.floor(Math.random() * wordList.length)].split('')
    word = word.map(word => word.toUpperCase());
    console.log(word)
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

function colors(color, letter) {
    for(let i=0; i< width*height; i++) {
        if (squares[i].innerHTML == letter){
            let child = divs[i+2];
            child.style.backgroundColor = color;
        }
    }
}  


function rightNoGreenNoGray() {
    for (let i=0; i < 30; i= i+5) {
        if (divs[i+2].style.backgroundColor != "grey" && divs[i+2].style.backgroundColor != "green" && divs[i+3].style.backgroundColor != "grey" && divs[i+3].style.backgroundColor != "green" && divs[i+4].style.backgroundColor != "grey" && divs[i+4].style.backgroundColor != "green" && divs[i+5].style.backgroundColor != "grey" && divs[i+5].style.backgroundColor != "green"){
            let spotOne = squares[i].innerHTML
            let spotTwo = squares[i+1].innerHTML
            let spotThree = squares[i+2].innerHTML
            let spotFour = squares[i+3].innerHTML
            let spotFive = squares[i+4].innerHTML
            let row = [spotOne,spotTwo,spotThree,spotFour,spotFive];
            let filteredRow = row.filter(row => row != '')
            switch (filteredRow.length) {
                case 5:
                    squares[i].innerHTML = filteredRow[0];
                    squares[i +1].innerHTML = filteredRow[1];
                    squares[i +2].innerHTML = filteredRow[2];
                    squares[i +3].innerHTML = filteredRow[3];
                    squares[i +4].innerHTML = filteredRow[4];
                    break;
                case 4:
                    squares[i].innerHTML = '';
                    squares[i +1].innerHTML = filteredRow[0];
                    squares[i +2].innerHTML = filteredRow[1];
                    squares[i +3].innerHTML = filteredRow[2];
                    squares[i +4].innerHTML = filteredRow[3];
                    break;
                case 3:
                    squares[i].innerHTML = '';
                    squares[i +1].innerHTML = '';
                    squares[i +2].innerHTML = filteredRow[0];
                    squares[i +3].innerHTML = filteredRow[1];
                    squares[i +4].innerHTML = filteredRow[2];
                    break;
                case 2:
                    squares[i].innerHTML = '';
                    squares[i +1].innerHTML = '';
                    squares[i +2].innerHTML = '';
                    squares[i +3].innerHTML = filteredRow[0];
                    squares[i +4].innerHTML = filteredRow[1];
                    break;
                case 1:
                    squares[i].innerHTML = '';
                    squares[i +1].innerHTML = '';
                    squares[i +2].innerHTML = '';
                    squares[i +3].innerHTML = '';
                    squares[i +4].innerHTML = filteredRow[0];
                    break;
                case 0:
                    squares[i].innerHTML = '';
                    squares[i +1].innerHTML = '';
                    squares[i +2].innerHTML = '';
                    squares[i +3].innerHTML = '';
                    squares[i +4].innerHTML = '';
                    break;
            }   
        }
    }
}

function rightWithGray(){
    for (let i = 0; i < width*height; i = i + 5){
        if (divs[i+2].style.backgroundColor == "grey" && divs[i+3].style.backgroundColor != "grey" && divs[i+4].style.backgroundColor != "grey" && divs[i+5].style.backgroundColor != "grey"  && divs[i+6].style.backgroundColor != "grey" ){
            let spotTwo = squares[i+1].innerHTML
            let spotThree = squares[i+2].innerHTML
            let spotFour = squares[i+3].innerHTML
            let spotFive = squares[i+4].innerHTML
            let row = [spotTwo,spotThree,spotFour,spotFive];
            let filteredRow = row.filter(row => row != '')
            switch (filteredRow.length) {
                case 4:
                    squares[i +1].innerHTML = filteredRow[0];
                    squares[i +2].innerHTML = filteredRow[1];
                    squares[i +3].innerHTML = filteredRow[2];
                    squares[i +4].innerHTML = filteredRow[3];
                    break;
                case 3:
                    squares[i +1].innerHTML = '';
                    squares[i +2].innerHTML = filteredRow[0];
                    squares[i +3].innerHTML = filteredRow[1];
                    squares[i +4].innerHTML = filteredRow[2];
                    break;
                case 2:
                    squares[i +1].innerHTML = '';
                    squares[i +2].innerHTML = '';
                    squares[i +3].innerHTML = filteredRow[0];
                    squares[i +4].innerHTML = filteredRow[1];
                    break;
                case 1:
                    squares[i +1].innerHTML = '';
                    squares[i +2].innerHTML = '';
                    squares[i +3].innerHTML = '';
                    squares[i +4].innerHTML = filteredRow[0];
                    break;
                case 0:
                    squares[i +1].innerHTML = '';
                    squares[i +2].innerHTML = '';
                    squares[i +3].innerHTML = '';
                    squares[i +4].innerHTML = '';
                    break;
            }   
        }
        if (divs[i+3].style.backgroundColor == "grey" && divs[i+4].style.backgroundColor != "grey" && divs[i+5].style.backgroundColor != "grey"  && divs[i+6].style.backgroundColor != "grey" ){
            let spotThree = squares[i+2].innerHTML
            let spotFour = squares[i+3].innerHTML
            let spotFive = squares[i+4].innerHTML
            let row = [spotThree,spotFour,spotFive];
            let filteredRow = row.filter(row => row != '')
            switch (filteredRow.length) {
                case 3:
                    squares[i +2].innerHTML = filteredRow[0];
                    squares[i +3].innerHTML = filteredRow[1];
                    squares[i +4].innerHTML = filteredRow[2];
                    break;
                case 2:
                    squares[i +2].innerHTML = '';
                    squares[i +3].innerHTML = filteredRow[0];
                    squares[i +4].innerHTML = filteredRow[1];
                    break;
                case 1:
                    squares[i +2].innerHTML = '';
                    squares[i +3].innerHTML = '';
                    squares[i +4].innerHTML = filteredRow[0];
                    break;
                case 0:
                    squares[i +2].innerHTML = '';
                    squares[i +3].innerHTML = '';
                    squares[i +4].innerHTML = '';
                    break;
            }   
        }
        if (divs[i+3].style.backgroundColor == "grey" && divs[i+4].style.backgroundColor == "grey" && divs[i+5].style.backgroundColor != "grey"  && divs[i+6].style.backgroundColor != "grey" ){
            let spotFour = squares[i+3].innerHTML
            let spotFive = squares[i+4].innerHTML
            let row = [spotFour,spotFive];
            let filteredRow = row.filter(row => row != '')
            switch (filteredRow.length) {
                case 2:
                    squares[i +3].innerHTML = filteredRow[0];
                    squares[i +4].innerHTML = filteredRow[1];
                    break;
                case 1:
                    squares[i +3].innerHTML = '';
                    squares[i +4].innerHTML = filteredRow[0];
                    break;
                case 0:
                    squares[i +3].innerHTML = '';
                    squares[i +4].innerHTML = '';
                    break;
            }   
        }
        if (divs[i+2].style.backgroundColor != "grey" && divs[i+3].style.backgroundColor != "grey" && divs[i+4].style.backgroundColor == "grey" && divs[i+5].style.backgroundColor != "grey"  && divs[i+6].style.backgroundColor != "grey" ){
            let spotFour = squares[i+3].innerHTML
            let spotFive = squares[i+4].innerHTML
            let row = [spotFour,spotFive];
            let filteredRow = row.filter(row => row != '')
            switch (filteredRow.length) {
                case 2:
                    squares[i +3].innerHTML = filteredRow[0];
                    squares[i +4].innerHTML = filteredRow[1];
                    break;
                case 1:
                    squares[i +3].innerHTML = '';
                    squares[i +4].innerHTML = filteredRow[0];
                    break;
                case 0:
                    squares[i +3].innerHTML = '';
                    squares[i +4].innerHTML = '';
                    break;
            }
            let spotOne = squares[i].innerHTML
            let spotTwo = squares[i+1].innerHTML
            let row2 = [spotOne,spotTwo];
            let filteredRow2 = row2.filter(row => row != '')
            switch (filteredRow2.length) {
                case 2:
                    squares[i].innerHTML = filteredRow2[0];
                    squares[i + 1].innerHTML = filteredRow2[1];
                    break;
                case 1:
                    squares[i].innerHTML = '';
                    squares[i + 1].innerHTML = filteredRow2[0];
                    break;
                case 0:
                    squares[i].innerHTML = '';
                    squares[i + 1].innerHTML = '';
                    break;
            }
        }
        if (divs[i+2].style.backgroundColor != "grey" && divs[i+3].style.backgroundColor != "grey" && divs[i+4].style.backgroundColor != "grey" && divs[i+5].style.backgroundColor == "grey"){
            let spotOne = squares[i].innerHTML
            let spotTwo = squares[i+1].innerHTML
            let spotThree = squares[i+2].innerHTML
            let row = [spotOne,spotTwo,spotThree];
            let filteredRow = row.filter(row => row != '')
            switch (filteredRow.length) {
                case 3:
                    squares[i ].innerHTML = filteredRow[0];
                    squares[i + 1].innerHTML = filteredRow[1];
                    squares[i + 2].innerHTML = filteredRow[2];
                    break;
                case 2:
                    squares[i].innerHTML = '';
                    squares[i + 1].innerHTML = filteredRow[0];
                    squares[i + 2].innerHTML = filteredRow[1];
                    break;
                case 1:
                    squares[i].innerHTML = '';
                    squares[i + 1].innerHTML = '';
                    squares[i + 2].innerHTML = filteredRow[0];
                    break;
                case 0:
                    squares[i].innerHTML = '';
                    squares[i + 1].innerHTML = '';
                    squares[i + 2].innerHTML = '';
                    break;
            }   
        }
        if (divs[i+2].style.backgroundColor != "grey" && divs[i+3].style.backgroundColor != "grey" && divs[i+4].style.backgroundColor == "grey" && divs[i+5].style.backgroundColor == "grey"){
            let spotOne = squares[i].innerHTML
            let spotTwo = squares[i+1].innerHTML
            let row = [spotOne,spotTwo];
            let filteredRow = row.filter(row => row != '')
            switch (filteredRow.length) {
                case 2:
                    squares[i].innerHTML = filteredRow[0];
                    squares[i + 1].innerHTML = filteredRow[1];
                    break;
                case 1:
                    squares[i].innerHTML = '';
                    squares[i + 1].innerHTML = filteredRow[0];
                    break;
                case 0:
                    squares[i].innerHTML = '';
                    squares[i + 1].innerHTML = '';
                    break;
            }   
        }
    }
}

function rightWithGreen(){
    for (let i = 0; i < width*height; i = i + 5){
        if (divs[i+2].style.backgroundColor == "green" && divs[i+3].style.backgroundColor != "green" && divs[i+4].style.backgroundColor != "green" && divs[i+5].style.backgroundColor != "green"  && divs[i+6].style.backgroundColor != "green" ){
            let spotTwo = squares[i+1].innerHTML
            let spotThree = squares[i+2].innerHTML
            let spotFour = squares[i+3].innerHTML
            let spotFive = squares[i+4].innerHTML
            let row = [spotTwo,spotThree,spotFour,spotFive];
            let filteredRow = row.filter(row => row != '')
            switch (filteredRow.length) {
                case 4:
                    squares[i +1].innerHTML = filteredRow[0];
                    squares[i +2].innerHTML = filteredRow[1];
                    squares[i +3].innerHTML = filteredRow[2];
                    squares[i +4].innerHTML = filteredRow[3];
                    break;
                case 3:
                    squares[i +1].innerHTML = '';
                    squares[i +2].innerHTML = filteredRow[0];
                    squares[i +3].innerHTML = filteredRow[1];
                    squares[i +4].innerHTML = filteredRow[2];
                    break;
                case 2:
                    squares[i +1].innerHTML = '';
                    squares[i +2].innerHTML = '';
                    squares[i +3].innerHTML = filteredRow[0];
                    squares[i +4].innerHTML = filteredRow[1];
                    break;
                case 1:
                    squares[i +1].innerHTML = '';
                    squares[i +2].innerHTML = '';
                    squares[i +3].innerHTML = '';
                    squares[i +4].innerHTML = filteredRow[0];
                    break;
                case 0:
                    squares[i +1].innerHTML = '';
                    squares[i +2].innerHTML = '';
                    squares[i +3].innerHTML = '';
                    squares[i +4].innerHTML = '';
                    break;
            }   
        }
        if (divs[i+3].style.backgroundColor == "green" && divs[i+4].style.backgroundColor != "green" && divs[i+5].style.backgroundColor != "green"  && divs[i+6].style.backgroundColor != "green" ){
            let spotThree = squares[i+2].innerHTML
            let spotFour = squares[i+3].innerHTML
            let spotFive = squares[i+4].innerHTML
            let row = [spotThree,spotFour,spotFive];
            let filteredRow = row.filter(row => row != '')
            switch (filteredRow.length) {
                case 3:
                    squares[i +2].innerHTML = filteredRow[0];
                    squares[i +3].innerHTML = filteredRow[1];
                    squares[i +4].innerHTML = filteredRow[2];
                    break;
                case 2:
                    squares[i +2].innerHTML = '';
                    squares[i +3].innerHTML = filteredRow[0];
                    squares[i +4].innerHTML = filteredRow[1];
                    break;
                case 1:
                    squares[i +2].innerHTML = '';
                    squares[i +3].innerHTML = '';
                    squares[i +4].innerHTML = filteredRow[0];
                    break;
                case 0:
                    squares[i +2].innerHTML = '';
                    squares[i +3].innerHTML = '';
                    squares[i +4].innerHTML = '';
                    break;
            }   
        }
        if (divs[i+3].style.backgroundColor == "green" && divs[i+4].style.backgroundColor == "green" && divs[i+5].style.backgroundColor != "green"  && divs[i+6].style.backgroundColor != "green" ){
            let spotFour = squares[i+3].innerHTML
            let spotFive = squares[i+4].innerHTML
            let row = [spotFour,spotFive];
            let filteredRow = row.filter(row => row != '')
            switch (filteredRow.length) {
                case 2:
                    squares[i +3].innerHTML = filteredRow[0];
                    squares[i +4].innerHTML = filteredRow[1];
                    break;
                case 1:
                    squares[i +3].innerHTML = '';
                    squares[i +4].innerHTML = filteredRow[0];
                    break;
                case 0:
                    squares[i +3].innerHTML = '';
                    squares[i +4].innerHTML = '';
                    break;
            }   
        }
        if (divs[i+2].style.backgroundColor != "green" && divs[i+3].style.backgroundColor != "green" && divs[i+4].style.backgroundColor == "green" && divs[i+5].style.backgroundColor != "green"  && divs[i+6].style.backgroundColor != "green" ){
            let spotFour = squares[i+3].innerHTML
            let spotFive = squares[i+4].innerHTML
            let row = [spotFour,spotFive];
            let filteredRow = row.filter(row => row != '')
            switch (filteredRow.length) {
                case 2:
                    squares[i +3].innerHTML = filteredRow[0];
                    squares[i +4].innerHTML = filteredRow[1];
                    break;
                case 1:
                    squares[i +3].innerHTML = '';
                    squares[i +4].innerHTML = filteredRow[0];
                    break;
                case 0:
                    squares[i +3].innerHTML = '';
                    squares[i +4].innerHTML = '';
                    break;
            }
            let spotOne = squares[i].innerHTML
            let spotTwo = squares[i+1].innerHTML
            let row2 = [spotOne,spotTwo];
            let filteredRow2 = row2.filter(row => row != '')
            switch (filteredRow2.length) {
                case 2:
                    squares[i].innerHTML = filteredRow2[0];
                    squares[i + 1].innerHTML = filteredRow2[1];
                    break;
                case 1:
                    squares[i].innerHTML = '';
                    squares[i + 1].innerHTML = filteredRow2[0];
                    break;
                case 0:
                    squares[i].innerHTML = '';
                    squares[i + 1].innerHTML = '';
                    break;
            }
        }
        if (divs[i+2].style.backgroundColor == "green" && divs[i+3].style.backgroundColor == "green" && divs[i+4].style.backgroundColor == "green" && divs[i+5].style.backgroundColor == "green"){
            let spotFive = squares[i+4].innerHTML
            let row = [spotFive];
            let filteredRow = row.filter(row => row != '')
            switch (filteredRow.length) {
                case 1:
                    squares[i +4].innerHTML = filteredRow[0];
                    break;
                case 0:
                    squares[i +4].innerHTML = '';
                    break;
            }   
        }
        if (divs[i+2].style.backgroundColor != "green" && divs[i+3].style.backgroundColor != "green" && divs[i+4].style.backgroundColor != "green" && divs[i+5].style.backgroundColor == "green"){
            let spotOne = squares[i].innerHTML
            let spotTwo = squares[i+1].innerHTML
            let spotThree = squares[i+2].innerHTML
            let row = [spotOne,spotTwo,spotThree];
            let filteredRow = row.filter(row => row != '')
            switch (filteredRow.length) {
                case 3:
                    squares[i ].innerHTML = filteredRow[0];
                    squares[i + 1].innerHTML = filteredRow[1];
                    squares[i + 2].innerHTML = filteredRow[2];
                    break;
                case 2:
                    squares[i].innerHTML = '';
                    squares[i + 1].innerHTML = filteredRow[0];
                    squares[i + 2].innerHTML = filteredRow[1];
                    break;
                case 1:
                    squares[i].innerHTML = '';
                    squares[i + 1].innerHTML = '';
                    squares[i + 2].innerHTML = filteredRow[0];
                    break;
                case 0:
                    squares[i].innerHTML = '';
                    squares[i + 1].innerHTML = '';
                    squares[i + 2].innerHTML = '';
                    break;
            }   
        }
        if (divs[i+2].style.backgroundColor != "green" && divs[i+3].style.backgroundColor != "green" && divs[i+4].style.backgroundColor == "green" && divs[i+5].style.backgroundColor == "green"){
            let spotOne = squares[i].innerHTML
            let spotTwo = squares[i+1].innerHTML
            let row = [spotOne,spotTwo];
            let filteredRow = row.filter(row => row != '')
            switch (filteredRow.length) {
                case 2:
                    squares[i].innerHTML = filteredRow[0];
                    squares[i + 1].innerHTML = filteredRow[1];
                    break;
                case 1:
                    squares[i].innerHTML = '';
                    squares[i + 1].innerHTML = filteredRow[0];
                    break;
                case 0:
                    squares[i].innerHTML = '';
                    squares[i + 1].innerHTML = '';
                    break;
            }   
        }
    }
}

function moveLeft(){
    leftNoGreenNoGray()
    leftWithGray()
    leftWithGreen()
}

function leftNoGreenNoGray() {
    for (let i=0; i < 30; i= i+5) {
        if (divs[i+3].style.backgroundColor != "grey" && divs[i+3].style.backgroundColor != "green" && divs[i+4].style.backgroundColor != "grey" && divs[i+4].style.backgroundColor != "green" && divs[i+5].style.backgroundColor != "grey" && divs[i+5].style.backgroundColor != "green" && divs[i+6].style.backgroundColor != "grey" && divs[i+6].style.backgroundColor != "green"){
            let spotOne = squares[i].innerHTML
            let spotTwo = squares[i+1].innerHTML
            let spotThree = squares[i+2].innerHTML
            let spotFour = squares[i+3].innerHTML
            let spotFive = squares[i+4].innerHTML
            let row = [spotOne,spotTwo,spotThree,spotFour,spotFive];
            let filteredRow = row.filter(row => row != '')
            switch (filteredRow.length){
                case 5:
                    squares[i].innerHTML = filteredRow[0];
                    squares[i +1].innerHTML = filteredRow[1];
                    squares[i +2].innerHTML = filteredRow[2];
                    squares[i +3].innerHTML = filteredRow[3];
                    squares[i +4].innerHTML = filteredRow[4];
                    break;
                case 4:
                    squares[i].innerHTML = filteredRow[0];
                    squares[i +1].innerHTML = filteredRow[1];
                    squares[i +2].innerHTML = filteredRow[2];
                    squares[i +3].innerHTML = filteredRow[3];
                    squares[i +4].innerHTML = '';
                    break;
                case 3:
                    squares[i].innerHTML = filteredRow[0];
                    squares[i +1].innerHTML = filteredRow[1];
                    squares[i +2].innerHTML = filteredRow[2];
                    squares[i +3].innerHTML = '';
                    squares[i +4].innerHTML = '';
                    break;
                case 2:
                    squares[i].innerHTML = filteredRow[0];
                    squares[i +1].innerHTML = filteredRow[1];
                    squares[i +2].innerHTML = '';
                    squares[i +3].innerHTML = '';
                    squares[i +4].innerHTML = '';
                    break;
                case 1:
                    squares[i].innerHTML = filteredRow[0];
                    squares[i +1].innerHTML = '';
                    squares[i +2].innerHTML = '';
                    squares[i +3].innerHTML = '';
                    squares[i +4].innerHTML = '';
                    break;
                case 0:
                    squares[i].innerHTML = '';
                    squares[i +1].innerHTML = '';
                    squares[i +2].innerHTML = '';
                    squares[i +3].innerHTML = '';
                    squares[i +4].innerHTML = '';
                    break;
            }
        }
    }
}

function leftWithGray(){
    for (let i = 0; i < width*height; i= i+5){
        if (divs[i+2].style.backgroundColor != "grey" && divs[i+3].style.backgroundColor != "grey" && divs[i+4].style.backgroundColor != "grey" && divs[i+5].style.backgroundColor != "grey"  && divs[i+6].style.backgroundColor == "grey" ){
            let spotOne = squares[i].innerHTML
            let spotTwo = squares[i+1].innerHTML
            let spotThree = squares[i+2].innerHTML
            let spotFour = squares[i+3].innerHTML
            let row = [spotOne,spotTwo,spotThree,spotFour];
            let filteredRow = row.filter(row => row != '')
            switch (filteredRow.length){
                case 4:
                    squares[i].innerHTML = filteredRow[0];
                    squares[i +1].innerHTML = filteredRow[1];
                    squares[i +2].innerHTML = filteredRow[2];
                    squares[i +3].innerHTML = filteredRow[3];
                    break;
                case 3:
                    squares[i].innerHTML = filteredRow[0];
                    squares[i +1].innerHTML = filteredRow[1];
                    squares[i +2].innerHTML = filteredRow[2];
                    squares[i +3].innerHTML = '';
                    break;
                case 2:
                    squares[i].innerHTML = filteredRow[0];
                    squares[i +1].innerHTML = filteredRow[1];
                    squares[i +2].innerHTML = '';
                    squares[i +3].innerHTML = '';
                    break;
                case 1:
                    squares[i].innerHTML = filteredRow[0];
                    squares[i +1].innerHTML = '';
                    squares[i +2].innerHTML = '';
                    squares[i +3].innerHTML = '';
                    break;
                case 0:
                    squares[i].innerHTML = '';
                    squares[i +1].innerHTML = '';
                    squares[i +2].innerHTML = '';
                    squares[i +3].innerHTML = '';
                    break;
            }
        }
        if (divs[i+2].style.backgroundColor != "grey" && divs[i+3].style.backgroundColor != "grey" && divs[i+4].style.backgroundColor != "grey" && divs[i+5].style.backgroundColor == "grey"){
            let spotOne = squares[i].innerHTML
            let spotTwo = squares[i+1].innerHTML
            let spotThree = squares[i+2].innerHTML
            let row = [spotOne,spotTwo,spotThree];
            let filteredRow = row.filter(row => row != '')
            switch (filteredRow.length){
                case 3:
                    squares[i].innerHTML = filteredRow[0];
                    squares[i +1].innerHTML = filteredRow[1];
                    squares[i +2].innerHTML = filteredRow[2];
                    break;
                case 2:
                    squares[i].innerHTML = filteredRow[0];
                    squares[i +1].innerHTML = filteredRow[1];
                    squares[i +2].innerHTML = '';
                    break;
                case 1:
                    squares[i].innerHTML = filteredRow[0];
                    squares[i +1].innerHTML = '';
                    squares[i +2].innerHTML = '';
                    break;
                case 0:
                    squares[i].innerHTML = '';
                    squares[i +1].innerHTML = '';
                    squares[i +2].innerHTML = '';
                    break;
            }
        }
        if (divs[i+2].style.backgroundColor != "grey" && divs[i+3].style.backgroundColor != "grey" && divs[i+4].style.backgroundColor == "grey" && divs[i+5].style.backgroundColor == "grey"){
            let spotOne = squares[i].innerHTML
            let spotTwo = squares[i+1].innerHTML
            let row = [spotOne,spotTwo];
            let filteredRow = row.filter(row => row != '')
            switch (filteredRow.length){
                case 2:
                    squares[i].innerHTML = filteredRow[0];
                    squares[i +1].innerHTML = filteredRow[1];
                    break;
                case 1:
                    squares[i].innerHTML = filteredRow[0];
                    squares[i +1].innerHTML = '';
                    break;
                case 0:
                    squares[i].innerHTML = '';
                    squares[i +1].innerHTML = '';
                    break;
            }
        }
        if (divs[i+2].style.backgroundColor != "grey" && divs[i+3].style.backgroundColor != "grey" && divs[i+4].style.backgroundColor == "grey" && divs[i+5].style.backgroundColor != "grey"  && divs[i+6].style.backgroundColor != "grey" ){
            let spotOne = squares[i].innerHTML
            let spotTwo = squares[i+1].innerHTML
            let row = [spotOne,spotTwo];
            let filteredRow = row.filter(row => row != '')
            switch (filteredRow.length){
                case 2:
                    squares[i].innerHTML = filteredRow[0];
                    squares[i +1].innerHTML = filteredRow[1];
                    break;
                case 1:
                    squares[i].innerHTML = filteredRow[0];
                    squares[i +1].innerHTML = '';
                    break;
                case 0:
                    squares[i].innerHTML = '';
                    squares[i +1].innerHTML = '';
                    break;
            }
            let spotFour = squares[i + 4].innerHTML
            let spotFive = squares[i + 5].innerHTML
            let row2 = [spotFour,spotFive];
            let filteredRow2 = row.filter(row => row != '')
            switch (filteredRow2.length){
                case 2:
                    squares[i + 4].innerHTML = filteredRow2[0];
                    squares[i + 5].innerHTML = filteredRow2[1];
                    break;
                case 1:
                    squares[i + 4].innerHTML = filteredRow2[0];
                    squares[i + 5].innerHTML = '';
                    break;
                case 0:
                    squares[i + 4].innerHTML = '';
                    squares[i + 5].innerHTML = '';
                    break;
            }
        }
        if (divs[i+2].style.backgroundColor == "grey" && divs[i+3].style.backgroundColor == "grey" && divs[i+4].style.backgroundColor == "grey" && divs[i+5].style.backgroundColor == "grey"){  
            let spotOne = squares[i].innerHTML
            let row = [spotOne];
            let filteredRow = row.filter(row => row != '')
            switch (filteredRow.length){
                case 1:
                    squares[i].innerHTML = filteredRow[0];
                    squares[i +1].innerHTML = '';
                    break;
                case 0:
                    squares[i].innerHTML = '';
                    squares[i +1].innerHTML = '';
                    break;
            }
        }
        if (divs[i+3].style.backgroundColor == "grey" && divs[i+4].style.backgroundColor != "grey" && divs[i+5].style.backgroundColor != "grey"  && divs[i+6].style.backgroundColor != "grey" ){
            let spotTwo = squares[i+2].innerHTML
            let spotThree = squares[i+3].innerHTML
            let spotFour = squares[i+4].innerHTML
            let row = [spotTwo,spotThree,spotFour];
            let filteredRow = row.filter(row => row != '')
            switch (filteredRow.length){
                case 3:
                    squares[i + 2].innerHTML = filteredRow[0];
                    squares[i + 3].innerHTML = filteredRow[1];
                    squares[i + 4].innerHTML = filteredRow[2];
                    break;
                case 2:
                    squares[i + 2].innerHTML = filteredRow[0];
                    squares[i + 3].innerHTML = filteredRow[1];
                    squares[i + 4].innerHTML = '';
                    break;
                case 1:
                    squares[i + 2].innerHTML = filteredRow[0];
                    squares[i + 3].innerHTML = '';
                    squares[i + 4].innerHTML = '';
                    break;
                case 0:
                    squares[i + 2].innerHTML = '';
                    squares[i + 3].innerHTML = '';
                    squares[i + 4].innerHTML = '';
                    break;
            }
        }
        if (divs[i+2].style.backgroundColor == "grey" && divs[i+3].style.backgroundColor == "grey" && divs[i+4].style.backgroundColor != "grey" && divs[i+5].style.backgroundColor != "grey" && divs[i+6].style.backgroundColor == "grey"){
            let spotOne = squares[i + 2].innerHTML
            let spotTwo = squares[i + 3].innerHTML
            let row = [spotOne,spotTwo];
            let filteredRow = row.filter(row => row != '')
            switch (filteredRow.length){
                case 2:
                    squares[i + 2].innerHTML = filteredRow[0];
                    squares[i + 3].innerHTML = filteredRow[1];
                    break;
                case 1:
                    squares[i + 2].innerHTML = filteredRow[0];
                    squares[i + 3].innerHTML = '';
                    break;
                case 0:
                    squares[i + 2].innerHTML = '';
                    squares[i + 3].innerHTML = '';
                    break;
            }
        }
    }
}

function leftWithGreen(){
    for (let i = 0; i < width*height; i= i+5){
        if (divs[i+2].style.backgroundColor != "green" && divs[i+3].style.backgroundColor != "green" && divs[i+4].style.backgroundColor != "green" && divs[i+5].style.backgroundColor != "green"  && divs[i+6].style.backgroundColor == "green" ){
            let spotOne = squares[i].innerHTML
            let spotTwo = squares[i+1].innerHTML
            let spotThree = squares[i+2].innerHTML
            let spotFour = squares[i+3].innerHTML
            let row = [spotOne,spotTwo,spotThree,spotFour];
            let filteredRow = row.filter(row => row != '')
            switch (filteredRow.length){
                case 4:
                    squares[i].innerHTML = filteredRow[0];
                    squares[i +1].innerHTML = filteredRow[1];
                    squares[i +2].innerHTML = filteredRow[2];
                    squares[i +3].innerHTML = filteredRow[3];
                    break;
                case 3:
                    squares[i].innerHTML = filteredRow[0];
                    squares[i +1].innerHTML = filteredRow[1];
                    squares[i +2].innerHTML = filteredRow[2];
                    squares[i +3].innerHTML = '';
                    break;
                case 2:
                    squares[i].innerHTML = filteredRow[0];
                    squares[i +1].innerHTML = filteredRow[1];
                    squares[i +2].innerHTML = '';
                    squares[i +3].innerHTML = '';
                    break;
                case 1:
                    squares[i].innerHTML = filteredRow[0];
                    squares[i +1].innerHTML = '';
                    squares[i +2].innerHTML = '';
                    squares[i +3].innerHTML = '';
                    break;
                case 0:
                    squares[i].innerHTML = '';
                    squares[i +1].innerHTML = '';
                    squares[i +2].innerHTML = '';
                    squares[i +3].innerHTML = '';
                    break;
            }
        }
        if (divs[i+2].style.backgroundColor != "green" && divs[i+3].style.backgroundColor != "green" && divs[i+4].style.backgroundColor != "green" && divs[i+5].style.backgroundColor == "green"){
            let spotOne = squares[i].innerHTML
            let spotTwo = squares[i+1].innerHTML
            let spotThree = squares[i+2].innerHTML
            let row = [spotOne,spotTwo,spotThree];
            let filteredRow = row.filter(row => row != '')
            switch (filteredRow.length){
                case 3:
                    squares[i].innerHTML = filteredRow[0];
                    squares[i +1].innerHTML = filteredRow[1];
                    squares[i +2].innerHTML = filteredRow[2];
                    break;
                case 2:
                    squares[i].innerHTML = filteredRow[0];
                    squares[i +1].innerHTML = filteredRow[1];
                    squares[i +2].innerHTML = '';
                    break;
                case 1:
                    squares[i].innerHTML = filteredRow[0];
                    squares[i +1].innerHTML = '';
                    squares[i +2].innerHTML = '';
                    break;
                case 0:
                    squares[i].innerHTML = '';
                    squares[i +1].innerHTML = '';
                    squares[i +2].innerHTML = '';
                    break;
            }
        }
        if (divs[i+2].style.backgroundColor != "green" && divs[i+3].style.backgroundColor != "green" && divs[i+4].style.backgroundColor == "green" && divs[i+5].style.backgroundColor == "green"){
            let spotOne = squares[i].innerHTML
            let spotTwo = squares[i+1].innerHTML
            let row = [spotOne,spotTwo];
            let filteredRow = row.filter(row => row != '')
            switch (filteredRow.length){
                case 2:
                    squares[i].innerHTML = filteredRow[0];
                    squares[i +1].innerHTML = filteredRow[1];
                    break;
                case 1:
                    squares[i].innerHTML = filteredRow[0];
                    squares[i +1].innerHTML = '';
                    break;
                case 0:
                    squares[i].innerHTML = '';
                    squares[i +1].innerHTML = '';
                    break;
            }
        }
        if (divs[i+2].style.backgroundColor != "green" && divs[i+3].style.backgroundColor != "green" && divs[i+4].style.backgroundColor == "green" && divs[i+5].style.backgroundColor != "green"  && divs[i+6].style.backgroundColor != "green" ){
            let spotOne = squares[i].innerHTML
            let spotTwo = squares[i+1].innerHTML
            let row = [spotOne,spotTwo];
            let filteredRow = row.filter(row => row != '')
            switch (filteredRow.length){
                case 2:
                    squares[i].innerHTML = filteredRow[0];
                    squares[i +1].innerHTML = filteredRow[1];
                    break;
                case 1:
                    squares[i].innerHTML = filteredRow[0];
                    squares[i +1].innerHTML = '';
                    break;
                case 0:
                    squares[i].innerHTML = '';
                    squares[i +1].innerHTML = '';
                    break;
            }
            let spotFour = squares[i + 4].innerHTML
            let spotFive = squares[i + 5].innerHTML
            let row2 = [spotFour,spotFive];
            let filteredRow2 = row.filter(row => row != '')
            switch (filteredRow2.length){
                case 2:
                    squares[i + 4].innerHTML = filteredRow2[0];
                    squares[i + 5].innerHTML = filteredRow2[1];
                    break;
                case 1:
                    squares[i + 4].innerHTML = filteredRow2[0];
                    squares[i + 5].innerHTML = '';
                    break;
                case 0:
                    squares[i + 4].innerHTML = '';
                    squares[i + 5].innerHTML = '';
                    break;
            }
        }
        if (divs[i+2].style.backgroundColor == "green" && divs[i+3].style.backgroundColor == "green" && divs[i+4].style.backgroundColor == "green" && divs[i+5].style.backgroundColor == "green"){  
            let spotOne = squares[i].innerHTML
            let row = [spotOne];
            let filteredRow = row.filter(row => row != '')
            switch (filteredRow.length){
                case 1:
                    squares[i].innerHTML = filteredRow[0];
                    squares[i +1].innerHTML = '';
                    break;
                case 0:
                    squares[i].innerHTML = '';
                    squares[i +1].innerHTML = '';
                    break;
            }
        }
        if (divs[i+3].style.backgroundColor == "green" && divs[i+4].style.backgroundColor != "green" && divs[i+5].style.backgroundColor != "green"  && divs[i+6].style.backgroundColor != "green" ){
            let spotTwo = squares[i+2].innerHTML
            let spotThree = squares[i+3].innerHTML
            let spotFour = squares[i+4].innerHTML
            let row = [spotTwo,spotThree,spotFour];
            let filteredRow = row.filter(row => row != '')
            switch (filteredRow.length){
                case 3:
                    squares[i + 2].innerHTML = filteredRow[0];
                    squares[i + 3].innerHTML = filteredRow[1];
                    squares[i + 4].innerHTML = filteredRow[2];
                    break;
                case 2:
                    squares[i + 2].innerHTML = filteredRow[0];
                    squares[i + 3].innerHTML = filteredRow[1];
                    squares[i + 4].innerHTML = '';
                    break;
                case 1:
                    squares[i + 2].innerHTML = filteredRow[0];
                    squares[i + 3].innerHTML = '';
                    squares[i + 4].innerHTML = '';
                    break;
                case 0:
                    squares[i + 2].innerHTML = '';
                    squares[i + 3].innerHTML = '';
                    squares[i + 4].innerHTML = '';
                    break;
            }
        }
        if (divs[i+2].style.backgroundColor == "green" && divs[i+3].style.backgroundColor == "green" && divs[i+4].style.backgroundColor != "green" && divs[i+5].style.backgroundColor != "green" && divs[i+6].style.backgroundColor == "green"){
            let spotOne = squares[i + 2].innerHTML
            let spotTwo = squares[i + 3].innerHTML
            let row = [spotOne,spotTwo];
            let filteredRow = row.filter(row => row != '')
            switch (filteredRow.length){
                case 2:
                    squares[i + 2].innerHTML = filteredRow[0];
                    squares[i + 3].innerHTML = filteredRow[1];
                    break;
                case 1:
                    squares[i + 2].innerHTML = filteredRow[0];
                    squares[i + 3].innerHTML = '';
                    break;
                case 0:
                    squares[i + 2].innerHTML = '';
                    squares[i + 3].innerHTML = '';
                    break;
            }
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
        let child = divs[i];
        let row = [spotOne,spotTwo,spotThree,spotFour,spotFive,spotSix];
        let filteredRow = row.filter(row => row != '')  
        switch (filteredRow.length){
            case 6:
                squares[i].innerHTML = filteredRow[0];
                squares[i +5].innerHTML = filteredRow[1];
                squares[i +10].innerHTML = filteredRow[2];
                squares[i +15].innerHTML = filteredRow[3];
                squares[i +20].innerHTML = filteredRow[4];
                squares[i+25].innerHTML = filteredRow[5];
                break;
            case 5:
                squares[i].innerHTML = filteredRow[0];
                squares[i +5].innerHTML = filteredRow[1];
                squares[i +10].innerHTML = filteredRow[2];
                squares[i +15].innerHTML = filteredRow[3];
                squares[i +20].innerHTML = filteredRow[4];
                squares[i+25].innerHTML = '';
                break
            case 4:
                squares[i].innerHTML = filteredRow[0];
                squares[i +5].innerHTML = filteredRow[1];
                squares[i +10].innerHTML = filteredRow[2];
                squares[i +15].innerHTML = filteredRow[3];
                squares[i +20].innerHTML = '';
                squares[i+25].innerHTML = '';
                break;
            case 3:
                squares[i].innerHTML = filteredRow[0];
                squares[i +5].innerHTML = filteredRow[1];
                squares[i +10].innerHTML = filteredRow[2];
                squares[i +15].innerHTML = '';
                squares[i +20].innerHTML = '';
                squares[i+25].innerHTML = '';
                break;
            case 2:
                squares[i].innerHTML = filteredRow[0];
                squares[i +5].innerHTML = filteredRow[1];
                squares[i +10].innerHTML = '';
                squares[i +15].innerHTML = '';
                squares[i +20].innerHTML = '';
                squares[i+25].innerHTML = '';
                break;
            case 1:
                squares[i].innerHTML = filteredRow[0];
                squares[i +5].innerHTML = '';
                squares[i +10].innerHTML = '';
                squares[i +15].innerHTML = '';
                squares[i +20].innerHTML = '';
                squares[i+25].innerHTML = '';
                break;
            case 0:
                squares[i].innerHTML = '';
                squares[i +5].innerHTML = '';
                squares[i +10].innerHTML = '';
                squares[i +15].innerHTML = '';
                squares[i +20].innerHTML = '';
                squares[i+25].innerHTML = '';
                break;
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
        switch (filteredRow.length){
            case 6:
                squares[i].innerHTML = filteredRow[0];
                squares[i +5].innerHTML = filteredRow[1];
                squares[i +10].innerHTML = filteredRow[2];
                squares[i +15].innerHTML = filteredRow[3];
                squares[i +20].innerHTML = filteredRow[4];
                squares[i+25].innerHTML = filteredRow[5];
                break;
            case 5:
                squares[i].innerHTML = '';
                squares[i +5].innerHTML = filteredRow[0];
                squares[i+10].innerHTML = filteredRow[1];
                squares[i+15].innerHTML = filteredRow[2];
                squares[i +20].innerHTML = filteredRow[3];
                squares[i +25].innerHTML = filteredRow[4];
                break;
            case 4:
                squares[i].innerHTML = '';
                squares[i +5].innerHTML = '';
                squares[i+10].innerHTML = filteredRow[0];
                squares[i+15].innerHTML = filteredRow[1];
                squares[i +20].innerHTML = filteredRow[2];
                squares[i +25].innerHTML = filteredRow[3];
                break;
            case 3:
                squares[i].innerHTML = '';
                squares[i +5].innerHTML = '';
                squares[i+10].innerHTML = '';
                squares[i+15].innerHTML = filteredRow[0];
                squares[i +20].innerHTML = filteredRow[1];
                squares[i +25].innerHTML = filteredRow[2];
                break;
            case 2:
                squares[i].innerHTML = '';
                squares[i +5].innerHTML = '';
                squares[i +10].innerHTML = '';
                squares[i+15].innerHTML = '';
                squares[i+20].innerHTML = filteredRow[0];
                squares[i +25].innerHTML = filteredRow[1];
                break;
            case 1:
                squares[i].innerHTML = '';
                squares[i +5].innerHTML = '';
                squares[i +10].innerHTML = '';
                squares[i +15].innerHTML = '';
                squares[i +20].innerHTML = '';
                squares[i+25].innerHTML = filteredRow[0];
                break;
            case 0:
                squares[i].innerHTML = '';
                squares[i +5].innerHTML = '';
                squares[i +10].innerHTML = '';
                squares[i +15].innerHTML = '';
                squares[i +20].innerHTML = '';
                squares[i+25].innerHTML = '';
                break;
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

function addLetter(letter) {  
        for (let i = 0; i < width * height; i++) {
           if (squares[i].innerHTML == '-'){
                squares[i].innerHTML = letter
                let child = divs[i + 2];
                child.style.backgroundColor = "#fee08b";
            }
        }
    }
    
    function addLetterWrong(letter) {  
            for (let i = 0; i < width * height; i++) {
               if (squares[i].innerHTML == '-'){
                    squares[i].innerHTML = letter
                    let child = divs[i + 2];
                    child.style.backgroundColor = "grey";
                }
            }
        }

    function addLetterRight(letter) { 
            for (let i = 0; i < width * height; i++) {
               if (squares[i].innerHTML == '-'){
                    squares[i].innerHTML = letter
                    let child = divs[i + 2];
                    child.style.backgroundColor = "green";
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

    function checkLetter(letter) {
        for (let i = 0; i < word.length; i++){
            if (letter == word[i] && (squares[i].innerHTML == '-' || squares[i+5].innerHTML == '-' || squares[i+10].innerHTML == '-' ||  squares[i+15].innerHTML == '-' ||  squares[i + 20].innerHTML == '-' ||  squares[i+25].innerHTML == '-')){
                addLetterRight(letter)
            }
        }
        for (let i = 0; i < word.length; i++){
            if (letter == word[i]){
                addLetter(letter)
            }
        }
        for (let i = 0; i < word.length; i++){
            if (letter != word[i]){
                addLetterWrong(letter)
            }
        }
    }
    
    function checkBoard(){
    for (let i = 0; i < width*height; i++){      
        for (let j = 0; j < word.length; j++){
                let child = divs[i + 2];
                if (squares[i].innerHTML != word[j] ){
                    child.style.backgroundColor = "grey";
                }
            }
        }
        
        for (let i = 0; i < width*height; i++){
            for (let j = 0; j < word.length; j++){
                if (squares[i].innerHTML == word[j]){
                    let child = divs[i + 2];
                    child.style.backgroundColor = "#fee08b";
                }
            }
        }
        for (let i = 0; i < width*height; i++){
            for (let j = 0; j < word.length; j++){
                if (squares[i].innerHTML == word[j] && (i == j || i == j+5 || i == j+10 || i== j+15 || i == j+20 || i == j + 25)){
                    let child = divs[i + 2];
                    child.style.backgroundColor = "green";
                }
            }
        }

        for (let i = 0; i < width*height; i++){
            if (squares[i].innerHTML == ''){
                let child = divs[i + 2];
                child.style.backgroundColor = "rgb(248, 196, 245)";
            }
        }
    }

   function openPopup(){
        let popup = document.getElementById("popup");
        popup.classList.add("open-popup");
    }
    function CorrectWord(){
        if(divs[2].style.backgroundColor == "green" && divs[3].style.backgroundColor == "green" && divs[4].style.backgroundColor == "green" && divs[5].style.backgroundColor == "green" && divs[6].style.backgroundColor == "green" ){
             openPopup(); 
        }

     }
 
    
      document.onkeydown = function(e) {
        e.preventDefault();
        switch (e.keyCode) {
            case 13: //enter
           for(let i = 0; i < width*height; i++){
             if(squares[i].innerHTML == "-"){
                 return; 
             }
           }
           generate(); 
                break;
            case 37: //left arrow
                moveLeft();
                checkBoard();
               // greyBoxOnly();
                break;
            case 38: //up arrow
                moveUp();
                checkBoard();
              //  greyBoxOnly(); 
                break;
            case 39: //right arrow
                moveRight();
                checkBoard();           
              //  greyBoxOnly();
                break;
           case 40: //down arrow
                moveDown();
                checkBoard();
              //  greyBoxOnly();
                break;
            case 65: //letter a
                checkLetter('A');  
                break; 
            case 66: 
                checkLetter('B');  
                break;  
            case 67: 
                checkLetter('C');  
                break;  
             case 68: 
                checkLetter('D');  
                break;
             case 69: 
                checkLetter('E');  
                break;  
            case 70: 
                checkLetter('F');  
                break;  
            case 71: 
                checkLetter('G');  
                break;   
            case 72: 
                checkLetter('H');  
                break;   
            case 73: 
                checkLetter('I');  
                break;  
            case 74:
                checkLetter('J'); 
                break; 
            case 75: 
                checkLetter('K');  
                break;  
            case 76: 
                checkLetter('L');  
                break;  
            case 77: 
                checkLetter('M');  
                break;  
            case 78: 
                checkLetter('N');  
                break;  
            case 79: 
                checkLetter('O');  
                break;  
             case 80: 
                checkLetter('P');  
                break;  
            case 81: 
                checkLetter('Q');  
                break;  
            case 82: 
                checkLetter('R');  
                break; 
            case 83: 
                checkLetter('S');  
                break;  
            case 84: 
                checkLetter('T');  
                break;
            case 85: 
                checkLetter('U');  
                break;   
            case 86: 
                checkLetter('V');  
                break; 
            case 87: 
                checkLetter('W');  
                break; 
            case 88: 
                checkLetter('X');  
                break; 
            case 89: 
                checkLetter('Y');  
                break; 
            case 90: 
                checkLetter('Z');  
                break; 
          case 8:
                deleteLetter(); 
                break;  
                
        }
        CorrectWord(); 
    }

})
