console.log("hello");

let titleDiv = document.getElementById("title");

console.log("before: ", titleDiv.innerText);

let message = "Square Color Counter 🚀";

titleDiv.innerText = message;

console.log("after: ", titleDiv.innerText);

titleDiv.innerHTML = `<p>${message}</p>`;

titleDiv.style.backgroundColor = "blue";

const squares = document.querySelectorAll(".colorSquare");

// forEach
const timesClicked = { purple: 0, orange: 0, green: 0 };
squares.forEach((square) => {
  square.onclick = () => {
    timesClicked[square.value] += 1;
    square.innerText = timesClicked[square.value];
  };
});
function clearScores() {
  timesClicked.purple = 0;
  timesClicked.orange = 0;
  timesClicked.green = 0;
  squares.forEach((square) => {
    square.innerText = "";
  });
}

const clearGameBtn = document.getElementById("clear-game");
clearGameBtn.onclick = () => clearScores();
