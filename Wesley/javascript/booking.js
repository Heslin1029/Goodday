document.addEventListener('DOMContentLoaded', () => {
            // Select all dropdown containers using the class name
            const allDropdowns = document.querySelectorAll('.selection-container');
            
            // --- 1. SET UP EVENT LISTENERS FOR EACH DROPDOWN ---
            allDropdowns.forEach(container => {
                const header = container.querySelector('.dropdown-header');
                const selectedLink = container.querySelector('.selected-service');
                const options = container.querySelectorAll('.dropdown-option');

                // Toggle visibility when the header is clicked
                header.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    // Close all other open dropdowns first
                    allDropdowns.forEach(otherContainer => {
                        if (otherContainer !== container && otherContainer.classList.contains('open')) {
                            otherContainer.classList.remove('open');
                            otherContainer.querySelector('.dropdown-header').setAttribute('aria-expanded', 'false');
                        }
                    });

                    // Toggle the 'open' class on the current container
                    container.classList.toggle('open');
                    
                    // Update ARIA attribute for accessibility
                    const isExpanded = container.classList.contains('open');
                    header.setAttribute('aria-expanded', isExpanded);
                });

                // Handle option selection
                options.forEach(option => {
                    option.addEventListener('click', (e) => {
                        e.preventDefault();
                        
                        // Get the text of the clicked option
                        const selectedText = option.textContent.trim();

                        // Update the text in the header link
                        selectedLink.textContent = selectedText;
                        
                        // Collapse the dropdown
                        container.classList.remove('open');
                        header.setAttribute('aria-expanded', 'false');
                    });
                });
            });


            // --- 2. CLOSE DROPDOWN WHEN CLICKING OUTSIDE ANY DROPDOWN ---
            document.addEventListener('click', (e) => {
                // Find the nearest container to the clicked target
                const clickedInsideDropdown = e.target.closest('.selection-container');
                
                // If the click was not inside any dropdown
                if (!clickedInsideDropdown) {
                    allDropdowns.forEach(container => {
                        if (container.classList.contains('open')) {
                            container.classList.remove('open');
                            container.querySelector('.dropdown-header').setAttribute('aria-expanded', 'false');
                        }
                    });
                }
            });
        });