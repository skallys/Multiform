import "./styles/homepage.css";
import "./styles/common.css";
import "./accroches";

const sameBut = document.querySelector('.samebutd');
const diff = document.querySelector('.sbdifferent');
const nav = document.querySelector('nav');

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

    if(val > 1070 && val < 1521){
        nav.style.color = 'var(--white)';
    } else if(val > 1821 && val < 2272){ 
        nav.style.color = 'var(--white)';
    } else if(val >2574 && val < 2826){ 
        nav.style.color = 'var(--white)';
    } else {
        nav.style.color = 'var(--black)'
    }

    console.log(val)
    //console.log(val)
});








//if(val > 1813 && val < 2259) { nav.style.color = 'var(--white)' }

//pictoL.forEach(function(picto){picto.style.fill = 'var(--black)'})

// pictoF.forEach(function(pict){
//    pict.style.fill = 'var(--white)'
//    pict.style.stroke = 'var(--black)'
//})

