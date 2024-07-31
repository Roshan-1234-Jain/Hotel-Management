// JavaScript code for form submission handling
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Simulating form submission (you can use AJAX or backend handling)
    // For this example, simply showing a success message after a delay
  
    // Show success message
    document.getElementById('successMessage').classList.remove('hidden');
  
    // Reset form after 3 seconds
    setTimeout(function() {
      document.getElementById('successMessage').classList.add('hidden');
      document.getElementById('feedbackForm').reset();
    }, 3000);
  });
  