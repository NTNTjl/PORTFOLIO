document.addEventListener('DOMContentLoaded', () => {
    // Form validation and submission
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const firstName = document.getElementById('first-name').value.trim();
        const lastName = document.getElementById('last-name').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Basic validation
        if (firstName === '' || lastName === '' || message === '') {
            alert('Veuillez remplir tous les champs.');
            return;
        }
        
        // Here you would typically send the form data to a server
        // For now, we'll just show a success message
        alert(`Merci ${firstName} ${lastName}! Votre message a été envoyé.`);
        
        // Reset the form
        contactForm.reset();
    });

    // Project card click interaction (optional enhancement)
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const detailsButton = card.querySelector('.project-details');
        
        detailsButton.addEventListener('click', () => {
            // Toggle flip class manually if needed
            card.classList.toggle('flipped');
            
            // Optional: You could add more interaction here
            // For example, opening a modal with more project details
        });
    });
});