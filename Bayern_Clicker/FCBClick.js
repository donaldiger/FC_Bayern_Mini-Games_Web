window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
      loader.classList.add('fade-out');
    }, 1000);
  });


let lastScroll = window.scrollY;

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScroll = window.scrollY;
    const bottom = document.documentElement.scrollHeight - window.innerHeight;
    
    if (currentScroll < lastScroll && currentScroll > 60 && currentScroll < bottom - 10) {
        header.classList.remove('hide');
    } else if (currentScroll > lastScroll && currentScroll > 60) {
        header.classList.add('hide');
    }

    lastScroll = currentScroll;
});

// Game variables
let score = 0;
let autoClickers = 0;
let multiplier = 1;
let cmultiplier = 1;
let prestigeLevel = 0;
let price1 = 10;
let price2 = 55;
let price3 = 730;
let price4 = 9200;
let price5 = 1000000;
let price6 = 50000000;
let Cprice = 1500;
let pricePres = 1000;


// DOM elements
const scoreDisplay = document.getElementById('score');
const cMultDisplay = document.getElementById('cMult');
const multDisplay = document.getElementById('mult');
const price6Display = document.getElementById('price6');

function increaseScore() {
    score += Math.floor(cmultiplier * multiplier);
    updateScore();
    updateButtons();
}

function buyUpgrade1() {
    if (score >= price1) {
        score -= price1;
        price1 = Math.floor(price1 * 1.142);
        autoClickers += 1;
        document.getElementById('price1').textContent = `Buy (Cost: ${price1})`;
        updateScore();
        updateButtons();
    }
}

function buyUpgrade2() {
    if (score >= price2) {
        score -= price2;
        price2 = Math.floor(price2 * 1.131);
        autoClickers += 6;
        document.getElementById('price2').textContent = `Buy (Cost: ${price2})`;
        updateScore();
        updateButtons();
    }
}

function buyUpgrade3() {
    if (score >= price3) {
        score -= price3;
        price3 = Math.floor(price3 * 1.124);
        autoClickers += 40;
        document.getElementById('price3').textContent = `Buy (Cost: ${price3})`;
        updateScore();
        updateButtons();
    }
}

function buyUpgrade4() {
    if (score >= price4) {
        score -= price4;
        price4 = Math.floor(price4 * 1.121);
        autoClickers += 515;
        document.getElementById('price4').textContent = `Buy (Cost: ${price4})`;
        updateScore();
        updateButtons();
    }
}

function buyUpgrade5() {
    if (score >= price5) {
        score -= price5;
        autoClickers += 10000;
        document.getElementById('price5').textContent = "Purchased!";
        document.getElementById('price5').disabled = true;
        updateScore();
        updateButtons();
    }
}

function buyUpgrade6() {
    if (score >= price6) {
        score -= price6;
        autoClickers += 100000;
        document.getElementById('price6').textContent = "Purchased!";
        document.getElementById('price6').disabled = true;
        updateScore();
        updateButtons();
    }
}

function prestigeReset() {
    if (score >= pricePres) {
        prestigeLevel += 1;
        multiplier *= 1.05;
        score = 0;
        pricePres = Math.floor(pricePres * (2.5)**Math.log10(prestigeLevel + 0.7));
        autoClickers = 0;
        price1 = 10;
        price2 = 55;
        price3 = 730;
        price4 = 9200;
        price5 = 1000000;
        price6 = 50000000;
        document.getElementById('price1').textContent = `Buy (Cost: ${price1})`;
        document.getElementById('price2').textContent = `Buy (Cost: ${price2})`;
        document.getElementById('price3').textContent = `Buy (Cost: ${price3})`;
        document.getElementById('price4').textContent = `Buy (Cost: ${price4})`;
        document.getElementById('pricePres').textContent = `Buy (Cost: ${pricePres})`;
        document.getElementById('price5').textContent = `Buy (Cost: ${price5})`;
        document.getElementById('price6').textContent = `Buy (Cost: ${price6})`;
        document.getElementById('price5').disabled = false;
        document.getElementById('price6').disabled = false;
        multDisplay.textContent = `Prestige Multiplier: ${multiplier.toFixed(2)}×`;
        updateScore();
        updateButtons();
        
    }
}

function buyMultiplier() {
    if (score >= 50) {
        score -= 50;
        multiplier *= 4;
        updateScore();
        updateButtons();
        multDisplay.textContent = `Prestige Multiplier: ${multiplier.toFixed(2)}×`;
    }
}

