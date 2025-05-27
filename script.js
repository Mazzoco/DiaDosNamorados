const restartButton = document.getElementById("restart");


const questions = [
    {
        question: "Qual é a nossa data de aniversário de namoro?",
        options: ["1 de Outubro", "14 de Setembro", "8 de Setembro", "22 de Setembro"],
        answer: "22 de Setembro",
        image: "./fotos/imagem1.png"

    },
    {
        question: "Qual minha cor favorita?",
        options: ["Azul", "Vermelho", "Roxo", "Amarelo"],
        answer: "Azul",
        image: "./fotos/imagem2.png"
    },
    {
        question: "Qual foi meu primeiro presente para você?",
        options: ["Alexa", "Pijama", "Vestido", "Pelúcia do Stitch"],
        answer: "Pelúcia do Stitch",
        image: "./fotos/imagem3.png"
    },
    {
        question: "Qual foi o primeiro filme que terminamos juntos?",
        options: ["Enrolados", "Jogos Vorazes", "10 coisas que eu odeio em você", "Van Helsing"],
        answer: "10 coisas que eu odeio em você",
        image: "./fotos/imagem4.png"
    }
];

let currentQuestion = 0;
let score = 0;

const quizDiv = document.getElementById("quiz");
const nextButton = document.getElementById("next");
const resultDiv = document.getElementById("result");

function loadQuestion() {
    quizDiv.innerHTML = "";
    const q = questions[currentQuestion];

    const perguntaImg = document.getElementById("pergunta-img");
perguntaImg.src = q.image;


    const questionTitle = document.createElement("h2");
    questionTitle.textContent = q.question;
    quizDiv.appendChild(questionTitle);

    q.options.forEach(option => {
        const optionDiv = document.createElement("div");
        optionDiv.textContent = option;
        optionDiv.classList.add("option");
        optionDiv.addEventListener("click", () => selectOption(option));
        quizDiv.appendChild(optionDiv);
    });
}

function selectOption(selectedOption) {
    const correct = questions[currentQuestion].answer;
    if (selectedOption === correct) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    if (score === questions.length) {
        window.location.href = "premio.html";
    } else {
        quizDiv.style.display = "none";
        nextButton.style.display = "none";
        resultDiv.innerHTML = `<h2>Você acertou ${score} de ${questions.length} perguntas!</h2>
        <p>Achei que me conhecia...😢</p>`;
        restartButton.style.display = "inline-block";
    }
}

restartButton.addEventListener("click", () => {
    window.location.reload();
});

nextButton.addEventListener("click", () => {
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

// Iniciar quiz
loadQuestion();
