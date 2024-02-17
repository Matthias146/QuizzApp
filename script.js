let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Was bedeutet das HTML Tag a?",
        "answer_1": "Text Fett",
        "answer_2": "Container",
        "answer_3": "Ein Link",
        "answer_4": "Kursiv",
        "right_answer": 3
    },
    {
        "question": "Wie beginnt man ein Html Dokument",
        "answer_1": "HTML",
        "answer_2": "HTML Start",
        "answer_3": "HTML GO",
        "answer_4": "!DOCTYPE",
        "right_answer": 4
    },
    {
        "question": "Was befindet sich im Tag img src='...' /?",
        "answer_1": "Ein Video...",
        "answer_2": "Eine Datei...",
        "answer_3": "Ein Text...",
        "answer_4": "Ein Bild...",
        "right_answer": 4
    },
    {
        "question": "Was befindet sich meistens innerhalb des section Tags?",
        "answer_1": "Der Body Bereich... body",
        "answer_2": "Ein Artikel... article",
        "answer_3": "Der Head Bereich... head",
        "answer_4": "Die Navigation... nav",
        "right_answer": 2
    },
];

let currentQuestion = 0;
let rightQuestions = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion()
}

function showQuestion() {

    if (currentQuestion >= questions.length) {
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none';
        document.getElementById('amount-of-questions').innerHTML = questions.length;
        document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
        document.getElementById('header-img').src = 'img/pokal.png';
    } else {

        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').innerHTML = `${percent} %`
        document.getElementById('progress-bar').style.width = `${percent}%`
        console.log('Fortschritt', percent);

        let question = questions[currentQuestion];

        document.getElementById('question-number').innerHTML = currentQuestion + 1;
        document.getElementById('questionText').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    console.log('Selected answer is', selection)
    let selectedQuestionNumber = selection.slice(-1);
    console.log('SelectedQuestNumber is', selectedQuestionNumber)
    console.log('current Question is', question['right_answer'])

    let isRightAnswer = `answer_${question['right_answer']}`

    if (selectedQuestionNumber == question['right_answer']) {
        console.log('Richtige Antwort')
        document.getElementById(selection).parentNode.classList.add("bg-success")
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add("bg-danger")
        document.getElementById(isRightAnswer).parentNode.classList.add("bg-success")
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++ // von Frage 0 zu 1
    document.getElementById('next-button').disabled = true;
    resetAnswerButton()
    showQuestion()
}

function resetAnswerButton() {
    document.getElementById('answer_1').parentNode.classList.remove("bg-danger")
    document.getElementById('answer_1').parentNode.classList.remove("bg-success")
    document.getElementById('answer_2').parentNode.classList.remove("bg-danger")
    document.getElementById('answer_2').parentNode.classList.remove("bg-success")
    document.getElementById('answer_3').parentNode.classList.remove("bg-danger")
    document.getElementById('answer_3').parentNode.classList.remove("bg-success")
    document.getElementById('answer_4').parentNode.classList.remove("bg-danger")
    document.getElementById('answer_4').parentNode.classList.remove("bg-success")
}