const listNav = document.querySelector('#list')
const addNav = document.querySelector('#add-it')
const contactNav = document.querySelector('#contact-us')
const calendar = document.querySelector('#calendar')
const addBookSection = document.querySelector('.add')
const contactSection = document.querySelector('#contact')


addNav.addEventListener('click', () => {
 addBookSection.classList.remove('display-none')
 addSection.classList.add('display-none')
 contactSection.classList.add('display-none')
})


listNav.addEventListener('click', () => {
 addBookSection.classList.add('display-none')
 addSection.classList.remove('display-none')
 contactSection.classList.add('display-none')
})


contactNav.addEventListener('click', () => {
 addBookSection.classList.add('display-none')
 addSection.classList.add('display-none')
 contactSection.classList.remove('display-none')
})




const dateTable = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function getTime() {
  const globalDate = new Date();
  const year = globalDate.getFullYear();
  const hours = globalDate.getHours();
  const minutes = globalDate.getMinutes();
  const seconds = globalDate.getSeconds();
  const day = globalDate.getDate();
  let month = globalDate.getMonth();
  month = dateTable[month];

  calendar.innerHTML = `${month} ${day}th ${year}, ${hours}:${minutes}:${seconds}`;
}


window.addEventListener('load', () => {
  showBook( bookArray );
  setInterval(getTime, 1000);
});

