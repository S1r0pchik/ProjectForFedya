class Quiz {
   constructor(questions, results) {
       this.questions = questions;
       this.results = results;
       this.score = 0;
       this.current = 0;
   }
}

class Question {
   constructor(text, answers) {
       this.text = text;
       this.answers = answers;
   }

   Click(index) {
       return this.answers[index].value;
   }
}

class Answer {
   constructor(text, value) {
       this.text = text;
       this.value = value;
   }
}

class Result {
   constructor(text, value) {
       this.text = text;
       this.value = value;
   }
}

const results =
[
   new Result("Вам многому нужно научиться", 0),
   new Result("Вы уже неплохо разбираетесь", 2),
   new Result("Ваш уровень выше среднего", 4),
   new Result("Вы в совершенстве знаете тему", 6)
];

const questions =
[
   new Question("2 + 2 = ",
   [
       new Answer("2", 0),
       new Answer("3", 0),
       new Answer("4", 1),
       new Answer("0", 0)
   ]),
   new Question("2 + 1 = ",
    [
        new Answer("2", 0),
        new Answer("3", 1),
        new Answer("4", 0),
        new Answer("0", 0)
   ])
];

const quiz = new Quiz(questions, results);

console.log(quiz);

Update();

function Update() {
    if (quiz.current < quiz.questions.length) {
        console.log(quiz.questions[quiz.current].text);
        document.getElementById("quest").innerHTML = quiz.questions[quiz.current].text;

        const main = document.getElementById("main");
        main.innerHTML = "";
        for (let i = 0; i < quiz.questions[quiz.current].answers.length; ++i) {
            main.innerHTML += '<button onclick="Check(' + i + ')">' + quiz.questions[quiz.current].answers[i].text + '</button>';
        }
        document.getElementById("score").innerHTML = quiz.current + 1 + '/' + quiz.questions.length;
    } else {
        console.log(quiz.current, quiz.questions.length);
        var res = 0;
        for (var i = quiz.results.length - 1; i >= 0; --i) {
            if (quiz.results[i].value <= quiz.score) {
                res = i;
                break;
            }
        }
        document.getElementById("quest").innerHTML = quiz.results[res].text;
        document.getElementById("main").innerHTML = "";
        document.getElementById("score").innerHTML = "";
    }
}

function Check(index) {
    var value = quiz.questions[quiz.current].answers[index].value;
    quiz.current++;
    console.log(value);
    if (value == 1) {
        quiz.score++;
    }
    console.log(quiz);
    Update();
}
