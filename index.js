let cantidad = document.querySelector(".cantidad");
let precio = document.querySelector(".precio-inicial");
let suma = document.querySelector("#sumar");
let resta = document.querySelector("#restar");
let total = document.querySelector(".valortotal");

suma.onclick = function () {
    cantidad.innerHTML++;
  total.innerHTML = (cantidad.innerHTML * precio.innerHTML).toLocaleString();
};

resta.onclick = function () {
    cantidad.innerHTML--;
  total.innerHTML = (cantidad.innerHTML * precio.innerHTML).toLocaleString();
};