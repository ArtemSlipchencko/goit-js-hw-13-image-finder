import {renderImage} from './renderImage';

export const input = document.querySelector('[name="query"]');

const list = document.querySelector('.gallery');
let page = 1;
let keyWord = '';
let renderTimes = 1;

const getUrl = function(word, page) {

    return `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${word}&page=${page}&per_page=12&key=18951897-f7110a11ebc58b866f93acf70`;

};

export const searchImage = function() {

    let word = input.value;

    if (word === keyWord) {

        page += 1;

        fetch(getUrl(word, page))
        .then(data => data.json())
        .then(data => {

            const screenY = document.documentElement.scrollHeight;
            renderImage(data);

            window.scrollTo({
                top: screenY - 50,
                behavior: 'smooth'
            });

        });

    } else {

        list.innerHTML = '';

        fetch(getUrl(word, page))
        .then(data => data.json())
        .then(data => renderImage(data));

    };
        
        if (renderTimes === 1) {

            document.body.insertAdjacentHTML('beforeend', `<button type="button" class="load-more">Load more...</button>`);
            document.querySelector('.load-more').addEventListener('click', searchImage);
            renderTimes += 1;

        };
        
        keyWord = word;

};

