function refreshPage(){
    window.location.reload();
}

var n1 = Math.floor((Math.random() * 6)) + 1;

var n2 = Math.floor((Math.random() * 6)) + 1;



function greaterNumber() {

    var randiceimg1 = "dice" + n1 + ".png";
    
    var randiceimg2 = "dice" + n2 + ".png";

    var randiceimgsrc1 = "images/" + randiceimg1;

    var randiceimgsrc2 = "images/" + randiceimg2;

    var image1 = document.querySelectorAll("img")[0];

    var image2 = document.querySelectorAll("img")[1];

    image1.setAttribute("src", randiceimgsrc1);

    image2.setAttribute("src", randiceimgsrc2);

    var win = document.querySelector("h1");

    if (n1 > n2) {
        win.innerHTML = "&#128681; Player 1 WINS";
    }else if (n1 == n2) {
        win.innerHTML = "It's a TIE"
    } else {
        win.innerHTML = "Player 2 WINS &#128681;";
    }
    
}