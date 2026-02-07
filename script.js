function sendWhatsApp() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const place = document.getElementById("place").value;

  if (!name || !phone || !date || !place) {
    alert("عبي جميع الخانات");
    return;
  }

  const message =
`📅 Nouveau rendez-vous - HAZEM COIFF

👤 Nom: ${name}
📞 Téléphone: ${phone}
📍 Lieu: ${place}
🗓 Date: ${date}`;

  const adminNumber = "21694035519";

  const url = `https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
