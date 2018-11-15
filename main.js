let missCounter = 0;
let score = 0;

function generateRandomButton() {
  let button = "";
  let possible = ["1", "2", "3", "4", "5", "E", "R", "F", "G", "SHIFT", "LEWY CTRL", "SPACJA"];

  return button += possible[(Math.floor(Math.random() * possible.length))];
};

function generateNotReapeatedValue() {
  let newButton = generateRandomButton();
  let currentButton = document.getElementById("randomButton").innerHTML;

  while (currentButton === newButton) {
    console.log("newButton = " + newButton);
    newButton = generateRandomButton();
  }

  return newButton;
};

function updateRandomButton() {
    document.getElementById("randomButton").innerHTML = generateNotReapeatedValue();
};

function checkKeyCode(enteredKeyCode, requiredKeyCode) {
    if (enteredKeyCode == requiredKeyCode){
        updateScore();
        updateRandomButton();
    } else {
        updateMissCounter();
    }
};

function checkKeyCodeEventHandler(e) {
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
            break;
    }
};

function updateScore() {
    score++;
    document.getElementById("score").innerHTML = "TRAFIENIA: " + score + '&nbsp &nbsp &nbsp &nbsp &nbsp' + "PUDŁA: " + missCounter;
    document.getElementById("wrongButtonWarning").innerHTML = "";
};

function updateMissCounter() {
    missCounter++;
    document.getElementById("score").innerHTML = "TRAFIENIA: " + score + '&nbsp &nbsp &nbsp &nbsp &nbsp' + "PUDŁA: " + missCounter;
    document.getElementById("wrongButtonWarning").innerHTML = "<small><em>ZŁY PRZYCISK</em></small>";
};

function renderKeyToPress(keyToPress) {
    document.write("<h2 id=\"randomButton\">" + keyToPress + "</h2>");
};

renderKeyToPress(generateRandomButton());

window.addEventListener('keydown', checkKeyCodeEventHandler, false);