const messages = [
    "Are you sure babiee?",
    "Really sure item??",
    "Are you positive meri jaan?",
    "Pratham please...",
    "Just think about it gunda babiee!",
    "If you say no, I will be really sad my babiee 😭...",
    "I will be very sad 💔...",
    "I will be very very very sad 💔...",
    "Ok fine, I will stop asking pratham...",
    "Just kidding, say yes please my babieeeee pleaseeeeee! ❤️"
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
