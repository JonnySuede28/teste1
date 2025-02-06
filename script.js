const messages = [
    "Tens a certeza?",
    "Tens mesmo a certeza ??",
    "mesmo mesmooo????",
    "Pookie pOR FAVORRRRR...",
    "ANDAAA FREDIIIII...",
    "SOU SENSIVELLLL...",
    "EU CHOROOOO...",
    "ok...eu paro...",
    "NAOO PAROOOOOOOOOOOOOOOOOOOOOOOO, BASTA DIZERES SIM! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}