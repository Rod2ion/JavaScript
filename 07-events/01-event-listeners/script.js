// JavaScript Event Listener

const clearBtn = document.querySelector('#clear');

function onClear() {
    const itemList = document.querySelector('ul');
    const items = itemList.querySelector('li');
    // itemList.innerHTML = '';

    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
}


// clearBtn.onclick = function () {
//     alert('Clear Items')
// }

// // addEventListener() I can see text too in the console if i write clg
// clearBtn.addEventListener('click',  () => {
//     alert('clear items');
// })
// clearBtn.addEventListener('click',  () => {
//     console.log('clear items');
// })
clearBtn.addEventListener('click', onClear);

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 1000);