//2:07
const container = document.querySelector('.container');
const grid = document.createElement('div');
grid.classList.add('grid')
container.appendChild(grid);
const width = 28
let score = 0
let squares = []  
    
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

function createBoard(){
  for (let i = 0; i < layout.length; i++){
    const square = document.createElement('div')
    grid.appendChild(square)
    squares.push(square)
    switch (layout[i]){
      case 0:
        squares[i].classList.add('pac-dot')
        break
      case 1:
        squares[i].classList.add('wall')
        break
      case 2:
        squares[i].classList.add('ghost-lair')
        break
      case 3:
        squares[i].classList.add('power-pellet')
        break
        case 4:
        squares[i].classList.add('empty')
        break



    }

  }

}
createBoard()
let pacmanCurrentIndex = 490
squares[pacmanCurrentIndex].classList.add('pacmanStopped')
let pacmanMoving = document.querySelector('.pacmanMoving')

function movePacman(e){
  e.preventDefault()
  squares[pacmanCurrentIndex].classList.remove('pacmanStopped')
  squares[pacmanCurrentIndex].classList.remove('pacmanMoving')
  switch(e.keyCode) {
    //left
    case 37:
      
      if(
        pacmanCurrentIndex % width !== 0 &&
        !squares[pacmanCurrentIndex -1].classList.contains('wall') &&
        !squares[pacmanCurrentIndex -1].classList.contains('ghost-lair')
        )
      pacmanCurrentIndex -= 1
      if (squares[pacmanCurrentIndex -1] === squares[363]) {
        pacmanCurrentIndex = 391
      }
      break
      //up
      case 38:
        if(
          pacmanCurrentIndex - width >= 0 &&
          !squares[pacmanCurrentIndex -width].classList.contains('wall') &&
          !squares[pacmanCurrentIndex -width].classList.contains('ghost-lair')
          ) 
        pacmanCurrentIndex -= width
        break
        //right
        case 39:
          if(
            pacmanCurrentIndex % width < width - 1 &&
            !squares[pacmanCurrentIndex +1].classList.contains('wall') &&
            !squares[pacmanCurrentIndex +1].classList.contains('ghost-lair')
          )
          pacmanCurrentIndex += 1
          if (squares[pacmanCurrentIndex +1] === squares[392]) {
            pacmanCurrentIndex = 364
          }
          break
          //down
          case 40:
            if (
              pacmanCurrentIndex + width < width * width &&
              !squares[pacmanCurrentIndex +width].classList.contains('wall') &&
              !squares[pacmanCurrentIndex +width].classList.contains('ghost-lair')
            )
            pacmanCurrentIndex += width
            break

  }
  pacDotEaten()
  powerfulPelletEaten()
  squares[pacmanCurrentIndex].classList.add('pacmanMoving')
}
document.addEventListener('keydown', movePacman)

function pacDotEaten(){
  if(squares[pacmanCurrentIndex].classList.contains('pac-dot')){
    squares[pacmanCurrentIndex].classList.remove('pac-dot')
    score+=10
    createScore()
  }
}
function powerfulPelletEaten(){
  if(squares[pacmanCurrentIndex].classList.contains('power-pellet')){
    squares[pacmanCurrentIndex].classList.remove('power-pellet')
    score+=50
    createScore()
  }
}
class Ghost{
  constructor(className, startIndex, speed){
    this.className = className
    this.startIndex = startIndex
    this.speed = speed
    this.currentIndex = startIndex
    this.timerId = NaN
  }
}
const ghosts = [
  new Ghost('blinky', 348, 250),
  new Ghost('pinky', 376, 400),
  new Ghost('inky', 351, 300),
  new Ghost('clyde', 379, 500)

]
ghosts.forEach(ghost => {
  squares[ghost.currentIndex].classList.add(ghost.className)
  squares[ghost.currentIndex].classList.add('ghost')
})
function unScaredGhost(){
  ghosts.forEach(ghost=> ghost.isScared = false)
  
}
ghosts.forEach(ghost => moveGhost(ghost))
function moveGhost(ghost){
  const directions = [-1, +1, width, -width]
  let direction = directions[Math.floor(Math.random() * directions.length)]
  ghost.timerId = setInterval(() => {
    if(!squares[ghost.currentIndex + direction].classList.contains('wall') && !squares[ghost.currentIndex + direction].classList.contains('ghost') && !squares[ghost.currentIndex + direction].classList.contains('ghost-lair')){

      squares[ghost.currentIndex].classList.remove(ghost.className)
      squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')
      ghost.currentIndex += direction
      squares[ghost.currentIndex].classList.add(ghost.className)
      squares[ghost.currentIndex].classList.add('ghost')

    } else direction = directions[Math.floor(Math.random() * directions.length)]
      if(ghost.isScared){
        squares[ghost.currentIndex].classList.add('scared-ghost')
      }
    
    if(ghost.isScared && scares[ghost.currentIndex].classList.contains('pacmanMoving')){
      squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
      ghost.currentIndex = ghost.startIndex
      score+=100
      createScore()
      squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')}
      
    
  },ghost.speed);
}
let scoreGameText
function createScore(){
  if(!document.querySelector('.scoreGame')){
    
  const scoreGame = document.createElement('div')
  scoreGame.classList.add('scoreGame')
  scoreGameText = document.createElement('p')
  scoreGame.appendChild(scoreGameText)
  container.appendChild(scoreGame)
  }
  scoreGameText.textContent = score
}