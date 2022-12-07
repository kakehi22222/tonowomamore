function gamestart() {

  const openLeft = document.querySelector('.fusuma_left').animate(
    [
      { transform: 'translateX(0)' },
      { transform: 'translateX(-2000%)'}
    ],
    { duration: 11000 }
  );
  openLeft.pause();
  
  const openRight = document.querySelector('.fusuma_right').animate(
    [
      { transform: 'translateX(0)' },
      { transform: 'translateX(2000%)'}
    ],
    { duration: 11000 }
  );
  openRight.pause();

  const soundStart = document.getElementById("sound_start")
  const noSoundStart = document.getElementById("no_sound_start")
  soundStart.addEventListener('click', () => {
    openLeft.play();
    openRight.play();
    soundStart.remove();
    noSoundStart.remove();
  });

  noSoundStart.addEventListener('click', () => {
    openLeft.play();
    openRight.play();
    soundStart.remove();
    noSoundStart.remove();
  });
};
if(document.URL.match(/new/)){window.addEventListener('load', gamestart)};
