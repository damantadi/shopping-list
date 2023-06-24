const itemForm =document.getElementById('item-form');
const itemInput =document.getElementById('item-input');
const itemList =document.getElementById('item-list');


function addItem(e){

    e.preventDefault();

    const newitem = itemInput.value ;
    if(newitem ===''){
        alert('please enter the item');
      
        return;
    }

    const li =document.createElement('li');
    li.appendChild(document.createTextNode(newitem));
    
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    itemList.appendChild(li);

    itemInput.value="";

}

function createButton(classes){
    const button =document.createElement('button');
    button.className=classes;
    const icon =createicon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}
function createicon(classes)
{
    const icon = document.createElement('i');
    icon.className=classes;
    return icon;
}


 itemForm.addEventListener('submit', addItem);