const todoList = document.getElementById('todo-list');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');

const tasks = []; // Array to store tasks

addTaskButton.addEventListener('click', function() {
  const task = newTaskInput.value.trim(); // Get task text and trim whitespace
  if (task) { // Check if task is not empty
    tasks.push({ text: task, completed: false }); // Add task with completed status
    newTaskInput.value = ''; // Clear input field
    renderTodoList();
  }
});

function renderTodoList() {     
  todoList.innerHTML = ''; // Clear existing list items
  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.innerText = task.text;
    listItem.appendChild(taskText);

    const completeButton = document.createElement('button');
    completeButton.innerText = task.completed ? 'Mark Incomplete' : 'Mark Complete';
    completeButton.addEventListener('click', function() {
      tasks[index].completed = !tasks[index].completed;
      renderTodoList();
    });
    listItem.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', function() {
      tasks.splice(index, 1); // Remove task from array
      renderTodoList();
    });
    listItem.appendChild(deleteButton);

    if (task.completed) {
      listItem.classList.add('completed');
    }

    todoList.appendChild(listItem);
  });
}