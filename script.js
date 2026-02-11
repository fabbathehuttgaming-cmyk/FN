// script.js

// Interactive functionality for the PS2 emulator frontend

// Game controls
const controls = {
    up: 'ArrowUp',
    down: 'ArrowDown',
    left: 'ArrowLeft',
    right: 'ArrowRight',
    select: 'Enter',
    back: 'Escape'
};

// Current state for menu navigation
let currentSelection = 0;

// Menu items
const menuItems = ['Start Game', 'Settings', 'Exit'];

// Function to navigate menu
function navigateMenu(direction) {
    if (direction === 'up') {
        currentSelection = (currentSelection - 1 + menuItems.length) % menuItems.length;
    } else if (direction === 'down') {
        currentSelection = (currentSelection + 1) % menuItems.length;
    }
    updateMenuDisplay();
}

// Function to update the menu display
function updateMenuDisplay() {
    console.clear();
    menuItems.forEach((item, index) => {
        if (index === currentSelection) {
            console.log('> ' + item); // highlight the current selection
        } else {
            console.log(item);
        }
    });
}

// Animation logic
function animateMenu() {
    // Basic animation loop
    setInterval(() => {
        // Placeholder for animation logic
        console.log('Animating the menu...');
    }, 1000);
}

// Event listener for key presses
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case controls.up:
            navigateMenu('up');
            break;
        case controls.down:
            navigateMenu('down');
            break;
        case controls.select:
            console.log(`Selected: ${menuItems[currentSelection]}`);
            break;
        case controls.back:
            console.log('Going back...');
            break;
    }
});

// Start the menu animation
animateMenu();
updateMenuDisplay();
