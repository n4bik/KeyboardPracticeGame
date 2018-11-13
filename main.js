let score = 0;

function generateRandomButton() {
  let letter = "";
  let possible = ["1", "2", "3", "4", "5", "E", "R", "F", "G", "SHIFT", "LEWY CTRL", "SPACJA"];

  return letter += possible[(Math.floor(Math.random() * possible.length))];
};

function updateRandomButton() {
    document.getElementById("randomButton").innerHTML = generateRandomButton();
};

function renderLetterToPress(letterToRender) {
    document.write("<h2 id=\"randomButton\">" + letterToRender + "</h2>");
};

function myEventHandler(e){
    let randomButton = document.getElementById("randomButton").innerHTML.valueOf();
    let keyCode = e.keyCode;

    switch (randomButton) {
        case "1":
            checkKeyCode(keyCode, 49);
            break;
        case "2":
            checkKeyCode(keyCode, 50);
            break;
        case "3":
            checkKeyCode(keyCode, 51);
            break;
        case "4":
            checkKeyCode(keyCode, 52);
            break;
        case "5":
            checkKeyCode(keyCode, 53);
            break;
        case "E":
            checkKeyCode(keyCode, 69);
            break;
        case "R":
            checkKeyCode(keyCode, 82);
            break;
        case "F":
            checkKeyCode(keyCode, 70);
            break;
        case "G":
            checkKeyCode(keyCode, 71);
            break;
        case "SHIFT":
            checkKeyCode(keyCode, 16);
            break;
        case "LEWY CTRL":
            checkKeyCode(keyCode, 17);
            break;
        case "SPACJA":
            checkKeyCode(keyCode, 32);
            break;
        default:
            generateNewButton();
            break;
    }
};

function checkKeyCode(enteredKeyCode, requiredKeyCode) {
    if (enteredKeyCode == requiredKeyCode){
        scoreUpdate();
        updateRandomButton();
    } else {
        wrongButtonInformation();
    }
};

function scoreUpdate() {
    score++;
    document.getElementById("score").innerHTML = "WYNIK: " + score;
    document.getElementById("wrongButtonWarning").innerHTML = "";
}

function wrongButtonInformation() {
    document.getElementById("wrongButtonWarning").innerHTML = "<small><em>ZŁY PRZYCISK</em></small>";
}

renderLetterToPress(generateRandomButton());

window.addEventListener('keydown', myEventHandler, false);