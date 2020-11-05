import css from "./css/style.css";
import {searchImage} from './js/searchImage.js';
import {colorSwitch} from './js/backgroundColors.js';

const gallery = document.querySelector('.gallery');

document.querySelector('.search-form').addEventListener('submit', (e)=> {
    e.preventDefault();
    searchImage();
});

colorSwitch();