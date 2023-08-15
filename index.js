

function rollTheDice(){
    var randomNum1=Math.floor(Math.random() * 6)+1;
    var randomNum2=Math.floor(Math.random() * 6)+1;

    var image1 = document.getElementById("img1");
  var image2 = document.getElementById("img2");

    var randomDiceImage1 ="./Dice Images"+"/"+randomNum1 + ".png";

    var randomDiceImage2 ="./Dice Images"+"/"+randomNum2 + ".png";

    image1.setAttribute("src",randomDiceImage1);    
    image2.setAttribute("src",randomDiceImage2); 
    
  var text=document.getElementById("title");
    
if(randomNum1>randomNum2){

  text.style.color="#FFE569";
  text.innerHTML="PLAYER 1 WINS";

}
else if(randomNum1<randomNum2){
  text.style.color="#FFE569";

  text.innerHTML="PLAYER 2 WINS";

}

else{
  text.style.color="black";

  text.innerHTML="DRAW";

}


}