// boton de cantidad
var counter = 1;
var newNum = document.getElementById('number');
newNum.innerHTML = counter;

function downClick() {
  if (counter > 1) {
    counter -= 1;
    newNum.innerHTML = counter;
  } else {
    counter = 1;
    newNum.innerHTML = counter;
  }
}

function upClick() {
  counter += 1;
  newNum.innerHTML = counter;
}