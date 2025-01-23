// Show an alert with a random German word
const words = ['Apfel', 'Hund', 'Katze'];
document.addEventListener('DOMContentLoaded', () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    alert(`Random word: ${randomWord}`);
});
