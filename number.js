var UserInput = document.querySelector('.inputNumber')
var checkbtn = document.querySelector('.checkbtn')
var score = document.querySelector('.score')
var highscore = document.querySelector('.highscore')
var text = document.querySelector('.text')

console.log(UserInput)
console.log(checkbtn)
console.log(score)
console.log(highscore)
console.log(text)



checkbtn.addEventListener('click', () => {
        myNumber = Math.round(Math.random * 20)
        console.log(myNumber)
        console.log(UserInput.value)

        if(UserInput = myNumber){
            alert("You Win")
            score.textContent = +score.textContent + 1
        }

        else if(UserInput > myNumber){
                text.textContent = "Your guessed number is greater than actual number"
                score.textContent = +score.textContent - 1
        }

        else if(UserInput < myNumber){
                text.textContent = "Your guessed number is lesser than actual number"
                score.textContent = +score.textContent - 1
        }

        else{
            alert("You lost")   
        }
})



























// var myUserInput = document.querySelector('.inputNumber')

// var checkButton = document.querySelector('.checkbtn')

// var score = document.querySelector('.score')
// var highScore = document.querySelector('.highscore')

// checkButton.addEventListener('click', () => {

//     if (score.textContent > 0) {

//         var myNumber = Math.round(Math.random() * 20)
//         console.log(myNumber)
        // console.log(myUserInput.value)
//         console.log(score.textContent)

//         if (myUserInput.value == myNumber) {
//             alert("You win")
//             score.textContent = +score.textContent + 1
//             if (highScore.textContent < score.textContent) {
//                 highScore.textContent = score.textContent
//             }

//         } else {
//             alert("You loose")
//             score.textContent = +score.textContent - 1
//         }
//     } else {
//         alert("sorry aap game nai khel saktey, please try again")
//     }
// })