import "./styles/style.css";
import "../styles/common.css";

import "./components/sketches/lines";
import "./components/sketches/random_lines";
import "./components/sketches/cat";
import "./components/sketches/small_ellipses";
import "./components/sketches/rectangles";
import "./components/sketches/multi_line";

import { sketches, switchSketch } from "./components/sketches";
import { init, setCanvasTexture } from "./components/renderer";
import { waitForCanvas } from "./components/utils";

let currentSketch;
let currentSketchIndex = 0;
let rendererIsLoaded = init();

window.addEventListener("load", () => {
  waitForCanvas().then(() => {
    let controls = document.querySelectorAll(".app-control");
    controls.forEach((e) => {
      let toggle = e.querySelector(".toggle");
      e.addEventListener("mouseup", () => {
        if (!e.classList.contains("active")) {
          e.classList.add("active");
          e.classList.remove("picto");
        }
      });

      toggle.addEventListener("click", (event) => {
        if (e.classList.contains("active")) {
          e.classList.remove("active");
          e.classList.add("picto");
        }
      });
    });
  });
  if (rendererIsLoaded) {
    createSelect();
  }
});



const nextSketch = () => {
  currentSketchIndex++;
  if(currentSketchIndex >= sketches.length) {
    currentSketchIndex = 0;
  }
  switchSketch(currentSketchIndex);  
  setCanvasTexture();
}


const previousSketch = () => {
  currentSketchIndex--;
  if(currentSketchIndex < 0) {
    currentSketchIndex = sketches.length - 1;
    
  }
  switchSketch(currentSketchIndex);  
  setCanvasTexture();
}
// Create select dropdown
function createSelect() {
  // Default sketch
  switchSketch(currentSketchIndex);
  document.querySelector("#fdroite").addEventListener("click", nextSketch);
  document.querySelector("#fgauche").addEventListener("click", previousSketch);


  // Get <select> element from DOM
  // const selectElement = document.getElementById("sketch-select");
  
  // sketches.forEach(function (e, i) {

    // For each sketch in sketches array, create a new option element + text node
    // from name in object. Use index as the value, for use in switch
    // let element = document.createElement("option");
    // let content = document.createTextNode(e.name);
    // element.appendChild(content);
    // element.value = i;
    // selectElement.appendChild(element);
    // if (currentSketch == e) {
    //   element.selected = true;
    // }
  // });

  // selectElement.addEventListener("input", function () {
  //   currentSketch = switchSketch(this.value);
  //   setCanvasTexture();
  // });
}

//tester pour que ce soit comme des boutons radio

let genderOptions = document.querySelectorAll(".fema");
let sizeOptions = document.querySelectorAll(".xxl");

const selectOption =  function(elementsToCheck) {
  // console.log("click on " + this);
    this.classList.add("active")
    elementsToCheck.forEach(option => {
      if(this !== option) {
        option.classList.remove("active")
      }
    })
  
}

genderOptions.forEach(option => {
  option.addEventListener("click", selectOption.bind(genderOptions))
})


// sizeOptions.forEach(option => {
//   option.addEventListener("click", selectOption(sizeOptions))
// })





// FONCTIONNE PRESQUE
// const formBtn = document.querySelector(".fema");
// const sizeBtn = document.querySelectorAll(".xxl");

// formBtn.addEventListener("click", function(){
//   const selectState = document.querySelector(".selectF")
//   if (selectState.classList.contains("selectActiveF")){
//     selectState.classList.remove("selectActiveF")
//   } else {
//     selectState.classList.add("selectActiveF")
//   }
// })






//juste un bouton fonctionne
//formBtn.addEventListener("click", function(){
  //if (formBtn.classList.contains("femaActive")){
    //formBtn.classList.remove("femaActive")
  //} else {
    //formBtn.classList.add("femaActive")
  //}
//})





// formBtn.forEach(function(fBtn) {
//   fBtn.addEventListener("click", function(){
//     if (fBtn.classList.contains("selectActive")){
//       fBtn.classList.remove("selectActive")
//     } else {
//       fBtn.classList.add("selectActive")
//     }
//   })
// })

// sizeBtn.forEach(sBtn => {
//   sBtn.addEventListener("click", function(){
//     if(sBtn.classList.containes("selectActive")){
//       sBtn.classList.remove("selectActive")
//     } else {
//       fBtn.classList.add("selectActive")
//     }
//   })
// })