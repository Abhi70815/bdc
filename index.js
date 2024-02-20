let open = document.querySelector("#open");
let close = document.querySelector("#close");

function myFunction() {
    var x = document.getElementById("nav_links");
    console.log("hh");
    if(x.style.display === "block") {
        x.style.display ="none";
    }
    else {
        x.style.display = "block";
    }
}