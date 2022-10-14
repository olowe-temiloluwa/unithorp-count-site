let deadline = new Date("dec 17, 2022 15:37:25").getTime(); 
let x = setInterval(function() {   
    let now = new Date().getTime();

    let distance = deadline - now; 

    let days = Math.floor(distance  / (1000 * 60 * 60 * 24));

    let hours = Math.floor((distance %(1000 * 60 * 60 * 24))/(1000 * 60 * 60));

    let minutes = Math.floor((distance  % (1000 * 60 * 60)) / (1000 * 60)); 
    
    let seconds = Math.floor((distance  % (1000 * 60)) / 1000); 
    
    document.querySelector(".day").innerHTML =days ; 
    
    document.querySelector(".hours").innerHTML =hours;
    
    document.querySelector(".minute").innerHTML = minutes;  
    
    document.querySelector(".seconds").innerHTML =seconds; 
    
}, 1000);


