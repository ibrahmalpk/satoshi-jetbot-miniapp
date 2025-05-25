const apiBase = 'https://your-backend-url.com/api';
let userId = '';

function connectWallet() {
  const tg = window.Telegram?.WebApp;
  const user = tg?.initDataUnsafe?.user;
  if (user) {
    userId = user.id;
    document.getElementById('wallet-address').innerText = `Telegram ID: ${user.id}`;
    document.getElementById('welcome').innerText = `Hoş geldin, ${user.first_name}`;
  }
}

function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
}

function depositTRX() {
  const amount = parseFloat(document.getElementById('deposit-amount').value);
  if (!amount || amount <= 0) return alert("Geçerli miktar girin");
  fetch(`${apiBase}/deposit`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, amount })
  }).then(res => res.json()).then(data => alert(`Yatırıldı: ${data.balance} TRX`));
}

function withdrawTRX() {
  const amount = parseFloat(document.getElementById('withdraw-amount').value);
  const address = prompt("TRX adresinizi girin:");
  fetch(`${apiBase}/withdraw`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, to: address, amount })
  }).then(res => res.json()).then(data => alert("Çekildi: " + data.tx.txID));
}

function buyDevice(type) {
  fetch(`${apiBase}/buy-device`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, type })
  }).then(res => res.json()).then(data => alert(`Satın alındı: ${data.devices.length} cihaz`));
}

window.onload = () => {
  connectWallet();
  const devices = [
    { name: "Normal", img: "https://api.dicebear.com/7.x/icons/svg?seed=1", rate: "3 TRX/gün", type: "Normal" },
    { name: "Epic", img: "https://api.dicebear.com/7.x/icons/svg?seed=2", rate: "5 TRX/gün", type: "Epic" },
    { name: "Legend", img: "https://api.dicebear.com/7.x/icons/svg?seed=3", rate: "7 TRX/gün", type: "Legend" }
  ];
  const list = document.getElementById("device-list");
  devices.forEach(d => {
    const card = document.createElement("div");
    card.innerHTML = `<img src="${d.img}" /><h3>${d.name}</h3><p>${d.rate}</p><button onclick="buyDevice('${d.type}')">Al</button>`;
    list.appendChild(card);
  });
};