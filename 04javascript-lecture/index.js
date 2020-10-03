// conditions

var myNumber1 = 5;
var myNumber2 = 7;

if (myNumber1 > myNumber2 ){
    console.log("Yes, I'm smaller!")
} else {
    console.log("Oh, I'm not smaller ...")
}

//loops

for(var i =0; i < 100; ++i) {
    //if(i % 2 == 0) {
    if (isEven(i)) {
        console.log(i + ". I won't cheat on the exam!");
    }
}

var myFriends = ["Bill", "Joe", "Francis"];

for(var i=0; i<myFriends.length;++i) {
    //console.log("hi, "+myFriends[i]);
    greet(myFriends[i])
}

myFriends.forEach(function (element) {
    //console.log("hi, " + element);
    greet(element);
})


//functions

function greet(name) {
    console.log("Hello, " + name)
}

function isEven(number) {
    var even = number % 2;
    return even;
}

//jQuery

//$("#plantatree").hide();

$("#makefriends").fadeOut(500).delay(1000).fadeIn(500);

$("#closebutton").click(function () {
    $("#newsletter").slideToggle(500);
    $("#newsletter-open").show();
});

$("#newsletter-open").click(function () {
    $("#newsletter").slideToggle(500);
    $("#newsletter-open").hide();
});

var cards = ["plantatree","makefriends","moneybag"]

/*
for(var i=0;i<cards.length;++i){
    
    $(cards[i]).mouseenter(function() {
        $(this).css({"width":"200px"})
        }

    for(var i=0;i<cards.length;++i){
        $(cards[i]).mouseleave(function() {
            $(this).css({"width":"100px"})
        }
}
*/

$(".card").mouseenter(function() {
    $(this).css({"widht":"200px"})
});
