gsap.registerPlugin(ScrollTrigger);

gsap.to(".home__bg",{
    scale : 1.7,
    scrollTrigger: {
        trigger : ".home",
        start : "top top",
        end: "380px top",
        scrub : 4,
    }, 
})

gsap.to(".home__bg",{
    translateY : '200px',
    scrollTrigger: {
        trigger : ".home",
        start : "380px top",
        scrub : 4,
    }, 
})

gsap.to(".home__bgimage", {
    scale:1.3,
    scrollTrigger: {
        trigger:".home",
        start:"top top",
        end:"400px top",
        scrub:4,
    }, 
})

gsap.to(".home__hero", {
    opacity:0,
    scrollTrigger: {
        trigger:".home",
        start: "top top",
        end: "250px top",
        scrub:true,
    }
})
gsap.to(".navbar__list--dot", {
    opacity:1,
    scrollTrigger: {
        trigger:".home",
        start: "top top",
        end: "270px top",
        scrub:4,
    }
})


gsap.fromTo(".navbar__list--dot", 
    {translateX: '49.5vw'},
    {
    translateX:'74.2vw',
    scrollTrigger: {
        trigger:".gallery",
        start: "top 200px",
        end: "bottom bottom",
        scrub:2,
    }
    }
)

gsap.fromTo(".navbar__list--dot", 
    {translateX: '25vw'},
    {
    translateX:'49.5vw',
    scrollTrigger: {
        trigger:".credits",
        start: "top 490px",
        end: "bottom bottom",
        scrub:2,
    }
    }
)

gsap.fromTo(".navbar__list--dot", 
{translateX: 0},
{
    translateX:'25vw',
    scrollTrigger: {
        trigger:".goonies",
        start: "center 480px",
        end: "bottom bottom",
        scrub:2,
    }
})


gsap.to(".home__intro", {
    opacity:1,
    scrollTrigger: {
        trigger:".home",
        start: "260px top",
        end:"400px top",
        scrub:true,
    }
})

gsap.to(".home__intro--text", {
    translateY: '0px',
    scrollTrigger: {
        trigger:".home",
        start: "260px top",
        end:"465px top",
        scrub:true,
    }
})

gsap.to(".home__intro--title", {
    opacity:0,
    scrollTrigger: {
        trigger:".home",
        start: "600px top",
        end: "720px top",
        scrub:true,
    }
})

gsap.to(".home__intro--text", {
    opacity:0,
    scrollTrigger: {
        trigger:".home",
        start: "600px top",
        end: "720px top",
        scrub:true,
    }
})

gsap.to(".home__scrollicon", {
    opacity:0,
    scrollTrigger: {
        trigger:".home",
        start: "260px top",
        end:"400px top",
        scrub:4,
    }
})

gsap.to(".home__line--draw", {
    height: '100%',
    scrollTrigger: {
        trigger:".home",
        start: "400px top",
        end: "550px top",
        scrub:4,
    }
})

gsap.to(".home__line", {
    height: '0px',
    scrollTrigger: {
        trigger:".home",
        start: "600px top",
        end: "720px top",
        scrub:true,
    }
})

gsap.to(".home__overlay", {
    opacity:1,
    scrollTrigger: {
        trigger:".home",
        start: "465px top",
        end: "700px top",
        scrub:4,
    }
})

gsap.to(".skullblock__skull", {
    scale:1,
    scrollTrigger: {
        trigger:".skullblock",
        end: "center center",
        scrub:true,
    }
})

gsap.to(".share__line--draw", {
    height:'0px',
    scrollTrigger: {
        trigger:".share__line",
        start:"50px bottom",
        end: "bottom 350px",
        scrub:true,
    }
})

gsap.to(".share__content", {
    opacity:1,
    scrollTrigger: {
        trigger:".share__content",
        end:"bottom center",
        scrub:true,
    }
})

gsap.to(".share__content--text", {
    translateY:'0px',
    scrollTrigger: {
        trigger:".share__line",
        start: "bottom 450px",
        end:"bottom center",
        scrub:true,
    }
})

gsap.to(".share__content--back", {
    translateY:'0px',
    scrollTrigger: {
        trigger:".share__line",
        start: "bottom 450px",
        end:"bottom center",
        scrub:1,
    }
})

gsap.to(".skull", {
    translateX:'-100px',
    duration:0.3,
    scrollTrigger: {
        trigger:".goonies",
        start: "top center",
        end:"bottom 460px",
        toggleActions: "restart reverse restart reverse",
    }
})

