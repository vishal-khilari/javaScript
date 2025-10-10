const form = document.querySelector(".form1");
const input = document.querySelector("input");

function istrueorfalse(inputvalue) {
  if (inputvalue >= 10) {
    console.log("input is greater than 10");
  } else {
    console.log("input is lesser than 10");
  }
}

const inputvalue = form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(input.value);
  istrueorfalse(input.value);
});
