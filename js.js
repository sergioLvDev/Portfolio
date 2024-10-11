document.querySelector(".flip-card").addEventListener("click", function () {
  this.classList.toggle("flipped");
});
document.querySelector(".flip-card").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    this.classList.toggle("flipped");
  }
});

const langbuttons = document.querySelectorAll("[data-languaje]");
const textToChange = document.querySelectorAll("[data-seccion]");
langbuttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    fetch(`./laguaje/${btn.dataset.languaje}.json`)
      .then((res) => res.json())
      .then((data) => {
        textToChange.forEach((el) => {
          const section = el.dataset.seccion;
          const value = el.dataset.value;
          el.innerHTML = data[section][value];
        });
      });
  });
});
/* 
function agregarBr() {
  const principal = document.getElementById("principal");
  if (window.innerWidth < 500) {
    if (!principal.querySelector("br")) {
      const br = document.createElement("br");
      principal.appendChild(br);
    }
  } else {
    principal.querySelector("br").remove();
  }
}
agregarBr();
window.addEventListener("resize", agregarBr); */
