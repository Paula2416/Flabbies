window.onload = function() {
    setGame();
}
function setGame() {
    for(let i = 0; i < 9; i++) {
        let bear = document.createElement("div");
        bear.id = i.toString();
        document.getElementById("board").appendChild(bear);
    }
}