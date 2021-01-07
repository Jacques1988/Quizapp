

let question_1 = "Wer hat HTML erfunden?";
let question_1_answer_1 = "Robbie Williams";
let question_1_answer_2 = "Lady Gaga";
let question_1_answer_3 = "Tim Berner`s Lee";
let question_1_answer_4 = "Justin Biber";

let question_2 = "Was bedeutet das HTML Tag &lta&gt?"
let question_2_answer_1 = "Text Fett";
let question_2_answer_2 = "Container";
let question_2_answer_3 = "Link";
let question_2_answer_4 = "Kursiv";

let right_answer;
let question_number = 0;
let progress = 0;

function nextQuestion() {
    question_number = question_number + 1;
    progress = question_number * 10;
    document.getElementById('progress-bar').innerHTML = progress + "%";
    document.getElementById('progress-bar').style.width = progress + "%";
    if (question_number == 1) {
        document.getElementById('question').innerHTML = question_1;
        document.getElementById('answer1').innerHTML = question_1_answer_1;
        document.getElementById('answer2').innerHTML = question_1_answer_2;
        document.getElementById('answer3').innerHTML = question_1_answer_3;
        document.getElementById('answer4').innerHTML = question_1_answer_4;
        right_answer = 3;
        console.log(question_number);
    }
    if (question_number == 2) {
        document.getElementById('question').innerHTML = question_2;
        document.getElementById('answer1').innerHTML = question_2_answer_1;
        document.getElementById('answer2').innerHTML = question_2_answer_2;
        document.getElementById('answer3').innerHTML = question_2_answer_3;
        document.getElementById('answer4').innerHTML = question_2_answer_4;
        right_answer = 3;
    }
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