gsap.fromTo(".coins__image1", 
    {translateY:'50px'},
    {rotateZ:'360deg',
    translateY:'-440px',
        scrollTrigger: {
            trigger:".coins",
            scrub:true,
        }
    },
)

gsap.fromTo(".coins__image2", 
    {rotateZ:'40deg'},
    {rotateZ:'0deg',
        scrollTrigger: {
            trigger:".coins",
            scrub:true,
        }
    },
)

gsap.fromTo(".coins__image3", 
    {translateY:'-70px'},
    {rotateZ:'-180deg',
    translateY:'350px',
        scrollTrigger: {
            trigger:".coins",
            scrub:true,
        }
    },
)

gsap.fromTo(".coins__image4", 
    {translateY:'-440px'},
    {rotateZ:'360deg',
    translateY:'130px',
        scrollTrigger: {
            trigger:".coins",
            scrub:true,
        }
    },
)

gsap.fromTo(".coins__image5", 
    {translateY:'310px'},
    {
    translateY:'-330px',
        scrollTrigger: {
            trigger:".coins",
            scrub:true,
        }
    },
)

gsap.fromTo(".coins__content--text", 
    {translateY:'250px',
    opacity:0},
    {
    translateY:'0',
    opacity:1,
        scrollTrigger: {
            trigger:".coins",
            start:"top 350px",
            end:"bottom center",
            scrub:true,
        }
    },
)

const gallery = document.querySelectorAll('.gallery__image');
let delaytime = 0;
gallery.forEach(image => {
    gsap.to(image, {
    opacity:1,
    duration:0.27,
    delay:delaytime,
    scrollTrigger: {
        trigger:".gallery",
    }
})

delaytime+=0.27;
})

gsap.to('.goonies__item', {
    y:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:'.goonies',
        start: "top 380px"
    }
})

// gsap.to('credits__story--image', {
//     translateX:'0',
//     scrollTrigger: {
//         trigger:'.credits',
//         markers:true,
//     }
// })

let isview=false;
const gallerybtn = document.querySelector('.gallery__text--view');
const grid = document.querySelector('.gallery__grid');
const galleryHead = document.querySelector('.gallery__text--head');
gallerybtn.addEventListener('click', () => {
    if(!isview){
        gallery.forEach((image, index) => {
            image.classList.remove(`hideview${index+1}`);
            image.classList.add(`showview${index+1}`);
            gallerybtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            gallerybtn.classList.add('close');
            grid.classList.add('gridview');
            galleryHead.classList.add('hidehead');
        })
    }else{
        gallery.forEach((image, index) => {
            image.classList.remove(`showview${index+1}`);
            image.classList.add(`hideview${index+1}`);
            gallerybtn.innerHTML = 'view Gallery';
            gallerybtn.classList.remove('close');
            grid.classList.remove('gridview');
            galleryHead.classList.remove('hidehead');
        })
    }
    isview = !isview;
    // gsap.to(".hideview1",{
    //     // height: `${100/7*2}%`,
    //     // width : `${100/8*3}%`,
    //     height:500,
    //     width:300,
    //     x:200,
    //     y:200
    // })
})


const production = document.querySelector('.credits__production');
const productionImage = document.querySelector('.credits__production--image');
const leftX = production.getBoundingClientRect().left;
const rightX = production.getBoundingClientRect().right;
const mid = (leftX + rightX)/2;
let diff;
production.addEventListener('mousemove', (e) => {
    diff = mid - e.clientX;
    if(diff < 150 && diff > -150)
    productionImage.style.transform = `translateX(${diff}px)`;
})

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 4000,
	speedAsDuration: true
});

document.querySelector('.navbar__plot').addEventListener('click', () => {
    scrollTo(0, 520)
})


const music = document.querySelector('.music__icon--click');
const audioplayer = document.querySelector('.audioplayer');
let isplayer = false;
music.addEventListener('click', () => {
    if(!isplayer){
        audioplayer.classList.add('audioshow');
    }else{
        audioplayer.classList.remove('audioshow');
    }
    isplayer=!isplayer;
})

// const play = document.querySelector('.audioplayer__btn');
// const playicon = document.querySelector('.audioplayer__btn--icon');
// const audioMusic = document.querySelector('.audioplayer__music');
// const totalduration = document.querySelector('.audioplayer__bar--total');
// const currduration = document.querySelector('.audioplayer__bar--curr');
// const volumebtn = document.querySelector('.audioplayer__volume--icon');
// const audioback = document.querySelector('.audioplayer__skip--back');
// const audioforw = document.querySelector('.audioplayer__skip--forw');
// let curr, min=0;



