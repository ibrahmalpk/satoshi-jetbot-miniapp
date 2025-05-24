function enterApp() {
  document.getElementById('intro').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  renderDevices();
}

function openDeposit() {
  document.getElementById('deposit-screen').classList.toggle('hidden');
}

function connectWallet() {
  alert("Cüzdan bağlantı özelliği eklenecek");
}

function depositTRX() {
  const amount = parseFloat(document.getElementById("deposit-amount").value);
  if (!amount || amount <= 0) {
    alert("Geçersiz miktar");
    return;
  }
  alert(amount + " TRX yatırıldı (demo)");
}

function renderDevices() {
  const devices = [
    { name: "Normal Miner", img: "https://api.dicebear.com/7.x/icons/svg?seed=miner1", rate: "3 TRX/gün" },
    { name: "Epic Miner", img: "https://api.dicebear.com/7.x/icons/svg?seed=miner2", rate: "5 TRX/gün" },
    { name: "Legend Miner", img: "https://api.dicebear.com/7.x/icons/svg?seed=miner3", rate: "7 TRX/gün" }
  ];
  const list = document.getElementById("device-list");
  list.innerHTML = "";
  devices.forEach(d => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${d.img}" />
      <h3>${d.name}</h3>
      <p>${d.rate}</p>
    `;
    list.appendChild(card);
  });
}
