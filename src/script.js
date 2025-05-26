
const menuBtn = document.getElementById ("menuBtn")
const nav = document.getElementById("Nav")

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("hidden")
})