
document.getElementById('welcomeBtn').addEventListener('click', function () {
    const messageEl = document.getElementById('welcomeMessage');
    messageEl.textContent = "Welcome to My Personal Profile Website. Thank you for visiting!";
    messageEl.classList.remove('opacity-0', 'translate-y-4');
    messageEl.classList.add('opacity-100', 'translate-y-0');

    // Auto-hide after 5 seconds
    setTimeout(() => {
        messageEl.classList.add('opacity-0', 'translate-y-4');
        messageEl.classList.remove('opacity-100', 'translate-y-0');
    }, 5000);
});


document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const feedback = document.getElementById('formFeedback');
    const fullName = document.getElementById('fullName').value.trim();

    if (fullName === '') {
        feedback.textContent = "Please enter your name before submitting.";
        return;
    }

    feedback.textContent = "Thank you, " + fullName + "! Your message has been sent successfully.";
    this.reset();
    setTimeout(() => { feedback.textContent = ""; }, 5000);
});


window.addEventListener('scroll', () => {
    const sections = ['about', 'education', 'skills', 'units', 'contact'];
    let current = '';

    sections.forEach(section => {
        const element = document.getElementById(section);
        if (!element) return;
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100) {
            current = section;
        }
    });

    document.querySelectorAll('nav a').forEach(a => {
        a.classList.remove('text-metallic-gold', 'border-b-2', 'border-metallic-gold', 'pb-1');
        if (a.getAttribute('href') === `#${current}`) {
            a.classList.add('text-metallic-gold', 'border-b-2', 'border-metallic-gold', 'pb-1');
        }
    });
});