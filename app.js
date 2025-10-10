let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let ten = document.querySelector(".ten");

one.addEventListener("click", () => {
  one.classList.toggle("red");
});
two.addEventListener("contextmenu", () => {
  two.classList.toggle("red");
});
three.addEventListener("dblclick", () => {
  three.classList.toggle("red");
});
four.addEventListener("mousedown", () => {
  four.classList.toggle("red");
});
five.addEventListener("mouseenter", () => {
  five.classList.toggle("red");
});
six.addEventListener("mouseleave", () => {
  six.classList.toggle("red");
});
seven.addEventListener("mousemove", () => {
  seven.classList.toggle("red");
});
eight.addEventListener("mouseout", () => {
  eight.classList.toggle("red");
});
nine.addEventListener("mouseover", () => {
  nine.classList.toggle("red");
});
ten.addEventListener("mouseup", () => {
  ten.classList.toggle("red");
});
