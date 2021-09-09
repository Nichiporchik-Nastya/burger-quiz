document.addEventListener('DOMContentLoaded', function(){ //для предотвращения ошибок, возникающих во время загрузки страницы. Функции будут выполняться только после того, как все DOM объекты на HTML странице будут загружены 
	'use strict'; //строгий режим для предотвращения ошибок во время работы со скрипт файлом
	
	const btnOpenModal = document.querySelector('#btnOpenModal');
	const modalBlock = document.querySelector('#modalBlock');
	const closeModal = document.querySelector('#closeModal');
	const question = document.querySelector('#question');
	const formAnswers = document.querySelector('#formAnswers');
	const prevButton = document.querySelector('#prev');
	const nextButton = document.querySelector('#next');



	const questions = [
    {
        question: "Какого цвета бургер?",
        answers: [
            {
                title: 'Стандарт',
                url: './image/burger.png'
            },
            {
                title: 'Черный',
                url: './image/burgerBlack.png'
            }
        ],
        type: 'radio'
    },
    {
        question: "Из какого мяса котлета?",
        answers: [
            {
                title: 'Курица',
                url: './image/chickenMeat.png'
            },
            {
                title: 'Говядина',
                url: './image/beefMeat.png'
            },
            {
                title: 'Свинина',
                url: './image/porkMeat.png'
            }
        ],
        type: 'radio'
    },
    {
        question: "Дополнительные ингредиенты?",
        answers: [
            {
                title: 'Помидор',
                url: './image/tomato.png'
            },
            {
                title: 'Огурец',
                url: './image/cucumber.png'
            },
            {
                title: 'Салат',
                url: './image/salad.png'
            },
            {
                title: 'Лук',
                url: './image/onion.png'
            }
        ],
        type: 'checkbox'
    },
    {
        question: "Добавить соус?",
        answers: [
            {
                title: 'Чесночный',
                url: './image/sauce1.png'
            },
            {
                title: 'Томатный',
                url: './image/sauce2.png'
            },
            {
                title: 'Горчичный',
                url: './image/sauce3.png'
            }
        ],
        type: 'radio'
    }
];


	btnOpenModal.addEventListener('click', () => {
		
		modalBlock.classList.add('d-block'); // в bootstrap класс d-block аналогичен свойству display block в css
		playTest();
	});


	closeModal.addEventListener('click', () => {
		modalBlock.classList.remove('d-block');
	});

	
	const playTest = () => {
		let numberQuestion = 0;
		const renderAnswers = (index) => {

			questions[index].answers.forEach((answer) => {
					const answerItem = document.createElement("div");
					
					answerItem.classList.add('answers-item', 'd-flex', 'flex-column');

					answerItem.innerHTML = `<input type="${questions[index].type}" id="${answer.title}" name="answer" class="d-none">
                <label for="${answer.title}" class="d-flex flex-column justify-content-between">
                  <img class="answerImg" src=${answer.url} alt="burger">
                  <span>${answer.title}</span>
                </label>`; //встраивает вёрстку в указанный блок

					formAnswers.appendChild(answerItem);
				});
			
		};
		const renderQuestions = (qIndex) => {
			formAnswers.innerHTML = ''; //стерается первоначальное содержимое перед новым отображением
			question.textContent = `${questions[qIndex].question}` // меняет содержимое элемента на указанное
			renderAnswers(numberQuestion);
		};
		renderQuestions(numberQuestion);

		nextButton.onclick = () => {
			numberQuestion++;
			if(numberQuestion == questions.length-1) nextButton.classList.toggle('d-none');
			renderQuestions(numberQuestion);
		};

		prevButton.onclick = () => {
			numberQuestion--;
			if(numberQuestion == 0) prevButton.classList.toggle('d-none');
			renderQuestions(numberQuestion);
		};
		
	};


});

// for(let i = 0; i < 2; i++)
// 				{
// 					const answerItem = document.createElement("div");
					
// 					answerItem.classList.add('answers-item', 'd-flex', 'flex-column');

// 					answerItem.innerHTML = `<input type="radio" id="answerItem1" name="answer" class="d-none">
//                 <label for="answerItem1" class="d-flex flex-column justify-content-between">
//                   <img class="answerImg" src= ${questions.answers[i].url} alt="burger">
//                   <span>${questions.answers[i].title}</span>
//                 </label>`; //встраивает вёрстку в указанный блок

// 					formAnswers.appendChild(answerItem);
// 				}






// btnOpenModal.addEventListener("click", function(){
// 	console.log('dfg');
// })

// const some = (a,b) => {
// 	return a+b;
// }
// console.log(some(5,2));

// console.log("Я люблю \"простой\" JS");