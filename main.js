const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach((item) => 
    item.addEventListener('click', function () {
        this.classList.toggle('collapsible--expanded');
    })
);

const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];



// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// };

// forEach
// companies.forEach(function(company) {
//     console.log(company);
// });

// filter 21 and up
// for ( let i = 0; i < ages.length; i++)
//     if (ages[i] >= 21) 
//         console.log(ages[i]);

// ages.filter(function(age) {
//     if (age >= 21)
//         console.log(age);
// })   

// const canDrink = ages.filter(function(age) {
//     if (age >= 21) 
//         return true;
// });
// console.log(canDrink);

// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

//filter companies that are retail
// const retail = companies.filter(type => type.category === "Retail");
// console.log(retail);

// filter companies from the 80s
// const eighties = companies.filter(startDate => startDate.start >= 1980 && startDate.start <= 1989);
// console.log(eighties);

//filter companites that lasted 10+ years
// const decade = companies.filter(age => (age.end - age.start) >= 10);
// console.log(decade);

//map 
//create array of company names
// const companyNames = companies.map(company => company.name);
// console.log(companyNames);

//square all the ages
// const squared = ages.map(age => age**2);
// console.log(squared);

//sort
//sort companies by start year
// const sortedCompanies = companies.sort(function(c1, c2) {
//     if (c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// });
// console.log(sortedCompanies);

// const sortedCompanies = companies.sort((a,b) => a.start > b.start ? 1 : -1);
// console.log(sortedCompanies);

//sort ages
// const sortedAges = ages.sort((a, b) => a > b ? 1 : -1);
// console.log(sortedAges);
// const sortedAges = ages.sort((a, b) => a - b);
// console.log(sortedAges);

//reduce
//add all ages
// const added = ages.reduce((a, b) => a + b);
// console.log(added);
// const added = ages.reduce((total, age) => total + age, 0);
// console.log(added);

//total years all companies were active
// const companiesTotal = companies.reduce(function(total, company) {
//     return total + (company.end - company.start);
// }, 0);
// console.log(companiesTotal);
// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
// console.log(totalYears);




