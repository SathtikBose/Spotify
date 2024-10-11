const songsPath = [
    "songs/song-1.mp3",
    "songs/song-2.mp3",
    "songs/song-3.mp3",
    "songs/song-4.mp3",
    "songs/song-5.mp3",
    "songs/song-6.mp3",
    "songs/song-7.mp3",
    "songs/song-8.mp3",
    "songs/song-9.mp3",
    "songs/song-10.mp3",
    "songs/song-11.mp3",
    "songs/song-12.mp3",
]; 

const coverImagesPath = [
    "covers/cover-1.jpg",
    "covers/cover-2.jpg",
    "covers/cover-3.jpg",
    "covers/cover-4.jpg",
    "covers/cover-5.jpg",
    "covers/cover-6.jpg",
    "covers/cover-7.jpg",
    "covers/cover-8.jpg",
    "covers/cover-9.jpg",
    "covers/cover-10.jpg",
    "covers/cover-11.jpg",
    "covers/cover-12.jpg",
];

const songsName = [
    "Agar Tum Saath Ho",
    "Phir Kabhi",
    "Shayad",
    "Soch na Sake",
    "Tera Fitoor",
    "Soulmate",
    "Dil Diyan Gallan",
    "Jeene Laga Hoon",
    "Main Rang Sharbaton Ka",
    "Rozana ",
    "Raataan Lambiyan",
    "Shree Hanuman Chalisa",
];

const logoReload = document.querySelector('#logoReload');
const modeButton = document.querySelector('#modeButton');
const songCardContainer = document.querySelectorAll('.songCardContainer');
const footerContainer = document.querySelector('footer');
const songCoverImage = document.querySelectorAll('#songCoverImage');
const songName = document.querySelectorAll('#songName');
const songPlayButtons = document.querySelectorAll('#songPlayButton');
const playAheadSongCoverImage = document.querySelector('#playAheadSongCover');
const playAheadSongName = document.querySelector('#playAheadSongName');
const playAheadSongBar = document.querySelector('#playAheadSongBar');
const playAheadSongTime = document.querySelector('#playAheadSongCurrentTime');
const backwardButton = document.querySelector('#playAheadBackwardButton');
const playAheadPlayButton = document.querySelector('#playAheadPlayButton');
const forwardButton = document.querySelector('#playAheadForwardButton');
const menuOpenButton = document.querySelector('#menuOpenButton');
const menuCloseButton = document.querySelector('#menuCloseButton');
const menuDisplay = document.querySelector('.displayMenu');
const mainMenuClose = document.querySelector('main');
const audios = songsPath.map(song => new Audio(song));
let currentIdx = 0;

const displaySongCoverImage = () => {
    songCoverImage.forEach((songCoverImageEach , index) => {
        songCoverImageEach.src = coverImagesPath[index];
    });
};

const displaySongName = () => {
    songName.forEach((songNameEach , index) => {
        songNameEach.textContent = songsName[index];
    });
};

const pageReload = () => {
    location.reload(true);
    location.reload();
};

const lightMode = (button) =>{
    document.body.style.backgroundColor = 'white';
    modeButton.classList.remove('fa-sun');
    modeButton.classList.add('fa-moon');
    document.body.style.color = 'black'
    songCardContainer.forEach((songCard)=> {
        songCard.style.backgroundColor = '#FFF7E0';
    });
    footerContainer.style.backgroundColor = '#F5F5F5';
};

const darkMode = (button) =>{
    document.body.style.backgroundColor = 'black'
    modeButton.classList.remove('fa-moon');
    modeButton.classList.add('fa-sun');
    document.body.style.color = 'white';
    songCardContainer.forEach((songCard)=> {
        songCard.style.backgroundColor = '#181818';
    });
    footerContainer.style.backgroundColor = '#1E1E1E';
};

const playAheadBarTime = (audio,songTotalTime) => {
    audio.addEventListener('timeupdate',()=> {
        const songCurrentTime = Math.floor(audio.currentTime);
        const BarUpdate = Math.floor((songCurrentTime/songTotalTime)*100);
        playAheadSongBar.value = BarUpdate;
        const minutes = Math.floor(songCurrentTime/60);
        const remaningSec = Math.floor(songCurrentTime%60);
        const fomatedSec = remaningSec < 10 ? `0${remaningSec}` : remaningSec;
        playAheadSongTime.textContent = `${minutes} : ${fomatedSec}`;
        if (songCurrentTime === songTotalTime ){
            audio.pause()
            audio.currentTime = 0;
            audio.play();
        }
    })
};

