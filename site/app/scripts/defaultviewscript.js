// Get references to all button elements
const buttons = document.querySelectorAll('.w-button');

// Function to update button class
function updateButtonClass(clickedButton) {
  // Remove the "button-primary" class from all buttons
  buttons.forEach(button => {
    button.classList.remove('button-primary');
    button.classList.add('button-secondary');
  });

  // Add the "button-primary" class to the clicked button
  clickedButton.classList.remove('button-secondary');
  clickedButton.classList.add('button-primary');
}
