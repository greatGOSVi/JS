const buttonToggle = document.getElementById("buttonToggle");
const divToggle = document.getElementById("divToggle");

let toggleDisplayed = true;

buttonToggle.addEventListener("click", () => {
    toggleDisplayed = !toggleDisplayed;
    divToggle.style.display = toggleDisplayed?"block":"none";
});