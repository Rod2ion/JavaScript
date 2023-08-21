let x;

const num = new Number(5);

x = num.toString();

x = num.toString().length;

x = num.toFixed(2) // Dodaje zera po kropce, i zaokrągla liczby Add zero after the dot and raund a numbers

x = num.toPrecision(2) // też zaokrągla liczby  too raund numbers

x= num.toExponential(2); // nie wiem co to jest ale dopisuje e+0 na przykładzie number 5
// I don't know what is do but it's write e+0 in np number 5

x = num.toLocaleString('ua-UA'); // wybiera arabskie czy jeszcze jakies numery choose Arabskie numbers or others

x = Number.MAX_VALUE;
x= Number.MIN_VALUE;
console.log(x);