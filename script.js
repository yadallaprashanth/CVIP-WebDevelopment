const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const taskTitle = document.getElementById('task-title').value;
  if (taskTitle) {
    addTask(taskTitle);
    taskForm.reset();
  }
});

function addTask(title) {
  const taskItem = document.createElement('li');
  taskItem.className = 'task';
  taskItem.innerHTML = `
    <span>${title}</span>
    <button class="complete-btn">Complete</button>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  `;
  taskList.appendChild(taskItem);

  const completeBtn = taskItem.querySelector('.complete-btn');
  const editBtn = taskItem.querySelector('.edit-btn');
  const deleteBtn = taskItem.querySelector('.delete-btn');

  completeBtn.addEventListener('click', function () {
    taskItem.classList.toggle('completed');
  });

  editBtn.addEventListener('click', function () {
    const newTitle = prompt('Edit task title:', title);
    if (newTitle !== null) {
      taskItem.querySelector('span').textContent = newTitle;
    }
  });

  deleteBtn.addEventListener('click', function () {
    taskItem.remove();
  });
}
