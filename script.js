        // Mobilní navigace
	const hamburger = document.querySelector('.hamburger');
	const navLinks = document.querySelector('.nav-links');
        
        hamburger.addEventListener('click', () => {
		navLinks.classList.toggle('active');
	hamburger.classList.toggle('active');
        });

        // Zavření mobilního menu po kliknutí na odkaz
        document.querySelectorAll('.nav-links a').forEach(link => {
		link.addEventListener('click', () => {
			navLinks.classList.remove('active');
			hamburger.classList.remove('active');
		});
        });

	// Validace formuláře
	const reservationForm = document.getElementById('reservation-form');

	reservationForm.addEventListener('submit', function(e) {
		e.preventDefault();

	// Základní validace formuláře
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const phone = document.getElementById('phone').value;
	const date = document.getElementById('date').value;
	const time = document.getElementById('time').value;
	const guests = document.getElementById('guests').value;

	if (!name || !email || !phone || !date || !time || !guests) {
		alert('Prosím vyplňte všechna povinná pole');
	return;
            }

	// Validace emailu
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		alert('Prosím zadejte platnou e-mailovou adresu');
	return;
            }

	// Validace telefonu (jednoduchá kontrola)
	const phoneRegex = /^\d{9,}$/;
	if (!phoneRegex.test(phone.replace(/\s+/g, ''))) {
		alert('Prosím zadejte platné telefonní číslo');
	return;
            }

	// Pokud validace projde
	alert('Děkujeme! Vaše rezervace byla odeslána. Budeme vás kontaktovat pro potvrzení.');
	reservationForm.reset();
        });

	// Sticky header
	window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 0);
        });

	// Nastavení minimálního data pro rezervaci na dnešek
	const dateInput = document.getElementById('date');
	const today = new Date().toISOString().split('T')[0];
	dateInput.setAttribute('min', today);