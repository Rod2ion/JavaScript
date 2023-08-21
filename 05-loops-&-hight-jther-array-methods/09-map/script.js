const numbers = [1,2,3,4,5];
const companies = [
    {name: 'Company One', category: 'Finance', strat: 1981, end: 2004},
    {name: 'Company Two', category: 'Retail', strat: 1992, end: 2008},
    {name: 'Company Three', category: 'Radio', strat: 1999, end: 2007},
    {name: 'Company Four', category: 'Auto', strat: 1989, end: 2010},
    {name: 'Company Five', category: 'Retail', strat: 2009, end: 2009},
    {name: 'Company Six', category: 'Technology', strat: 1987, end: 2010},
    {name: 'Company Seven', category: 'Finance', strat: 1986, end: 1996},
    {name: 'Company Eight', category: 'Technology', strat: 2011, end: 2016},
    {name: 'Company Nine', category: 'Retail', strat: 1981, end: 1989},
];

const companyNames = companies.map((company) =>company.name);
// console.log(companyNames); // Show me all company names

// create an array of obcjects with the name and the length of each company in years
const companyYears = companies.map((company) => {
    return{
        name: company.name,
        length: company.end - company.strat + ' years',
    };
});

// chain map methods
const squareAndDouble = numbers.map((number) => Math.sqrt(numbers));
console.log(squareAndDouble);