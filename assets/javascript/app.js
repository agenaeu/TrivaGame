// things to do
// Create Timer

// Time to do the whole quiz



(function() {
  setTimeout(endQuiz, 1000 * 20);
function endQuiz(){
    /* $("div").hide(); */
    alert("Quiz is over! You scored" + numCorrect + " questions right.");
}
    function buildQuiz() {
      
      const output = [];
  
    
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="slide">
          <div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
        {
            question: "What is 9x9?",
            answers: {
                a: "18",
                b: "0",
                c: "72",
                d: "81"
            },
            correctAnswer: "d"
        },
        {
            question: "What is 108/3",
            answers: {
                a: "54",
                b: "18",
                c: "36",
                d: "9"
            },
            correctAnswer: "c"
        },
      {
        question: "What is 53%5?",
        answers: {
            a: "11",
            b: "10",
            c: "3",
            d: "none of these"
        },
        correctAnswer: "c"
    },
      {
        question: "what is 130,286/19.32?",
        answers: {
            a: "...",
            b: "6743.58",
            c: "bruh",
            d: "6743.59"
        },
        correctAnswer: "b"
    }
    ];
  
    // display quiz right away
    buildQuiz();
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
  })();
