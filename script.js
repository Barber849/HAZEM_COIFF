document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const booking = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    service: document.getElementById("service").value,
    location: document.getElementById("location").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value
  };

  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push(booking);
  localStorage.setItem("bookings", JSON.stringify(bookings));

  document.getElementById("message").textContent = "✅ Rendez-vous enregistré !";

  this.reset();
});
