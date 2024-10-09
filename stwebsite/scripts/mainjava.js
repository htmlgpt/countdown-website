// main.js - General JavaScript for Site-wide Interactivity

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle for navigation
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    console.log('Website is fully loaded and ready to interact.');
});

// Toggle music player on and off
function toggleMusic() {
    const music = document.getElementById('background-music');
    if (music.paused) {
        music.play();
        console.log('Music started playing.');
    } else {
        music.pause();
        console.log('Music paused.');
    }
}

// Handle the secret page code validation
function checkCode() {
    const codeInput = document.getElementById('secret-code');
    const resultMessage = document.getElementById('result-message');
    const correctCode = '1234'; // You can set your custom code here

    if (codeInput.value === correctCode) {
        resultMessage.innerHTML = "🎉 Congratulations! You've unlocked the hidden message!";
        resultMessage.style.color = '#4CAF50';
    } else {
        resultMessage.innerHTML = "❌ Incorrect code, please try again.";
        resultMessage.style.color = '#F44336';
    }
}
