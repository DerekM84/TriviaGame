$(document).ready(function() {

    console.log("connected & ready");
    $(".game-section").fadeOut(0);
    $(".game-score").fadeOut(0);

// Transition functions, for faded page swaps

function phaseOne() {
    $(".game-start").fadeOut(250);
    $(".game-section").fadeIn(400);
}   

function phaseTwo() {
    $(".game-section").fadeOut(250);
    $(".game-score").fadeIn(400);
}

function phaseThree() {
    $(".game-score").fadeOut(250);
    $(".game-start").FadeIn(400);
}


// Button Clicks

$(".startButton").on("click", function() {

        // apply Display rotation 
        var start = setTimeout(phaseOne, 1000);
        // $(".game-section").css({"display": "flex"});
        
    })

$(".submit-button").on("click", function() {
        // Next phase and check answers with conditionals

        var submit = setTimeout(phaseTwo, 1000);
    })






});