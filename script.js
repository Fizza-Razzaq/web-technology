const questions = [
    { q:"Which property enables flexible layout in CSS?", options:["flex","block","inline","grid"], answer:0 },
    { q:"Flexbox is 1-dimensional. True/False?", options:["True","False"], answer:0 },
    { q:"Which method selects a single element?", options:["querySelector","getElement","selectOne","find"], answer:0 },
    { q:"Media queries help make layouts responsive. True/False?", options:["True","False"], answer:0 },
    { q:"Which tag ensures mobile scaling?", options:["meta viewport","meta mobile","meta device","meta width"], answer:0 }
];

let index = 0;
let score = 0;
let answered = Array(questions.length).fill(false);

const welcome = document.getElementById("welcome");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");

const startBtn = document.getElementById("startBtn");
const curIdx = document.getElementById("curIdx");
const total = document.getElementById("total");
const totalQs = document.getElementById("totalQs");
const curScore = document.getElementById("curScore");
const questionText = document.getElementById("questionText");
const optionsEl = document.getElementById("options");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const prog = document.getElementById("prog");

const finalMsg = document.getElementById("finalMsg");
const finalSub = document.getElementById("finalSub");
const finalScore = document.getElementById("finalScore");
const finalTotal = document.getElementById("finalTotal");
const finalPercent = document.getElementById("finalPercent");
const retryBtn = document.getElementById("retryBtn");
const homeBtn = document.getElementById("homeBtn");

total.textContent = questions.length;
totalQs.textContent = questions.length;
finalTotal.textContent = questions.length;

startBtn.onclick = () => {
    index = 0;
    score = 0;
    answered.fill(false);
    curScore.textContent = 0;

    welcome.classList.remove("active");
    quiz.classList.add("active");
    loadQuestion();
};

function loadQuestion(){
    const q = questions[index];
    curIdx.textContent = index + 1;
    questionText.textContent = q.q;
    feedback.textContent = "";
    nextBtn.disabled = true;
    prevBtn.disabled = index === 0;

    prog.style.width = `${(index / questions.length) * 100}%`;

    optionsEl.innerHTML = "";
    q.options.forEach((opt,i)=>{
        let btn = document.createElement("div");
        btn.className = "option";
        btn.textContent = (i+1) + ". " + opt;

        btn.onclick = () => selectAnswer(i);

        optionsEl.appendChild(btn);
    });
}
function selectAnswer(i){
    if (answered[index]) return;

    answered[index] = true;

    const q = questions[index];
    const correct = q.answer;

    const optionButtons = document.querySelectorAll(".option");

    if (i === correct){
        optionButtons[i].classList.add("correct");
        feedback.textContent = "Correct ✔";
        feedback.style.color = "green";
        score++;
        curScore.textContent = score;
    } else {
        optionButtons[i].classList.add("wrong");
        optionButtons[correct].classList.add("correct");
        feedback.textContent = "Wrong ✖";
        feedback.style.color = "red";
    }

    nextBtn.disabled = false;
    if (index === questions.length - 1){
        setTimeout(showResult, 800);
    } else {
        setTimeout(()=>{
            index++;
            loadQuestion();
        }, 800);
    }
}

nextBtn.onclick = () => {
    if (index < questions.length - 1){
        index++;
        loadQuestion();
    } else {
        showResult();
    }
};

prevBtn.onclick = () => {
    if (index > 0){
        index--;
        loadQuestion();
    }
};

function showResult(){
    quiz.classList.remove("active");
    result.classList.add("active");

    let percent = Math.round((score / questions.length) * 100);

    finalScore.textContent = score;
    finalPercent.textContent = percent + "%";

    if (percent >= 80){
        finalMsg.textContent = "Excellent!";
        finalSub.textContent = "Great performance.";
    } else if (percent >= 50){
        finalMsg.textContent = "Good effort!";
        finalSub.textContent = "You can improve.";
    } else {
        finalMsg.textContent = "Try again!";
        finalSub.textContent = "Keep practicing.";
    }
}

retryBtn.onclick = () => {
    index = 0;
    score = 0;
    answered.fill(false);
    result.classList.remove("active");
    quiz.classList.add("active");
    loadQuestion();
};

homeBtn.onclick = () => {
    result.classList.remove("active");
    welcome.classList.add("active");
};
