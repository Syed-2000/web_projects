const addButton = document.querySelector('.addButton');
var inputValue = document.querySelector('.input');
const container = document.querySelector('.container');

class item{
    constructor(itemName){
        this.createDiv(itemName);
    }
    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item-input');
        input.type ="text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let editButton = document.createElement('button');
        editButton.innerHTML = "EDIT";
        editButton.classList.add('editButton');

        let removeButton = document.createElement('button');
        removeButton.innerHTML = "REMOVE";
        removeButton.classList.add('removeButton');

        let unEditableButton = document.createElement('button');
        unEditableButton.innerHTML = "unEditableButton";
        unEditableButton.classList.add('unEditableButton');




        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);
        itemBox.appendChild(unEditableButton);

        editButton.addEventListener('click', () => this.edit(input));
        removeButton.addEventListener('click', () => this.remove(itemBox));
        unEditableButton.addEventListener('click', ()=>this.unEditable(input));

    }
    unEditable(input){
        input.disabled = true;
    }
    edit(input){
        input.disabled = false;
    }
    remove(itemBox){
        container.removeChild(itemBox);
    }
    
}
function check(){
    if(inputValue.value!=""){
        new item(inputValue.value);
        inputValue.value="";
    }
    else{
        alert("Write any thing");
    }
}
addButton.addEventListener('click', check);

