function onReady (){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const deleteButton = document.getElementById('deleteBtn')


  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    //get the text
    let title = newToDoText.value;

    //create a new li
    let newLi = document.createElement('li');

    //create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = 'checkbox';

    //set the title
    newLi.textContent = title;

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';


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


}

window.onload = function () {
  onReady();
};
