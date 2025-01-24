// Show an alert with a random German word
const easyWords = ['Apfel', 'Hund', 'Katze', 'Haus', 'Brot', 'Maus', 'Baum', 'Auto', 'Stuhl', 'Tisch'];
const mediumWords = ['Garten', 'Schule', 'Fenster', 'Bücher', 'Erdbeere', 'Wolke', 'Blume', 'Schmetterling', 'Reise', 'Lampe'];
const hardWords = ['Gesellschaft', 'Wirtschaft', 'Entwicklung', 'Unabhängigkeit', 'Schwierig', 'Erinnerung', 'Verantwortung', 'Einschränkung', 'Erfahrung', 'Bevölkerung'];

const words = [...easyWords, ...mediumWords, ...hardWords];

document.addEventListener('DOMContentLoaded', () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    alert(`Random word: ${randomWord}`);
});
