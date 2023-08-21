function capitalizeWords(str) {
    return str 
    .toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(' ')
}

function makeMoney(amout){
    return `$${amout}`
}

export {capitalizeWords, makeMoney};
