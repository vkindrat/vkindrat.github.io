const start = document.getElementById("start");

const quiz =  document.getElementById("quiz");

const qImg = document.getElementById("qImage");

const question = document.getElementById("question");


const counter = document.getElementById("counter");


const timeGauge = document.getElementById("timeGauge");


const choiceA = document.getElementById("A");

const choiceB = document.getElementById("B");

const choiceC = document.getElementById("C");

const choiceD = document.getElementById("D");

const progress = document.getElementById("progress");

const scoreContainer = document.getElementById("scoreContainer");

let questions = [
{
	question: "Qual dessas pessoas possuí um grau de parentesco com Rafael Gotz?",
	choiceA: "Trevor Philips",
	choiceB: "Guidoverso",
	choiceC: "Matheus Salvatti",
	choiceD: "Nacho Vidal",
	correct: "B"
},	
{
	question: "O que disse Rafael Gotz após dormir na cadeira?",
	choiceA: "Eh pegadinha",
	choiceB: "Coxa um ae meu bom",
	choiceC: "Bodiei de maconha",
	choiceD: "Kidinha, deixa eu estourar seu reto",
	correct: "C"
},
{
	question: "Qual desses sons não é comercial?",
	choiceA: "dark",
	choiceB: "psytrance",
	choiceC: "tropicalia",
	choiceD: "forest",
	correct: "D"
},
{
	question: "Quem foi o culpado pela morte do Bong gigante responsavel pela destruição de inúmeros neurônios de um certo grupo de pessoas?",
	choiceA: "Verme",
	choiceB: "Preto a.k.a BombaNegra",
	choiceC: "Ronnie a.k.a Bombadinho",
	choiceD: "Vinie a.k.a Kidinha",
	correct: "A"
},
{
	question: "O que disse Elton após um longo dia?",
	choiceA: "What I have Bird",
	choiceB: "Who cares?",
	choiceC: "Corridinha monstra",
	choiceD: "Tirem suas próprias conclusões",
	correct: "B"
},
{
	question: "O que disse Juta no final da madrugada?",
	choiceA: "Chapei de Yuger",
	choiceB: "Chama a mãe",
	choiceC: "Quem disse que nóis vai dormir co paper?",
	choiceD: "Qltestneu celular morreu se oaesoero que vocês estejam recebendo isso",
	correct: "C"
}
];

var lastQuestionIndex = questions.length-1;
const questionTime = 12;
const gaugeWidth = 150;
let count = 0;
const gaugeProgress = gaugeWidth / questionTime;
let TIMER ;
let score = 0;
let runningQuestionIndex = 0;


function renderQuestion(){
	let q = questions[runningQuestionIndex]
	question.innerHTML = "<p>" + q.question + "</p>";
	choiceA.innerHTML = q.choiceA;
	choiceB.innerHTML = q.choiceB;
	choiceC.innerHTML = q.choiceC;
	choiceD.innerHTML = q.choiceD;
	
	
	
	

}

start.addEventListener("click", startQuiz)


function startQuiz(){
	start.style.display = "none";
	renderQuestion();
	quiz.style.display = "block";
	progressRender();
	counterRender();
	TIMER = setInterval(counterRender, 1000)
}


function progressRender(){
	for(var qIndex = 0; qIndex <= lastQuestionIndex; qIndex++){
		progress.innerHTML += "<div class='prog' id= " + qIndex + "></div>";
	}
}

function answerIsCorrect(){
	document.getElementById(runningQuestionIndex).style.backgroundColor = "green";
}

function answerIsWrong(){
	document.getElementById(runningQuestionIndex).style.backgroundColor = "red";
}



function counterRender(){
	if(count <= questionTime){
		counter.innerHTML = count;
		timeGauge.style.width = count * gaugeProgress + "px";
		count++
	}
	else{
		count = 0;
		answerIsWrong();
		if(runningQuestionIndex < lastQuestionIndex){
			runningQuestionIndex++
			renderQuestion();
		}
		else{
			clearInterval(TIMER);
			scoreRender();
		}
	}
} 



function checkAnswer(answer){
	if(answer == questions[runningQuestionIndex].correct){
		score++
		answerIsCorrect();
	}
	else{
		answerIsWrong();
	}
	if(runningQuestionIndex < lastQuestionIndex){
		count = 0;
		runningQuestionIndex++;
		renderQuestion();
	}
	else{
		clearInterval(TIMER);
		scoreRender();
	}
}


function scoreRender(){
	scoreContainer.style.display = "block";
	let scorePerCent =	Math.round(100* score/questions.length)
	let img = (scorePerCent >= 80 ) ? "img/5.png" : 
	(scorePerCent >= 60 ) ? "img/4.png" : 
	(scorePerCent >= 40 ) ? "img/3.png" : 
	(scorePerCent >= 20 ) ? "img/2.png" : "img/1.png" ;

	scoreContainer.innerHTML = "<img src=" + img + ">";
	scoreContainer.innerHTML +=  "<p>" + scorePerCent + "%</p>"
}
