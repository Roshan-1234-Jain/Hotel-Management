function showBookingForm(foodType) {
  document.getElementById('bookingForm').style.display = 'block';
  document.getElementById('foodType').value = foodType;
}

function submitBooking() {
  const foodType = document.getElementById('foodType').value;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Perform further actions like sending booking information to a server, etc.
  alert(`Thank you, ${name}! Your ${foodType} booking has been confirmed.`);
  document.getElementById('bookingForm').style.display = 'none';
}
