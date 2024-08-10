document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var taskInput = document.getElementById('task-input');
    var taskList = document.getElementById('task-list');
    var task = document.createElement('li');

    // 创建复选框
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        taskText.style.textDecoration = this.checked ? 'line-through' : 'none';
    });

    // 创建删除按钮
    var deleteButton = document.createElement('button');
    deleteButton.textContent = '删除';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(task);
    });

    // 创建编辑按钮
    var editButton = document.createElement('button');
    editButton.textContent = '编辑';
    editButton.addEventListener('click', function() {
        var newTask = prompt('编辑任务', taskText.textContent);
        if (newTask) {
            taskText.textContent = newTask;
        }
    });

    // 创建任务文本
    var taskText = document.createElement('span');
    taskText.textContent = taskInput.value;

    // 将复选框、任务文本、编辑按钮和删除按钮添加到任务元素
    task.appendChild(checkbox);
    task.appendChild(taskText);
    task.appendChild(editButton);
    task.appendChild(deleteButton);

    // 将任务元素添加到任务列表
    taskList.appendChild(task);

    // 清空输入框
    taskInput.value = '';
});