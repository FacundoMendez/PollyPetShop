
(() =>{
  const nav = document.querySelector(".nav__list")
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")) {
      navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
      navToggle.setAttribute("aria-label", "Abrir menú");
    }
  });

})();


(() =>{
  let preload = document.querySelector(".preload");

  setTimeout(function(){
      preload.classList.add("cerrar");
      preload.style.zIndex=0;
  },4000)
  
})();
