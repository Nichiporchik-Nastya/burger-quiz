document.addEventListener('DOMContentLoaded', function(){ //для предотвращения ошибок, возникающих во время загрузки страницы. Функции будут выполняться только после того, как все DOM объекты на HTML странице будут загружены 
	'use strict'; //строгий режим для предотвращения ошибок во время работы со скрипт файлом
	
	const btnOpenModal = document.querySelector('#btnOpenModal');
	const modalBlock = document.querySelector('#modalBlock');
	const closeModal = document.querySelector('#closeModal');
	const question = document.querySelector('#question');
		// console.log(modalBlock);
	const formAnswers = document.querySelector('#formAnswers');


	btnOpenModal.addEventListener('click', () => {
		
		modalBlock.classList.add('d-block'); // в bootstrap класс d-block аналогичен свойству display block в css
		playTest();
	});


	closeModal.addEventListener('click', () => {
		modalBlock.classList.remove('d-block');
	});

	let burgerImg = "./image/burger.png";
	let blackBurgerImg = "./image/burgerBlack.png";


	const playTest = () =>{
		const renderQuestions = () => {
			question.textContent = 'Какого цвета бургер вы хотите?'; //меняет содержимое элемента на указанное'
			
			formAnswers.innerHTML = 
			`<div class="answers-item d-flex flex-column">
                <input type="radio" id="answerItem1" name="answer" class="d-none">
                <label for="answerItem1" class="d-flex flex-column justify-content-between">
                  <img class="answerImg" src= ${burgerImg} alt="burger">
                  <span>Стандарт</span>
                </label>
              </div>
              <div class="answers-item d-flex justify-content-center">
                <input type="radio" id="answerItem2" name="answer" class="d-none">
                <label for="answerItem2" class="d-flex flex-column justify-content-between">
                  <img class="answerImg" src= ${blackBurgerImg} alt="burger">
                  <span>Черный</span>
                </label>
              </div>`;  //встраивает вёрстку в указанный блок 

		};
		renderQuestions();
	};








});


// btnOpenModal.addEventListener("click", function(){
// 	console.log('dfg');
// })

// const some = (a,b) => {
// 	return a+b;
// }
// console.log(some(5,2));