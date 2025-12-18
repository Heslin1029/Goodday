const btnAll = document.getElementById('category-all');
const specificButtons = document.querySelectorAll('#category-convo, #category-wedding, #category-food');
const allButtons = document.querySelectorAll('[id^="category-"]');
const allGalleryItems = document.querySelectorAll('.gallery-food, .gallery-wedding, .gallery-convo');

// Helper to switch button styles
function setButtonState(btn, active) {
    if (active) {
        btn.classList.add('primary-button');
        btn.classList.remove('secondary-button');
    } else {
        btn.classList.remove('primary-button');
        btn.classList.add('secondary-button');
    }
}

// 1. Handle Specific Category Clicks (Single Select)
specificButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const clickedBtn = e.currentTarget;
        const targetClass = clickedBtn.id.replace('category-', 'gallery-');
        const isActive = clickedBtn.classList.contains('primary-button');

        // Reset ALL buttons and hide ALL items first
        allButtons.forEach(btn => setButtonState(btn, false));
        allGalleryItems.forEach(item => item.style.display = 'none');

        // If the button wasn't active, turn it on and show its items
        // If it WAS active, it stays off (effectively toggling off)
        if (!isActive) {
            setButtonState(clickedBtn, true);
            document.querySelectorAll(`.${targetClass}`).forEach(item => {
                item.style.display = 'block';
            });
        }
    });
});

// 2. Handle "Category All" Click
btnAll.addEventListener('click', (e) => {
    const isAlreadyPrimary = btnAll.classList.contains('primary-button');
    const shouldShowAll = !isAlreadyPrimary;

    // Reset all specific buttons
    specificButtons.forEach(btn => setButtonState(btn, false));
    
    // Toggle Category All button
    setButtonState(btnAll, shouldShowAll);

    // Show or hide every gallery item
    allGalleryItems.forEach(item => {
        item.style.display = shouldShowAll ? 'block' : 'none';
    });
});