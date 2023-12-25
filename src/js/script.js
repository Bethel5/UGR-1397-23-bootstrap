//change text color
const logo = document.getElementById("header");
logo.addEventListener('click', () => {
    const myBody = document.querySelector("body");
    myBody.classList.toggle("text-primary");
});