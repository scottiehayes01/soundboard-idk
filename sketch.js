let sound1, sound2, sound3, sound4, sound5, sound6, sound7,sound8;
let mariopaint;

function preload(){
  sound1 = loadSound('report_Bobdyfound.wav');
  sound2 = loadSound('Fart Meme Sound.mp3');
  sound3 = loadSound('pringle_3.wav');
  sound4 = loadSound('pringle_4.wav');
  sound5 = loadSound('EXTREMELY LOUD INCORRECT BUZZER.mp3');
  sound6 = loadSound('doorbell.mp3');
  sound7 = loadSound('piggy bank sound.mp3');
  sound8 = loadSound('metal pipe falling.mp3');
  mariopaint = loadSound('15 Creative Exercise.mp3');
}

function setup(){
  createCanvas(800, 600);
  background(0);
  mariopaint.loop();
  
  delay = new p5.Delay();
  reverb = new p5.Reverb();
}

function draw(){}

function keyPressed(){
  if (keyIsDown(UP_ARROW)) {
    loadImage('Red.webp', img => {
      image(img, 0, 0, 800, 600);
    });
    background(255);
    sound1.rate(.4);
    sound1.play();
  }
  if (keyIsDown(DOWN_ARROW)) {
    background(255, 0, 0);
    sound5.setVolume(0.5);
    sound5.play();
  }
  if (keyIsDown(RIGHT_ARROW)) {
    loadImage('metal pipe.jpeg', img => {
      image(img, 0, 0, 800, 600);
    });
    delay.process(sound8, 0.12, 0.7, 2300);
    sound8.play();
  }
  if (keyIsDown(LEFT_ARROW)) {
    background(0,255,0);
    sound2.play();
  }
  if (keyIsDown(32)) {
    background(127);
    sound6.play();
  }
}

function mousePressed(){
  if (mouseIsPressed) {
    if (mouseDragged){
      sound7.setVolume(0.5);
      sound7.play();
    }
    else if (mouseReleased){
      sound7.stop();
    }
    
  }
}
function mouseDragged(){
  fill(random(255), random(255), random(255));
    ellipse(mouseX, mouseY, 5);
  
}