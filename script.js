
const numberOfBreaths = document.querySelector(".breath-input");

const circleProgress = document.querySelector(".circle-progress");

const start = document.querySelector(".start");

const instructions = document.querySelector(".instructions");

const breathsText = document.querySelector(".breaths-text");


let breathsLeft =3;

numberOfBreaths.addEventListener("change", () => {
  breathsLeft = numberOfBreaths.value;
  breathsText.innerText =breathsLeft;
});



const growCircle = () => {
  circleProgress.classList.add("circle-grow");
  setTimeout(() = > {
    circleProgress.classList.remove("circle-grow");
  }, 8000);
};


const breathTextUpdate = () => {
  breathsLeft--;
  breathsText.innerText = breathsLeft;
  instructions.innerText = "Breath in";
  setTimeout(() =>{
    instructions.innerText = "Hold Breath";
    setTimeout(() => {
      instructions.innerText = "Exhale breath slowly";
    }, 4000);
  }, 4000);
};

const breathingApp = () => {
  const breathingAnimation = setInterval(() =>{
      if(breathsLeft === 0){
        clearInterval(breathingAnimation);
        instructions.innerText = "Has completado tu sesión de respirarción. Haz click en 'Iniciar' para empezar una nueva sesión";
        start.classList.remove("button-inactive");
        breathsLeft = numberOfBreaths.value;
        breathsText.innerText = breathsLeft;
        return;
      }
      growCircle();
      breathTextUpdate();
  }, 12000 )
}

start.addEventListener("click", () => {
  start.classList.add("button-inactive");
  instructions.innerText = "Relajate y alistate para empezar a respirar.";
  setTimeout(() => {
    instructions.innerText = "A respirar...";
    setTimeout(() => {
      breathingApp();
      growCircle();
      breathTextUpdate();
    }, 2000)
  }, 2000)
});
