const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () =>
  document.body.classList.toggle("show-nav")
);

toggle.addEventListener("click", () =>
  document.querySelector(".background-color-layer").classList.toggle("show-nav")
);
