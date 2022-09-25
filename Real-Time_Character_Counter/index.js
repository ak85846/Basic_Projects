const textareaE1 = document.getElementById("textarea");
const remainingcounterE1 = document.getElementById("remaining-counter");
const totalcounterE1 = document.getElementById("total-counter");

textareaE1.addEventListener("keyup", () => {
  updateCounter();
});

function updateCounter() {
  totalcounterE1.innerText = textareaE1.value.length;
  remainingcounterE1.innerText =
    textareaE1.getAttribute("maxlength") - textareaE1.value.length;
}
