function setup(){
    canvas=createCanvas(300,250);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    
}
function preload(){

}
function draw(){
    image(video,0,0,300,250)
}