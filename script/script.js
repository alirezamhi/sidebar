const sideBar = document.querySelector(".sidebar");
const button = document.querySelector(".btn");

button.addEventListener("click" , function(){
    sideBar.classList.toggle("active");
});