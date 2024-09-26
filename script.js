const canvas = document.getElementById('imageCanvas');
const ctx = canvas.getContext('2d');

const baseImage = new Image();
baseImage.src = 'flamelet_image.png';

const eyeImage = new Image();
eyeImage.src = 'the_eyes.png'; 

baseImage.onload = function() {
    canvas.width = baseImage.width;
    canvas.height = baseImage.height;

    drawImageWithColor();
};

function drawImageWithColor() {
    ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);

    const color = document.getElementById('colorInput').value;

    ctx.globalCompositeOperation = 'source-atop';
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.globalCompositeOperation = 'source-over';
    ctx.drawImage(eyeImage, 0, 0, canvas.width, canvas.height);
}

document.getElementById('colorInput').addEventListener('input', function() {
    drawImageWithColor();
});
