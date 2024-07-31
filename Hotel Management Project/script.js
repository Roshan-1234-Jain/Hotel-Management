

// Java script for Home Page

<script>
function redirectToBooking() {
    // Add the URL or navigation logic for the booking page
    alert("Go to Book Now option");
}
</script>






 // Java script for Food
 
<script>
    function submitBooking() {
      // Implement booking submission logic here
      alert('Booking submitted!');
    }
  </script>




    // Java script for Login Form
    
    
    <script>
    function toggleForm() {
      const loginSection = document.getElementById('loginSection');
      const signupSection = document.getElementById('signupSection');
      const toggleLink = document.getElementById('toggleLink');

      if (loginSection.style.display === 'none') {
        loginSection.style.display = 'block';
        signupSection.style.display = 'none';
        toggleLink.innerHTML = "Don't have an account? <a href='javascript:void(0);' onclick='toggleForm()'>Signup</a>";
      } else {
        loginSection.style.display = 'none';
        signupSection.style.display = 'block';
        toggleLink.innerHTML = 'Already have an account? <a href="javascript:void(0);" onclick="toggleForm()">Login</a>';
      }
    }

    function login() {
      // Implement login functionality here
      alert('Login button clicked');
    }

    function signup() {
      // Implement signup functionality here
      alert('Signup button clicked');
    }
  </script>




  // Javascript for Rooms

  <script>
  let selectedRoomId = "";

  function bookRoom(roomId) {
      selectedRoomId = roomId;
      document.getElementById("bookingForm").style.display = "block";
  }

  function submitBooking() {
      const fullName = document.getElementById("fullName").value;
      const email = document.getElementById("email").value;
      const roomtype =document.getElementById("roomtype").value;
      const checkIn = document.getElementById("checkIn").value;
      const checkOut = document.getElementById("checkOut").value;

      // You can send this information to the server for processing and database storage
      console.log(`Room ID: ${selectedRoomId}, Full Name: ${fullName}, Email: ${email}, Room Type: ${roomtype} Check-In: ${checkIn}, Check-Out: ${checkOut}`);

      // Reset the form and hide it
      document.getElementById("bookingForm").reset();
      document.getElementById("bookingForm").style.display = "none";
  }
</script>
  
  



// JavaScript code for booking form

<script>
    function submitForm() {
        // You can add your booking logic here, such as sending data to the server
        // For this example, let's just show an alert
        alert('Booking successful!'); 
    }
</script>





// JavaScript code for contact form

<script>
function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // You can add logic here to send the form data to the server or perform other actions
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Optionally, you can reset the form after submission
    document.getElementById('contactForm').reset();
}
</script>








// JavaScript code for Feedback form 
<script>
        function submitFeedback(event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const feedbackType = document.getElementById("feedbackType").value;
            const comments = document.getElementById("comments").value;

            // You can send this information to the server for processing
            console.log(`Name: ${name}, Email: ${email}, Feedback Type: ${feedbackType}, Comments: ${comments}`);

            // Optionally, you can reset the form after submission
            document.getElementById("feedbackForm").reset();

            // Provide user feedback, e.g., show a thank you message
            alert("Thank you for your feedback!");
        }
    </script>
