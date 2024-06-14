// JavaScript for modal to open

const modal = document.getElementById('modal');
const openModalButton = document.getElementById('openModal');
const closeBTN = document.getElementById('closeModal');


// openModalButton.addEventListener('click', () => {
//     modal.style.display = 'block';
// });

closeBTN.addEventListener('click', () => {
    modal.style.display = 'none';
});
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

    
// JavaScript to handle fetching and displaying breed info
document.addEventListener('DOMContentLoaded', () => {
    const breedInfoButton = document.getElementById('catBreedInfoButton');
    const breedInfoContainer = document.getElementById('catBreedInfoContainer');

    breedInfoButton.addEventListener('click', async () => {
      try {
        // Fetch breed info from API
        const response = await fetch('https://api.thecatapi.com/v1/breeds');
        const breeds = await response.json();
        displayBreeds(breeds);
        //mapping breed names 
        const mappedNames = breeds.map(breed => breed.name);
        //creating localstorage
        localStorage.setItem('name', mappedNames);
      } catch (error) {
        console.error('Error fetching breed data:', error);
        breedInfoContainer.innerHTML = '<p>Failed to load breed information. Please try again later.</p>';
      }
    });

    function displayBreeds(breeds) {
      // Clear previous content
      breedInfoContainer.innerHTML = '';
      const breedList = document.createElement('ul');
      breedList.classList.add('breed-list');

      // Populate list with breed data
      breeds.forEach(breed => {
        const listItem = document.createElement('li');
        listItem.classList.add('breed-item');
        listItem.innerHTML = `<strong>${breed.name}</strong>: ${breed.description}`;
        breedList.appendChild(listItem);
      });

      breedInfoContainer.appendChild(breedList);
    }
  });