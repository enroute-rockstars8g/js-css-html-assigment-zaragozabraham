function fibo() {
    const fiboPosition = parseInt(document.getElementById("FiboInput").value);

    let a = 0, b = 1, c, res;
    if (fiboPosition <=3) {
        if (fiboPosition == 1) {
            res = a;
        }else {
            res = b;
        }
    }else {
        for (let i = 1; i <= fiboPosition; i++) {
            res = a;
            c = a + b;
            a = b;
            b = c;
        }
    }

    console.log(res);

    if (fiboPosition > 10) {
        greedyBastard(res, "fiboContainer");
    } else {
        tacoRender(res, "fiboContainer");
    }

    deleteElement("Fib");
}

function fact() {
    const factNumber = parseInt(document.getElementById("FacInput").value);
    
    let x = factorial(factNumber);

    if (factNumber < 6) {
        tacoRender(x, "facContainer");
    } else if ( factNumber > 5 && factNumber < 11) { // 5 < factNumber < 11
        tooMuchTacos(x, "facContainer");
    } else {
        greedyBastard(x, "facContainer");
    }

    deleteElement("Fac");
    
}

function factorial(n) {
    let res = 1;
    for (let i = n; i>0; i--) {
        res *= i;
    }
    return res
}

function tacoRender(number, trick) {
    const container = document.getElementById(trick);
    paragraph = document.createElement("p");
    paragraph.setAttribute("id","MageSpeech");
    let taco = " &#x1F32E; "
    let amount = "&#x2728; " + number + " tacos have been created using magic...&#x2728; <br>"
    
    paragraph.innerHTML += amount;

    for (let k = 0; k < number; k++) {
        paragraph.innerHTML += taco;
    }
    
    container.appendChild(paragraph);
}

function tooMuchTacos(number, trick) {
    const container = document.getElementById(trick);
    paragraph = document.createElement("p");
    paragraph.setAttribute("id","MageSpeech");

    let speech = "I am a wise mage, so listen to me. Rendering " + number + " tacos isn't a good idea."
    paragraph.innerHTML += speech;

    img = document.createElement("img");
    img.setAttribute("src", "./assets/alert.png");
    img.setAttribute("id", "alert");

    container.appendChild(paragraph);
    container.appendChild(img);
}

function greedyBastard(number, trick) {

    const container = document.getElementById(trick);
    paragraph = document.createElement("p");
    paragraph.setAttribute("id","MageSpeech");

    let speech = "It seems you're a bit greedy, I've turned your Fibonacci number into tacos but... " + number + " tacos is a bit too much, isn't it? Maybe share some with me ;) <br>... maybe try a smaller number?"
    paragraph.innerHTML += speech;

    container.appendChild(paragraph);
}

function deleteElement(id) {
    const deletedElement = document.getElementById(id).remove()
}

function renderExp(bool) {
    const container = document.getElementById("MoreData");
    paragraph = document.createElement("p");
    paragraph.setAttribute("id", "MageSpeech");

    if (bool) {
        data = "Mobile Development with Flutter.<br>Basic data analysis with Python + Pandas<br>Development with JAVA EE (never use it after training)"
    } else {
        data = "So you like chisme. I droped out of Med School after 4 years."
    }
    
    paragraph.innerHTML += data;

    container.appendChild(paragraph);
}

var hiddenEP = true;
var hiddenBP = true;

function switchEP(id) {
    hiddenEP = !hiddenEP;
    if (hiddenEP) {
        document.getElementById(id).style.visibility = 'hidden';
    } else {
        document.getElementById(id).style.visibility = 'visible';
    }
}

function switchBP(id) {
    hiddenBP = !hiddenBP;
    if (hiddenBP) {
        document.getElementById(id).style.visibility = 'hidden';
    } else {
        document.getElementById(id).style.visibility = 'visible';
    }
}