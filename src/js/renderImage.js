const list = document.querySelector('.gallery');

export const renderImage = function(images) {

    [...images.hits].forEach(el => {

        list.insertAdjacentHTML('beforeend',
        `<li class="photo-card">
            <img class="photo" height="200px" width="270px" src="${el.webformatURL}" alt="" />
            <div class="stats">
                <p class="stats-item">
                    <i class="material-icons">thumb_up</i>
                    ${el.likes}
                </p>
                <p class="stats-item">
                    <i class="material-icons">visibility</i>
                    ${el.views}
                </p>
                <p class="stats-item">
                    <i class="material-icons">comment</i>
                    ${el.comments}
                </p>
                <p class="stats-item">
                    <i class="material-icons">cloud_download</i>
                    ${el.downloads}
                </p>
            </div>
        </li>`);

    });

};