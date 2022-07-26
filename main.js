


function startClassification() {
  navigator.mediaDevices.getUserMedia({
    audio:true
  });
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/SqDdEOe0D/model.json',modelReady);
}
function modelReady() {
  classifier.classify(gotResults);  
}
function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(255) + 1;
    random_number_g = Math.floor(255) + 1;
    random_number_b = Math.floor(255) + 1;

    document.getElementById("result_label").innerHTML = 'Escucho - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Precisión - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    img1 = document.getElementById("alien1")
    img2 = document.getElementById("alien2")
    img3 = document.getElementById("alien3")
    img4 = document.getElementById("alien4")
    if (results[0].label == "Chasquidos") {
      img1.src="aliens-01.gif";
      img2.src="aliens-02.png";
      img3.src="aliens-03.png";
      img4.src="aliens-04.png";
    }
    if (results[0].label == "Rayar") {
      img1.src="aliens-01.png";
      img2.src="aliens-02.png";
      img3.src="aliens-03.gif";
      img4.src="aliens-04.png";
    }
    if (results[0].label == "Golpes") {
      img1.src="aliens-01.png";
      img2.src="aliens-02.gif";
      img3.src="aliens-03.png";
      img4.src="aliens-04.png";
    }
    if (results[0].label == "Ruido de Fondo") {
      img1.src="aliens-01.png";
      img2.src="aliens-02.png";
      img3.src="aliens-03.png";
      img4.src="aliens-04.gif";
    }
  }
}