const playAheadData = (audio,currentIdx) => {
    playAheadSongCoverImage.src = coverImagesPath[currentIdx];
    playAheadSongName.textContent = songsName[currentIdx];
    const songTotalTime = Math.floor(audio.duration);
    playAheadBarTime(audio,songTotalTime);
    
};

const songChoose = (currentIdx) => {
    const audio = audios[currentIdx];
    audios.forEach((Otheraudio,i)=> {
        if (audio !== Otheraudio){
            Otheraudio.pause()
            Otheraudio.currentTime = 0;
            songPlayButtons[i].classList.remove('fa-pause');
            songPlayButtons[i].classList.add('fa-play');
        }
    });
    if (audio.paused){
        audio.play();
        if (songPlayButtons[currentIdx].classList !== 'fa-play' ){
            songPlayButtons[currentIdx].classList.remove('fa-play');
            songPlayButtons[currentIdx].classList.add('fa-pause');
        }
        footerContainer.style.display = 'flex';
        playAheadPlayButton.classList.remove('fa-circle-play');
        playAheadPlayButton.classList.add('fa-circle-pause');
        playAheadData(audio , currentIdx);
    }
    else{
        audio.pause();
        songPlayButtons[currentIdx].classList.remove('fa-pause');
        songPlayButtons[currentIdx].classList.add('fa-play');
        playAheadPlayButton.classList.remove('fa-circle-pause');
        playAheadPlayButton.classList.add('fa-circle-play');
    }
};

songPlayButtons.forEach((songPlayButtonEach , index)=> {
    songPlayButtonEach.addEventListener('click',()=> {
        songPlayButtonEach.classList.remove('fa-play');
        songPlayButtonEach.classList.add('fa-pause');
        songChoose(currentIdx = index);
    });
});

playAheadPlayButton.addEventListener('click',()=> {
    audio = audios[currentIdx];
    audios.forEach((tempOtherAudio)=> {
        if (audio !== tempOtherAudio){
            tempOtherAudio.pause();
            tempOtherAudio.currentTime = 0;
        }
    });
    if (audio.paused){
        audio.play();
        songPlayButtons[currentIdx].classList.remove('fa-play')
        songPlayButtons[currentIdx].classList.add('fa-pause');
        playAheadPlayButton.classList.remove('fa-clircle-play');
        playAheadPlayButton.classList.add('fa-circle-pause');
    }
    else{
        audio.pause();
        songPlayButtons[currentIdx].classList.remove('fa-pause');
        songPlayButtons[currentIdx].classList.add('fa-play');
        playAheadPlayButton.classList.remove('fa-circle-pause');
        playAheadPlayButton.classList.add('fa-circle-play');
    }
});

playAheadSongBar.addEventListener('input',()=> {
    audio = audios[currentIdx];
    const audioTotalDuration = Math.floor(audio.duration);
    const setSongActiveTime = (audioTotalDuration * playAheadSongBar.value ) / 100;
    audio.currentTime = setSongActiveTime;
});

backwardButton.addEventListener('click',()=> {
    if (currentIdx === 0){
        songChoose(currentIdx);
    }
    else{
        currentIdx--;
        songChoose(currentIdx);
    }
});

forwardButton.addEventListener('click', ()=> {
    if ((currentIdx) + 1  === (audios.length) ){
        currentIdx = 0;
        songChoose(currentIdx);
    }
    else{
        currentIdx++;
        songChoose(currentIdx);
    }
});

modeButton.addEventListener('click',()=> {
    if (document.body.style.backgroundColor == 'black'){
        lightMode(modeButton);
    }
    else{
        darkMode(modeButton);
    }
});

menuOpenButton.addEventListener('click',()=> {
    menuDisplay.style.display = 'flex';
});

menuCloseButton.addEventListener('click',()=> {
    menuDisplay.style.display = 'none';
});

mainMenuClose.addEventListener('click',()=> {
    menuDisplay.style.display = 'none';
});

logoReload.addEventListener('click',()=> {
    pageReload();
});

document.body.style.backgroundColor = 'black';
document.body.style.color = 'white';
displaySongCoverImage();
displaySongName();