document.getElementById("guessButton").onclick = function() {
    var guess = document.getElementById("guessInput").value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var result = parseInt(xhr.responseText);
            if (guess < result) {
                document.getElementById("result").innerText = "Too low!";
            } else if (guess > result) {
                document.getElementById("result").innerText = "Too high!";
            } else {
                document.getElementById("result").innerText = "Congratulations! You've guessed it!";
            }
        }
    }
    xhr.send();
};