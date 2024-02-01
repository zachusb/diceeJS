var header = document.querySelector("h1");


document.querySelector(".btn").addEventListener("click", function(){
    var randomNumber1 = Math.floor((Math.random() * 6) + 1);

    var randomNumber2 = Math.floor((Math.random() * 6) + 1);

    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
    if(randomNumber1 > randomNumber2)
        header.innerHTML = "Player 1 Wins!";
    else if(randomNumber1 < randomNumber2)
        header.innerHTML = "Player 2 Wins!";
    else
        header.innerHTML = "Draw!";
}, false);

