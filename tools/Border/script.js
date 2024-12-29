var frame = document.getElementById("frame");
var cssOutput = document.getElementById("result");
var copyButton = document.getElementById("copyButton");

var lt = 0, lb = 0, rt = 0, rb = 0; /*borders*/
var red = 0, green = 0, blue = 0; /*rgb*/
var out = ""; 

document.getElementById("borders").addEventListener("input", function(event) {
    if (event.target.id === "borderRTL") {
        frame.style.borderTopLeftRadius = event.target.value + "%";
        lt = event.target.value;
    } else if (event.target.id === "borderRBL") {
        frame.style.borderBottomLeftRadius = event.target.value + "%";
        lb = event.target.value;
    } else if (event.target.id === "borderRTR") {
        frame.style.borderTopRightRadius = event.target.value + "%";
        rt = event.target.value;
    } else if (event.target.id === "borderRBR") {
        frame.style.borderBottomRightRadius = event.target.value + "%";
        rb = event.target.value;
    }
    
    cssAreaUpdate();
});

document.getElementById("background").addEventListener("input", function(event) {
    if (event.target.id === "backgroundRed") {
        red = event.target.value;
    } else if (event.target.id === "backgroundGreen") {
        green = event.target.value;
    } else if (event.target.id === "backgroundBlue") {
        blue = event.target.value;
    }
    
    frame.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
    cssAreaUpdate();
});

function cssAreaUpdate() {
    out = "border-radius: " + lt + "% " + rt + "% " + lb + "% " + rb + "%;\n" +
          "background-color: rgb(" + red + ", " + green + ", " + blue + ");\n";
    cssOutput.innerHTML = out;
}

// Copy to clipboard functionality
copyButton.addEventListener("click", function() {
    cssOutput.select();
    document.execCommand("copy");
});
