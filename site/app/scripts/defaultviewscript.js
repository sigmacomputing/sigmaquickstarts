// JavaScript File

// Section: Document Ready
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.w-button');
  const currentCategory = getCategoryFromURL() || 'show-all';

  updateButtonStates(currentCategory);
  filterItemsByCategory(currentCategory); // Filter items based on URL category or show all

  buttons.forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      const category = this.getAttribute('data-cat');

      updateButtonStates(category);
      filterItemsByCategory(category);
      updateURL(category);
    });
  });
});

// Section: Utility Function - Get Category from URL
function getCategoryFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('cat');
  return category;
}

// Section: Update Button States
function updateButtonStates(selectedCategory) {
  const buttons = document.querySelectorAll('.w-button');

  buttons.forEach(button => {
    const category = button.getAttribute('data-cat');
    button.classList.toggle('button-primary', category === selectedCategory);
    button.classList.toggle('button-secondary', category !== selectedCategory);
  });
}

// Section: Update URL
function updateURL(category) {
  const newUrl = category !== 'show-all' ? `/?cat=${category}` : '/';
  history.pushState({ category }, '', newUrl);
}

// Section: Filter Items by Category
function filterItemsByCategory(category) {
  const items = document.querySelectorAll('.retailers-card'); // Select all cards
  console.log(`Filtering for category: ${category}, Total items found: ${items.length}`);

  items.forEach(item => {
    const itemCategory = item.getAttribute('data-category');
    const shouldDisplay = itemCategory === category || category === 'show-all';
    item.style.display = shouldDisplay ? 'block' : 'none';
    console.log(`Item: ${itemCategory}, Should Display: ${shouldDisplay}`);
  });
}

