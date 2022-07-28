const btn = document.querySelector('#myBtn');
const body = document.querySelector('body')

async function importarAss() {
    const { pintaTela } = await import('./pintaTela.js');
    pintaTela(body)
}

btn.addEventListener('click', importarAss)