function cMultiplier() {
    if (score >= Cprice) {
        cmultiplier *= 2;
        score -= Cprice;
        Cprice = Math.floor(2.05 * Cprice);
        document.getElementById('Cprice').textContent = `Buy (Cost: ${Cprice})`;
        cMultDisplay.textContent = `Click Multiplier: ${cmultiplier}×`;
        updateScore();
        updateButtons();
    }
}

function updateScore() {
    scoreDisplay.textContent = Math.floor(score);
}

function updateButtons() {
    document.getElementById('price1').disabled = score < price1;
    document.getElementById('price2').disabled = score < price2;
    document.getElementById('price3').disabled = score < price3;
    document.getElementById('price4').disabled = score < price4;
    document.getElementById('price5').disabled = score < price5 || document.getElementById('price5').textContent === "Purchased!";
    document.getElementById('price6').disabled = score < price6 || document.getElementById('price6').textContent === "Purchased!";
    document.getElementById('pricePres').disabled = score < pricePres;
    document.getElementById('Cprice').disabled = score < Cprice;
}
// Auto-clicker functionality


// Initialize
updateScore();
updateButtons();

// Add this with the other game variables
let cursors = [];

// Add this function to create cursors
function createCursors() {
    // Clear existing cursors
    cursors.forEach(cursor => {
        if (cursor.parentNode) {
            cursor.parentNode.removeChild(cursor);
        }
    });
    cursors = [];
    
    if (autoClickers === 0) return;
    
    const logo = document.querySelector('.logo');
    const logoRect = logo.getBoundingClientRect();
    const logoCenterX = logoRect.left + logoRect.width / 2;
    const logoCenterY = logoRect.top + logoRect.height / 2;
    
    // Limit the number of cursors to avoid performance issues
    const maxVisibleCursors = 15;
    const cursorCount = Math.min(autoClickers, maxVisibleCursors);
    
    for (let i = 0; i < cursorCount; i++) {
        const cursor = document.createElement('div');
        cursor.className = 'click-cursor';
        document.body.appendChild(cursor);
        
        // Position cursor randomly around the logo
        const angle = Math.random() * Math.PI * 2;
        const distance = 80 + Math.random() * 7;
        const x = logoCenterX + Math.cos(angle) * distance - 10;
        const y = logoCenterY + Math.sin(angle) * distance - 10;
        
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
        
        // Animate the cursor
        animateCursor(cursor, logoCenterX, logoCenterY);
        cursors.push(cursor);
    }
}

function animateCursor(cursor, targetX, targetY) {
    let scale = 0.5;
    let opacity = 0;
    let clicks = 0;
    
    const animation = setInterval(() => {
        // Grow and fade in
        if (clicks === 0) {
            scale += 0.05;
            opacity += 0.05;
            if (scale >= 1) {
                scale = 1;
                opacity = 1;
                clicks++;
            }
        } 
        // Click animation (visual only)
        else if (clicks === 1) {
            scale = 0.8;
            setTimeout(() => {
                scale = 1;
                clicks++;
            }, 100);
        } 
        // Shrink and fade out
        else {
            scale -= 0.05;
            opacity -= 0.05;
            if (scale <= 0) {
                clearInterval(animation);
                if (cursor.parentNode) {
                    cursor.parentNode.removeChild(cursor);
                }
                return;
            }
        }
        
        cursor.style.transform = `translate(-50%, -50%) scale(${scale})`;
        cursor.style.opacity = opacity;
    }, 50);
}

// Add this with other game variables
let prestigeAuraActive = false;

// Replace any existing prestige animation code with just this:
function showPrestigeAura() {
    if (prestigeAuraActive) return;
    prestigeAuraActive = true;
    
    const aura = document.createElement('div');
    aura.className = 'prestige-aura';
    document.body.appendChild(aura);
    
    setTimeout(() => {
        aura.remove();
        prestigeAuraActive = false;
    }, 2000);
}

// Keep your existing prestigeReset function, just add the aura:
function prestigeReset() {
    if (score >= pricePres) {
        // ... your existing reset logic ...
        showPrestigeAura(); // Add this line
    }
}



setInterval(() => {
    score += autoClickers * multiplier;
    createCursors();
    updateScore();
    updateButtons();
}, 1000);

