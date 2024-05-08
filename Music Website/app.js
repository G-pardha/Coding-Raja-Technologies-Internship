const music = new Audio('audio/1.mp3');
//music.play();

const songs =[{
        id: '1',
        songName: `Wanna Be Yours<br> 
    <div class="subtitle">Arctic Monkeys</div>`,
        poster:"image/1.jpeg"
    },
    {
        id: '2',
        songName: `Summer Time Sadness<br> 
    <div class="subtitle">Lana Del Rey</div>`,
        poster:"image/2.jpeg"
    },
    {
        id:'3',
        songName: `deandelions<br> 
    <div class="subtitle">Ruth B.</div>`,
        poster:"image/3.jpeg"
    },
    {
        id: '4',
        songName: `Until I Found You<br> 
    <div class="subtitle">Stephen Sanchez</div>`,
        poster:"image/4.jpeg"
    },
    {
        id: '5',
        songName: `Perfect<br> 
    <div class="subtitle">Ed Sheeran</div>`,
        poster:"image/5.jpeg"
    },
    {
        id: '6',
        songName: `Heat Waves<br> 
    <div class="subtitle">Glass Animals</div>`,
        poster:"image/6.jpeg"
    },
    {
        id: '7',
        songName: `Mockingbird<br> 
    <div class="subtitle">Eminem</div>`,
        poster:"image/7.jpeg"
    },
    {
        id:'8',
        songName: `Night Changes<br> 
    <div class="subtitle"> One Directon </div>`,
        poster:"image/8.jpeg"
    },
    {
        id: '9',
        songName: `Let Her Go<br> 
    <div class="subtitle"> Passenger</div>`,
        poster:"image/9.jpeg"
    },
    {
        id: '10',
        songName: `7 Years<br> 
    <div class="subtitle">Lukas Graham</div>`,
        poster:"image/10.jpeg"
    },
    {
        id: '11',
        songName: `Hukum<br> 
    <div class="subtitle">Anirudh</div>`,
        poster:"image/11.jpeg"
    },
    {
        id: '12',
        songName: `Bad Ass<br> 
    <div class="subtitle">Anirudh</div>`,
        poster:"image/12.jpeg"
    },
    {
        id: '13',
        songName: `Ordinary Person<br> 
    <div class="subtitle"> Anirudh </div>`,
        poster:"image/13.jpeg"
    },
    {
        id: '14',
        songName: `Naa Ready <br> 
    <div class="subtitle"> Anirudh</div>`,
        poster:"image/14.jpeg"
    },
    {
        id: '15',
        songName: `Yaalo Yaalo<br> 
    <div class="subtitle">Anuragh</div>`,
        poster:"image/15.jpeg"
    }
    
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play');
        masterPlay.classList.add('bi-pause');
    }else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play');
        masterPlay.classList.remove('bi-pause');
    }
});

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playListplay')).forEach((el)=>{
        el.classList.add('bi-play-fill');
        el.classList.remove('bi-pause-fill');
    })
}


const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgb(105,105,105, .0)';
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playlistplay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index=el.target.id;
        // console.log(index);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `image/${index}.jpeg`;
        music.play();
        masterPlay.classList.remove('bi-play');
        masterPlay.classList.add('bi-pause');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let{songName}=elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background="rgb(105,105,105,.1)";
        makeAllplays();
        el.target.classList.remove('bi-play-fill');
        el.target.classList.add('bi-pause-fill');
        wave.classList.add('active1');
    });
})




let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration
    // console.log(music_dur);

    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur%60);

    // console.log(min1);
    if(sec1 < 10){
        sec1=`0${sec1}`;
    }

    


    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if(sec2 < 10){
        sec2=`0${sec2}`;
    }

    currentStart.innerText=`${min2}:${sec2}`;

    let progressBar = parseInt((music_curr /music_dur)*100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change' , ()=>{
    music.currentTime =seek.value*music.duration / 100;
})

let vol_icon = document.getElementById('vol_icon');
let vol =document.getElementById('vol');
let vol_bar =document.getElementsByClassName('vol_bar')[0];
let vol_dot =document.getElementById('vol_dot');

vol.addEventListener('change',() =>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up');
        vol_icon.classList.remove('bi-volume-down');
        vol_icon.classList.add('bi-volume-mute');

    }
    if(vol.value > 0){
        vol_icon.classList.remove('bi-volume-up');
        vol_icon.classList.add('bi-volume-down');
        vol_icon.classList.remove('bi-volume-mute');
    }
    if(vol.value > 50){
        vol_icon.classList.add('bi-volume-up');
        vol_icon.classList.remove('bi-volume-down');
        vol_icon.classList.remove('bi-volume-mute');
    }
    let vol_a =vol.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_dot.style.left =`${vol_a}%`;
    music.volume = vol_a/100;

});

let back =document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click',()=>{
    index -=1;
    if(index<1){
        index=Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
        poster_master_play.src = `image/${index}.jpeg`;
        music.play();
        masterPlay.classList.remove('bi-play');
        masterPlay.classList.add('bi-pause');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let{songName}=elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background="rgb(105,105,105,.1)";
        makeAllplays();
        el.target.classList.remove('bi-play-fill');
        el.target.classList.add('bi-pause-fill');
        wave.classList.add('active1');

})

next.addEventListener('click',()=>{
    index++;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index=1;

    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `image/${index}.jpeg`;
    music.play();
    masterPlay.classList.remove('bi-play');
    masterPlay.classList.add('bi-pause');

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let{songName}=elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background="rgb(105,105,105,.1)";
    makeAllplays();
    el.target.classList.remove('bi-play-fill');
    el.target.classList.add('bi-pause-fill');
    wave.classList.add('active1');

})




let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft+=330;
});

pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -=330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx ')[0];

pop_art_right.addEventListener('click', () => {
    Artists_bx .scrollLeft += 330;
});

pop_art_left.addEventListener('click', () => {
    Artists_bx .scrollLeft -= 330;
});