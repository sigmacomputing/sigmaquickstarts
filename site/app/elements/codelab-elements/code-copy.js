/**
 * Code Copy Functionality for Sigma QuickStarts
 * Adds copy buttons to code blocks marked with ```copy-code in markdown
 */

(function() {
  'use strict';

  /**
   * Initializes copy buttons for all copy-code blocks
   */
  function initCopyButtons() {
    // Find all code blocks with the language-copy-code class
    const copyCodeBlocks = document.querySelectorAll('code.language-copy-code');

    copyCodeBlocks.forEach(function(codeBlock) {
      const preElement = codeBlock.parentElement;

      // Skip if button already exists
      if (preElement.querySelector('.copy-button')) {
        return;
      }

      // Add class to pre element for styling
      preElement.classList.add('has-copy-button');

      // Create the copy button
      const copyButton = document.createElement('button');
      copyButton.className = 'copy-button';
      copyButton.textContent = 'copy';
      copyButton.setAttribute('aria-label', 'Copy code to clipboard');

      // Add click event listener
      copyButton.addEventListener('click', function() {
        copyToClipboard(codeBlock, copyButton);
      });

      // Add the button to the pre element
      preElement.appendChild(copyButton);
    });
  }

  /**
   * Copies code content to clipboard and provides visual feedback
   * @param {HTMLElement} codeBlock - The code element containing the text to copy
   * @param {HTMLElement} button - The copy button element
   */
  function copyToClipboard(codeBlock, button) {
    // Get the text content
    const textToCopy = codeBlock.textContent;

    // Use the modern Clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(function() {
        showCopiedState(button);
      }).catch(function(err) {
        console.error('Failed to copy text: ', err);
        fallbackCopy(textToCopy, button);
      });
    } else {
      // Fallback for older browsers
      fallbackCopy(textToCopy, button);
    }
  }

  /**
   * Fallback copy method for older browsers
   * @param {string} text - The text to copy
   * @param {HTMLElement} button - The copy button element
   */
  function fallbackCopy(text, button) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    textArea.style.top = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      if (successful) {
        showCopiedState(button);
      } else {
        console.error('Failed to copy text using fallback method');
      }
    } catch (err) {
      console.error('Fallback copy failed: ', err);
    }

    document.body.removeChild(textArea);
  }

  /**
   * Shows the "copied" state on the button
   * @param {HTMLElement} button - The copy button element
   */
  function showCopiedState(button) {
    const originalText = button.textContent;
    button.textContent = 'copied';
    button.classList.add('copied');

    // Reset after 2 seconds
    setTimeout(function() {
      button.textContent = originalText;
      button.classList.remove('copied');
    }, 2000);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCopyButtons);
  } else {
    initCopyButtons();
  }

  // Re-initialize when navigating between codelab steps
  // (in case steps are loaded dynamically)
  document.addEventListener('google-codelab-step-shown', function() {
    setTimeout(initCopyButtons, 100);
  });

})();
