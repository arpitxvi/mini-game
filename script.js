let level = 0
let h4 = document.querySelector("h4")
let box = document.querySelectorAll(".box")
let main = document.querySelector("main")
let body = document.querySelector("body")
let gameStart = true
let gameloop = []
let userloop = [] 


//step one game start
window.addEventListener("keypress",()=>{
    if(gameStart == true)
        {
            gameStart = false
            game();   
        }
})


//flash function
function flash(box){
    //set background to white
    box.classList.add("white")
    //reset background color after 0.5s
    setTimeout(()=>{
        box.classList.remove("white")
    },250)
}


//step two levels
function game(){
    //empty user inputs
    userloop = []
    //level update
    ++level
    h4.innerText = `Level ${level}`
    //selecting a random button
    let random = Math.floor(Math.random()*4) 
    //flash the selected button
    flash(box[random])
    gameloop.push(box[random])
    console.log(gameloop)
}


//reset function
function reset(){
    level = 0
    gameloop = []
    userloop = []
    h4.innerText = "Press any key to start the game"
    gameStart = true
}


//leveling up
function checkAnswer(idx){
    if(gameloop[idx] === userloop[idx])
        {
            body.classList.add("green")
            setTimeout(()=>{
                body.classList.remove("green")
            },250)
            if(userloop.length == gameloop.length)
                {
                setTimeout(game,250)
                }
            }
    else
    {
        body.classList.add("red")
        setTimeout(()=>{
            body.classList.remove("red")
        },250)
        h4.innerText = "Game Over"
        reset();
    }
}


//flasing user input
function btnPress(){
    flash(this)
    userloop.push(this)
    console.log(userloop)
    checkAnswer(userloop.length-1)
}


//loop to addEventListener for all buttons
for( btn of box ){
    btn.addEventListener("click",btnPress)
}







