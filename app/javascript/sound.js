function sound() {
  document.querySelector(`.sound_start`).addEventListener('click', () => {
    const gameSound =document.getElementById('geme_sound');
    gameSound.play();
    gameSound.volume = 0.3;
    const ninjas = document.getElementById("ninjas");
      const kenSound = document.getElementById("ken_sound");
      ninjas.addEventListener('click', function(){
        kenSound.play();
        kenSound.volume = 0.3;
        });
        const endingSound = document.getElementById("ending_sound");
        const resultPoint = document.getElementById("result_point");
        resultPoint.addEventListener('click',function(){
          endingSound.play();
          endingSound.volume = 0.3;
        })
  });
};
  if(document.URL.match(/new/)){window.addEventListener('load', sound)};