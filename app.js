
   const container = document.querySelector('.container')   
   const grid = document.createElement('div')
    grid.classList.add('grid')
   let primary_color  = getComputedStyle(document.body).getPropertyValue('--primary-color')
   const styleSheet = document.styleSheets[0]; 
   width = 28
   score = 0
   squares = []
   const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
  ]
  // 0 - pac-dot
  // 1 - wall
  // 2 - ghost-lair
  // 3 - power-pellet
  // 4 - empty

function buildBoard(){
  container.appendChild(grid)
  for(let i=0;i<layout.length;i++){
    const square = document.createElement('div')
    grid.appendChild(square)
    squares.push(square)
    switch(layout[i]){
      case 0 :
        square.classList.add('pac-dot')
        break    
      case 1 :
        square.classList.add('wall')
        break
      case 2 :
        square.classList.add('ghost-lair')
        break
      case 3 :
        square.classList.add('power-pellet')
        break
      case 4 :
        square.classList.add('empty')
        break

    }
  }

}
buildBoard()

let pacmanCurrentIndex = 490



squares[pacmanCurrentIndex].classList.add('pacmanStopped')

function movePacman(e) {
  e.preventDefault()
  squares[pacmanCurrentIndex].classList.remove('pacmanMoving', 'pacmanStopped');
  
 
  switch(e.keyCode) {
    //left
 
    case 37:
      utilsCss(180)
      
      moveLeft()
      squares[pacmanCurrentIndex].classList.add('pacmanMoving')
      break
      //up
    case 38:
      utilsCss(-90)
      moveUp()
      break
      //right
    case 39:
      utilsCss(0)
      moveRight()
      break
      //down
    case 40:
      utilsCss(90)
      moveDown()
      break
  }

 
}
let moveLeftInterval, moveRightInterval, moveUpInterval, moveDownInterval;
const moveLeft = ()=>{
 
  if(
    pacmanCurrentIndex % width !== 0 &&
    !squares[pacmanCurrentIndex -1].classList.contains('wall') &&
    !squares[pacmanCurrentIndex -1].classList.contains('ghost-lair')
    ){

    squares[pacmanCurrentIndex  ].classList.remove('pacmanMoving', 'pacmanStopped');
      pacmanCurrentIndex -= 1
      pacDotEaten()
      powerPelletEaten()
      checkForGameOver()
      checkForWin()
      squares[pacmanCurrentIndex].classList.add('pacmanMoving')
    }
    else{
      clearInterval(moveUpInterval);
      clearInterval(moveDownInterval);
      clearInterval(moveLeftInterval);
      clearInterval(moveRightInterval);
      squares[pacmanCurrentIndex].classList.add('pacmanStopped')
    }
 
  if (squares[pacmanCurrentIndex -1] === squares[363]) {
    pacmanCurrentIndex = 391
  }
  clearInterval(moveUpInterval);
  clearInterval(moveDownInterval);
  clearInterval(moveLeftInterval);
  clearInterval(moveRightInterval);
  
  // Inicie o novo intervalo de movimento contínuo
  moveLeftInterval = setInterval(moveLeft, 300);
  
}

const moveRight = ()=>{
  if(
    pacmanCurrentIndex % width < width - 1 &&
    !squares[pacmanCurrentIndex +1].classList.contains('wall') &&
    !squares[pacmanCurrentIndex +1].classList.contains('ghost-lair')
  ){
  
  squares[pacmanCurrentIndex  ].classList.remove('pacmanMoving', 'pacmanStopped');
  pacmanCurrentIndex += 1
  pacDotEaten()
  powerPelletEaten()
  checkForGameOver()
  checkForWin()
  squares[pacmanCurrentIndex].classList.add('pacmanMoving')
  }
  else{
    clearInterval(moveUpInterval);
    clearInterval(moveDownInterval);
    clearInterval(moveLeftInterval);
    clearInterval(moveRightInterval);
    squares[pacmanCurrentIndex].classList.add('pacmanStopped')
  }
  if (squares[pacmanCurrentIndex +1] === squares[392]) {
    pacmanCurrentIndex = 364
  }
    clearInterval(moveUpInterval);
    clearInterval(moveDownInterval);
    clearInterval(moveLeftInterval);
    clearInterval(moveRightInterval);
  
  // Inicie o novo intervalo de movimento contínuo
  moveRightInterval = setInterval(moveRight, 300);
}

  const moveUp = ()=>{
    if(
      pacmanCurrentIndex - width >= 0 &&
      !squares[pacmanCurrentIndex -width].classList.contains('wall') &&
      !squares[pacmanCurrentIndex -width].classList.contains('ghost-lair')
      ) 
      {
        squares[pacmanCurrentIndex  ].classList.remove('pacmanMoving', 'pacmanStopped');
        pacmanCurrentIndex -= width
        pacDotEaten()
        powerPelletEaten()
        checkForGameOver()
        checkForWin()
        squares[pacmanCurrentIndex].classList.add('pacmanMoving')
        clearInterval(moveUpInterval);
        clearInterval(moveDownInterval);
        clearInterval(moveLeftInterval);
        clearInterval(moveRightInterval);
      }
      else{
        clearInterval(moveUpInterval);
        clearInterval(moveDownInterval);
        clearInterval(moveLeftInterval);
        clearInterval(moveRightInterval);
        squares[pacmanCurrentIndex].classList.add('pacmanStopped')
      }
    
      
      // Inicie o novo intervalo de movimento contínuo
      moveUpInterval = setInterval(moveUp, 300);  
    }
  
  const moveDown = ()=>{
    if (
      pacmanCurrentIndex + width < width * width &&
      !squares[pacmanCurrentIndex +width].classList.contains('wall') &&
      !squares[pacmanCurrentIndex +width].classList.contains('ghost-lair')
    ){
      squares[pacmanCurrentIndex  ].classList.remove('pacmanMoving', 'pacmanStopped');
      pacmanCurrentIndex += width
      pacDotEaten()
      powerPelletEaten()
      checkForGameOver()
      checkForWin()
      squares[pacmanCurrentIndex].classList.add('pacmanMoving')
      clearInterval(moveUpInterval);
      clearInterval(moveDownInterval);
      clearInterval(moveLeftInterval);
      clearInterval(moveRightInterval);
      moveUpInterval = setInterval(moveDown, 300); 
    }
    else{
      clearInterval(moveUpInterval);
      clearInterval(moveDownInterval);
      clearInterval(moveLeftInterval);
      clearInterval(moveRightInterval);
      squares[pacmanCurrentIndex].classList.add('pacmanStopped')
    }
   

  }
  
 
