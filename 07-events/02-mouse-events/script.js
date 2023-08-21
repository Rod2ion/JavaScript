// const logo = document.querySelector('img');
// const onClick = () => console.log('click event');
// const onDoubleClick = () => console.log('double click event');
// // Event Listeners

// // logo.addEventListener('click', onClick);
// // logo.addEventListener('dblclick', onDoubleClick);

// if (logo.addEventListener('click', onClick)) {
//     onClick = () => console.log('click event');
    
// } else  {
//     logo.addEventListener('dblclick', onDoubleClick);
    
// }

const logo = document.querySelector('img');


const onClick = () => console.log('click event');
const onMauseDown = () => console.log('mause down event');
const onMauseUpp = () => console.log('mause upp event');
const onMauseWheel = () => console.log('mause wheel event');
const onDoubleClick = () => {
    if (document.body.style.backgroundColor !== 'black') {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';

    }
};
// Event Listeners

logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('mauseup', onMauseUpp);
logo.addEventListener('mausedown', onMauseDown);
logo.addEventListener('wheel', onMauseWheel);

