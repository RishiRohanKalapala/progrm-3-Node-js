document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (username.trim() === '' || password.trim() === '') {
      alert('Username and password are required.');
      return;
    }
  
    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }
  
    // Perform registration process (e.g., send data to server)
    alert('Registration successful!');
    // Clear form fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
  });
  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var loginUsername = document.getElementById('loginUsername').value;
    var loginPassword = document.getElementById('loginPassword').value;
  
    if (loginUsername.trim() === '' || loginPassword.trim() === '') {
      alert('Username and password are required.');
      return;
    }
  
    // Perform login process (e.g., send data to server for authentication)
    alert('Login successful!');
    // Clear form fields
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
  });
  