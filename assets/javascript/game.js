
$(document).ready(function() {
  var wins = 0; 
  var target = Math.floor(Math.random()*60)+20
  var losses = 0;
  var userScore = 0;
  var pictures=["assets/images/arc.jpg","assets/images/arc.jpg","assets/images/arc.jpg","assets/images/arc.jpg"]

$("#userScore").text(userScore)
$("#target").text(target)

for (var i = 0; i < pictures.length; i++){
  var crystalImg = $("<img>")
crystalImg.attr("src",pictures[i])
crystalImg.attr("data-crystal",Math.floor(Math.random()*12))
crystalImg.attr("class","clickCrystal")
 $("#crystals").append(crystalImg)
}

$(".clickCrystal").on("click",function(){
  var score=$(this).attr("data-crystal")
  userScore += parseInt(score)
  $("#userScore").text(userScore)
  if (userScore > target){
    alert("You lose!!")
} else if (userScore === target){
    alert("You win!!")
}
})

});