// audioback.addEventListener('click', () => {
//     audioMusic.currentTime-=15;
// })

// audioforw.addEventListener('click', () => {
//     audioMusic.currentTime+=15;
// })

// volumebtn.addEventListener('click', () => {
//     audioMusic.muted = !audioMusic.muted;
//     if(audioMusic.muted){
//         volumebtn.classList.remove('fa-volume-high');
//         volumebtn.classList.add('fa-volume-xmark');
//     }else{
//         volumebtn.classList.remove('fa-volume-xmark');
//         volumebtn.classList.add('fa-volume-high');
//     }
// })
// setInterval(() => {
//     curr=Math.floor(audioMusic.currentTime);
//     min=Math.floor(curr/60);
//     curr=curr%60;
//     if(curr<10)
//     currduration.innerHTML = `${min}:0${curr}`;
//     else if(curr<60)
//     currduration.innerHTML = `${min}:${curr}`;
// });

// let isplaying=true;
// play.addEventListener('click', () => {
//     if(!isplaying){
//         audioMusic.play();
//         playicon.classList.remove('fa-play');
//         playicon.classList.add('fa-pause');
//     }else{
//         audioMusic.pause();
//         playicon.classList.remove('fa-pause');
//         playicon.classList.add('fa-play');
//     }
//     isplaying=!isplaying;
// })

let count=0;
const loader = document.querySelector('.loader');
const counter = document.querySelector('.loader__counter');
const bar = document.querySelector('.loader__bar--line');
const counterfunc = () => {
    count++;
    counter.innerHTML = count;
    bar.style.transform = `translateY(${100 - count}%)`;
    if(count==100){
        clearInterval(setloading);
        bar.style.transition = 'all 0.5s ease-in';
        bar.style.transform = 'translateY(100%)';
        setTimeout(() => {
            loader.style.opacity = '0';
        }, 500);
        setTimeout(() => {
            loader.style.display = 'none';
        }, 1500);
    }
}


const setloading = setInterval(()=>{
    counterfunc();
}, 50);

const play = document.querySelector('.audioplayer__btn');
const playicon = document.querySelector('.audioplayer__btn--icon');
const audioMusic = document.querySelector('.audioplayer__music');
const totalduration = document.querySelector('.audioplayer__bar--total');
const currduration = document.querySelector('.audioplayer__bar--curr');
const volumebtn = document.querySelector('.audioplayer__volume--icon');
const audioback = document.querySelector('.audioplayer__skip--back');
const audioforw = document.querySelector('.audioplayer__skip--forw');
const volumelength = document.querySelector('.currlength');
let isplaying=false;
var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'lightgray',
    progressColor: 'darkgray',
    barWidth: 2,
    height : 60,
    responsive: true,
    hideScrollbar: true,
    barRadius: 1,
    skipLength : 10,
});

// Load the audio FIle
wavesurfer.load('speakerAudio.mp3');

play.addEventListener("click" , (e)=> {
    wavesurfer.playPause();
    if(!isplaying){
        playicon.classList.remove('fa-play');
        playicon.classList.add('fa-pause');
    }else{
        playicon.classList.remove('fa-pause');
        playicon.classList.add('fa-play');
    }
    isplaying=!isplaying;
})

audioforw.addEventListener("click" , (e)=> {
    wavesurfer.skipForward();
  })
  
  audioback.addEventListener("click" , (e)=> {
  wavesurfer.skipBackward();
  })



// Time calculator

let timeCalculator = (value) => {
    let second = Math.floor( value % 60);
    let minute = Math.floor((value / 60)% 60);

    if( second < 10){
        second = "0" + second;
    }
    
    return minute + ":" + second;
}

wavesurfer.on("audioprocess" , (e)=>{
    console.log('hello');
    currduration.textContent = timeCalculator(wavesurfer.getCurrentTime());
});

let ismuted=false;
volumebtn.addEventListener("click" , (e)=> {
    wavesurfer.toggleMute();
    if(!ismuted){
        volumebtn.classList.remove('fa-volume-high');
        volumebtn.classList.add('fa-volume-xmark');
        volumelength.style.width= '0px';
    }else{
        volumebtn.classList.remove('fa-volume-xmark');
        volumebtn.classList.add('fa-volume-high');
        volumelength.style.width= '100px';
    }
    ismuted=!ismuted;
})



