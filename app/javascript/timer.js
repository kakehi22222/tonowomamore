  // タイマー表示
function timer() {
  //音ありプレイ
  document.querySelector(`.sound_start`).addEventListener("click",() => {
  const totalTime = 10000;
  const oldTime = Date.now();
  const timerId = setInterval(() => {
    const currentTime = Date.now();
    const diff = currentTime - oldTime;
    const remainMSec = totalTime - diff;
    const remainSec = Math.ceil(remainMSec/1000);
    let label = `${remainSec}`
    if (remainMSec <= 0) {
      clearInterval(timerId);
      label = '0';
    }
    document.querySelector('#last_time_s').innerHTML = label
  },1000);

  // 結果表示
  setTimeout(function(){
    // window.location.href = '/results';
    const resultScreen = document.getElementById("hidden");
    const deleteScreen = document.getElementById("delete_screen");
    resultScreen.setAttribute("style","display:block;" );
    ninjas.setAttribute("style", "display:none;");
    deleteScreen.setAttribute("style","display:none;");
  }, 10*1000);
  });

  //音無しプレイ
  document.querySelector(`.no_sound_start`).addEventListener("click",() => {
    const totalTime = 10000;
    const oldTime = Date.now();
    const timerId = setInterval(() => {
      const currentTime = Date.now();
      const diff = currentTime - oldTime;
      const remainMSec = totalTime - diff;
      const remainSec = Math.ceil(remainMSec/1000);
      let label = `${remainSec}`
      if (remainMSec <= 0) {
        clearInterval(timerId);
        label = '0';
      }
      document.querySelector('#last_time_s').innerHTML = label
    },1000);
  
    // 結果表示
    setTimeout(function(){
      // window.location.href = '/results';
      const resultScreen = document.getElementById("hidden");
      const deleteScreen = document.getElementById("delete_screen");
      resultScreen.setAttribute("style","display:block;" );
      ninjas.setAttribute("style", "display:none;");
      deleteScreen.setAttribute("style","display:none;");
    }, 10*1000);
  })


};
  if(document.URL.match(/new/)){window.addEventListener('load', timer)};