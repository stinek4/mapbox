const quizContainer = document.querySelector("#quiz")
const submitButton = document.querySelector("#submit");
const resultsContainer = document.querySelector("#results");


const nextButton = document.querySelector("#next");
const previousButton = document.querySelector("#previous");
let slides;
let currentSlide = 0;

const myQuestions = [
    {
        question: "Kheopspyramiden ble bygget for Farao Kheops og stod ferdig ca. 2580 f.kr. Pyramiden er 136m høy. Det er et kjent pariserhjul som er 135m høyt. Hvilket?",
        answers: {
            a: "Pariserhjulet fra verdensutstillingen i Chicago",
            b: "London Eye i London",
            c: "Riesenrad i Wien",
        },
        correctAnswer: "b"
    },
    {
        question: "London Eye åpnet i 1999. Et kjent hotell åpnet også i 1999, hvilket?",
        answers: {
            a: "Marina Bay Sands i Singapore",
            b: "Paris Las Vegas i Las Vegas",
            c: "Atlantis Paradise Island på Bahamas",
        },
        correctAnswer: "c"
    },
    {
        question: "Atlantis Paradise Island ligger på Bahamas. Bahamas ligger sør-øst for Florida. Hvilken av disse fornøyelsesparkene ligger i Florida?",
        answers: {
            a: "Tivoli",
            b: "Dollywood",
            c: "Disney World",
        },
        correctAnswer: "c"
    },

];

const buildQuiz = () => {
    const output = [];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];

            for(letter in currentQuestion.answers){
                answers.push(
                    `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

                output.push(
                    `<div class="slides">
                    <div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join('')}</div>
                    </div>`

                );
        });
    
        quizContainer.innerHTML = output.join("");  
    }

const showResults = () => {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    //keep track of users answers
    let numCorrect = 0;

    //for each question
    myQuestions.forEach( (currentQuestion, questionNumber) => {

        //find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector).value) || {}.value;

        console.log(userAnswer, currentQuestion.correctAnswer);

        //if answer is correct
        if(userAnswer===currentQuestion.correctAnswer){
            //add to the number of correct answers
            numCorrect++;
            answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else{
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    //show number of correct answers out of total
    resultsContainer.innerHTML = 'Resultat:' + numCorrect + ' av ' + myQuestions.length;
}

function showSlide(n){

    slides = document.querySelectorAll(".slides");
    slides = Array.from(slides);

    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide===0){
        previousButton.style.display = 'none';
    }else{
        previousButton.style.display = 'inline-block';
    }
    if(currentSlide===slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    }else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}

function showNextSlide(){
    showSlide(currentSlide +1);
}

function showPreviousSlide(){
    showSlide(currentSlide -1);
}




buildQuiz();

//setTimeout(showSlide, 500);

showSlide(currentSlide);

//console.log(output);
// console.log(myQuestions);

previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
submitButton.addEventListener('click', showResults);
