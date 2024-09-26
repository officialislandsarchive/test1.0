const colorInput = document.getElementById('colorInput');
const colorOverlay = document.getElementById('colorOverlay');
const themeImage = document.getElementById('themeImage');

colorInput.addEventListener('input', function () {
    const selectedColor = colorInput.value;
    colorOverlay.style.backgroundColor = selectedColor;
});

themeImage.addEventListener('click', function() {
    html2canvas(document.querySelector('.image-container')).then(canvas => {
        canvas.toBlob(function(blob) {
            const item = new ClipboardItem({'image/png': blob});
            navigator.clipboard.write([item]);
            alert('Image copied to clipboard!');
        });
    });
});
