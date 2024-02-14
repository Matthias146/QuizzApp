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
        "answer_1": "<HTML>",
        "answer_2": "<HTML Start>",
        "answer_3": "<HTML GO>",
        "answer_4": "<!DOCTYPE>",
        "right_answer": 4
    },
    {
        "question": "Was befindet sich im Tag <img src='...' />?",
        "answer_1": "Ein Video...",
        "answer_2": "Eine Datei...",
        "answer_3": "Ein Text...",
        "answer_4": "Ein Bild...",
        "right_answer": 4
    },
    {
        "question": "Was befindet sich meistens innerhalb des <section> Tags?",
        "answer_1": "Der Body Bereich... <body>",
        "answer_2": "Ein Artikel... <article>",
        "answer_3": "Der Head Bereich... <head>",
        "answer_4": "Die Navigation... <nav>",
        "right_answer": 2
    },
];

let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion()
}

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {

}