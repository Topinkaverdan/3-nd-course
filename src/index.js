import { getLevelDifficulty } from './renderLevels.js';
import { getNoAnswer } from './renderLevels.js';

export let levelDifficulty;

const renderLevelApp = (app, html) => {
    return (app.innerHTML = html);
};

const renderApp = () => {
    const appElement = document.querySelector('body');

    appElement.classList.add('start');

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
        </div>`;

    appElement.innerHTML = appHtml;

    const buttonLevelElements = document.querySelectorAll(
        '.container__level__button',
    );
    const buttonStartElement = document.querySelector(
        '.container__start__button',
    );

    for (let i = 0; i < buttonLevelElements.length; i++) {
        buttonLevelElements[i].addEventListener('click', () => {
            levelDifficulty = buttonLevelElements[i].dataset.level;
        });
    }

    buttonStartElement.addEventListener('click', () => {
        appElement.classList.remove('start');

        // getLevelDifficulty(appHtml);

        if (!levelDifficulty) {
            alert('Пожалуйста, выберите уровень');

            appElement.classList.add('start');
        } else {
            renderLevelApp(appElement, getLevelDifficulty());

            setTimeout(() => {
                return renderLevelApp(appElement, getNoAnswer());
            }, 5000);
        }
    });
};

renderApp();
