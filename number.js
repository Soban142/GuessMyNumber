var gameLogic = document.querySelector('.logic')
var modal = document.querySelector('.modal')
var closebtn = document.querySelector('.closeBtn')
var hidden = document.querySelector('.hidden')
var overlay = document.querySelector('.overlay')
var body = document.querySelector('body')
console.log(body)

// body.addEventListener('keydown', ){

// }

gameLogic.addEventListener('click', () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
})

closebtn.addEventListener('click', () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})

overlay.addEventListener('click', () =>{
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})