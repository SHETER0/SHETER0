function addRecommendation() {
    const messageInput = document.getElementById('rec-message');
    const nameInput = document.getElementById('rec-name');
    const container = document.getElementById('recommendation-container');
    const modal = document.getElementById('custom-modal');

    // 1. Validation: Don't show modal if message is empty
    if (!messageInput || messageInput.value.trim() === "") {
        if(messageInput) messageInput.style.border = "2px solid red";
        return; 
    }

    // 2. Create and Append the card
    const newCard = document.createElement('div');
    newCard.className = 'rec-card';
    
    let content = `<p>"${messageInput.value}"</p>`;
    if (nameInput.value.trim() !== "") {
        content += `<small><strong>- ${nameInput.value}</strong></small>`;
    }
    
    newCard.innerHTML = content;
    container.appendChild(newCard);

    // 3. Clear inputs
    messageInput.value = "";
    nameInput.value = "";
    messageInput.style.border = "1px solid #ccc"; // Reset border

    // 4. Show Custom Modal
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeModal() {
    const modal = document.getElementById('custom-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal if user clicks outside of the white box
window.addEventListener('click', function(event) {
    const modal = document.getElementById('custom-modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
});