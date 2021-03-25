Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( "#camera" );

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img src=" + data_uri + "/>";

    });
}
console.log('ML5 version:', ml5.version);
classifier = ml5.imageclassifier('https://teachablemachine.withgoogle.com/models/cKVpUw-RP/', modelLoaded);
function modelLoaded(){
    console.log("Model has loaded");
}
function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
function gotResult(error,results){
   if(error){
       console.error(error);
   }
   else{
       console.log(results);
   }
}