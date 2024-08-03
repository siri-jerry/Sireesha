// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Initialize vote counts
    const option1Count = localStorage.getItem('option1Count') || 0;
    const option2Count = localStorage.getItem('option2Count') || 0;
    const option3Count = localStorage.getItem('option3Count') || 0;

    document.getElementById('option1Count').textContent = option1Count;
    document.getElementById('option2Count').textContent = option2Count;
    document.getElementById('option3Count').textContent = option3Count;
});

function submitVote() {
    const form = document.getElementById('votingForm');
    const selectedOption = form.vote.value;

    if (selectedOption) {
        let option1Count = parseInt(localStorage.getItem('option1Count') || 0);
        let option2Count = parseInt(localStorage.getItem('option2Count') || 0);
        let option3Count = parseInt(localStorage.getItem('option3Count') || 0);

        if (selectedOption === 'Option1') option1Count++;
        if (selectedOption === 'Option2') option2Count++;
        if (selectedOption === 'Option3') option3Count++;

        localStorage.setItem('option1Count', option1Count);
        localStorage.setItem('option2Count', option2Count);
        localStorage.setItem('option3Count', option3Count);

        document.getElementById('option1Count').textContent = option1Count;
        document.getElementById('option2Count').textContent = option2Count;
        document.getElementById('option3Count').textContent = option3Count;

        alert('Your vote has been submitted!');
    } else {
        alert('Please select an option before submitting.');
    }
}
