const img = document.querySelector(".cursor");
let innerWidth = window.innerWidth - 50;
let innerHeight = window.innerHeight - 50;
let speed = document.getElementById("select");
let ball = 0;

setInterval(() => {
  let top = Math.random() * innerWidth;
  let left = Math.random() * innerHeight;

  img.style = `
    position: absolute;
    left: ${top}px;
    top:${left}px;
  `;
}, 1000);

speed.addEventListener("change", () => {
  let result = level.value;
  console.log(result);
  randomPosition();
});

function bosildi() {
  ball += 1;
  document.querySelector("div h1").innerHTML = ball;
  console.log(ball);
}
