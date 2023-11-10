document.addEventListener('DOMContentLoaded', function() {
    var searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', function() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                if (xhr.status == 200) {
                    // Show the response from superheroes.php as an alert
                    alert(xhr.responseText);
                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhr.open('GET', 'superheroes.php', true);
        xhr.send();
    });
});
