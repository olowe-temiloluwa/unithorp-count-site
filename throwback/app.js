// let show = document.querySelectorAll('.play')


const playSongs = document.querySelectorAll(".play");
const stopSongs = document.querySelector(".stop");

const songs = [
    "./songs/1.mp3",
    "./songs/2.mp3",
    "./songs/3.mp3",
    "./songs/4.mp3",
    "./songs/5.mp3",
    "./songs/6.mp3",
    "./songs/7.mp3",
    "./songs/9.mp3",
    "./songs/8.mp3",
    "./songs/10.mp3"
]

const song = new Audio;


function newAudio(){
    let secretNumber = Math.trunc(Math.random() * 9 + 1);

    song.src = songs[secretNumber];
    song.play();
}


playSongs.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        
        newAudio();
    })
})


stopSongs.addEventListener('click', ()=>{
    song.pause();
})


