const colorInput = document.getElementById('colorInput');
const colorOverlay = document.getElementById('colorOverlay');

colorInput.addEventListener('input', function () {
    const selectedColor = colorInput.value;
    colorOverlay.style.backgroundColor = selectedColor;
});
