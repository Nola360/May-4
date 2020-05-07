const search_button = document.querySelector('.fas.fa-search');
const exit_button = document.querySelector('.fas.fa-times');
const search_bar = document.querySelector('input');



// console.log(search_bar);
search_button.addEventListener('click', function () {

  search_bar.classList.toggle('active');
  exit_button.classList.toggle('active');
  search_button.classList.toggle('active');

  // console.log(search_button)
  // console.log('test');
  // console.log(search_bar);
})

exit_button.addEventListener('click', () => {
  search_bar.classList.toggle('active');
  search_button.classList.toggle('active');
  exit_button.classList.toggle('active');

})

// Add item to list
const input = document.querySelector('input');
const list = document.querySelector('ul');
const trash_can = document.querySelectorAll('li .fas.fa-trash');


window.addEventListener('keypress', (e) => {

  // Empty input validation
  if (input.value === '') {
    return false
  }

  // Create item, add item & icon
  if (e.key === 'Enter') {
    let item = document.createElement('li');
    item.className = 'delete-item';
    item.innerHTML = input.value;
    let trash = document.createElement('i');
    trash.className = 'fas fa-trash';
    item.appendChild(trash);
    list.appendChild(item);
    input.value = '';
    console.log(item);
  }
})

// Remove Individual Item & Store in Trash Bin
document.body.addEventListener('click', deleteItem);
function deleteItem(e) {

  if (e.target.parentElement.classList.contains('delete-item')) {
    let trash_bin_folder = document.querySelector('.trash_bin_folder');
    let deleted_item = document.createElement('li');
    deleted_item.innerHTML = e.target.parentElement.innerText;
    e.target.parentElement.remove();
    trash_bin_folder.appendChild(deleted_item);
  }
}

// Access Trash Bin Folder 
const trash_bin_icon = document.querySelector('.trash_bin');
const trash_bin_folder = document.querySelector('.folder_container');

trash_bin_icon.addEventListener('dblclick', () => {
  trash_bin_folder.classList.toggle('active');

})

// Trash Bin Buttons
const function_buttons = document.querySelectorAll('.button');
const close_button = document.querySelector('.close_button');
const minimize_button = document.querySelector('.minimize_button');
const expand_button = document.querySelector('.expand_button');
const header = document.querySelector('header');


function_buttons.forEach(button => {
  button.addEventListener('click', () => {
    console.log(button);
    switch (button) {
      case close_button:
        console.log('close');
        trash_bin_folder.classList.toggle('active');
        break;
      case minimize_button:
        console.log('minimize');
        trash_bin_folder.classList.toggle('minimize');
        break;
      case expand_button:
        console.log('expand');
        trash_bin_folder.classList.toggle('expand');
        break;
    }
  })
})






// function_buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     if (button.firstElementChild) {
//       console.log('close');
//     } else if (button.firstElementChild.nextElementSibling) {
//       console.log('minimize')
//     }
//   })
// })



function_buttons.forEach(button => {
  button.addEventListener('click', () => {
    switch (header) {
      case '.close_button':
        console.log('close');
        break;
      case 'minimize_button':
        console.log('minimize');
        break;
      case 'expand_button':
        console.log('expand');
        break;
    }
  })
})




// const minimize_button = document.querySelector('minimize_button');
// const expand_button = document.querySelector('expand_button');





