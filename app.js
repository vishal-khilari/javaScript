const h1 = document.querySelector("h1");

const h3 = document.createElement("h3");
h3.innerText = "insert element";
h3.style.color = "teal";
document.body.appendChild(h3);
h1.insertAdjacentElement("beforebegin", h3);
