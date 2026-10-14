const dispInput = document.getElementById("dispInput");

const key = [
  ["0", 1, 1, 1, 1, 1, 1, 0],
  ["1", 0, 1, 1, 0, 0, 0, 0],
  ["2", 1, 1, 0, 1, 1, 0, 1],
  ["3", 1, 1, 1, 1, 0, 0, 1],
  ["4", 0, 1, 1, 0, 0, 1, 1],
  ["5", 1, 0, 1, 1, 0, 1, 1],
  ["6", 1, 0, 1, 1, 1, 1, 1],
  ["7", 1, 1, 1, 0, 0, 0, 0],
  ["8", 1, 1, 1, 1, 1, 1, 1],
  ["9", 1, 1, 1, 1, 0, 1, 1],
  ["a", 1, 1, 1, 0, 1, 1, 1],
  ["b", 0, 0, 1, 1, 1, 1, 1],
  ["c", 0, 0, 0, 1, 1, 0, 1],
  ["d", 0, 1, 1, 1, 1, 0, 1],
  ["e", 1, 0, 0, 1, 1, 1, 1],
  ["f", 1, 0, 0, 0, 1, 1, 1],
  ["g", 1, 1, 1, 1, 0, 1, 1],
  ["h", 0, 0, 1, 0, 1, 1, 1],
  ["i", 0, 1, 1, 0, 0, 0, 0],
  ["j", 0, 1, 1, 1, 0, 0, 0],
  ["k", 1, 0, 1, 0, 1, 1, 1],
  ["l", 0, 0, 0, 1, 1, 1, 0],
  ["m", 1, 0, 1, 0, 1, 0, 1],
  ["n", 0, 0, 1, 0, 1, 0, 1],
  ["o", 1, 1, 1, 1, 1, 1, 0],
  ["p", 1, 1, 0, 0, 1, 1, 1],
  ["q", 1, 1, 1, 0, 0, 1, 1],
  ["r", 0, 0, 0, 0, 1, 0, 1],
  ["s", 1, 0, 1, 1, 0, 1, 1],
  ["t", 0, 0, 0, 1, 1, 1, 1],
  ["u", 0, 1, 1, 1, 1, 1, 0],
  ["v", 0, 0, 1, 1, 1, 0, 0],
  ["w", 0, 1, 0, 1, 0, 1, 1],
  ["x", 0, 1, 1, 0, 1, 1, 1],
  ["y", 0, 1, 1, 1, 0, 1, 1],
  ["z", 1, 1, 0, 1, 1, 0, 1],
  [" ", 0, 0, 0, 0, 0, 0, 0]


];

const digitSpace = 125;




function hideTab(pos, tabNum) {
  let tab = document.getElementById('tab' + tabNum + 'p' + pos);

  tab.style.animation = "spin3DCloseVert 0.1s ease-in-out forwards";
if(pos > 9) {
  if ((tab.id).substring(3, 4) == 1 || (tab.id).substring(3, 4) == 4 || (tab.id).substring(3, 4) == 7) {
    tab.style.animation = "spin3DCloseHorz 0.1s ease-in-out forwards";
  }
} else {

  if ((tab.id).substring(6, 7) == 1 || (tab.id).substring(6, 7) == 4 || (tab.id).substring(6, 7) == 7) {
    tab.style.animation = "spin3DCloseHorz 0.1s ease-in-out forwards";
  }

}
}

function showTab(pos, tabNum) {
  let tab = document.getElementById('tab' + tabNum + 'p' + pos);

  tab.style.animation = "spin3DOpenVert 0.1s ease-in-out forwards";

  if ((tab.id).substring(3, 4) == 1 || (tab.id).substring(3, 4) == 4 || (tab.id).substring(3, 4) == 7) {
    tab.style.animation = "spin3DOpenHorz 0.1s ease-in-out forwards";
  }
}

function dispDigit(digit, pos) {

  let num = 0;
  //console.log(dispInput.value);
  num = digit;
  let currentDigit = 0;


  const row = key.find(row => row[0] === num);

  //console.log(row);
  rowSt = JSON.stringify(row);

  for (let p = 1; p < 8; p++) {
    currentDigit = row[p];
    //if((p % 2) == 1) currentDigit = currentDigit.substring(0,1);
    //else currentDigit = currentDigit.substring(1, 2);
    //console.log(currentDigit);
    if (currentDigit == 0) hideTab(pos, p);
    else if (currentDigit == 1) showTab(pos, p);
  }



}
/*
for (let num = 0; num <= 9; num++) {
  setTimeout(() => {
    dispDigit(num, 1);
    dispDigit(num, 2);
  }, num * 1000); 

}  
*/

let digitCount = 0;


function newNum(letter) {
digitCount++;
var tabs = 1;
//console.log(digitCount);
  

for(var t = 1; t < 8; t++) {

  const tab = document.createElement("div");


//console.log(t);
  tab.classList.add('tab');
  tab.style.backgroundColor = "#9f1584";
  tab.style.filter = "drop-shadow(3px 4px 4px rgba(0, 0, 0, 0.4))";
  tab.style.border = "1px solid black";

  tab.id = 'tab' + t + 'p' + digitCount;

  var idTemp = (tab.id).substring(3, 4);
  if(idTemp == 1 || idTemp == 4 || idTemp == 7) {
    tab.style.width = "70px";
    tab.style.height = "20px";
  } else {
    tab.style.width = "20px";
    tab.style.height = "70px";
  }

  //tab.innerText = tab.id;
  tab.style.position = "absolute";
  
  

  if(idTemp == 1) {
    tab.style.top = "30px";
    tab.style.left = 100 + (digitSpace * digitCount - 1) + "px";
  } else if (idTemp == 2) {
    tab.style.top = "45px";
    tab.style.left = 160 + (digitSpace * digitCount - 1) + "px";
  } else if (idTemp == 3) {
    tab.style.top = "125px";
    tab.style.left = 160 + (digitSpace * digitCount - 1) + "px";
  } else if (idTemp == 4) {
    tab.style.top = "190px";
    tab.style.left = 100 + (digitSpace * digitCount) + "px";
  } else if (idTemp == 5) {
    tab.style.top = "125px";
    tab.style.left = 90 + (digitSpace * digitCount) + "px";
  } else if (idTemp == 6) {
    tab.style.top = "45px";
    tab.style.left = 90 + (digitSpace * digitCount) + "px";
  } else if (idTemp == 7) {
    tab.style.top = "110px";
    tab.style.left = 100 + (digitSpace * digitCount) + "px";
  } 


  document.getElementById("clockFontDiv").appendChild(tab);

  showTab(digitCount, idTemp);




}

  goToDigit(letter, digitCount);

}

function goToDigit(digit, id) {

console.log("displaying " + digit + " on disp " + id);

  digitIndex = key.findIndex(row => row[0] === digit);

console.log(digit + " is location " + digitIndex);

  for (let x = 0; x <= digitIndex; x++) {
    setTimeout(() => {
      let targetKey = key[x][0];
      dispDigit(targetKey, id);
    }, x * 75);
  }

}

function makeWord(word) {
  let ogWord = word

for(f = 0; f < ogWord.length; f++) {

let currentLetter = word.substring(0,1);
word = word.substring(1, word.length);

newNum(currentLetter);

console.log("displaying " + currentLetter + ". remaining: " + word);
}

}


function removeAllTabs() {


    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(element => {
        element.remove();
    });

    digitCount = 0;
}

//makeWord("the clock");
