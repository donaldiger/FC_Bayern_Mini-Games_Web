document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('gameRequestForm');
  const formSuccess = document.getElementById('formSuccess');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      gameName: document.getElementById('gameName').value,
      gameDescription: document.getElementById('gameDescription').value,
      gameType: document.getElementById('gameType').value,
      _subject: `New Game Request: ${document.getElementById('gameName').value}`
    };

    // Send email using Formspree
    fetch('https://formspree.io/f/xqaqrdpk', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Show success message
      form.style.display = 'none';
      formSuccess.style.display = 'block';
      form.reset();
      formSuccess.scrollIntoView({ behavior: 'smooth' });
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error submitting your request. Please try again later.');
    });
  });
});