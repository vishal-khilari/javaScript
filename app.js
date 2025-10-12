const body = document.body;
const btns = document.querySelectorAll(".btns");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const colour = btn.value;
    body.style.backgroundColor = colour;
  });
});
