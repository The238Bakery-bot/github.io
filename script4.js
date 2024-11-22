const music = document.getElementById('background-music');

// Optional: Add event listeners for user interactions
document.addEventListener('click', () => {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});

const snowContainer = document.createElement('div');
snowContainer.id = 'snow-container';
document.body.appendChild(snowContainer);

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; // Random size
    snowflake.innerHTML = '❄'; // Snowflake character
    snowContainer.appendChild(snowflake);
    
    // Animate snowflake falling
    setTimeout(() => {
        snowflake.style.transition = 'top 5s linear';
        snowflake.style.top = window.innerHeight + 'px'; // Move down
    }, 0);
    
    // Remove snowflake after falling
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 200); // Create a new snowflake every 200ms

