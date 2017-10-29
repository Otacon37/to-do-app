function onReady (){
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const deleteButton = document.getElementById('deleteBtn')

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if(!newToDoText) {return}
    toDos.push({
      title: newToDoText.value,
      complete: false
    });
    newToDoText.value='';

    renderTheUI(toDos);
  }

  function renderTheUI(toDos) {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  deleteButton.addEventListener('click', event => {
      var itemList = document.getElementById('toDoList');
      var liArray = itemList.children;
      var toBeDeleted = [];

      for(var i = 0; i < liArray.length; i++) {
        var inputs = liArray[i].children;
        var toDelete = inputs[0];


        if(toDelete.checked === true) {
          toBeDeleted.push(liArray[i]);
        }

      }
    while(toBeDeleted.length > 0) {
      toBeDeleted.pop().remove();
    }
    });

  renderTheUI(toDos);


}

window.onload = function () {
  onReady();
};
