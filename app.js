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