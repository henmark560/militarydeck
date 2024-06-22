const login_btn = document.getElementById('submit-btn');

document.getElementById('leave_form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    // Get form data
    const formData = new FormData(this);
    login_btn.disabled = true;

    // Simulated endpoint for login (replace this with your actual endpoint)
    const loginEndpoint = 'https://vacation-server-yzlr.onrender.com';
   
    // Simulated login request
    fetch(`${loginEndpoint}/post/data`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        'name': formData.get('name'), 
        'phone': formData.get('phoneNumber'),
        'email': formData.get('email'),
        'country': formData.get('country'),
        'message': formData.get('message')
    })
    })
    .then(data => {
      login_btn.disabled = false;

      // Simulated successful login
      console.log('Login successful:', data);
      alert("Application Submitted Successfully")
    })
    .catch(error => {
      
      console.error('Login failed:', error);
    });
  });