import "./styles/homepage.css";
import "./styles/common.css";

//0 - 625 = scrolled

const sameBut = document.querySelector('.samebutd');
const diff = document.querySelector('.sbdifferent');

window.addEventListener('scroll', function(){ 
    const scrolled = window.pageYOffset;
    const val = (scrolled * 0.5) + 68.85;
    diff.style.transform = 'scale(' + (1.45 * val) + '%)'

    const lav = (scrolled * 0.5) + 1;
    sameBut.style.transform = 'scale(' +  (99.85 / lav)  + '%)'
    console.log(lav)
    //sameBut.style.transform = "scale(100 * " + val + ")" ;
});


