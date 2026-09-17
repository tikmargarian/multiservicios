document.addEventListener("DOMContentLoaded", function() {
    const services = document.querySelectorAll(".service");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.5 });
    
    services.forEach(service => observer.observe(service));

    const galleryImages = document.querySelectorAll(".gallery-img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const closeBtn = document.getElementById("close-btn");
    let currentIndex = 0;
    
    // Функция для обновления изображения в лайтбоксе
    function updateLightbox(index) {
        if (index < 0) {
            index = galleryImages.length - 1;
        }

        if (index >= galleryImages.length) {
            index = 0;
        }

        lightboxImg.src = galleryImages[index].src;
        lightboxImg.alt = galleryImages[index].alt;
        currentIndex = index;
    }
    
    // Открытие лайтбокса по клику на изображение
    galleryImages.forEach((img, index) => {
        img.addEventListener("click", () => {
            updateLightbox(index);
            lightbox.style.display = "flex";
        });
    });
    
    // Обработчики кнопок "Предыдущий" и "Следующий"
    prevBtn.addEventListener("click", (event) => {
        event.stopPropagation(); // Чтобы не закрывался лайтбокс
        updateLightbox(currentIndex - 1);
    });
    
    nextBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        updateLightbox(currentIndex + 1);
    });
    
    // Закрытие лайтбокса по клику вне изображения
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    })

    document.getElementById("showMoreBtn").addEventListener("click", function() {
    const hiddenImages = document.querySelectorAll(".gallery-img.hidden");

    // Показываем максимум 4 фото за нажатие
    let count = 0;
    hiddenImages.forEach(img => {
        if (count < 5) { 
            img.classList.remove("hidden");
            count++;
        }
    });

    // Если больше нет скрытых фото — скрываем кнопку
    if (document.querySelectorAll(".gallery-img.hidden").length === 0) {
        this.style.display = "none";
    }
});

const avatarColors = [
    "#2a6b84",
    "#d62f2f",
    "#74c0fc",
    "#044944",
    "#8bc24a",
    "#254bdd",
    "#044944",
    "#ffce40",
    "#8dc63f",
    "#d62f2f"
];

const avatars = document.querySelectorAll(".avatar");

avatars.forEach((avatar, index) => {
    avatar.style.backgroundColor =
        avatarColors[index % avatarColors.length];
});

const container = document.querySelector('.reviews');
        const prev = document.querySelector('.prev');
        const next = document.querySelector('.next');
        
next.addEventListener('click', () => {
    container.scrollBy({ left: 320, behavior: 'smooth' });
});
        
prev.addEventListener('click', () => {
    container.scrollBy({ left: -320, behavior: 'smooth' });
    });
    
});

