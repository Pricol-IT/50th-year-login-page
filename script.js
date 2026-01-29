document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('microsoftLogin');

    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            console.log('Login initiated...');
            // In a real app, this would redirect to Microsoft OAuth
            loginBtn.style.opacity = '0.7';
            loginBtn.innerText = 'Connecting...';

            setTimeout(() => {
                alert('Authentication flow would start here.');
                loginBtn.style.opacity = '1';
                loginBtn.innerHTML = `
                    <div class="ms-icon">
                        <span></span><span></span><span></span><span></span>
                    </div>
                    Sign in with Pricol ID
                `;
            }, 1000);
        });
    }

    // Add subtle parallax effect to background patterns
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        const pattern1 = document.querySelector('.pattern-1');
        const pattern2 = document.querySelector('.pattern-2');

        if (pattern1) pattern1.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
        if (pattern2) pattern2.style.transform = `rotate(45deg) scale(1.5) translate(${x * -30}px, ${y * -30}px)`;
    });
});
