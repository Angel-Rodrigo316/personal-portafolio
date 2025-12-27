const btn = document.getElementById("themeBtn");

const cards = document.querySelectorAll(".project-card");

if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark");
} 

btn.addEventListener("click",()=>{
    document.body.classList.toggle("dark");

    const theme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme",theme);
}); 

cards.forEach(card => {
    card.addEventListener("click", () => {
        alert(`Proyecto seleccionado: ${card.textContent}`);
    });
});