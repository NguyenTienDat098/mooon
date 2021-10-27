let previous = document.querySelector(".pre");
let play = document.querySelector(".play");
let next = document.querySelector(".next");
let title = document.querySelector(".title");
let recent_volume = document.querySelector(".range");
let volume_show = document.querySelector(".volume__show");
let slider = document.querySelector(".duration__slider");
let show_duration = document.querySelector(".show__duration");
let track_img = document.querySelector(".track__img");
let auto = document.querySelector(".auto");
let present = document.querySelector(".present");
let total = document.querySelector(".total");
// let artist = document.querySelector(".artist");

let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

// create a audio element
let track = document.createElement("audio");

// add song list
let All_song = [{
        name: "Dead to me",
        path: "mp3/play.mp3",
        img: "imgs/ms9.jpg",
        singer: "First Singer",
    },
    {
        name: "Diamond Eyes",
        path: "mp3/DiamondEyes.mp3",
        img: "imgs/ms10.jpg",
        singer: "Third Singer",
    },
    {
        name: "Death Bed",
        path: "mp3/DeathBed.mp3",
        img: "imgs/ms8.png",
        singer: "Third Singer",
    },
    {
        name: "Monster",
        path: "mp3/Monster.mp3",
        img: "imgs/ms6.jpg",
        singer: "Third Singer",
    },
    {
        name: "True Damage",
        path: "mp3/TrueDamage.mp3",
        img: "imgs/ms7.jpg",
        singer: "Third Singer",
    },
    {
        name: "League Of Lengends",
        path: "mp3/LeagueofLegendsPhoenix.mp3",
        img: "imgs/ms8.png",
        singer: "Third Singer",
    },
    {
        name: "Legends Never Die",
        path: "mp3/LegendsNeverDie.mp3",
        img: "imgs/ms9.jpg",
        singer: "Third Singer",
    },
    {
        name: "Hero",
        path: "mp3/Hero.mp3",
        img: "imgs/ms10.jpg",
        singer: "Third Singer",
    },
    {
        name: "So Far Away",
        path: "mp3/SoFarAway.mp3",
        img: "imgs/ms11.jpg",
        singer: "Third Singer",
    },
    {
        name: "NEFFEX Fight Back",
        path: "mp3/NEFFEXFight Back.mp3",
        img: "imgs/ms11.jpg",
        singer: "Third Singer",
    },
];

// all funciton

// funciton load track
function load_track(index_no) {
    clearInterval(timer);
    reset_slider();
    track.src = All_song[index_no].path;
    // track_img.src = All_song[index_no].img;
    title.innerHTML = All_song[index_no].name;
    // artist.innerHTML = All_song[index_no].singer;
    track.load();
    total.innerHTML = All_song.length;
    present.innerHTML = index_no + 1;
    timer = setInterval(range_slider, 1000);
}
load_track(index_no);

// check the song is playing or not
function Justplay() {
    if (playing_song == false) {
        playsong();
    } else {
        pausesong();
    }
}
// play song

function playsong() {
    track.play();
    playing_song = true;
    play.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
}

//  funciton pause
function pausesong() {
    track.pause();
    playing_song = false;
    play.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
}

// next song
function NextSong() {
    if (index_no < All_song.length - 1) {
        index_no += 1;
        load_track(index_no);
        playsong();
    } else {
        index_no = 0;
        load_track(index_no);
        playsong();
    }
}

// previous song
function PreviousSong() {
    if (index_no > 0) {
        index_no -= 1;
        load_track(index_no);
        playsong();
    } else {
        index_no = All_song.length;
        load_track(index_no);
        playsong();
    }
}

// change volume

function VolumeChange() {
    volume_show.innerHTML = recent_volume.value;
    track.volume = recent_volume.value / 100;
}
// /mute sound

function MuteSound() {
    track.volume = 0;
    recent_volume.value = 0;
    volume_show.innerHTML = 0;
}

// change silder

function ChangeDuration() {
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}

function range_slider() {
    let position = 0;
    if (!isNaN(track.duration)) {
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
    }

    //
    if (track.ended) {
        play.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
        if (autoplay == 1) {
            index_no += 1;
            load_track(index_no);
            playsong();
        }
    }
}

//  reset sonmg slider
function reset_slider() {
    slider.value = 0;
}

//
function AutoSwicth() {
    if (autoplay == 1) {
        autoplay = 0;
        auto.style.background = "#a29bfe";
        auto.style.color = "#fff";
    } else {
        autoplay = 1;
        auto.style.background = "#6c5ce7";
        auto.style.color = "#000";
    }
}
