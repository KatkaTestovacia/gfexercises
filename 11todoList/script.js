var item = "default";

function getInput() {
    item = document.getElementById("item-todo").value;
    //console.log("Citam z funkcie")
    console.log("item-todo")
    submitOK = "true";
  
    //if (fname.length < 10) {
    //  alert("The name may have no more than 10 characters");
    //  submitOK = "false";
    //} 
  
    if (submitOK == "false") {
      return false;
    }
  }



$("button").click(() => {
    //console.log("you submitted a color");
    //$("div").text("You submitted ").append(bgcolor).append(".");
    console.log("You added an item");
    console.log(getInput());
    var it = document.createElement("li")
    it.innerHTML = item
    console.log(item);
    console.log(it);
    $("ul").append(it);
    //$("div").text("Okno, vyskoc ").append(item);
});

