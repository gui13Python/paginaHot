document.addEventListener('DOMContentLoaded', () => {
    // Countdown timer logic
    function startCountdown() {
        const countdownElement = document.createElement('div');
        countdownElement.classList.add('countdown-timer');
        countdownElement.innerHTML = ` 
            <div class="timer-label">¡Oferta termina en:</div>
            <div id="countdown" class="countdown-display"></div>
        `;

        const heroContent = document.querySelector('.hero-content .container');
        heroContent.insertBefore(countdownElement, heroContent.firstChild);

        const countdownDisplay = document.getElementById('countdown');

        // Create a more realistic end time - 24 hours from now
        const endTime = new Date();
        endTime.setHours(endTime.getHours() + 24);

        function updateCountdown() {
            const now = new Date();
            const timeLeft = endTime - now;

            if (timeLeft <= 0) {
                countdownDisplay.innerHTML = '¡Oferta Terminada!';
                return;
            }

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            countdownDisplay.innerHTML = `
                <span class="countdown-item">${days.toString().padStart(2, '0')}d</span>:
                <span class="countdown-item">${hours.toString().padStart(2, '0')}h</span>:
                <span class="countdown-item">${minutes.toString().padStart(2, '0')}m</span>:
                <span class="countdown-item">${seconds.toString().padStart(2, '0')}s</span>
            `;
        }

        // Initial call to display immediately
        updateCountdown();

        // Update every second
        const countdownInterval = setInterval(updateCountdown, 1000);
    }

    // Call the countdown function
    startCountdown();

    const comprarButtons = document.querySelectorAll('.btn-comprar, .btn-comprar-final');
    
    // Animation for buy buttons
    comprarButtons.forEach(button => {
        // Add pulsing animation
        button.classList.add('btn-pulse');

        button.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior

            Swal.fire({
                title: 'Redireccionando a Zona Segura',
                html: `
                    <p>Estás siendo redirigido a la pasarela de pagos de Hotmart, una plataforma 100% segura.</p>
                    <p>Tu información personal y de pago está protegida.</p>
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Cargando...</span>
                    </div>
                `,
                icon: 'info',
                showConfirmButton: false,
                allowOutsideClick: false,
                didOpen: () => {
                    // Simulate redirect after 3 seconds
                    setTimeout(() => {
                        // In a real scenario, you'd replace this with actual Hotmart checkout link
                        window.location.href = 'https://hotm.art/Stickerstematicos';
                    }, 3000);
                }
            });
        });
    });
});



!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1310228943375493');
fbq('track', 'PageView');

<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1310228943375493&ev=PageView&noscript=1"
/></noscript>


