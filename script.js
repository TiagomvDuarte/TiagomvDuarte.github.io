// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const navLogo = document.getElementById('navLogo');
const footerLogo = document.getElementById('footerLogo');

function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const logoSrc = theme === 'dark' ? 'assets/logo_white.png' : 'assets/logo_blue.png';
    navLogo.src = logoSrc;
    footerLogo.src = logoSrc;
}

// Load saved theme or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
});

// ---- DATA GRID CANVAS ----
(function () {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width, height, cols, rows, points;
    const spacing = 50;
    const maxDist = 120;

    function resize() {
        const hero = canvas.parentElement;
        width = canvas.width = hero.offsetWidth;
        height = canvas.height = hero.offsetHeight;
        cols = Math.ceil(width / spacing) + 1;
        rows = Math.ceil(height / spacing) + 1;
        buildPoints();
    }

    function buildPoints() {
        points = [];
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                points.push({
                    baseX: c * spacing,
                    baseY: r * spacing,
                    x: c * spacing,
                    y: r * spacing,
                    offsetX: Math.random() * 6 - 3,
                    offsetY: Math.random() * 6 - 3,
                    speed: 0.3 + Math.random() * 0.7,
                    phase: Math.random() * Math.PI * 2,
                    radius: 1.2 + Math.random() * 1.2,
                });
            }
        }
    }

    let mouse = { x: -9999, y: -9999 };
    canvas.parentElement.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });
    canvas.parentElement.addEventListener('mouseleave', () => {
        mouse.x = -9999;
        mouse.y = -9999;
    });

    function getColor() {
        const isDark = html.getAttribute('data-theme') === 'dark';
        return {
            dot: isDark ? 'rgba(74,158,237,' : 'rgba(27,58,92,',
            line: isDark ? 'rgba(74,158,237,' : 'rgba(27,58,92,',
        };
    }

    function draw(time) {
        ctx.clearRect(0, 0, width, height);
        const t = time * 0.001;
        const colors = getColor();

        // Update positions
        for (const p of points) {
            p.x = p.baseX + Math.sin(t * p.speed + p.phase) * p.offsetX * 3;
            p.y = p.baseY + Math.cos(t * p.speed + p.phase) * p.offsetY * 3;
        }

        // Draw connections
        for (let i = 0; i < points.length; i++) {
            const a = points[i];
            for (let j = i + 1; j < points.length; j++) {
                const b = points[j];
                const dx = a.x - b.x;
                const dy = a.y - b.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < maxDist) {
                    const alpha = (1 - dist / maxDist) * 0.12;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.strokeStyle = colors.line + alpha + ')';
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }

        // Draw dots
        for (const p of points) {
            // Glow near mouse
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const mouseDist = Math.sqrt(dx * dx + dy * dy);
            const glow = mouseDist < 150 ? (1 - mouseDist / 150) * 0.6 : 0;

            const alpha = 0.2 + glow;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius + glow * 2, 0, Math.PI * 2);
            ctx.fillStyle = colors.dot + alpha + ')';
            ctx.fill();
        }

        // Mouse connections
        if (mouse.x > 0) {
            for (const p of points) {
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    const alpha = (1 - dist / 150) * 0.25;
                    ctx.beginPath();
                    ctx.moveTo(mouse.x, mouse.y);
                    ctx.lineTo(p.x, p.y);
                    ctx.strokeStyle = colors.line + alpha + ')';
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    requestAnimationFrame(draw);
})();

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Scroll fade-in animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.timeline-item, .project-card, .skill-category, .contact-card, .about-text, .highlight').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (link) {
            link.classList.toggle('active', scrollY >= top && scrollY < top + height);
        }
    });
});
