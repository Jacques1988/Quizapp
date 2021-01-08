function loadQuestion() {
    document.getElementById('question').innerHTML = allQuestions[question_number - 1]['question'];
    document.getElementById('answer1').innerHTML = allQuestions[question_number - 1]['answer_1'];
    document.getElementById('answer2').innerHTML = allQuestions[question_number - 1]['answer_2'];
    document.getElementById('answer3').innerHTML = allQuestions[question_number - 1]['answer_3'];
    document.getElementById('answer4').innerHTML = allQuestions[question_number - 1]['answer_4'];
    right_answer = allQuestions[question_number - 1]['right_answer'];
}

