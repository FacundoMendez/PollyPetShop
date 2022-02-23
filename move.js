(() =>{
    let preload = document.querySelector(".preload");  
    setTimeout(function(){
        preload.classList.add("cerrar");
        preload.style.zIndex=0;
    },3500)
    
})();

(() =>{

    gsap.to(".imgLogo",{    
        duration: 3,            
    })


    gsap.to(".ball",{        
        duration: 4,            
        delay: 2.4,
        opacity:3,
        rotation:360,                   
        scale:30,       
        'webkitFilter': 'blur(2rem)',
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

    gsap.to(".box__container3", {
        opacity:1,
        duration:2,
        ease: "lineal",
        x:"+=60",
        scrollTrigger:{
            trigger:".container3",
            scrub: .2,
            pin: true,
            end: "+=50%"
        },  
    })



})();




