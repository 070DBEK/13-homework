document.addEventListener('DOMContentLoaded', () => {
    const featuredItems = document.querySelectorAll('.featured-item');
    featuredItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
    });

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'scale(1.1)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'scale(1)';
        });
    });

    const heroText = document.querySelector('.hero h1');
    const letters = heroText.textContent.split('');
    heroText.textContent = '';
    letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = `${index * 0.1}s`;
        span.classList.add('animated-letter');
        heroText.appendChild(span);
    });
});