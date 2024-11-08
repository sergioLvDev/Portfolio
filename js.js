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

const videoEcommerce = document.querySelector("#videoEcommerce");
const demoBtn = document.querySelector("#demoBtn");

demoBtn.addEventListener("click", () => {
  if (videoEcommerce.paused) {
    videoEcommerce.play();
    videoEcommerce.controls = true;
  } else {
    videoEcommerce.load();
    videoEcommerce.controls = false;
  }
});

const videoSerNatural = document.querySelector("#videoSerNatural");
const demoBtn1 = document.querySelector("#demoBtn1");

demoBtn1.addEventListener("click", () => {
  if (videoSerNatural.paused) {
    videoSerNatural.play();
    videoSerNatural.controls = true;
  } else {
    videoSerNatural.load();
    videoSerNatural.controls = false;
  }
});
