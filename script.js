let desert_moon = document.getElementById("desert-moon");
let man = document.getElementById("man");

window.addEventListener("scroll", ()=>{
    let value = window.scrollY;

    desert_moon.style.top = value * 0.3 +"px";
    man.style.left = value*0.6+"px";
})