console.log("hola");
document.querySelector(".flip-card").addEventListener("click", function () {
  this.classList.toggle("flipped");
});
document.querySelector(".flip-card").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    this.classList.toggle("flipped");
  }
});
