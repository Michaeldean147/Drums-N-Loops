var listener = new window.keypress.Listener();


// Drum kit
var drumKitSize = 9;
document.getElementById("SnareDrum").addEventListener("click", mySnare);
document.getElementById("Block").addEventListener("click", myBlock);
document.getElementById("Cowbell").addEventListener("click", myCowBell);
document.getElementById("FloorTom").addEventListener("click", myFloorTom);
document.getElementById("HiHat").addEventListener("click", myHiHat);
document.getElementById("Kick").addEventListener("click", myKick);
document.getElementById("OtherSnareDrum").addEventListener("click", myMutedSnare);
document.getElementById("OtherHiHat").addEventListener("click", myOtherHiHat);
document.getElementById("Crash").addEventListener("click", myCrash);

function mySnare() {
  var snarePic = document.getElementById('SnareDrum')
  var snare = new buzz.sound("sounds/drumkit mp3s/snare.mp3");
  snarePic.style.border='2px solid black'
  snare.play()
  setTimeout(function(){ snarePic.style.border=''; }, 1000);
}

function myOtherHiHat() {
  var otherHatPic = document.getElementById('OtherHiHat')
  var otherHat = new buzz.sound("sounds/drumkit mp3s/otherhat.mp3");
  otherHatPic.style.border='2px solid black'
  otherHat.play()
  setTimeout(function(){ otherHatPic.style.border=''; }, 1000);
}

function myMutedSnare() {
  var mutedSnarePic = document.getElementById('OtherSnareDrum')
  var mutedSnare = new buzz.sound("sounds/drumkit mp3s/mutedsnare.mp3");
  mutedSnarePic.style.border='2px solid black'
  mutedSnare.play()
  setTimeout(function(){ mutedSnarePic.style.border=''; }, 1000);
}

function myKick() {
  var kickPic = document.getElementById('Kick')
  var kick = new buzz.sound("sounds/drumkit mp3s/kick.mp3");
  kickPic.style.border='2px solid black'
  kick.play()
  setTimeout(function(){ kickPic.style.border=''; }, 1000);
}

function myHiHat() {
  var hiHatPic = document.getElementById('HiHat')
  var hiHat = new buzz.sound("sounds/drumkit mp3s/hihat.mp3");
  hiHatPic.style.border='2px solid black'
  hiHat.play()
  setTimeout(function(){ hiHatPic.style.border=''; }, 1000);
}

function myFloorTom() {
  var floorTomPic = document.getElementById('FloorTom')
  var floorTom = new buzz.sound("sounds/drumkit mp3s/floor-tom.mp3");
  floorTomPic.style.border='2px solid black'
  floorTom.play()
  setTimeout(function(){ floorTomPic.style.border=''; }, 1000);
}

function myCowBell() {
  var cowPic = document.getElementById('Cowbell')
  var cowbell = new buzz.sound("sounds/drumkit mp3s/cowbell.mp3");
  cowPic.style.border='2px solid black'
  cowbell.play()
  setTimeout(function(){ cowPic.style.border=''; }, 1000);
}

function myBlock() {
  var blockPic = document.getElementById('Block')
  var block = new buzz.sound("sounds/drumkit mp3s/block.mp3");
  blockPic.style.border='2px solid black'
  block.play()
  setTimeout(function(){ blockPic.style.border=''; }, 1000);
}

function myCrash() {
  var crashPic = document.getElementById('Crash')
  var crash = new buzz.sound("sounds/drumkit mp3s/crash.mp3");
  crashPic.style.border='2px solid black'
  crash.play()
  setTimeout(function(){ crashPic.style.border=''; }, 1000);
}

listener.simple_combo("p", mySnare);
listener.simple_combo("q", mySnare);
listener.simple_combo("w", myHiHat);
listener.simple_combo("o", myHiHat);
listener.simple_combo("e", myBlock);
listener.simple_combo("i", myBlock);
listener.simple_combo("r", myCowBell);
listener.simple_combo("u", myCowBell);
listener.simple_combo("t", myOtherHiHat);
listener.simple_combo("y", myOtherHiHat);
listener.simple_combo("l", myKick);
listener.simple_combo("a", myKick);
listener.simple_combo("k", myFloorTom);
listener.simple_combo("s", myFloorTom);
listener.simple_combo("j", myMutedSnare);
listener.simple_combo("d", myMutedSnare);
listener.simple_combo("h", myCrash);
listener.simple_combo("f", myCrash);


// Synth Loops
var synthLoopSize = 5;
var currentLoopPic = ""
var currentSynth = new buzz.sound("sounds/synth/caution.mp3");

document.getElementById("Caution").addEventListener("click", loopCaution);
document.getElementById("Bells").addEventListener("click", loopBells);
document.getElementById("RSS").addEventListener("click", loopRSS);
document.getElementById("Tweeks").addEventListener("click", loopTweeks);
document.getElementById("LoopDeDoop").addEventListener("click", loopDeDoop);
document.getElementById("Stop").addEventListener("click", stop);

function loopCaution() {
  currentLoopPic = document.getElementById("Caution");
  currentSynth = new buzz.sound("sounds/synth/caution.mp3");
  //current_synth === Caution
  currentLoopPic.style.border='2px solid black'
  currentSynth.loop().play().setVolume(50)
}

function loopBells() {
  currentLoopPic = document.getElementById("Bells");
  currentSynth = new buzz.sound("sounds/synth/Digital Bells.mp3");
  //current_synth === Bells
  currentLoopPic.style.border='2px solid black'
  currentSynth.loop().play().setVolume(50)
}

function loopRSS() {
  currentLoopPic = document.getElementById("RSS");
  currentSynth = new buzz.sound("sounds/synth/Rough Sharp Synth.mp3");
  //current_synth === RSS
  currentLoopPic.style.border='2px solid black'
  currentSynth.loop().play().setVolume(50)
}

function loopTweeks() {
  currentLoopPic = document.getElementById("Tweeks");
  currentSynth = new buzz.sound("sounds/synth/Tweeks.mp3");
  //current_synth === Tweek
  currentLoopPic.style.border='2px solid black'
  currentSynth.loop().play().setVolume(50)
}

function loopDeDoop() {
  currentLoopPic = document.getElementById("LoopDeDoop");
  currentSynth = new buzz.sound("sounds/synth/loopdedoop.wav");
  //current_synth === Tweek
  currentLoopPic.style.border='2px solid black'
  currentSynth.loop().play().setVolume(50)
}

function stop() {
  var stopPic = document.getElementById('Stop');
  stopPic.style.border='2px solid black'
  currentSynth.stop()
  setTimeout(function(){ stopPic.style.border=''; }, 1000);
  currentLoopPic.style.border=''
}

listener.simple_combo("1", loopCaution);
listener.simple_combo("2", loopBells);
listener.simple_combo("3", loopRSS);
listener.simple_combo("4", loopTweeks);
listener.simple_combo("5", loopDeDoop);
listener.simple_combo("esc", stop);
