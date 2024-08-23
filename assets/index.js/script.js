let currFlabbyBear;
let currFlabby2Bear;


window.onload = function() {
    setGame();
}
function setGame() {
    for(let i = 0; i < 9; i++) {
        let bear = document.createElement("div");
        bear.id = i.toString();
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
    if (currFlabbyBear) {
        currFlabbyBear.innerHTML = "";
    }
    let flabby = document.createElement("img");
    flabby.src = "../images/flabby.png";

    let num = getRandomBear();
    currFlabbyBear = document.getElementById(num);
    currFlabbyBear.appendChild(flabby);
}

function setFlabby2() {
   
    if (currFlabby2Bear) {
        currFlabby2Bear.innerHTML = "";
    }
    let flabby2 = document.createElement("img");
    flabby2.src = "../assets/images/flabby2.png";
    let num = getRandomBear();
    currFlabby2Bear = document.getElementById(num);
    currFlabby2Bear.appendChild(flabby2);
}


