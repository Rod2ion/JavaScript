// Step 1
const library = [{
    title: 'Pan Tadeusz',
    author: 'Adam Mickiewicz',
    status: {
        own: true,
        reading: true,
        read: false,
      },
},
{
    title: 'Kamienie na szaniec',
    author: 'Aleksandr Kaminski',
    status: {
        own: true,
        reading: true,
        read: false,
      },
    },
    {
    title: 'Dziady',
    author: 'Adam Mickiewicz',
    status: {
        own: true,
        reading: true,
        read: false,
      },
    },
]

// Step 2

library[0].status.read = true; // Do starus read the true
library[1].status.read = true;
library[2].status.read = true;


// step 3 

const { title: firstBook } = library[0]; // show me title Pan Tadeusz

console.log(firstBook);

// Step 4 

const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);
