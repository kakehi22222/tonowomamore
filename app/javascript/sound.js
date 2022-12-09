function sound() {
  document.querySelector(`.sound_start`).addEventListener('click', () => {
    const gameSound =document.getElementById('geme_sound');
    const endingSound = document.getElementById("ending_sound");
    gameSound.play();
    gameSound.volume = 0.3;
    window.setTimeout(function(){
      if(gameSound.play()){
        gameSound.pause();
        endingSound.play();
        endingSound.volume = 0.3;
      };
    }, 10000);
    const ninjas = document.getElementById("ninjas");
      const kenSound = document.getElementById("ken_sound");
      ninjas.addEventListener('click', function(){
        kenSound.play();
        kenSound.volume = 0.3;
        });
  });
};
  if(document.URL.match(/new/)){window.addEventListener('load', sound)};