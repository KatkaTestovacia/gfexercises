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