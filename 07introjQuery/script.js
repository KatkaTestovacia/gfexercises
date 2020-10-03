color = "purple";
number = 10;
word = "cool";

console.log("test")

if (color == "purple") {
    $(".N").css("background-color","purple")
    console.log("Color purple")
} else {
    console.log("Color is not purple.")
}

if (number > 100){
    $(".E").text("whoah, that's a big number.")
    //console.log("whoah, that's a big number.")
} else {
    $(".E").text("just a regular number, please.")
    //console.log("just a regular number, please.")
}

if(word == "cool"){
    $(".S").text("Power of DOM")
}