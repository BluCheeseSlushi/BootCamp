let startBtn = document.querySelector("#startBtn");
let quizPage = document.querySelector("#quizPage");
let x = 0;
// let timer = document.querySelector("#timer");
let time = 100;


function updatetime() {
    // let clock = setInterval(updatetime,1000);
    document.getElementById("timer").innerHTML = "<p>Time: " + time;
    if (time > 0) {
        time = time - 1;
    }
    else if (x == 1) {
        // clearInterval(clock);
        stopTime();
    }
    else {
        // clearInterval(clock);
        stopTime();
    }
}

function stopTime() {
    document.getElementById("quizPage").innerHTML = "<h1 class=\"display-1 text-center\">Game Over</h1><h2 class=\"display-4 text-center\">Better luck next time</h2><button id=\"restart\" type=\"submit\" class=\"col btn btn-dark\">restart</button>";
    restart.addEventListener("click", quiz);
}

function quiz() {
    time = 100
    setInterval(updatetime,1000);
    document.getElementById("quizPage").innerHTML = "<div class=\"row\"> <h4 class=\"display-4 text-center\">What special charaecter is used at the end of a line of javascript?</h4> <button id=\"answer1\" type=\"submit\" class=\"col-6 pt-2 btn btn-dark\">;</button> <button id=\"answer2\" type=\"submit\" class=\"col-6 pt-2 btn btn-dark\">\\</button> <button id=\"answer3\" type=\"submit\" class=\"col-6 pt-2 btn btn-dark\">k</button> <button id=\"answer4\" type=\"submit\" class=\"col-6 pt-2 btn btn-dark\">~</button> </div>";
    let answer1  = document.querySelector("#answer1");
    let answer2  = document.querySelector("#answer2");
    let answer3  = document.querySelector("#answer3");
    let answer4  = document.querySelector("#answer4");
    
    answer1.addEventListener("click", function () {
        if (time < 0); {
            x = x + 1;
        }
        quiz2();
    });
    answer2.addEventListener("click", function () {
        time = time - 10;
        if (time < 0); {
            x = x + 1;
        }
        quiz2();
    });
    answer3.addEventListener("click", function () {
        time = time - 10;
        if (time < 0); {
            x = x + 1;
        }
        quiz2();
    });
    answer4.addEventListener("click", function () {
        time = time - 10;
        if (time < 0); {
            x = x + 1;
        }
        quiz2();
    });

}

function quiz2() {
    document.getElementById("quizPage").innerHTML = "<div class=\"row\"> <h4 class=\"display-4 text-center\">What is the \"sekeleton\" of a web page?</h4> <button id=\"answer1\" type=\"submit\" class=\"col-6 pt-2 btn btn-dark\">css</button> <button id=\"answer2\" type=\"submit\" class=\"col-6 pt-2 btn btn-dark\">java</button> <button id=\"answer3\" type=\"submit\" class=\"col-6 pt-2 btn btn-dark\">html</button> <button id=\"answer4\" type=\"submit\" class=\"col-6 pt-2 btn btn-dark\">javascript</button> </div>";
    let answer1  = document.querySelector("#answer1");
    let answer2  = document.querySelector("#answer2");
    let answer3  = document.querySelector("#answer3");
    let answer4  = document.querySelector("#answer4");
    
    answer1.addEventListener("click", function () {
        time = time - 10;
        if (time < 0); {
            x = x + 1;
        }
        quiz3();
    });
    answer2.addEventListener("click", function () {
        time = time - 10;
        if (time < 0); {
            x = x + 1;
        }
        quiz3();
    });
    answer3.addEventListener("click", function () {
        if (time < 0); {
            x = x + 1;
        }
        quiz3();
    });
    answer4.addEventListener("click", function () {
        time = time - 10;
        if (time < 0); {
            x = x + 1;
        }
        quiz3();
    });
}

