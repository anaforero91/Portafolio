document.addEventListener("DOMContentLoaded", () => {
    const skillImages = document.querySelectorAll(".skill img");
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("appear");
            }
        });
    }, { threshold: 0.5 });
    
    skillImages.forEach(img => observer.observe(img));
});