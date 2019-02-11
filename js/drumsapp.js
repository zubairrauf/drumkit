function playAudio(audioClass){
  let audio = document.querySelector(audioClass);
  if(!audio) return; //stop  the function if there isn't any audio for the key pressed.
  audio.currentTime = 0;
  audio.play();
}

function addPlaying(keyClass){
  let keyPressed = document.querySelector(keyClass);
  keyPressed.classList.add('playing');
  setTimeout(function(){keyPressed.classList.remove('playing')}, 100);
}

window.addEventListener('keydown', function(e){
  let audioClass = '.audiokey'+e.key.toUpperCase() ; //generates the class name for audio from the key pressed by adding .key to the keyCode.
  let keyClass = '.key'+e.key.toUpperCase() ; //generates the class name for key from the key pressed by adding .key to the keyCode.
  console.log(keyClass);
  playAudio(audioClass);
  addPlaying(keyClass);
});

document.addEventListener ('click', function (e){
  audioClass= '.audio'+e.path[1].classList[1];
  keyClass= '.'+e.path[1].classList[1];
  playAudio(audioClass);
  addPlaying(keyClass);
})
