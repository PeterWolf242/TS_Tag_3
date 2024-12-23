console.log("test");

// * Elemente solektieren die wir später brauchen
const numberInputA = document.querySelector("#number-a") as HTMLInputElement;
const numberInputB = document.querySelector("#number-b") as HTMLInputElement;
const button = document.querySelector("#addition-button") as HTMLButtonElement;
const resultElement = document.querySelector("#result") as HTMLSpanElement;


// ? Funtktion die beim klicken ausgelöst werden soll

function add() {

    const numberA = Number(numberInputA.value);
    const numberB = Number(numberInputB.value);

    console.log(numberA + numberB);

    const result = numberA + numberB;

    const comment = result < 100 ? " (das ist eine kleine Zahl)" : " (Hurra, endlich eine Zahl über 100 😺";

    resultElement.innerText = result.toFixed(2) + comment;

}

button.onclick = add;