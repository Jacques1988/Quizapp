
let allQuestions = [
    {
        'question': "Wer hat HTML erfunden?",
        'answer_1': "Robbie Williams",
        'answer_2': "Lady Gaga",
        'answer_3': "Tim Berner`s Lee",
        'answer_4': "Justin Biber",
        'right_answer': 3
    },
    {
        'question': "Was bedeutet das HTML Tag &lta&gt?",
        'answer_1': "Text Fett",
        'answer_2': "Container",
        'answer_3': "Link",
        'answer_4': "Kursiv",
        'right_answer': 3
    },
    {
        'question': "Wie bindet man eine Website in eine Website ein?",
        'answer_1': "&lt;iframe&gt;, &ltframe&gt, &ltframeset&gt",
        'answer_2': "&lt;iframe&gt;",
        'answer_3': "&lt;frame&gt;",
        'answer_4': "&lt;frameset&gt;",
        'right_answer': 2
    },
]

let right_answer;
let question_number = 0;
let progress = 0;

function nextQuestion() {
    hideElements();
    document.getElementById('quizcontainer').classList.remove('d-none');
    if (question_number == allQuestions.length) {
        finishQuiz();
    } else {


        question_number = question_number + 1;
        progress = Math.round((question_number / allQuestions.length) * 100);
        document.getElementById('progress-bar').innerHTML = progress + "%";
        document.getElementById('progress-bar').style.width = progress + "%";
        loadQuestion();
    }
}

function hideElements() {
    document.getElementById('next-btn').classList.add('d-none');
    document.getElementById('correct-answer').classList.add('d-none');
    document.getElementById('wrong-answer').classList.add('d-none');
}


function answer(a) {

    if (a == right_answer) {
        document.getElementById('correct-answer').classList.remove('d-none');
        document.getElementById('next-btn').classList.remove('d-none');
        document.getElementById('wrong-answer').classList.add('d-none');
    } else {
        document.getElementById('wrong-answer').classList.remove('d-none');
        document.getElementById('correct-answer').classList.add('d-none');
    }
}

function finishQuiz(){
    document.getElementById('quizcontainer').classList.add('d-none');
    document.getElementById('quizfinishcontainer').classList.remove('d-none');
}