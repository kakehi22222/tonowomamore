// loadAndPlay();

// let source;

// async function loadAndPlay() {
//   const context = new AudioContext();

//   const data = await fetch('assets/seisen.mp3');
//   const buffer = await data.arrayBuffer();
//   const decodeBuffer = await context.decodeAudioData(buffer);

//   source = context.createBufferSource();
//   source.buffer = decodeBuffer;
//   source.connect(context.destination);
//   source.start(0)
//   // source.loop = true;
// }

// function stop() {
//   source.stop();
// }