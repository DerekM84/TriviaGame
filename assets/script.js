$(document).ready(function () {

    console.log("connected & ready");
    $(".game-section").fadeOut(0);
    $(".game-score").fadeOut(0);

    // Transitions for page crossfading

    function phaseOne() {
        $(".game-start").fadeOut(325);
        $(".game-section").fadeIn(325);
    }

    function phaseTwo() {
        $(".game-section").fadeOut(325);
        $(".game-score").fadeIn(325);
    }

    function phaseThree() {
        $(".game-score").fadeOut(0);
        $(".game-start").fadeIn(100);
    }


    // Global Variables

    var rightAnswers = 0;
    var wrongAnswers = 5;
    var count = 60;

    // submit function has to be outside of submit-button click, because if the timer runs out it needs to be able to call it too. 
    
    function submit() {
        
        var submit = setTimeout(phaseTwo, 1000);
        
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
    }
    // Button Clicks, and what runs afterwards

    $(".start-button").on("click", function () {
        var start = setTimeout(phaseOne, 1000);

    });
    
    $(".submit-button").on("click", function () {
        submit();
    });


    $(".restart-button").on("click", function () {
        rightAnswers = 0;
        wrongAnswers = 5;
        $(".correct-total").empty();
        $(".incorrect-total").empty();
        var restart = setTimeout(phaseThree, 1000)

    });



});