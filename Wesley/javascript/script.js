document.addEventListener('DOMContentLoaded', function() {
// 1. Select all elements with the class 'dropdown'
const dropdowns = document.querySelectorAll('.dropdown');

// 2. Apply the single-open accordion logic
dropdowns.forEach(dropdown => {
    // We attach the listener to the whole dropdown container or just the title
    // Based on your initial code, the listener is on the entire .dropdown div
    dropdown.addEventListener('click', function() {
        const clickedDropdown = this;

        // --- Core Logic: Close Others ---
        dropdowns.forEach(otherDropdown => {
            // Check if the current item is NOT the one that was clicked
            if (otherDropdown !== clickedDropdown) {
                // Remove the active class from all others
                otherDropdown.classList.remove('dropdown-active');
            }
        });

        // --- Toggle Clicked Item ---
        // Toggle 'dropdown-active' on the clicked dropdown itself
        clickedDropdown.classList.toggle('dropdown-active');
    });
});
});