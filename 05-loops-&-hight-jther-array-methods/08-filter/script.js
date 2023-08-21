
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

// get only retail companies
const retailCampanies = companies.filter( 
    (company) => company.category === 'Retail');
console.log(retailCampanies);

// get companies that started in or after 1980 and ended in or before 2005

const earlyCompanies = companies.filter((company) => company.strat >= 1980 && company.end <= 2005);
console.log(earlyCompanies);