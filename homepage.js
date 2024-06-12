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

    
