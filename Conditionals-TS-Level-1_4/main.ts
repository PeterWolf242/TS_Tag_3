console.log("test");
const password = document.querySelector("#password") as HTMLInputElement;

const checkTest = document.querySelector("#validate") as HTMLParagraphElement;

const checkButton = document.querySelector("button") as HTMLButtonElement;

function checkPw() {
    const passwordContent = password.value;
    console.log(passwordContent);
    if (passwordContent.length <= 8) {
        checkTest.innerText = "Das Passwort ist zu kurz";
    } else {
        checkTest.innerText = "Das Passwort ist stark genug";
    }
}

checkButton.onclick = checkPw;
