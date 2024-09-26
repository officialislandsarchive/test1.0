// Get the elements from the HTML
const colorInput = document.getElementById('colorInput');
const colorOverlay = document.getElementById('colorOverlay');

// Listen for color changes
colorInput.addEventListener('input', function () {
    const selectedColor = colorInput.value;
    // Apply the selected color as an overlay
    colorOverlay.style.backgroundColor = selectedColor;
});
