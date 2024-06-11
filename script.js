var requestUrl= 'https://api.thecatapi.com/v1/images/0XYvRd7oD';

    // JavaScript for handling nav bar link clicks
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent the default link behavior
          const requestUrl = this.getAttribute('data-url'); // Get the URL from the data-url attribute
          // Fetch the content from the URL
          fetch(url)
            .then(response => response.text())
            .then(html => {
              document.getElementById('content').innerHTML = html; // Load the content into the content div
            })
            .catch(error => {
              console.error('Error fetching content:', error);
              document.getElementById('content').innerHTML = '<p>Failed to load content.</p>'; // Handle errors
            });
        });
      });