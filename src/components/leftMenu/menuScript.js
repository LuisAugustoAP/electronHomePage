let button = document.querySelector("#menuToggle");
let menu = document.querySelector(".leftMenu");

button.onclick = function(){
    menu.classList.toggle('active');
    console.log("HEEE")
}