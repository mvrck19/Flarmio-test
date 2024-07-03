document.getElementById('numberForm').addEventListener('submit', function(event) {
    var numberInput = document.getElementById('number').value;
    if (numberInput < 10) {
        alert('The number must be at least 10.');
        event.preventDefault();
    }
});
