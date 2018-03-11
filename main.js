var currentTimer;

function startTimer() {
    // convert to int because Edge browser's number fields allow non-numerical inputs.
    var input = parseInt(document.getElementById("numberBox").value);
    
    if (isNaN(input)) { // user input isn't a number
        document.getElementById("errorOutput").innerHTML = "Please enter a number first.";
    }
    else { // user input is a number
        document.getElementById("targetOutput").innerHTML = "Please wait " + input + " seconds";

        // clear any ongoing timers
        if (typeof currentTimer != "undefined") {
            clearTimeout(currentTimer);
        }
        // start new timer
        currentTimer = setTimeout(
            function () {
                document.getElementById("targetOutput").innerHTML = "Finished processing";
            },
            input * 1000);
        
        // clear error div
        document.getElementById("errorOutput").innerHTML = "";
    }
}