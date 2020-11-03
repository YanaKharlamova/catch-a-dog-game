const boxes = document.querySelectorAll(".box");
const scoreBoard = document.querySelector(".score");
const dogs = document.querySelectorAll(".dog");
let lastBox = 0;
let timeUp = false;
let score = 0;

//create a function to make a random time for dog to pop from the box
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomBox(boxes) {
  const index = Math.floor(Math.random() * boxes.length);
  const box = boxes[index];

  //prevent same box from getting the same number
  if (box === lastBox) {
    return randomBox(boxes);
  }
  lastBox = box;
  return box;
}

function peep() {
  const time = randomTime(500, 1000); //get a random time to determine how long dog should peep
  const box = randomBox(boxes); //get the random box from the randomHole function
  box.classList.add("up"); //add the CSS class so selected dog can "pop up"
  setTimeout(() => {
    box.classList.remove("up"); //make the selected dog "pop down" after a random time
    if (!timeUp) {
      peep();
    }
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => (timeUp = true), 15000); //show random dogs for 15 seconds
}

function catchDog(e) {
  if (!e.isTrusted) return; //** new thing I learned */
  score++;
  this.parentNode.classList.remove("up"); //this refers to item clicked
  scoreBoard.textContent = score;
}

dogs.forEach((dog) => dog.addEventListener("click", catchDog));
