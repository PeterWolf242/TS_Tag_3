// const isOnline = true;
// const isPremiumUser = false;
// const isAdult = false;

// const result = isOnline ? console.log("Online") :
//     console.log("Nicht Online");

// const monthlyFee = isPremiumUser ? 19.99 : 12.99;

// const adult = isAdult ? window.alert("Keine Berechtigung") : window.confirm("Willkommen");

const randomAge = Math.floor(Math.random() * 10);

const isMiddleAged = randomAge >= 45 && randomAge <= 65 ? true : false;

const randomSalary = Math.floor(Math.random() * 15000);

console.log(randomSalary);

const randomNew = randomSalary > 10000 ? console.log("You are rich") : randomSalary > 1500 ? console.log("Not too bad") : console.log("Not that much");