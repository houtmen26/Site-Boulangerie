const hamburgerButton = document.querySelector(".nav-toggler")
const navigation = document.querySelectort("nav")


hamburgerButton.addEventListener("click", toggleNav)

function toggleNav(){
    hamburgerButton.classList.toggle("active")
    navigation.classList.toggle("active")
} 
 