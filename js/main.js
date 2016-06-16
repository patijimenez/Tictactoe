document.getElementById("tictac").onload = ticGame();

function ticGame() {
  var i = 0;
  while (i < 9) {
    i++;
    var crearElem = document.createElement("div");
    var crearNode = document.createTextNode(" ");

    crearElem.id = "cuadro-" + i
    crearElem.className = "cuadro";
    crearElem.appendChild(crearNode);
    crearElem.addEventListener("click", jugador);

    document.getElementById("area-juego").appendChild(crearElem);
    document.getElementsByTagName("button")[0].style.visibility = "hidden";
  }
}

// clicks x, o
function jugador() {
  if (document.getElementById(this.id).innerHTML == " ") {
    if (tictac.lastPlay == 1) {
      document.getElementById(this.id).innerHTML = "x";
      tictac.moves[this.id.slice(-1) - 1] = tictac.lastPlay;
      validacion(tictac.lastPlay);
      tictac.lastPlay = 2;
    } else if (tictac.lastPlay = 2) {
      document.getElementById(this.id).innerHTML = "o";
      tictac.moves[this.id.slice(-1) - 1] = tictac.lastPlay;
      validacion(tictac.lastPlay);
      tictac.lastPlay = 1;
    }
  }
document.getElementById(this.id).removeEventListener("click", jugador);
}


















