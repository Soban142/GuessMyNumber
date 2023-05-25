var randomNumber = document.querySelector('.randomNumber')
var userInputtedNumber = document.querySelector('.inputNumber')
var guessBtn = document.querySelector('.guessbtn')
var tries = document.querySelector('.tries')
var highScore = document.querySelector('.highScore')
var message = document.querySelector('.alert')
var newGame = document.querySelector('.new')


guessBtn.addEventListener('click', () =>{
var numberGenerated = Math.round(Math.random() * 20)
console.log(numberGenerated)
console.log(userInputtedNumber.value)

randomNumber.textContent = +numberGenerated

if(tries.textContent > 0){

if(numberGenerated == userInputtedNumber.value){
    message.textContent = "You won"
    tries.textContent = +tries.textContent + 1
    highScore.textContent = +highScore.textContent + 1
}

else if(userInputtedNumber.value > numberGenerated){
    message.textContent = "Your number was greater than actual Number"
    tries.textContent = +tries.textContent - 1
}

else if(userInputtedNumber.value < numberGenerated){
    message.textContent = "Your number was lesser than actual number"
    tries.textContent = +tries.textContent - 1
}

}

else{
    message.textContent = "You lost"
    alert('Game Over')
}

})

// newGame.addEventListener('click', () => {
//     location.reload(true);
// })