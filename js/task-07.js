const fontSizeAjustmetInput = document.getElementById('font-size-control');
const textForSizing = document.getElementById('text');


fontSizeAjustmetInput.addEventListener('input', onFontSizeControl);
function onFontSizeControl(event) {
    textForSizing.style.fontSize = event.currentTarget.value + 'px';
}