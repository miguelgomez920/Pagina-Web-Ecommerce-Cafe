
// =========================== EVENTOS ==================================
let navbar = document.querySelector(".navbar"); 

document.getElementById("menu-btn").addEventListener("click", () => {
    navbar.classList.toggle("active"); // agregamos la clase active (si no la tiene) 
    /*si agregamos el evento para abrir el navbar, entonces quitamos los demas eventos (asi no se sobrepone uno sobre otro)*/
    searchForm.classList.remove("active");
    cartItem.classList.remove("active");
});


let cartItem = document.querySelector(".cart-items-container"); 

document.querySelector("#cart-btn").onclick = () =>{
    cartItem.classList.toggle("active"); /*agregamos la clase active (si no la tiene) */
    searchForm.classList.remove("active");
    navbar.classList.remove("active");
}

let searchForm = document.querySelector(".search-form"); 
document.querySelector("#search-btn").onclick = () =>{
    searchForm.classList.toggle("active"); /*le agregamos la clase active (si no la tiene) */
    navbar.classList.remove("active");
    cartItem.classList.remove("active");
}

window.onscroll = () =>{ /*el evento se activa ya sea cuando usemos la rueda del raton o usemos el scroll */
    navbar.classList.remove("active");
    searchForm.classList.remove("active"); 
    cartItem.classList.remove("active");
}