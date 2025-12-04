document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Header Sticky Effect ---
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- 2. Menú Hamburguesa Mobile ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // --- 3. Animaciones al hacer Scroll (Reveal) ---
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;

            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Ejecutar una vez al cargar para elementos ya visibles
    revealOnScroll();

    // --- 4. Validación básica del formulario ---
    const contactForm = document.getElementById('form-contacto');
    
    contactForm.addEventListener('submit', (e) => {
        const nombre = document.getElementById('nombre');
        const email = document.getElementById('email');
        const mensaje = document.getElementById('mensaje');
        
        if(nombre.value.trim() === '' || email.value.trim() === '' || mensaje.value.trim() === '') {
            e.preventDefault();
            alert('Por favor, rellena todos los campos antes de enviar.');
        }
        // Si pasa la validación, FormSubmit manejará el envío.
    });

});