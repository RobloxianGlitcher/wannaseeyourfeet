const dialog = [
  { sender: "Ty", message: "Siemka" },
  { sender: ".krufka.", message: "Więc chcesz zobaczyć dysk 1TB twoich stópek?" },
  { sender: "Ty", message: "Tak 😏" },
  { sender: ".krufka.", message: "Chyba cię popierdoliło, xd." },
  { sender: "Ty", message: "😭 spierdalaj" },
  { sender: ".krufka.", message: "Żartujeee, nie płacz już złamasie" },
  { sender: "Ty", message: "To pokazuj kurwo" },
  { sender: ".krufka.", message: "Nie pyskuj do mnie spierdolino umysłowa, zaraz ciebie złamasie skończony przekieruje na Google Drive" },
  { sender: "Ty", message: "Dobra kurwa pokazuj, nie mam całego dnia" },
  { sender: ".krufka.", message: "Dobra chuju, mam dość, masz kurwa." }
];

const container = document.getElementById('chat-container');
const dzwiek = document.getElementById('sound');
let index = 0;

function dodajWiadomosc(tresc, isUserMessage = false) {
  const wiadomosc = document.createElement('div');
  wiadomosc.className = `message ${isUserMessage ? 'user' : ''}`;

  if (!isUserMessage) {
    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    wiadomosc.appendChild(avatar);
  }

  const textContainer = document.createElement('div');
  textContainer.className = 'text';

  const nick = document.createElement('span');
  nick.className = 'nick';
  nick.textContent = isUserMessage ? 'Ty' : '.krufka.';

  const message = document.createElement('span');
  message.className = 'message-text';
  message.textContent = tresc;

  textContainer.appendChild(nick);
  textContainer.appendChild(message);

  wiadomosc.appendChild(textContainer);

  container.appendChild(wiadomosc);
  container.scrollTop = container.scrollHeight;

  dzwiek.currentTime = 0;
  dzwiek.play();
}

function wyswietlWiadomosci() {
  if (index < dialog.length) {
    const { sender, message } = dialog[index];
    dodajWiadomosc(message, sender === "Ty");
    index++;
    setTimeout(wyswietlWiadomosci, 1500);
  } else {
    setTimeout(() => {
      window.location.href = "https://youtu.be/xvFZjo5PgG0";
    }, 1000);
  }
}

wyswietlWiadomosci();