function quiz3() {
    document.getElementById("quizPage").innerHTML = "<div class=\"row\"> <h4 class=\"display-4 text-center\">What html tag is used for inline css syles?</h4> <button id=\"answer1\" type=\"submit\" class=\"col-6 pt-2 btn btn-dark\">inline</button> <button id=\"answer2\" type=\"submit\" class=\"col-6 pt-2 btn btn-dark\">css</button> <button id=\"answer3\" type=\"submit\" class=\"col-6 pt-2 btn btn-dark\">color</button> <button id=\"answer4\" type=\"submit\" class=\"col-6 pt-2 btn btn-dark\">style</button> </div>";
    let answer1  = document.querySelector("#answer1");
    let answer2  = document.querySelector("#answer2");
    let answer3  = document.querySelector("#answer3");
    let answer4  = document.querySelector("#answer4");
    
    answer1.addEventListener("click", function () {
        time = time - 10;
        if (time < 0); {
            x = x + 1;
        }
        quiz4();
    });
    answer2.addEventListener("click", function () {
        time = time - 10;
        if (time < 0); {
            x = x + 1;
        }
        quiz4();
    });
    answer3.addEventListener("click", function () {
        time = time - 10;
        if (time < 0); {
            x = x + 1;
        }
        quiz4();
    });
    answer4.addEventListener("click", function () {
        if (time < 0); {
            x = x + 1;
        }
        quiz4();
    });
}

function quiz4() {
    document.getElementById("quizPage").innerHTML = "<div class=\"row\"> <h4 class=\"display-4 text-center\">What html tag is used for paragraphs?</h4> <button id=\"answer1\" type=\"submit\" class=\"col-6 pt-2 btn btn-dark\">br</button> <button id=\"answer2\" type=\"submit\" class=\"col-6 pt-2 btn btn-dark\">para</button> <button id=\"answer3\" type=\"submit\" class=\"col-6 pt-2 btn btn-dark\">text</button> <button id=\"answer4\" type=\"submit\" class=\"col-6 pt-2 btn btn-dark\">p</button> </div>";
    let answer1  = document.querySelector("#answer1");
    let answer2  = document.querySelector("#answer2");
    let answer3  = document.querySelector("#answer3");
    let answer4  = document.querySelector("#answer4");
    
    answer1.addEventListener("click", function () {
        time = time - 10;
        if (time < 0); {
            x = x + 1;
        }
        quiz5();
    });
    answer2.addEventListener("click", function () {
        time = time - 10;
        if (time < 0); {
            x = x + 1;
        }
        quiz5();
    });
    answer3.addEventListener("click", function () {
        time = time - 10;
        if (time < 0); {
            x = x + 1;
        }
        quiz5();
    });
    answer4.addEventListener("click", function () {
        if (time < 0); {
            x = x + 1;
        }
        quiz5();
    });
}

function quiz5() {
    document.getElementById("quizPage").innerHTML = "<div class=\"row\"> <h4 class=\"display-4 text-center\">What html tag is used for headers?</h4> <button id=\"answer1\" type=\"submit\" class=\"col-6 pt-2 btn btn-dark\">top</button> <button id=\"answer2\" type=\"submit\" class=\"col-6 pt-2 btn btn-dark\">important</button> <button id=\"answer3\" type=\"submit\" class=\"col-6 pt-2 btn btn-dark\">strong</button> <button id=\"answer4\" type=\"submit\" class=\"col-6 pt-2 btn btn-dark\">h1</button> </div>";
    let answer1  = document.querySelector("#answer1");
    let answer2  = document.querySelector("#answer2");
    let answer3  = document.querySelector("#answer3");
    let answer4  = document.querySelector("#answer4");
    
    answer1.addEventListener("click", function () {
        time = time - 10;
        stopTime();
    });
    answer2.addEventListener("click", function () {
        time = time - 10;
        stopTime();
    });
    answer3.addEventListener("click", function () {
        time = time - 10;
        stopTime();
    });
    answer4.addEventListener("click", function () {
        stopTime();
    });
}

let nameSubmit = document.querySelector("#scoreSubmit");
let nameArea = document.querySelector("#score");

function submitHighscore() {
    let score = nameArea.textContent;;
    localStorage.setItem("score",score);
}

nameSubmit.addEventListener("click", submitHighscore);
startBtn.addEventListener("click", quiz);
// startBtn.addEventListener("click", updatetime);