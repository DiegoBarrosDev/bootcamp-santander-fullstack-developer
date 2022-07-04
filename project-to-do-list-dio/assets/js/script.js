
let formulario = document.querySelector('#task-form');
let listaTarefas = document.querySelector('#tasks');

formulario.addEventListener("submit", submeter);

function submeter(event) {
    event.preventDefault();
    let tarefa = document.querySelector('#task-input');
    let novaTarefa = document.createElement('div');
    novaTarefa.className = "task-item"
    novaTarefa.innerHTML = `<input type="checkbox" nome="check"><label for="check">${tarefa.value}</label>`;
    listaTarefas.appendChild(novaTarefa);
    tarefa.value = "";
    tarefa.focus();
}
