(() =>{
    let preload = document.querySelector(".preload");  
    setTimeout(function(){
        preload.classList.add("cerrar");
        preload.style.zIndex=0;
    },3700)
    
})();

(() =>{


    gsap.to(".imgLogo",{    
        duration:3,
    })

    gsap.to(".imgLogo",{  
        delay:2.5,  
        duration: 2,
        opacity: 0,
        'webkitFilter': 'blur(4zrem)',
    })

    gsap.to(".ball",{        
        delay: 1.7,
        duration: 2,            
        opacity:1,
        scale:30,       
        'webkitFilter': 'blur(.5rem)',
    })

    gsap.to(".ball",{        
        delay: 3.5,
        duration: 1.5,            
        opacity:0,
        rotation:360,                   
        scale:30,       
        'webkitFilter': 'blur(2rem)',
    })

    gsap.to(".preload",{        
        delay: 2.1,
        duration:1,
        display:"none",
        opacity:0,
    })


    let viewport = document.querySelector(".viewport");

    viewport.style.opacity = "0";

    gsap.to(viewport,{        
        delay: 2.5,
        duration: 2,            
        opacity:1,
    })

})();


(() =>{

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".container2__sol", {
        duration:2,
        scale:"+=.7",
        y:"-=60",
        x:"-=50",
        scrollTrigger:{
            trigger: ".container2",
            pin: true,
            scrub: 1,
        }
    })




})();




