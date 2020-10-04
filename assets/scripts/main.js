/*
Kenzie Dice Roller Assessment JS File
Student: Jeff Gourlay
8/

/*
Constants and Vairables
*/
let badDiceInput = false; 
let badFaceInput = false;
let dieRolls = [];
let diceLoop = 0;
let diceFace = 0;
let diceList = document.getElementById("dice-list");
let diceNode;
let diceTextNode;
let diceTotal = 0;
let displayLoop = 0;
let rollValue = 0;
let numDice = 0;
let numDiceInput = document.querySelector('#numdice');
let numFace = 0;
let numFaceInput = document.querySelector('#numface');
let rollButton = document.querySelector('#roll-button');
let showRollButton = document.querySelector('#show-all-button');
let resetButton = document.querySelector('#reset-button');

console.log("Hi");
showRollButton.disabled = true;
/*
Event handlers
*/

rollButton.addEventListener("click", function() {
    if (Number(numDiceInput.value) < 1 || Number(numDiceInput.value) > 6) {
        alert("Please choose a number of dice from 1 through 6");
        numDiceInput.value = '';
        numDiceInput.focus();
    }
    else if (Number(numFaceInput.value) < 6 || Number(numFaceInput.value) > 20) {
        alert("Please choose a number of faces from 6 through 20");
        numFaceInput.value = '';
        numFaceInput.focus();
    }
    else {
        for (diceLoop = 0; diceLoop < numDiceInput.value; diceLoop++) {
            rollValue = Math.floor(Math.random() * numFaceInput.value) + 1;
            console.log(rollValue + ", " + (Math.floor(Math.random() * numFaceInput.value) + 1));
            dieRolls.push(rollValue);
            console.log(diceLoop + ", " + dieRolls[diceLoop]);
            diceTotal += rollValue;
        }
        document.getElementById("dice-total").innerHTML = diceTotal;
        showRollButton.disabled = false;
    }
});

showRollButton.addEventListener('click', function() {
    for (displayLoop = 0; displayLoop < dieRolls.length; displayLoop++) {
        diceNode = document.createElement("LI");
        diceTextnode = document.createTextNode(dieRolls[displayLoop]);
        diceNode.appendChild(diceTextnode);
        diceList.appendChild(diceNode);
    }
});

resetButton.addEventListener('click', function() {
    diceLoop = dieRolls.length - 1;
    while (diceLoop >= 0) {
        console.log(diceLoop);
        console.log("Removing element #" + diceLoop + "with value of " + dieRolls[diceLoop]);
        dieRolls.pop();
//        diceList.removeChild(diceList.childNodes[0]);
        console.log(diceList.childNodes);
        diceLoop--;
    }
/*
    for (diceLoop = dieRolls.length - 1; diceLoop => 0; diceLoop--)  {
        console.log(diceLoop);
        dieRolls.pop();
        document.getElementById('dice-list').removeChild(document.getElementById('dice-list').childNodes[diceLoop]);
        console.log("Removed element #" + diceLoop);
    }
    */
    diceList.innerHTML = "";
    numDiceInput.value = '';
    numFaceInput.value = '';
    showRollButton.disabled = true;
    document.getElementById("dice-total").innerHTML = "";
    console.table(dieRolls);
})
