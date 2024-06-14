document.addEventListener('DOMContentLoaded', () => {
  // Get references to the breed info button and container where breed info will be displayed
  const breedInfoButton = document.getElementById('breedInfoButton');
  const breedInfoContainer = document.getElementById('breedInfoContainer');

  // Add an event listener to the breed info button to fetch breed data when clicked
  breedInfoButton.addEventListener('click', async () => {
    try {
      // Make a request to the cat breeds API
      const response = await fetch('https://api.thecatapi.com/v1/breeds');
      // Parse the JSON response
      const breeds = await response.json();
      // Display the fetched breed data
      displayBreeds(breeds);
    } catch (error) {
      // Log any errors to the console
      console.error('Error fetching breed data:', error);
      // Show an error message in the container if the fetch fails
      breedInfoContainer.innerHTML = '<p>Failed to load breed information. Please try again later.</p>';
    }
  });

  // Function to display the list of breeds
  function displayBreeds(breeds) {
    // Clear any previous content in the container
    breedInfoContainer.innerHTML = '';
    // Create an unordered list element
    const breedList = document.createElement('ul');
    // Add the custom CSS class to the list
    breedList.classList.add('breed-list');

    // Loop through each breed in the fetched data
    breeds.forEach(breed => {
      // Create a list item for each breed
      const listItem = document.createElement('li');
      // Add the custom CSS class to the list item
      listItem.classList.add('breed-item');
      // Set the HTML content of the list item to include the breed name and description
      listItem.innerHTML = `<strong>${breed.name}</strong>: ${breed.description}`;
      // Append the list item to the unordered list
      breedList.appendChild(listItem);
    });

    // Append the unordered list to the container
    breedInfoContainer.appendChild(breedList);
  }
});
