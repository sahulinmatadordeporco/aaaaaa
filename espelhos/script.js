function calculate() {
    const focalLength = parseFloat(document.getElementById('focal-length').value);
    const objectDistance = parseFloat(document.getElementById('object-distance').value);
    const objectHeight = parseFloat(document.getElementById('object-height').value);

    if (isNaN(focalLength) || isNaN(objectDistance) || isNaN(objectHeight) || focalLength === 0) {
        alert('Por favor, preencha todos os campos com valores válidos.');
        return;
    }

    const mirrorType = focalLength > 0 ? 'Côncavo' : 'Convexo';
    const focalLengthAbs = Math.abs(focalLength);
    const imageDistance = 1 / ((1 / focalLengthAbs) - (1 / objectDistance));
    const magnification = -imageDistance / objectDistance;
    const imageHeight = magnification * objectHeight;

    document.getElementById('mirror-type').textContent = `Tipo de espelho: ${mirrorType}`;
    document.getElementById('magnification').textContent = `Ampliação do espelho: ${magnification.toFixed(2)}`;
    document.getElementById('image-height').textContent = `Altura da imagem: ${imageHeight.toFixed(2)} (A imagem é ${Math.abs(imageHeight) >= objectHeight ? 'maior' : 'menor'} que o objeto)`;
}
