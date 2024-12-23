
const randomOne = Math.floor(Math.random() * 77);
const randomTwo = Math.floor(Math.random() * 77);
console.log(randomOne);
console.log(randomTwo);

if (randomOne === randomTwo) {
    console.log("Was für ein Zufall");
} else
    if (randomOne > randomTwo) {
        console.log("Erste Zahl größer");
    } else {
        console.log("Zweite Zahl größer");
    }

switch (true) {
    case (randomOne == randomTwo):
        console.log("Was für ein Zufall");
        break;
    case (randomOne > randomTwo):
        console.log("Erste Zahl größer");
        break;
    case (randomOne < randomTwo):
        console.log("Zweite Zahl größer");
        break;
}

