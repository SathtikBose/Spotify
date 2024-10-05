
const logoReload = document.querySelector("#appLogo");
const darkmodebutton = document.querySelector("#darkmodebutton");
const conatiner = document.querySelector(".container");
const songContainer = document.querySelectorAll(".songContainer");
const coverImageDisplayBlock = document.querySelectorAll("#CoverImageDisplay");
const songNameH3 = document.querySelectorAll(".songName");
const footerNavContainer = document.querySelector(".footerNav");
const ReferenceContainer = document.querySelector(".reference");
const languageUsedContainer = document.querySelector(".languageUsed");
const ownerTextContainer = document.querySelector(".ownerText");
const menuButton = document.querySelector("#OpenMenuButton");
const closeButton = document.querySelector("#closeMenuButton");
const DispayMenu = document.querySelector(".displayMenu");
const MainContainer = document.querySelector("#MainContainer")



logoReload.addEventListener("click",()=>{
    location.reload(true);
});

darkmodebutton.classList.add("fa-sun");
footerNavContainer.classList.add("footerDataDark");
ReferenceContainer.classList.add("footerDataDark");
languageUsedContainer.classList.add("footerDataDark");
ownerTextContainer.classList.add("footerDataDark");



darkmodebutton.addEventListener("click",()=>{
    if (document.body.style.backgroundColor == "white"){
        document.body.style.backgroundColor = "black";
        document.body.style.color = 'white';
        darkmodebutton.classList.remove("fa-moon");
        darkmodebutton.classList.add("fa-sun");
        conatiner.style.backgroundColor = "gray";
        conatiner.style.border = "2px solid white";
        songContainer.forEach((songCard) =>{
            songCard.style.backgroundColor = "rgb(45, 42, 42)";
        });
        footerNavContainer.classList.add("footerDataDark");
        ReferenceContainer.classList.add("footerDataDark");
        languageUsedContainer.classList.add("footerDataDark");
        ownerTextContainer.classList.add("footerDataDark");
        footerNavContainer.classList.remove("footerDatalight");
        ReferenceContainer.classList.remove("footerDatalight");
        languageUsedContainer.classList.remove("footerDatalight");
        ownerTextContainer.classList.remove("footerDatalight");
    }
    else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = 'black';
        darkmodebutton.classList.remove("fa-sun");
        darkmodebutton.classList.add("fa-moon");
        conatiner.style.backgroundColor = "rgb(247, 247, 171)";
        conatiner.style.border = "2px solid black";
        songContainer.forEach((songCard) =>{
            songCard.style.backgroundColor = "rgb(255, 196, 245)";
        });
        footerNavContainer.classList.add("footerDatalight");
        ReferenceContainer.classList.add("footerDatalight");
        languageUsedContainer.classList.add("footerDatalight");
        ownerTextContainer.classList.add("footerDatalight");
        footerNavContainer.classList.remove("footerDataDark");
        ReferenceContainer.classList.remove("footerDataDark");
        languageUsedContainer.classList.remove("footerDataDark");
        ownerTextContainer.classList.remove("footerDataDark");
    }
});

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

const songName = [
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

coverImageDisplayBlock.forEach((imgElement , index)=> {
    if (coverImagesPath[index]){
        imgElement.src = coverImagesPath[index];
        imgElement.atl = `Cover ${index + 1}`;
    }
});

songNameH3.forEach((songNameDisplay, index) => {
    if (songName[index]){
        songNameDisplay.textContent = songName[index];
    }
});


DispayMenu.style.display = "none";

menuButton.addEventListener("click", ()=>{
    if (DispayMenu.style.display == "none"){
        DispayMenu.style.display = "block";
    }
    else {
        DispayMenu.style.display = "none";
    }
});


closeButton.addEventListener("click",()=> {
    if (DispayMenu.style.display == "block"){
        DispayMenu.style.display = "none";
    }
    else {
        DispayMenu.style.display = "block";
    }
});


MainContainer.addEventListener('click' , ()=> {
    if (DispayMenu.style.display == "block"){
        DispayMenu.style.display = "none"
    }
})



const audios = songsPath.map(song => new Audio(song));
const playButtons = document.querySelectorAll("#songPlayButton");

playButtons.forEach((button , index)=> {
    const audio = audios[index];
    button.addEventListener('click' , ()=>{
        audios.forEach ((otherAudio , otherIndex) => {
            if (otherAudio !== audio){
                otherAudio.pause();
                otherAudio.currentTime = 0;
                playButtons[otherIndex].classList.remove('fa-circle-pause');
                playButtons[otherIndex].classList.add('fa-circle-play');
            }
        });
        if (audio.paused){
            audio.play();
            button.classList.add('fa-circle-pause');
            button.classList.remove('fa-circle-play');
            
        } else {
            audio.pause();
            button.classList.add('fa-circle-play');
            button.classList.remove('fa-circle-pause');
        }
    });
});










