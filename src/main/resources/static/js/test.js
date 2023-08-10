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
    // 1
    [
        new Question("2 + 2 = ",
        [
            new Answer("2", 0),
            new Answer("3", 0),
            new Answer("4", 1),
            new Answer("0", 0)
        ]),
        new Question("4 - 4 = ",
        [
          new Answer("2", 0),
          new Answer("3", 0),
          new Answer("4", 0),
          new Answer("0", 1)
      ]),
    ],
    // 2
    [
        new Question("2 + 1 = ",
        [
            new Answer("2", 0),
            new Answer("3", 1),
            new Answer("4", 0),
            new Answer("0", 0)
        ])
    ],
    // 3
    [
      new Question("2 + 0 = ",
       [
           new Answer("2", 1),
           new Answer("3", 0),
           new Answer("4", 0),
           new Answer("0", 0)
      ])
  ],
];

const quiz = new Quiz(questions[Number(document.getElementById("test").value) - 1], results);

console.log(quiz);

Update();

function Post() {
    document.getElementById("result").value = "" + quiz.score;
}

function Update() {
    if (quiz.current < quiz.questions.length) {
        console.log(quiz.questions[quiz.current].text);
        document.getElementById("quest").innerHTML = quiz.questions[quiz.current].text;

        for (let i = 0; i < quiz.questions[quiz.current].answers.length; ++i) {
            const btn = document.getElementById("btn" + (i + 1));
            btn.innerHTML = quiz.questions[quiz.current].answers[i].text;
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
        document.getElementById("quest").innerHTML = "Ваш результат: " + quiz.score + " из " + quiz.questions.length;
        for (let i = 0; i < quiz.questions[quiz.current - 1].answers.length; ++i) {
            const btn = document.getElementById("btn" + (i + 1));
            btn.style = "display: none";
        }
        document.getElementById("form").classList.remove("hide");
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

function CheckValid(value) {
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
//    console.log(name, surname);
    var ok = (name != "" && surname != "");
    for (var i = 0; i < name.length; ++i) {
        ok &= (name[i].toLowerCase() >= 'а' && name[i].toLowerCase() <= 'я');
    }
    for (var i = 0; i < surname.length; ++i) {
        ok &= (surname[i].toLowerCase() >= 'а' && surname[i].toLowerCase() <= 'я');
    }
//    console.log(ok);
    if (ok) {
        document.getElementById("post").disabled = false;
        document.getElementById("post").classList.remove("disabled");
        document.getElementById("post").classList.add("enable");
    } else {
        document.getElementById("post").disabled = true;
        document.getElementById("post").classList.remove("enable");
        document.getElementById("post").classList.add("disabled");
    }
}
