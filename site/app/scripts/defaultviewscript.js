// Added by PB 20 Jun 2023
// Provides colored button on click of categories

// Get references to all button elements
const buttons = document.querySelectorAll('.w-button');

// Function to update button class and URL
function updateButtonClass(event, clickedButton) {
  // Prevent the default behavior of the anchor tag
  event.preventDefault();

  // Retrieve the category value from the data-cat attribute
  const category = clickedButton.getAttribute('data-cat');

  // Remove the "button-primary" class from other buttons
  buttons.forEach(button => {
    button.classList.remove('button-primary');
    button.classList.add('button-secondary');
  });

  // Add the "button-primary" class to the clicked button
  clickedButton.classList.remove('button-secondary');
  clickedButton.classList.add('button-primary');

  // Update the display text with the last clicked button category
  const displayText = document.getElementById('displayText');
  displayText.textContent = `Last clicked category: ${category}`;

  // Update the URL with the category value using pushState()
  if (category === 'show-all') {
    history.pushState(null, '', 'http://localhost:8000');
  } else {
    const newUrl = `http://localhost:8000/?cat=${category}`;
    history.pushState({ category }, '', newUrl);
  }

  // Perform filtering based on the selected category
  filterItemsByCategory(category);
}

// Function to filter items by category
function filterItemsByCategory(category) {
  // Get all items and hide them
  const items = document.querySelectorAll('.retailers-card');
  items.forEach(item => {
    item.style.display = 'none';
  });

  // Show items with matching category
  if (category === 'show-all') {
    items.forEach(item => {
      item.style.display = 'block';
    });
  } else {
    const matchingItems = document.querySelectorAll(`.retailers-card[data-category="${category}"]`);
    matchingItems.forEach(item => {
      item.style.display = 'block';
    });
  }
}
