console.log("test");

const sizeJohn = document.querySelector("#size_john") as HTMLInputElement;
const sizeMeike = document.querySelector("#size_meike") as HTMLInputElement;
const ageJohn = document.querySelector("#age_john") as HTMLInputElement;
const ageMeike = document.querySelector("#age_meike") as HTMLInputElement;

const result = document.querySelector(".result");


const button = document.querySelector("#btnCompare") as HTMLButtonElement;

function compare() {
    const sizeJ = Number(sizeJohn.value);
    const ageJ = Number(ageJohn.value);

    const sizeM = Number(sizeMeike.value);
    const ageM = Number(ageMeike.value);

    const resultJ = ageJ * 5 + sizeJ;

    const resultM = ageM * 5 + sizeM;

    const resultGlobal = resultJ > resultM ? "John gewinnt mit " + resultJ + " Punkten gegen Meike mit " + resultM : "Meike gewinnt mit " + resultM + " Punkten gegen John mit " + resultJ;

    if (result != null) {
        result.innerHTML = `${resultGlobal}`;
    }


    // const ergebnis: string = resultGlobal.toString();

    // const ergebnis.innerHTML

    // console.log(ergebnis);
    console.log(resultJ);
    console.log(resultM);

    console.log(resultGlobal);


}

button.onclick = compare;
