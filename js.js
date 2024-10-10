console.log("hola");
document.querySelector(".flip-card").addEventListener("click", function () {
  this.classList.toggle("flipped");
});
document.querySelector(".flip-card").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    this.classList.toggle("flipped");
  }
});

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
window.addEventListener("resize", agregarBr);
