document.addEventListener('DOMContentLoaded', function() {
    const mascotWrapper = document.querySelector('.mascot-img-wrapper');
    const mascotMenu = document.querySelector('.mascot-menu');
    const speechBubble = document.querySelector('.speech-bubble');

    if (mascotWrapper && mascotMenu) {
        mascotWrapper.addEventListener('click', function(e) {
            e.stopPropagation();
            mascotMenu.classList.toggle('active');
            
            // Hide speech bubble when menu is open
            if (mascotMenu.classList.contains('active')) {
                speechBubble.style.display = 'none';
            } else {
                speechBubble.style.display = 'block';
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mascotMenu.contains(e.target) && !mascotWrapper.contains(e.target)) {
                mascotMenu.classList.remove('active');
                speechBubble.style.display = 'block';
            }
        });

        // Close menu when clicking a link
        const menuLinks = mascotMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mascotMenu.classList.remove('active');
                speechBubble.style.display = 'block';
            });
        });
    }
});
