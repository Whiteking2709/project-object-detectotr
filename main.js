img = "";
Status= "";

function preload(){
    img = loadImage('Naruto young.jpeg');
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
  objectDetector = ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML = "status : detecting objects";
}

function modelLoaded(){
    console.log("modelLoaded");
    Status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error,results){
   if(error){
console.log(error);
   }
   console.log(results);
}

function draw(){
    image(img,0,0,640,420);
 
}