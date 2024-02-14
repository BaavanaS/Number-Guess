let y = Math.floor(Math.random() * 10 + 1);
console.log(y);
let counter = 5;
let correctValue = y;

function pass() {
    counter--; 
}

document.getElementById("submit").onclick = function () {
    let x = document.getElementById("guess").value;
    let text;

    if (isNaN(x) || x < 1 || x > 10) {
        alert("NOT VALID!! Please enter a number between 1 to 10");
        text = "";
    }
	else if(x>y){
		text="VALID!!!,But Try a Smaller Number";
		document.getElementById("number").src = "img/wrong5.jpg";
		pass();
	}
	else if(x<y){
		text="VALID!!!,But Try a Larger Number";
		document.getElementById("number").src = "img/wrong5.jpg";
		pass();
	}
    else {
        text = "VALID!!!, Great You Got It Right";
        if (x != y) {
            pass();
        }
    }
    document.getElementById("validationMessage").innerHTML = text;

    if (x == y) {
        document.getElementById("total").innerHTML = "Total Number of Chances are 5";
        document.getElementById("find").innerHTML = " CONGRATULATIONS!!!, You won in " + (counter--) + " chance...";
        document.getElementById("number").src = "img/correct3.png";
        console.log("True");
    }
    else {
        if (counter === 0) {
            document.getElementById("find").innerHTML = "Game Over!!!, You've run out of chances.";
			document.getElementById("number").src = "img/gameover1.png";
			document.getElementById("correctValue").innerHTML = "The correct number was: " + correctValue;
        }
        else {
            document.getElementById("find").innerHTML = "OOPS!!,Your guess is WRONG(Try Again) " + counter + " chances left";
            console.log("False");
        }
    }
}