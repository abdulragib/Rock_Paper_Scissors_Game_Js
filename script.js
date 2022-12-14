/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
  let turn = document.querySelectorAll('.rpsButton')
  let hands=document.getElementById('hands')
  let showScore=document.getElementById('player-score')
  let result=document.getElementById('result')

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice(moves) {
 return moves[Math.floor(Math.random() * moves.length)]
}


// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  
   let score
  // All situations where human draws, set `score` to 0
  if (playerChoice === computerChoice) {
    score = 0

  
  } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
    score = 1

  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    score = 1

  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    score = 1

  // Otherwise human loses (aka set score to -1)
  } else {
    score = -1
  }

  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  

  // Otherwise human loses (aka set score to -1)
 

  // return score
  return score
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1

  if(score <= -1)
  {
    result.innerText = 'You Lose!'
  }
  else if(score == 0)
  {
    result.innerText='You Draw!'
  }
  else if(score >= 1)
  {
    result.innerText='You Win!'
  }


showScore.innerText=`${Number(showScore.innerText) + score}`
  
hands.innerText=`👱 ${playerChoice} vs 🤖 ${computerChoice}`

  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  
  let computerChoice=getComputerChoice(
    ['Rock','Paper','Scissors']) 
  
  let score=getResult(playerChoice,computerChoice)
  showResult(score,playerChoice,computerChoice)
  
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

  turn.forEach((item) => {
    item.onclick = () => onClickRPS(item.value)
  })

 

  // Add a click listener to the end game button that runs the endGame() function on click
  let endGameControl=document.querySelector
    ('#endGameButton')
  endGameControl.onclick = () => endGame()
}

// ** endGame function clears all the text on the DOM **
function endGame() {
    result.innerText=' '
    hands.innerText=' '
    showScore.innerText=' '
}

playGame()
