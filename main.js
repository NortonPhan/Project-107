//https://teachablemachine.withgoogle.com/models/
//https://www.youtube.com/watch?v=iuy-oOJCOoM dog
//https://www.youtube.com/watch?v=CY7t8ow2gOM&t=37s cat
//https://www.youtube.com/watch?v=uFcZhH_wFbs lion
//https://www.youtube.com/watch?v=dlAgyzTQ5m8 cow


//

function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
classifier =    ml5.soundClassifer('https://teachablemachine.withgoogle.com/models/model.json', modelReady);
}

function modelReady(){
 classifier.classify(gotResults);
}

function gotResults(){
    if (error) {
        console.error(error);
    } else {
}