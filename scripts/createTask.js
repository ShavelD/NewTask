function getTile(obj) {

    const tile = document.createElement('div');
    const title = document.createElement('h3');
    const description = document.createElement('div');
    const options = document.createElement('div');
    const dev = document.createElement('div');
    const devItem = document.createElement('div');
    const label = document.createElement('div');
    const devImg = document.createElement('img');

    tile.classList.add('tile');
    tile.dataset.tileId = obj.id;
    tile.setAttribute('draggable', 'true');
    title.classList.add('tile__title');
    description.classList.add('tile__description');
    options.classList.add('tile__options');

    label.classList.add('tile__label');

    if (obj.devs) {
        dev.classList.add('dev');
        devItem.classList.add('dev__item');
        devImg.classList.add('dev__img');
        devImg.src = obj.devs.iconSrc;
        devItem.dataset.devName = obj.devs.fullName;
        devItem.append(devImg);
        dev.append(devItem);
        devImg.setAttribute('draggable', 'false');
    }

    title.append(obj.title);
    description.append(obj.description);
    label.append(obj.label);
    options.append(dev, label);

    tile.addEventListener('dragstart', handlerDragstart);
    tile.addEventListener('dragend', handlerDragend);
    tile.addEventListener('drag', handlerDrag);
    tile.append(title, description, options);


    tile.dataset.tileId = obj.id;
    tile.style.backgroundColor = tilePriorityColors[obj.priority];

    boards[obj.status].append(tile);
}

function uniqueId() {
    let count = localStorage.getItem('id');
    if (!count) count = 0;
    localStorage.setItem('id', ++count);
    return count;
}

createTaskForm.addEventListener('submit', addTask);

function addTask(event) {
    event.preventDefault();
    if (!checkForm(this)) return false;
    const taskObj = {};
    const devs = getDevs();
    let allTasks = JSON.parse(localStorage.getItem('tasks'));
    taskObj.title = event.target.taskTitle.value;
    taskObj.description = event.target.taskDescription.value;
    taskObj.devs = devs[event.target.taskDev.value];
    taskObj.id = uniqueId();
    taskObj.status = event.target.taskBoard.value;
    taskObj.label = event.target.taskLabel.value;
    taskObj.priority = event.target.taskColor.value;

    allTasks.push(taskObj);
    localStorage.setItem('tasks', JSON.stringify(allTasks));
    sortTasks();

    getTile(taskObj);
}

function sortTasks() {
    let arr = JSON.parse(localStorage.getItem('tasks'));
    arr = arr.sort((a, b) => a.priority < b.priority ? -1 : 1);
    localStorage.setItem('tasks', JSON.stringify(arr));
}

document.addEventListener('mousedown', stopClosing);

function stopClosing(event){
    if (createTaskForm.contains(event.target) && event.target !== document.getElementById('closePopUp')){
        document.removeEventListener('click', togglePopUp);
    }

}
document.addEventListener('mouseup', goClosing);


function goClosing(event){
    setTimeout(() => {
        document.addEventListener('click', togglePopUp);
    },0)
    
}