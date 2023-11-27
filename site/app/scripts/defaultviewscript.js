// Added by PB 20 Jun 2023
// Provides colored button on click of categories

// Get references to all button elements
const buttons = document.querySelectorAll('.w-button');

// check if they actually exist to avoid null reference errors.
const displayText = document.getElementById('displayText');
if (displayText) {
  displayText.textContent = `Last clicked category: ${category}`;
} else {
  console.error('displayText element not found');
}

// Function to update button class and URL
function updateButtonClass(event, clickedButton) {
  // Log the category being clicked
    console.log('Category clicked:', clickedButton.getAttribute('data-cat'));
 try {
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
    history.pushState(null, '', 'https://quickstarts.sigmacomputing.com/');
  } else {
    const newUrl = `https://quickstarts.sigmacomputing.com/?cat=${category}`;
    history.pushState({ category }, '', newUrl);
  }

  // Perform filtering based on the selected category
  filterItemsByCategory(category);
} catch (error) {
  console.error('Error in updateButtonClass:', error);
}
}

// Function to filter items by category
function filterItemsByCategory(category) {
  // Log the category being filtered
    console.log('Filtering category:', category);
  try {
  // Get all items and hide them
  const items = document.querySelectorAll('.retailers-card');
  items.forEach(item => {
    item.style.display = 'none';
  });

  // Show items with matching category
  if (typeof category !== 'string') {
    console.error('Invalid category type:', category);
    return;
  }
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
} catch (error) {
  console.error('Error in filterItemsByCategory:', error);
}
}
