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

function loadLanguage(lang) {
    fetch(`${lang}.json`)
      .then(response => response.json())
      .then(data => {
        for (const key in data) {
          const element = document.getElementById(key);
          if (element) {
            element.textContent = data[key];
          }
        }
      })
  }
  
  // Al cambiar el selector de idioma
  document.getElementById('lang').addEventListener('change', function() {
    const selectedLang = this.value;
    loadLanguage(selectedLang);
  });
  
  // Idioma por defecto al cargar
  window.onload = () => loadLanguage('en');
  