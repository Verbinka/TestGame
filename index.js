let questions = ['What is the capital city of Kazakhstan?', 'What is the name of my favourite game?', 'What do I do?'];
let answers = [
                ['0: Moscow', '1: Almaty', '2: Astana', '3: Lada', 2],
                ['0: Dota2', '1: CS:GO', '2: Valorant', '3: PUBG', 1],
                ['0: programmer', '1: painter', '2: artist', '3: gamer', 0]
              ];


// questions stands for array of questions
// answers stands for array of answers with the answer in the end of array
var questionGame = function(questions, answers) {
    this.questions = questions;
    this.answers = answers;
    let randomQuestion;
    let points = 0;

    function randomizeQuestion() {
        randomQuestion = Math.round(Math.random() * (questions.length-1));
    }
    
    function displayQuestion() {
        console.log(questions[randomQuestion] + '\n');
        for(let i = 0; i <= answers.length; i++) {
            console.log(answers[randomQuestion][i] + '\n');
        }
    }

    // constructs new question and returns the indexed number of answer in array || ex. 3 or 0
    function makeQuestion() {
        randomizeQuestion();
        displayQuestion();
    }

    function askQuestion() {
      makeQuestion();
      let yourAnswer = prompt('Enter the correct answer: ');  

      if (yourAnswer === null ) {
        askQuestion();
      } else if(yourAnswer == answers[randomQuestion][answers.length+1]) {
           points++;
           console.log('Your score is: ' + points);
           askQuestion();
       } else if (yourAnswer == 'exit'){
           return;
       }
    }

    return {
        displayQuestion : displayQuestion,
        makeQuestion : makeQuestion,
        randomizeQuestion : randomizeQuestion,
        askQuestion : askQuestion
    }
} 

let game = questionGame(questions, answers);
game.askQuestion();

