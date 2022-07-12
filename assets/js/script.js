var ele = document.getElementById("ele1");

var pintar = function (event, color="green") {

    ele.style.backgroundColor = color;
};

ele.addEventListener("click", pintar);

pintar("click","yellow");
