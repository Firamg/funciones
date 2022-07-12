


let color = "";

const paint = (x) => {
  document.getElementById(x.target.id).style.backgroundColor = color;
};

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    color = "red";
  } else if (event.key === "s") {
    color = "blue";
  } else if (event.key === "d") {
    color = "white";
  }
});

document.addEventListener("click", paint);