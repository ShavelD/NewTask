const dropZones = document.querySelectorAll('.board');

dropZones.forEach((dropZone) => {
   dropZone.addEventListener('dragenter', handlerDragenter);
   dropZone.addEventListener('dragleave', handlerDragleave);
   dropZone.addEventListener('dragover', handlerDragover);
   dropZone.addEventListener('drop', handlerDrop);
})

let draggedItem = null;

function handlerDragstart() {
   setTimeout(() => {
      this.classList.add('dnd-hide');
   }, 0)
   draggedItem = this;
}

function handlerDragend() {
   this.classList.remove('dnd-hide');
   draggedItem = null;
}

function handlerDrag() {}

function handlerDragenter(event) {
   event.preventDefault();
   this.classList.add('dnd-hovered');
}

function handlerDragleave() {
   this.classList.remove('dnd-hovered');
}

function handlerDragover(event) {
   event.preventDefault();
}

function handlerDrop() {
   if (draggedItem !== null) {
      this.append(draggedItem);
      this.classList.remove('dnd-hovered');
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      taskId = tasks.findIndex(item => item.id === +draggedItem.dataset.tileId);
      tasks[taskId].status = getKeyByValue(boards, this);
      localStorage.setItem('tasks', JSON.stringify(tasks));
   }
}
