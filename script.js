console.log("JavaScript is running!"); // Check if script is loaded and running

// Change text content dynamically
document.getElementById('change-text').addEventListener('click', function() {
    const textElement = document.getElementById('text-content');
    textElement.textContent = 'The text has been changed!';
    textElement.style.color = 'blue'; // Change text color
    textElement.style.fontSize = '20px'; // Change font size
});

// Add a new element to the DOM
document.getElementById('add-element').addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a newly added element.';
    newElement.style.color = 'green'; // Adding some style to the new element
    document.getElementById('element-container').appendChild(newElement);
});

// Remove the last element from the DOM
document.getElementById('remove-element').addEventListener('click', function() {
    const container = document.getElementById('element-container');
    if (container.lastChild) {
        container.removeChild(container.lastChild);
    }
});
