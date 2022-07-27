function $(tag) {
    const a = document.querySelector(tag)
    return a
}

function alterarClasse(elemento) {
    const a = elemento.classList.toggle('dark-mode');
    return a
}

const body = $('body');
const h1 = $('h1');
const btn = $('#mode-selector');
const footer = $('footer');
const arr = [body, h1, btn, footer];

btn.addEventListener('click', function () {
    arr.map(alterarClasse);
    mudarTexto();
})

function mudarTexto() {
    if (h1.classList.contains('dark-mode')) {
        h1.innerHTML = 'Dark Mode ON';
        btn.innerHTML = 'Light Mode';
        return
    }
    h1.innerHTML = 'Light Mode ON'
    btn.innerHTML = 'Dark Mode';
}



