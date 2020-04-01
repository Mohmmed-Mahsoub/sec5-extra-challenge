var score = 0;

// A function constructor work as a machine to print whatever question and check the right answer
var Question = function(question, answers, correctAns) {
    this.question = question;
    this.answers = answers;
    this.correctAns = correctAns;
    this.showQuestion = function() {

        //print whatever question
        document.querySelector('.show-questions').innerHTML = '<p>' + question + '</p>';

        //print whatever answer
        for(var i=0; i < answers.length; i++) {
            var ans = document.createElement('p');
            ans.textContent = answers[i];
            document.querySelector('.show-questions').appendChild(ans);
        }
    }

    //check the right answer
    this.checkAnswer = function() {
        
        if(document.querySelector('.show-case input').value == correctAns) {
            score = score + 1;
            document.querySelector('.check').textContent = 'Correct Answer'            
        }else {
            document.querySelector('.check').textContent = 'Wrong Answer' 
        }
        document.querySelector('.score').textContent = 'Your score is: ' + score;
    }
    
}

// here we put the questions include: the question itself, the answers and the correct answer
var allQuestions = [
    q1 = new Question(
        'Is Egypt a rich country??', //the question itself
        ['0: Yes','1: No'], //the answers
        0 //the correct answer
    ),
    q2 = new Question(
        'How many Americans are Egyptian?',
        ['0: 50 000','1: 110 000', '2: 140 000'],
        2
    ),
    q3 = new Question(
        'how many Egyptians?',
        ['0: 50 million','1: 92 million', '2: 120 million'],
        1
    )
]

// generate random numbers without repetition
var max = allQuestions.length;
var questionNum = [];
for (var i = 0; i <max; i ++) {
    var temp = Math.floor (Math.random () * max);

    //if it is not present
    if (questionNum.indexOf (temp) == -1) {
        questionNum.push (temp);

    //to continue looping until filling the array with different numbers only
    } else i--; 
}

// Call showQuestion function on first random questions
var num = 0;
allQuestions[questionNum[num]].showQuestion();

// Waiting for the answer number from the user then check if it's correct
document.querySelector('.show-case form').addEventListener('submit', function() {

    // preventDefault behiver for the form
    event.preventDefault();
    
    //check the right answer
    allQuestions[questionNum[num]].checkAnswer();

    //make the input empty after the user submits his answer
    document.querySelector('.show-case input').value = '';

    //check if the questions are finished
    if(num < max -1) {
        
        // go to the next random question
        num++;

        // Call showQuestion function for this next randon question
        allQuestions[questionNum[num]].showQuestion();
    
    //finish the test if there aren't more questions
    } else {
        document.querySelector('.show-questions').style.display = 'none';
        document.querySelector('.show-case').style.display = 'none'
    }
    
});

