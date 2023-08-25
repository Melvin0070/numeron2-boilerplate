const num1 = document.getElementById("number1")
const num2 = document.getElementById("number2")
const times = document.getElementById("timer")
let number3 =document.getElementById("number3")
const button = document.getElementById("buttons")
let operator;
score = 0


function gameover(){
    location.href = "./gameover.html"
    localStorage.setItem("score",score)
}

function randomNumbers(){
    return Math.floor(Math.random()*100)

}
button.addEventListener('click', (e)=>{
    compare(e.target.id)
})

const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const multi = document.getElementById("mul")
const div = document.getElementById("divide")
const mod = document.getElementById("modulus")


function displayNumbers() {
    let num1 = randomNumbers();
    let num2 = randomNumbers();
    number1.innerText = num1;
    number2.innerText = num2;
    let num3 = updateNumber(num1,num2)
    number3.innerText = num3
}

displayNumbers();

function updateNumber(num1,num2) {
    let ans = 0
    let operators = ["+","-","X","/","%"]
    let x = Math.floor(Math.random()*5)
    operator = operators[x]
    console.log(operator)
    if(operator == "+") ans = num1+num2
    else if(operator == "-") ans = num1-num2
    else if(operator == "X") ans = num1*num2
    else if(operator == "/") ans = Math.floor(num1/num2)
    else if(operator == "%") ans = num1%num2
    return ans
}

function compare(i){
    if(i == "plus" && operator == "+" || 
    i =="minus" && operator =="-" ||
    i == "mul" && operator == "X" ||
    i == "divide" && operator =="/"||
    i == "modulus" && operator == "%"){
        displayNumbers()
        score++
        localStorage.setItem("score", 100)
        time = 21

    }else{
        gameover()
    }
}

let time = 21
function timer(){
    if (time<=1){
        gameover()
    }
    time--
    times.innerText = time
}
setInterval(timer, 1000)
