// Defalt Params
function registerUser(user = 'Bot'){
    // if (!user) { // !user - not user
    //     user = 'Bot'
    // }

    return user + ' is registered';
}

console.log(registerUser());

// Rest Parms
function sum(...numbers){ // ...numbers not limited numbers
   let total = 0;

   for(const num of numbers){
    total += num;
   }

   return total
}
console.log(sum(1, 2, 3, 4, 5)); // Show me 15 in console because this function sum all numbers

// Objects as prams

function loginUser(user){
    return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
    id: 1,
    name: 'John',
}

console.log(loginUser(user)); // I can do this use a const 

console.log(loginUser({
    id: 2,
    name: 'Sara',
})); // And I can use console log and do like this example


// Arrays as prams

function getRandom(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];
    
    console.log(item);
}

getRandom([1,2,3,4,5,6,7,8,9,10,11,12]); // Generation random number 