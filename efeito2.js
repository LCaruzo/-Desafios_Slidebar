let btn = document.querySelector("#menuBt");
let sidebar =  document.querySelector(".sidebar");
let hideLogo = document.getElementById("logo");

btn.onclick = function() {
    sidebar.classList.toggle("fechar");
   
}