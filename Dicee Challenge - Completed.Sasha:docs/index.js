var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomSourse = "./images/images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomSourse);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomSourse2 = "./images/images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomSourse2);




if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "The fisrt player wins";
}

else if (randomNumber2 > randomNumber1) {
   document.querySelector("h1").innerHTML = "The second player wins";
}

else {
   document.querySelector("h1").innerHTML = "Draw!";
}