document.addEventListener('keyup', movePacman)

// what happens when you eat a pac-dot
function pacDotEaten() {
  if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
    score++
    createScore()
    squares[pacmanCurrentIndex].classList.remove('pac-dot')
  }
}
//create ghosts using Constructors
class Ghost {
  constructor(className, startIndex, speed) {
    this.className = className
    this.startIndex = startIndex
    this.speed = speed
    this.currentIndex = startIndex
    this.isScared = false
    this.timerId = NaN
  }
}

//all my ghosts
ghosts = [
  new Ghost('blinky', 348, 250),
  new Ghost('pinky', 376, 400),
  new Ghost('inky', 351, 300),
  new Ghost('clyde', 379, 500)
  ]

//what happens when you eat a power-pellet
function powerPelletEaten() {
  if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
    score +=10
    createScore()
    ghosts.forEach(ghost => ghost.isScared = true)
    setTimeout(unScareGhosts, 10000)
    squares[pacmanCurrentIndex].classList.remove('power-pellet')
  }
}

//make the ghosts stop flashing
function unScareGhosts() {
  ghosts.forEach(ghost => ghost.isScared = false)
}


//draw my ghosts onto the grid
ghosts.forEach(ghost => {
  squares[ghost.currentIndex].classList.add(ghost.className)
  squares[ghost.currentIndex].classList.add('ghost')
  })

//move the Ghosts randomly
ghosts.forEach(ghost => moveGhost(ghost))

function moveGhost(ghost) {
  const directions =  [-1, +1, width, -width]
  let direction = directions[Math.floor(Math.random() * directions.length)]

  ghost.timerId = setInterval(function() {
    //if the next squre your ghost is going to go to does not have a ghost and does not have a wall
    if  (!squares[ghost.currentIndex + direction].classList.contains('ghost') &&
      !squares[ghost.currentIndex + direction].classList.contains('wall') ) {
        //remove the ghosts classes
        squares[ghost.currentIndex].classList.remove(ghost.className)
        squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')
        //move into that space
        ghost.currentIndex += direction
        squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
    //else find a new random direction ot go in
    } else direction = directions[Math.floor(Math.random() * directions.length)]

    //if the ghost is currently scared
    if (ghost.isScared) {
      squares[ghost.currentIndex].classList.add('scared-ghost')
    }

    //if the ghost is currently scared and pacman is on it
    if(ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')) {
      squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
      ghost.currentIndex = ghost.startIndex
      score +=100
      createScore()
      squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
    }
  checkForGameOver()
  }, ghost.speed)
}
 let scoreDisplay, scoreTitle, spanScore
function createScore() { 
  if (!container.querySelector('.score')) {
    scoreDisplay = document.createElement('div')
    scoreDisplay.classList.add('score')
    scoreTitle = document.createElement('span')
    spanScore = document.createElement('span')
    scoreTitle.innerText = 'Score: '   
    scoreDisplay.appendChild(scoreTitle)  
    scoreDisplay.appendChild(spanScore) 
    container.appendChild(scoreDisplay)

  }
  scoreTitle.innerText = 'Score: '
  spanScore.innerText = score;
 
  
 // Atualizando o valor do placar no spanScore
}

//check for a game over
function checkForGameOver() {
  if (squares[pacmanCurrentIndex].classList.contains('ghost') &&
    !squares[pacmanCurrentIndex].classList.contains('scared-ghost')) {
    ghosts.forEach(ghost => clearInterval(ghost.timerId))
    document.removeEventListener('keyup', movePacman)
    setTimeout(function(){ container.innerHTML = `<h2>Game Over</h2><button onclick="location.reload();">Restart</button>` }, 500)
  }
}

//check for a win - more is when this score is reached
function checkForWin() {
  if (score === 274) {
    ghosts.forEach(ghost => clearInterval(ghost.timerId))
    document.removeEventListener('keyup', movePacman)
    setTimeout(function(){ alert("You have WON!"); }, 500)
  }
}
function utilsCss(rotate) {
  const styleSheet = document.styleSheets[0]; // Pega a primeira folha de estilo, ajuste se necessário
  const rule = `.pacmanMoving { transform: rotate(${rotate}deg); }`;
  const ruleIndex = styleSheet.insertRule(rule, styleSheet.cssRules.length);
}

