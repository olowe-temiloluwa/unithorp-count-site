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




const playSongs = document.querySelector("#playing");


const songs = [
    "./songss/1.mp3",
    "./songss/2.mp3",
    "./songss/3.mp3",
    "./songss/4.mp3",
    "./songss/5.mp3",
    "./songss/6.mp3",
    "./songss/7.mp3",
    "./songss/9.mp3",
    "./songss/8.mp3",
    "./songss/10.mp3"
]

const song = new Audio;


let check = 0;


function newAudio(){
    let secretNumber = Math.trunc(Math.random() * 9 + 1);

    song.src = songs[secretNumber];
    check = 1;
    song.play();
    playSongs.textContent='playing'
}


function stopAudio() {
    check = 0;
    song.pause();
    playSongs.textContent='Play Song'
}


playSongs.addEventListener('click', ()=>{
    if (check === 1) {
        stopAudio()
    }
    else{
        newAudio()
    }
    })

