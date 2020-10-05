var increment = 0;

$("#up").click(() => {
    increment = increment+1;
    console.log(increment);
    $("h2").text(increment);
});

$("#down").click(() => {
    increment = increment-1;
    console.log(increment);
    $("h2").text(increment);
});