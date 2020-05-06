const search_button = document.querySelector('.fas.fa-search');
const exit_button = document.querySelector('.fas.fa-times');
const search_bar = document.querySelector('input');



console.log(search_bar);
search_button.addEventListener('click', function () {

  search_bar.classList.toggle('active');
  exit_button.classList.toggle('active');
  search_button.classList.toggle('active');

  console.log(search_button)
  console.log('test');
  console.log(search_bar);
})

exit_button.addEventListener('click', () => {
  search_bar.classList.toggle('active');
  search_button.classList.toggle('active');
  exit_button.classList.toggle('active');
})

// Add item to list

const input = document.querySelector('input');
const list = document.querySelector('ul');
const trash_can = document.querySelectorAll('.fas.fa-trash');


window.addEventListener('keypress', (e) => {

  // Empty input validation
  if (input.value === '') {
    return false
  }

  // Create item, add item & icon
  if (e.key === 'Enter') {
    let item = document.createElement('li');
    item.innerHTML = input.value;
    let trash = document.createElement('i');
    trash.className = 'fas fa-trash';
    item.appendChild(trash);
    list.appendChild(item);
    input.value = '';
  }
})


// Remove Individual Items
document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
  if (e.target.className === 'fas fa-trash') {
    e.target.parentElement.remove();
  }
  // console.log(e.target);
}



