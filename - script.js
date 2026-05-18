// Menu mobile responsivo
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Contador animado
const counters = document.querySelectorAll('.counter');

const animateCounter = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 200;

            if(count < target){
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 15);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

let statsSection = document.querySelector('.estatisticas');
window.addEventListener('scroll', () => {
    const sectionPos = statsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;

    if(sectionPos < screenPos){
        animateCounter();
    }

    // Mostrar botão voltar ao topo
    const backToTop = document.getElementById('backToTop');
    if(window.scrollY > 300){
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

// Voltar ao topo
document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({top:0, behavior:'smooth'});
});

// Animação ao rolar
const faders = document.querySelectorAll('.card, .sobre, .galeria-grid img');

const appearOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Validação simples do formulário
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if(nome === "" || email === "" || mensagem === ""){
        alert("Por favor, preencha todos os campos.");
        return;
    }

    alert("Mensagem enviada com sucesso!");
    form.reset();
});