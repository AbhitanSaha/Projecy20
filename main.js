function setup(){
    canvas=createCanvas(300,250);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Bo3VjkaNu/model.json",modelLoaded)
}
function preload(){

}
function draw(){
    image(video,0,0,300,250)
}
function modelLoaded(){
    console.log("im out");
    }
    function draw(){
        image(video,0,0,300,250)
        classifier.classify(video,gotResults);
    }
    function gotResults(error,result){
        if (error) {
            console.error(error);
        } else {
            console.log(result);
            document.getElementById("magufin").innerHTML=result[0].label;
            document.getElementById("aim").innerHTML=result[0].confidence.toFixed(2)*100+"%";
        }
    }