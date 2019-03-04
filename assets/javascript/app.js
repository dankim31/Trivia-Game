$(document).ready(function(){
//Game starts when you click start button
$('#start-button').on('click', function() {
game.start();
})

//Game ends whens you click submit button
$(document).on('click', '#end', function(){
    game.done();
})

// list of questions 
var questions = [
    {
        question: "1. Which NBA team plays in Chicago?",
        choice: ["Bulls", "Celtics", "Lakers", "Spurs"],
        answer: "Bulls",
    },
    {
        question: "2. Which team did Kobe Bryant play for?",
        choice: ["Spurs", "Thunder", "Lakers", "Raptors"],
        answer: "Lakers",
    },
    {
        question: "3. Which NBA team has the most championships?",
        choice: ["Clippers", "Celtics", "Lakers", "Bulls"],
        answer: "Celtics",
    },
    {
        question: "4. Who won the 2018 NBA MVP award?",
        choice: ["Wilt Chamberlain", "Tim Duncan", "James Harden", "Stephen Curry"],
        answer: "James Harden",
    }
]
    
// Create game counter
var game = {
    correct: 0,
    incorrect: 0,
    counter: 10,
    countDown: function (){
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter <= 0){
            game.done();
        }
    },

    // Loop and append questions
    start: function(){
        timer = setInterval(game.countDown,1000);
        $("#subwrapper").prepend('<h2>Time Remaining: <spand id="counter">120</span> Seconds</h2>');
        $("#start-button").remove();
        for(var i=0;i<questions.length;i++){
            $('#subwrapper').append("<h2>" + questions[i].question + "</h2>");
            for (var j=0;j<questions[i].choice.length;j++){
                $("#subwrapper").append("<input type='radio' name='question-"+ i + "'value='" + questions[i].choice[j]+"'>" + questions[i].choice[j])
            }
        }
        $('#subwrapper').append('<br><button id"end">Submit</button>')
    },

    // Game answer check after timer complete
    done: function(){
        $.each($('input[name="question-0"]:checked'), function(){
            if($(this).val()===questions[0].answer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-1"]:checked'), function(){
            if($(this).val()===questions[1].answer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-2"]:checked'), function(){
            if($(this).val()===questions[2].answer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-3"]:checked'), function(){
            if($(this).val()===questions[3].answer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();
    },

    //append results on  new page
        result: function(){
            clearInterval(timer);
            $('#subwrapper h2').remove();

            $('#subwrapper').html("<h2>Results:</h2>");
            $('#subwrapper').append("<h3>Correct Answers: "+this.correct+ "</h3>");
            $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+ "</h3>");
            $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+ "</h3>");
        
    }
}
})