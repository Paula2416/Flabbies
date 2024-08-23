let currFlabbyBear;


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
    let flabby = document.createElement("img");
    flabby.src = "./flabby.png";

    let num = getRandomBear();
    currFlabbyBear = document.getElementById(num);
    currFlabbyBear.appendChild(flabby);
}


