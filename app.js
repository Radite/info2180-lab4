// Wait for the DOM to fully load before attaching event handlers
document.addEventListener('DOMContentLoaded', function() {
    // Get the search button and assign a click event handler
    var searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', function() {
        // Get the value of the search input field, and encode it for the URL
        var query = encodeURI(document.getElementById('search-query').value);
        
        // Construct the URL for the AJAX request
        var url = 'superheroes.php'; // Define the endpoint URL for the AJAX request
        if (query) {
            url += '?query=' + query; // Append the search query as a query parameter if provided
        }

        // Create a new XMLHttpRequest object
        var xhr = new XMLHttpRequest();

        // Configure the request
        xhr.open('GET', url, true); // Set up a GET request to the specified URL

        // Set up what to do when the request completes
        xhr.onload = function() {
            if (xhr.status === 200) {
                // Update the content of the 'result' element with the response text
                document.getElementById('result').innerHTML = xhr.responseText;
            } else {
                // Display an error message if the request was not successful
                document.getElementById('result').textContent = 'Error loading results.';
            }
        };
        
        // Set up what to do if the request fails
        xhr.onerror = function() {
            // If there was a network error, display an error message
            document.getElementById('result').textContent = 'Request failed.';
        };

        // Send the request to the server
        xhr.send();
    });
});
