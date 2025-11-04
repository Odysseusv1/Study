document.addEventListener('DOMContentLoaded', () => {
    // Vocabulary data based on number input
    let vocabWords = [];

    // Function to handle number input and load vocab words
    function loadVocab(number) {
        if (number === 6) {
            vocabWords = [
                { word: "Atone", definition: "to make up for" },
                { word: "Credible", definition: "believable" },
                { word: "Doleful", definition: "sad; dreary" },
                { word: "Hamper", definition: "to hold back" },
                { word: "Impoverished", definition: "poor, in a state of poverty; depleted" },
                { word: "Lucid", definition: "easy to understand, clear; rational, sane" },
                { word: "Posthumous", definition: "occurring or published after death" },
                { word: "Sardonic", definition: "grimly or scornfully mocking, bitterly sarcastic" },
                { word: "Supplant", definition: "to take the place of, supersede" },
                { word: "Tenacious", definition: "holding fast; holding together firmly; persistent" },
                { word: "Bondage", definition: "slavery; any state of being bound or held down" },
                { word: "Defray", definition: "to pay for" },
                { word: "Diligent", definition: "hardworking, industrious, not lazy" },
                { word: "Ghastly", definition: "frightful, horrible; deathly pale" },
                { word: "Hew", definition: "to shape or cut down with an ax; to hold to" },
                { word: "Incessant", definition: "never stopping, going on all the time" },
                { word: "Intricate", definition: "complicated; difficult to understand" },
                { word: "Prim", definition: "overly neat, proper, or formal; prudish" },
                { word: "Superfluous", definition: "exceeding what is sufficient or required, excess" },
                { word: "Taunt", definition: "to jeer at, mock; (n.) an insulting or mocking remark" }
            ];
            alert("Vocabulary list for level 6 loaded!");
        } else {
            alert("No vocabulary data for this number.");
        }
    }

    // Game setup
    const startGameButton = document.getElementById('start-game');
    const gameContent = document.getElementById('game-content');
    const numberInput = prompt("Enter a number to load vocabulary (try 6):");

    // Load vocab words based on user input
    loadVocab(Number(numberInput));

    // Function to display flashcards
    function showFlashcards() {
        gameContent.innerHTML = "";
        vocabWords.forEach((item, index) => {
            const flashcard = document.createElement('div');
            flashcard.classList.add('flashcard');
            flashcard.innerHTML = `
                <div class="flashcard-word">${item.word}</div>
                <button class="show-definition">Show Definition</button>
                <div class="definition">${item.definition}</div>
            `;
            gameContent.appendChild(flashcard);
        });

        // Hide all definitions initially
        const definitions = document.querySelectorAll('.definition');
        definitions.forEach(def => def.style.display = 'none');

        // Show definition on button click
        const showButtons = document.querySelectorAll('.show-definition');
        showButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                definitions[index].style.display = 'block';
            });
        });
    }

    // Start the game if vocab words are loaded
    startGameButton.addEventListener('click', () => {
        if (vocabWords.length > 0) {
            showFlashcards();
            startGameButton.disabled = true; // Disable the button after starting
        } else {
            alert("No vocabulary data loaded. Please enter a valid number.");
        }
    });
});
