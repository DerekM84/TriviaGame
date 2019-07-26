$(document).ready(function () {

    console.log(".js linked");

});

// Initial page load will hide 2 of the 3 pages.
$(".game-section").fadeOut(0);
$(".game-score").fadeOut(0);
$(".column-one").fadeOut(0);
$(".column-two").fadeOut(0);

// Transitions for page crossfading. functions will be called on clicks later.

function phaseOne() {
    $(".game-start").fadeOut(325);
    $(".game-section").fadeIn(325);
    $(".column-one").fadeIn(325);
    $(".column-two").fadeIn(325);
    $(".game-score").fadeOut(0);

    console.log("phaseOne...");
}

function phaseTwo() {

    $(".game-start").fadeOut(325);
    $(".game-section").fadeOut(325);
    $(".column-one").fadeOut(325);
    $(".column-two").fadeOut(325);
    $(".game-score").fadeIn(325);
    console.log("phaseTwo...");


}

function phaseThree() {
    $(".game-score").fadeOut(0);
    $(".game-start").fadeIn(200);
    $(".game-section").fadeOut(0);
    $(".column-one").fadeOut(0);
    $(".column-two").fadeOut(0);
    rightAnswers = 0;
    wrongAnswers = 5;

    console.log("phaseThree...");

}


// Global Variables

var rightAnswers = 0;
var wrongAnswers = 5;
var count = 60;
var timer;
$(".time-remaining").empty();
$(".time-remaining").append(count);



// submit function has to be outside of submit-button click, because if the timer runs out it needs to be able to call it from reachable scope.
if (count <= 0) {
    console.log("count <= 0");
    submit();
}

function submit() {



    console.log("submit-called");
    $(".correct-total").empty();
    $(".incorrect-total").empty();

    phaseTwo();
    console.log("phaseTwo called");
    var submitted = setTimeout(phaseTwo, 2000);

    var radioOne = $("input[name='one']:checked").val();
    var radioTwo = $("input[name='two']:checked").val();
    var radioThree = $("input[name='three']:checked").val();
    var radioFour = $("input[name='four']:checked").val();
    var radioFive = $("input[name='five']:checked").val();

    console.log("Radio values are " + radioOne, radioTwo, radioThree, radioFour, radioFive);

    if (radioOne === "correct") {
        rightAnswers++;
        wrongAnswers--;
    }
    if (radioTwo === "correct") {
        rightAnswers++;
        wrongAnswers--;
    }
    if (radioThree === "correct") {
        rightAnswers++;
        wrongAnswers--;
    }
    if (radioFour === "correct") {
        rightAnswers++;
        wrongAnswers--;
    }
    if (radioFive === "correct") {
        rightAnswers++;
        wrongAnswers--;
    }

    console.log("New Scores are Right: " + rightAnswers + " Wrong: " + wrongAnswers);

    $(".correct-total").empty();
    $(".correct-total").append(rightAnswers);

    $(".incorrect-total").empty();
    $(".incorrect-total").append(wrongAnswers);

    clearInterval(timer);
}

// Button Clicks, and what runs afterwards

$(".start-button").on("click", function () {
    count = 60;
    var start = setTimeout(phaseOne, 600);
    clearInterval(timer);
    timer = setInterval(() => {
        count--;
        $(".time-remaining").empty();
        $(".time-remaining").append(count);
        if (count <= 0) {
            console.log("count <= 0");
            submit();
        }
    }, 1000);
});


$(".submit-button").on("click", function () {
    submit();
    
});


$(".restart-button").on("click", function () {
    $(".correct-total").empty();
    $(".incorrect-total").empty();
    var restart = setTimeout(phaseThree, 800);

});


