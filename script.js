window.onload = () => {
  const devices = [
    { name: "Normal Miner", img: "https://api.dicebear.com/7.x/icons/svg?seed=miner1", rate: "3 TRX/gün", price: 40 },
    { name: "Epic Miner", img: "https://api.dicebear.com/7.x/icons/svg?seed=miner2", rate: "5 TRX/gün", price: 80 },
    { name: "Legend Miner", img: "https://api.dicebear.com/7.x/icons/svg?seed=miner3", rate: "7 TRX/gün", price: 150 }
  ];
  const list = document.getElementById("device-list");
  list.innerHTML = "";
  devices.forEach(d => {
    const card = document.createElement("div");
    card.className = "device-card";
    card.innerHTML = `
      <img src="${d.img}" alt="${d.name}" />
      <h3>${d.name}</h3>
      <p>Kazanç: ${d.rate}</p>
      <p>Fiyat: ${d.price} TRX</p>
      <button onclick="alert('Satın al: ${d.name}')">Satın Al</button>
    `;
    list.appendChild(card);
  });
};