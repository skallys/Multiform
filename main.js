import "./styles/homepage.css";
import "./styles/common.css";

//0 - 625 = scrolled

const sameBut = document.querySelector('.samebutd');
const diff = document.querySelector('.sbdifferent');

window.addEventListener('scroll', function(){ 
    const scrolled = window.pageYOffset;
    const val = (scrolled * 0.5) + 68.85;
    const alv = (scrolled * 0.5)
    diff.style.transform = 'scale(' + (1.45 * val) + '%) translateY(-' + (0.1 * alv) + '%)'

    const lav = (scrolled * 0.01) + 1;
    sameBut.style.transform = 'scale(' +  (99.85 / lav)  + '%)'
    if(lav > 3.6) {
        sameBut.classList.add('activate')
    } else {
        sameBut.classList.remove('activate')
    }

    console.log(lav)
    //sameBut.style.transform = "scale(100 * " + val + ")" ;
});


