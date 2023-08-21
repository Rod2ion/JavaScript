const button = document.querySelectorAll('from button');
const div = document.querySelectorAll('from dov:nth-child(2)');



button.addEventListener('click', () => {
    alert('Button was clicked');
});

div.addEventListener('click', () => {
    alert('div was clicked');
})