document.addEventListener("DOMContentLoaded", () => {
  const newDescr = document.getElementById('new-task-description');
  const submit = newDescr.nextElementSibling;
  const ul = document.getElementById('tasks');
  

submit.addEventListener('click', createNewTask) 
  
function createNewTask(e){
  const li = document.createElement('li')
  const item = newDescr.value;
  li.innerHTML = item;
  ul.appendChild(li);
  e.preventDefault();
  }
});
