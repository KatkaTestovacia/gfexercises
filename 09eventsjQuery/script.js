$('.first-button').click(() => {
    console.log("Yeah, you clicked me")
});

$(".second-button").click(() => {
    console.log("you clicked the second button");
    $(".first-button").text("wrong");
});

$(".third-button").click(() => {
    console.log("you clicked the third button");
    $("button").css("background","red");
});

var bgcolor = "blue"
console.log("default")
console.log(bgcolor)

function getInput() {
    bgcolor = document.getElementById("bgcolor").value;
    //console.log("Citam z funkcie")
    //console.log(bgcolor)
    submitOK = "true";
  
    //if (fname.length < 10) {
    //  alert("The name may have no more than 10 characters");
    //  submitOK = "false";
    //} 
  
    if (submitOK == "false") {
      return false;
    }
  }

// to apply the reaction only after the FIRST click
$(".submit").one('click',function(e) {
    //console.log("you submitted a color");
    $("div").text("You submitted ").append(bgcolor).append(".");
    console.log("I read a color");
    console.log(getInput());
    $("button").css("background",bgcolor);
});



/*
$(".submit").click(() => {
    //console.log("you submitted a color");
    $("div").text("You submitted ").append(bgcolor).append(".");
    console.log("I read a color");
    console.log(getInput());
    $("button").css("background",bgcolor);
});
*/
