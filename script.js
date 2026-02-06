const messages = [
    "Are you sure babiee?",
    "Really sure mere item??",
    "Are you positive meri jaan?",
    "Pratham please...",
    "Just think about it gundaa babiee!",
    "If you say no, I will be really sad my pookie babiee 😭...",
    "I will be very sad bachaa 💔...",
    "I will be very very very sad na mere daav 💔...",
    "Ok fine, I will stop asking Pratham...",
    "Just kidding, say yes pleaseeeee my babieeee! ❤️"
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
