const librarySection = document.querySelector('.library-section');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const addBtn = document.querySelector('#add-btn');

const bookArray = JSON.parse(localStorage.getItem('book')) || [];

function Book(title, author) {
  this.title = title.value;
  this.author = author.value;
  this.id = bookArray.length;
}

function showBook(bookArray) {
  librarySection.innerHTML = '';
  bookArray.forEach((book, id) => {
    librarySection.innerHTML += `
 <div>
    <p>${book.title}</p>
    <p>  by  </p>
    <p>${book.author}</p>
    <button type="button" id="${id}" onclick="remove(this.id)"> Remove </button>
    <hr>
 </div>
 `;
  });
}

addBtn.addEventListener('click', () => {
  if (title.value.trim() !== '' && author.value.trim() !== '') {
    const book = new Book(title, author);
    bookArray.push(book);
    showBook(bookArray);
    localStorage.setItem('book', JSON.stringify(bookArray));
    title.value = '';
    author.value = '';
  }
});

function remove(selectedId) { //eslint-disable-line
  bookArray.splice(selectedId, 1);
  showBook(bookArray);
  localStorage.setItem('book', JSON.stringify(bookArray));
}

showBook(bookArray);
