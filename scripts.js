document.querySelector("#collection-header h2").textContent = collectionName;
document.getElementById("collection-subheader").textContent = collectionDescription;

if (!collectionName?.trim()) {
    document.getElementById("collection-header").style.display = "none";
}

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle('open');
});

document.addEventListener('click', (e) => {
    if (mobileMenu.classList.contains('open')) {
        const isClickInside = mobileMenu.contains(e.target) || hamburger.contains(e.target);
        if (!isClickInside) {
            mobileMenu.classList.remove('open');
        }
    }
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });
});

const carouselContainer = document.getElementById("carousel-container");
const slideTemplate = document.getElementById("carousel-slide-template");

heroSlides.forEach((slide, index) => {
    const clone = slideTemplate.content.cloneNode(true);

    clone.querySelector(".hero-title").textContent = slide.title;
    clone.querySelector(".hero-description").textContent = slide.description;
    clone.querySelector(".hero-button").textContent = slide.buttonText;
    clone.querySelector(".hero-img").src = slide.image;
    clone.querySelector(".hero-img").alt = slide.alt;
    clone.querySelector(".content").style.backgroundImage = slide.background;

    const featuresList = clone.querySelector(".hero-features");
    slide.features.forEach(feature => {
        const li = document.createElement("li");
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    if (index === 0) {
        clone.querySelector(".carousel-slide").classList.add("active");
    }

    carouselContainer.appendChild(clone);
});

const productContainer = document.getElementById("product-container");
const productTemplate = document.getElementById("product-card-template");

products.forEach(product => {
    const clone = productTemplate.content.cloneNode(true);

    clone.querySelector(".profile-img").src = product.image;
    clone.querySelector(".profile-img").alt = `${product.name} Skinsuit`;

    clone.querySelector(".flag-icon").src = product.flag;
    clone.querySelector(".flag-icon").alt = `${product.ethnicity} Flag`;

    clone.querySelector(".product-card-title").textContent = product.name;
    clone.querySelector(".age").innerHTML = `<i class="fas fa-user"></i> Age: ${product.age}`;
    clone.querySelector(".ethnicity").innerHTML = `<i class="fas fa-globe"></i> Ethnicity: ${product.ethnicity}`;
    clone.querySelector(".background").innerHTML = `<i class="fas fa-briefcase"></i> Background: ${product.background}`;
    clone.querySelector(".height").innerHTML = `<i class="fas fa-ruler-vertical"></i> Height: ${product.height.feet} (${product.height.meters})`;
    clone.querySelector(".weight").innerHTML = `<i class="fas fa-weight"></i> Weight: ${product.weight.pounds} (${product.weight.kilograms})`;
    clone.querySelector(".measurements").innerHTML = `<i class="fas fa-ruler-combined"></i> Measurements: ${product.measurements.inches} (${product.measurements.cm} cm)`;
    clone.querySelector(".pussy-type").innerHTML = `<i class="fas fa-venus"></i> Pussy Type: ${product.pussyType}`;
    clone.querySelector(".sexual-preference").innerHTML = `<i class="fas fa-heart"></i> Sexual Preference: ${product.sexualPreference}`;
    clone.querySelector(".owners").innerHTML = `<i class="fas fa-history"></i> Previous Owners: ${product.previousOwners}`;
    clone.querySelector(".price").innerHTML = `<i class="fas fa-dollar-sign"></i> Price: ${product.price}`;
    clone.querySelector(".product-card-description").textContent = product.description;

    const fetishTagsContainer = clone.querySelector(".fetish-tags");
    product.kinks.forEach(kink => {
        const tagElement = document.createElement("span");
        tagElement.className = "tag";
        tagElement.textContent = kink;
        fetishTagsContainer.appendChild(tagElement);
    });

    const tagsContainer = clone.querySelector(".tags");
    product.personality.forEach(tag => {
        const tagElement = document.createElement("span");
        tagElement.className = "tag";
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
    });

    productContainer.appendChild(clone);
});

document.querySelectorAll('.panel-header').forEach(header => {
    header.addEventListener('click', () => {
        const details = header.nextElementSibling;
        const isActive = details.classList.contains('active');
        details.classList.toggle('active', !isActive);
        header.classList.toggle('active', !isActive);
    });
});

const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000);

document.querySelectorAll('.carousel-slide .content').forEach((heroContent) => {
    heroContent.addEventListener('mousemove', (e) => {
        const rect = heroContent.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;
        const moveX = (xPercent - 50) * 0.1;
        const moveY = (yPercent - 50) * 0.1;
        heroContent.style.backgroundPosition = `${50 + moveX}% ${50 + moveY}%`;
    });

    heroContent.addEventListener('mouseleave', () => {
        heroContent.style.backgroundPosition = 'center center';
    });
});