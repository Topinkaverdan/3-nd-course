let levelDifficulty;

const renderLevelApp = (app, html) => {

    return app.innerHTML = html;

}
const renderApp = () => {

    const appElement = document.querySelector("body");
    
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

        function getLevelDifficulty() {

            if (levelDifficulty == 1) {
            
                return appHtml = `<p>Первый уровень сложности</p>`;
     
             }
     
             if (levelDifficulty == 2) {
                 
                 return appHtml = `<p>Второй уровень сложности</p>`;
                 
             }
     
             if (levelDifficulty == 3) {
                 
                 return appHtml = `<p>Третий уровень сложности</p>`;
                 
             }

        }

        if (!levelDifficulty) {
            
            alert('Пожалуйста, выберите уровень');

        } else {

            renderLevelApp(appElement, getLevelDifficulty());
            
        }

    });

};

renderApp();
