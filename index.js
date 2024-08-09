const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function() {
    if (searchInput.value.length > 0) {
        clearButton.style.display = 'block';
    } else {
        clearButton.style.display = 'none';
    }
});

const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', function() {
    searchInput.value = '';
    clearButton.style.display = 'none';
});
