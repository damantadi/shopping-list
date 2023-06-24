const itemForm =document.getElementById('item-form');
const itemInput =document.getElementById('item-input');
const itemList =document.getElementById('item-list');
const itemFilter =document.getElementById('filter')

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
    checkUI();

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

function removeitem(e){
    if(e.target.parentElement.classList.contains('remove-item')){
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
          }
    }
    checkUI();
}

 itemList.addEventListener('click',removeitem);

 function checkUI() {
    const items = itemList.querySelectorAll('li');
  
    if (items.length === 0) {
      clearBtn.style.display = 'none';
      itemFilter.style.display = 'none';
    } else {
      clearBtn.style.display = 'block';
      itemFilter.style.display = 'block';
    }
  }


  itemFilter.addEventListener('input', filterItems);

  function filterItems(e) {
    const items = itemList.querySelectorAll('li');
    const text = e.target.value.toLowerCase();
  
    items.forEach((item) => {
      const itemName = item.firstChild.textContent.toLowerCase();
  
      if (itemName.indexOf(text) != -1) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  }

  itemForm.addEventListener('submit', onAddItemSubmit);

  function onAddItemSubmit(e) {
    e.preventDefault();
  
    const newItem = itemInput.value;
  
    // Validate Input
    if (newItem === '') {
      alert('Please add an item');
      return;
    }
  
    // Create item DOM element
    addItemToDOM(newItem);
  
    checkUI();
  
    itemInput.value = '';
  }

  function addItemToDOM(item) {
    // Create list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
  
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);
  
    // Add li to the DOM
    itemList.appendChild(li);
  }

  function addItemToStorage(item) {
    let itemsFromStorage;
  
    if (localStorage.getItem('items') === null) {
      itemsFromStorage = [];
    } else {
      itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }
  
    // Add new item to array
    itemsFromStorage.push(item);
  
    // Convert to JSON string and set to local storage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
  }

  function onAddItemSubmit(e) {
    // ...
  
    // Create item DOM element
    addItemToDOM(newItem);
  
    // Add item to local storage
    addItemToStorage(newItem);
  }

  function addItemToStorage(item) {
    const itemsFromStorage = getItemsFromStorage();
  
    // Add new item to array
    itemsFromStorage.push(item);
  
    // Convert to JSON string and set to local storage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
  }

  function displayItems() {
    const itemsFromStorage = getItemsFromStorage();
    itemsFromStorage.forEach((item) => addItemToDOM(item));
    checkUI();
  }

  document.addEventListener('DOMContentLoaded', displayItems);