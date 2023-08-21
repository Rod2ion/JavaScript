const d = new Date();
const month = d.getMonth();
const hour = d.getHours();

switch (month) {
    case 1:
        console.log('It is January');
        break;
    case 2:
        console.log('It is February');
        break;
    case 3:
        console.log('It is March');
        break;
        default:
            console.log('It is not Jan, Feb or March');
}

switch (true) {
    case hour < 12:
        console.log('Good Mornig');
        break;
    case hour < 18:
        console.log('Good Afrenoon');
        break;
    default:
        console.log('Good Night');
        break;
}