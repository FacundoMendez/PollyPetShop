
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


(() =>{
  gsap                             

  .timeline({                     
      defaults:{                  
          duration: 3,            
          delay:0,             
          yoyo: true,          
      }
  })


  .to(".ball",{           
      delay:2.5,
      opacity:3,
      rotation:360,                   
      scale:30,                        
  })

  .to(".imgLogo",{    
      duration:3,
      delay:0,   
      opacity:0,
  })

})();



(() =>{
  gsap                             

  .timeline({                     
      defaults:{                  
          duration: 7,            
          delay:1,
      }
  })
  
  
  .to(".container__gato1",{
      y: -147,
      opacity: 1,
  })

  .to(".container__gato1",{
    ease: "elastic.out(2.05,0.5)",
    duration:0,
    delay:0,
    y: -149,
    zIndex: 102,
  })

})();
