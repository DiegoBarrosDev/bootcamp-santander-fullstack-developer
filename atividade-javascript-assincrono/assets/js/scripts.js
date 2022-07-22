const BASE_URL = 'https://cataas.com/cat'

const catBtn = document.querySelector('#change-cat');
const IMG = document.querySelector('#cat');

const getCats = async function () {
    try {
        const data = await fetch(BASE_URL);
        console.log(data)
        return data.url
    }
    catch (e) {
        console.log(e.message)
    }
}

const loadImg = async function () {
    
    IMG.src = await getCats();
}

catBtn.addEventListener('click', loadImg)

loadImg()