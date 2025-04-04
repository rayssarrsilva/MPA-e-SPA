const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

function addTodo() {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  li.textContent = text;
  li.onclick = () => li.remove(); // remove ao clicar
  list.appendChild(li);

  input.value = '';
}
