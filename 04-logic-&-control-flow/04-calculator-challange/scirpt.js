
function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case 1:
            result = num1 + num2;
            break;
        case 2:
            result = num1 - num2;
            break;
        case 3:
            result = num1 * num2;
            break;
        case 4:
            result = num1 / num2;
            break;
        case 5:
            result = num1 & num2;
            break;
        default:
            result = 'Invalid Operator'
        
    }
    console.log(result);
    return result;
}

calculator(5,2, 2)