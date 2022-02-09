(() =>{
    let preload = document.querySelector(".preload");  
    setTimeout(function(){
        preload.classList.add("cerrar");
        preload.style.zIndex=0;
    },4000)
    
})();

(() =>{

    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".container2__sol", {
        duration:2,
        scale:"+=.5",
        y:"-=200",
        x:"-=120",
        scrollTrigger:{
            trigger: ".box__container2",
            pin: true,
            scrub: 1,
        }
    })
})();

(() =>{
    gsap.to(".ball",{        
        duration: 3,            
        delay:2.5,
        opacity:3,
        rotation:360,                   
        scale:30,       
    })

    gsap.to(".imgLogo",{    
        duration:4,
        delay:0,   
    })

    gsap                             

    .timeline({                     
        defaults:{                  
            duration: 7,            
            delay:1.5,
        }
    })


})();

