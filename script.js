document.addEventListener("DOMContentLoaded", () => {
    // ===========================
    // 1. Mobile Menu Toggle
    // ===========================
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        // Close menu when clicking any link
        document.querySelectorAll("#nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }
    // ===========================
    // 2. Typing Animation
    // ===========================
    const words = [
        "AI & ML Student",
        "Web Developer",
        "Data Analyst"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typing = document.querySelector(".typing");

    function type() {
        if (!typing) return;

        const currentWord = words[wordIndex];

        if (isDeleting) {
            typing.textContent = currentWord.substring(0, charIndex);
            charIndex--;
        } else {
            typing.textContent = currentWord.substring(0, charIndex);
            charIndex++;
        }

        let speed = isDeleting ? 70 : 120;

        if (!isDeleting && charIndex > currentWord.length) {
            speed = 1500; // Pause at full word
            isDeleting = true;
        } else if (isDeleting && charIndex < 0) {
            isDeleting = false;
            charIndex = 0;
            wordIndex = (wordIndex + 1) % words.length; // Move to next word
            speed = 500; // Short pause before starting next word
        }

        setTimeout(type, speed);
    }

    // Start typing if element exists
    if (typing) {
        type();
    }
    // ===========================
    // 3. Scroll Reveal Animation
    // ===========================
    const hiddenElements = document.querySelectorAll(".hidden");

    if (hiddenElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        });

        hiddenElements.forEach(el => observer.observe(el));
    }
});
const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});
const links=document.querySelectorAll("a,button");

links.forEach(item=>{

item.addEventListener("mouseenter",()=>{

cursor.classList.add("active");

});

item.addEventListener("mouseleave",()=>{

cursor.classList.remove("active");

});

});
const glow=document.querySelector(".mouse-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});
VanillaTilt.init(document.querySelectorAll(".skill-card, .project-card, .education-card"), {
    max: 12,
    speed: 400,
    glare: true,
    "max-glare": 0.2
});