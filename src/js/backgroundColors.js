const body = document.querySelector('body');


const colors = [
    '#B8860B',
    '#A52A2A',
    '#BC8F8F',
    '#C0C0C0',
    '#2F4F4F',
    '#483D8B',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const colorSwitch = function() {

    const colorTime = setInterval(()=> {

        body.style.backgroundColor = `${colors[randomIntegerFromInterval(0, 5)]}`;
        body.style.transition = 'background-color 3s ease';

    }, 4000);

};