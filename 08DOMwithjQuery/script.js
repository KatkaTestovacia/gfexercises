let names=[" Ana ","Peter ","Katka ","Lucas ","Julia"];


//Katka.style.fontWeight = "bold"

/*
function printEach(array) {
    array.forEach((number) => {
        console.log(number);

        if(number=="Katka") {
            $("li").append(number)
        } else {
            $("li").append(number)
        }
    });
}
*/

//printEach(names)
//console.log("each")




names.forEach(add);

function add(name) {
    $( "li" ).append(name);
    console.log(name);
}

/*
for(i=0;i<names.length;i++){
    //$( "li" ).append(names[i]);
    if(names[i]=="Katka") {
        console.log(names[i])
    }
}

*/

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

  var tit = document.createElement("h1")
  tit.innerHTML = additionalBlock.title
  var txt = document.createElement("p")
  txt.innerHTML = additionalBlock.text

  //$("body").append(additionalBlock.title);
  $("body").append(tit)
  $("body").append(txt)


  //$("body").append("<h1> appended text </h1>")
