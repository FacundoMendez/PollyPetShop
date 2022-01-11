(() =>{
    let preload = document.querySelector(".preload");  
    setTimeout(function(){
        preload.classList.add("cerrar");
        preload.style.zIndex=0;
    },4000)
    
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
        duration:3,
        delay:0,   
        opacity:0,
    })

    gsap                             

    .timeline({                     
        defaults:{                  
            duration: 7,            
            delay:1.5,
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