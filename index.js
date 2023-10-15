import { header } from "/components.js";

export let levelDifficulty;

const renderLevelApp = (app, html) => {

    return app.innerHTML = html;

}
const renderApp = () => {

    const appElement = document.querySelector("body");

    appElement.classList.add('start')
    
    let appHtml = `<div class="container">
            <div class="container__heading">
                <p class="container__heading__text">Выбери сложность</p>
            </div>
            <div class="container__level">
                <button data-level="1" class="container__level__button">1</button>
                <button data-level="2" class="container__level__button">2</button>
                <button data-level="3" class="container__level__button">3</button>
            </div>
            <div class="container__start">
                <button class="container__start__button">Старт</button>
            </div>
        </div>`
    
    appElement.innerHTML = appHtml;

    const buttonLevelElements = document.querySelectorAll(".container__level__button");
    const buttonStartElement = document.querySelector(".container__start__button");

    for (let i = 0; i < buttonLevelElements.length; i++) {

        buttonLevelElements[i].addEventListener('click', () => {

            levelDifficulty = buttonLevelElements[i].dataset.level

        });
        
    };

    buttonStartElement.addEventListener('click', () => {

        appElement.classList.remove('start')

        function getLevelDifficulty() {

            if (levelDifficulty == 1) {

                return appHtml = header + `<div class="level">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                </div>`;
                
             }
     
             if (levelDifficulty == 2) {
                 
                return appHtml = header + `<div class="level level__two">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                </div>`;
        
             }
     
             if (levelDifficulty == 3) {
                 
                 return appHtml = header + `<div class="level level__free">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                    <img src="img/рубашка.png" width="120px" alt="back of a card">
                </div>`;
                 
             }

        }

        if (!levelDifficulty) {
            
            alert('Пожалуйста, выберите уровень');

            appElement.classList.add('start');

        } else {

            renderLevelApp(appElement, getLevelDifficulty());
            
        }

    });

};

renderApp();
