document.addEventListener('DOMContentLoaded', () => {
   
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        
        const firstName = document.getElementById('first-name').value.trim();
        const lastName = document.getElementById('last-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
       
        if (firstName === '' || lastName === '' || message === '') {
            alert('Veuillez remplir tous les champs.');
            return;
        }
        
        alert(`Merci ${firstName} ${lastName}! Votre message a été envoyé.`);
        
        // Reset la forme
        contactForm.reset();
    });

    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const detailsButton = card.querySelector('.project-details');
        
        detailsButton.addEventListener('click', () => {

            card.classList.toggle('flipped');
            

        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-items');
    const leftArrow = document.getElementById('carousel-left');
    const rightArrow = document.getElementById('carousel-right');

    let currentIndex = 0;

    const updateCarousel = () => {
        const items = document.querySelectorAll('.carousel-item');
        items.forEach((item, index) => {
            if (index === currentIndex) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    };

    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselContainer.children.length - 1;
        updateCarousel();
    });

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex < carouselContainer.children.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    updateCarousel();
});
