const button = document.querySelector(".button");

button.addEventListener("click", () => {
  button.classList.add("pulse");

  requestAnimationFrame(() => {
    button.classList.remove("pulse");
  });
});
