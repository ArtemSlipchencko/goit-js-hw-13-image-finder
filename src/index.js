import css from "./css/style.css";
import {searchImage} from './js/searchImage.js';

document.querySelector('.search-form').addEventListener('submit', (e)=> {
    e.preventDefault();
    searchImage();
});

