let elem = document.getElementById('animate');
let aleft = 0;
let atop = 0;

function moveUp() {
  atop -=10;
  elem.style.top = atop + "px";
  if (atop <= 0) {
    atop +=10;
  }
}

function moveDown() {
  atop += 10;
  elem.style.top = atop + "px";
  if (atop >= 350) {
    atop -=10;
  }
}

function moveLeft() {
  aleft-=10;
  elem.style.left = aleft + "px";
  if (aleft <= 0) {
    aleft +=10;
  }
}

function moveRight() {
  aleft +=10;
  elem.style.left = aleft + "px";
  if (atop >= 60 && atop <= 70) {
      elem.style.left = aleft + "px";
  }else if (aleft >= 350) {
        aleft -=10;
  }
}