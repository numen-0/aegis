function showPopup(text) {
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');
    popupText.textContent = text;
    popup.classList.remove('hidden');
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('hidden');
}

function copyText() {
    const popupText = document.getElementById('popup-text');
    navigator.clipboard.writeText(popupText.textContent).then(() => {
        alert('Text copied to clipboard!');
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}

