function pi(){
    document.getElementById("qwqw").style.display="grid";
    document.getElementById("qwqww").style.display="grid";
    document.getElementById("banner").style.display="flex";
    document.getElementById("newsletter").style.display="flex";
    document.getElementById("opop").style.display="flex";
    var product1Section=document.getElementById("qwqww");
    if (product1Section) {
        const scrollDuration = 1300; 

        setTimeout(() => {
          product1Section.scrollIntoView({ behavior: 'smooth',duration: scrollDuration,block: 'start', inline: 'nearest' });}
          ,scrollDuration);
        
    }
}