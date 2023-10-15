import { levelDifficulty } from './index.js';
import { header } from './components.js';
import { imagesCards } from './components.js';
import { backOfCard } from './components.js';

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

const levelCards = (value, length) => {
    const arr = [];

    for (let i = 0; i < length; i++) {
        arr.push(value);
    }

    return arr;
};

export function getNoAnswer(appHtml) {
    if (levelDifficulty == 1) {
        let backCards = levelCards(backOfCard[0], 6).join('');

        return (appHtml = header + `<div class="level">${backCards}</div>`);
    }

    if (levelDifficulty == 2) {
        let backCards = levelCards(backOfCard[0], 12).join('');

        return (appHtml =
            header + `<div class="level level__two">${backCards}</div>`);
    }

    if (levelDifficulty == 3) {
        let backCards = levelCards(backOfCard[0], 18).join('');

        return (appHtml =
            header + `<div class="level level__free">${backCards}</div>`);
    }
}

export function getLevelDifficulty(appHtml) {
    shuffle(imagesCards);

    if (levelDifficulty == 1) {
        let cards = [
            levelCards(imagesCards[0], 2),
            levelCards(imagesCards[1], 2),
            levelCards(imagesCards[2], 2),
        ]
            .join(',')
            .split(',');

        return (appHtml =
            header + `<div class="level">${shuffle(cards).join('')}</div>`);
    }

    if (levelDifficulty == 2) {
        let cards = [
            levelCards(imagesCards[0], 2),
            levelCards(imagesCards[1], 2),
            levelCards(imagesCards[2], 2),
            levelCards(imagesCards[3], 2),
            levelCards(imagesCards[4], 2),
            levelCards(imagesCards[5], 2),
        ]
            .join(',')
            .split(',');

        return (appHtml =
            header +
            `<div class="level level__two">${shuffle(cards).join('')}</div>`);
    }

    if (levelDifficulty == 3) {
        let cards = [
            levelCards(imagesCards[0], 2),
            levelCards(imagesCards[1], 2),
            levelCards(imagesCards[2], 2),
            levelCards(imagesCards[3], 2),
            levelCards(imagesCards[4], 2),
            levelCards(imagesCards[5], 2),
            levelCards(imagesCards[6], 2),
            levelCards(imagesCards[7], 2),
            levelCards(imagesCards[8], 2),
        ]
            .join(',')
            .split(',');

        return (appHtml =
            header +
            `<div class="level level__free">${shuffle(cards).join('')}</div>`);
    }
}
