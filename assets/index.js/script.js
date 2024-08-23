let currFlabbyBear;
let currFlabby2Bear;
let score = 0;
let gameOver = false;
let 


window.onload = function() {
    setGame();
}
function setGame() {
    for(let i = 0; i < 9; i++) {
        let bear = document.createElement("div");
        bear.id = i.toString();
        bear.addEventListener("click", selectBear);
        document.getElementById("board").appendChild(bear);
    }
    setInterval(setMole, 1000); 
    setInterval(setPlant, 2000); 
}

function getRandomBear()
{
    let num = Math.floor(Math.random() *9);
    return num.toString();
}
function setFlabby() {
    if (gameOver) {
        return;
    }
    if (currFlabbyBear) {
        currFlabbyBear.innerHTML = "";
    }
    let flabby = document.createElement("img");
    flabby.src = "../images/flabby.png";

    let num = getRandomBear();
    if (currFlabby2Bear && currFlabby2Bear.id == num) {
        return;
    }
    currFlabbyBear = document.getElementById(num);
    currFlabbyBear.appendChild(flabby);
}

function setFlabby2() {
    if (gameOver) {
        return;
    }
   
    if (currFlabby2Bear) {
        currFlabby2Bear.innerHTML = "";
    }
    let flabby2 = document.createElement("img");
    flabby2.src = "../assets/images/flabby2.png";
    let num = getRandomBear();
    if (currFlabbyBear && currFlabbyBear.id == num) {
        return;
    }
    currFlabby2Bear = document.getElementById(num);
    currFlabby2Bear.appendChild(flabby2);
}

function selectTile() {
    if (gameOver) {
        return;
    }


    if (this == currFlabbyBear) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
    }
    else if (this == currFlabby2Bear) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); //update score html
        gameOver = true;
    }
}


