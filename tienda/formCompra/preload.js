(() =>{
    let preload = document.querySelector(".preload");

    setTimeout(function(){
        preload.classList.add("cerrar");
        preload.style.zIndex=0;
        location.href='../../../index.html'
    },3000)

    
})();