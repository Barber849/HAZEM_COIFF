document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const service = document.getElementById("service").value;
  const location = document.getElementById("location").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  const booking = { name, phone, service, location, date, time };

  // تخزين المواعيد
  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push(booking);
  localStorage.setItem("bookings", JSON.stringify(bookings));

  document.getElementById("message").textContent = "✅ Rendez-vous enregistré !";
  this.reset();

  // رسالة WhatsApp للعميل
  // الرقم اللي كتب العميل: phone
  const clientNumber = phone.startsWith("0") ? "216" + phone.slice(1) : phone;
  const text = `✅ Bonjour ${name} !\nVotre rendez-vous chez HAZEM COIFF est confirmé:\nService: ${service}\nLocalisation: ${location}\nDate: ${date}\nHeure: ${time}\nMerci !`;
  const whatsappURL = `https://api.whatsapp.com/send?phone=${clientNumber}&text=${encodeURIComponent(text)}`;

  window.open(whatsappURL, "_blank"); // يفتح WhatsApp للعميل
});
