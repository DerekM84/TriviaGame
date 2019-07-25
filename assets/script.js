$(document).ready(function () {

    console.log(".js linked");

    // Initial page load will hide 2 of the 3 pages.
    $(".game-section").fadeOut(0);
    $(".game-score").fadeOut(0);

    // Transitions for page crossfading. functions will be called on clicks later.

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
    var count = 5;
    var timer;
    $(".time-remaining").empty();
    $(".time-remaining").append(count);



    // submit function has to be outside of submit-button click, because if the timer runs out it needs to be able to call it from reachable scope.

    function submit() {
        console.log("submit-called");
        clearInterval(timer);
        

        var submit = setTimeout(phaseTwo, 600);

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
        phaseTwo();
    }

        // Button Clicks, and what runs afterwards

    $(".start-button").on("click", function () {

            count = 5;
        var start = setTimeout(phaseOne, 600);
            clearInterval(timer);
            timer = setInterval(() => {

            count--;
            $(".time-remaining").empty();
            $(".time-remaining").append(count);
            // When time runs out, call the submit function automatically, which will clear this interval. 
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
        rightAnswers = 0;
        wrongAnswers = 5;
        var restart = setTimeout(phaseThree, 600)

    });

    


});