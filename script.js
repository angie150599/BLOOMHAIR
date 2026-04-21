// BloomHair - Main JavaScript

// ========================================
// Navbar Scroll Effect
// ========================================
let lastScroll = 0;
const navbar = document.getElementById('navbar');
const announcementBar = document.getElementById('announcementBar');
const professionalBar = document.getElementById('professionalBar');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    if (scrollY > 50) {
        navbar.classList.add('scrolled');
        announcementBar.classList.add('hidden');
        professionalBar.classList.add('hidden');
    } else {
        navbar.classList.remove('scrolled');
        announcementBar.classList.remove('hidden');
        professionalBar.classList.remove('hidden');
    }
    
    lastScroll = scrollY;
});

// ========================================
// Mobile Menu Toggle
// ========================================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

// Mobile Dropdown
const mobileDropdownTrigger = document.querySelector('.mobile-dropdown-trigger');
const mobileDropdownContent = document.querySelector('.mobile-dropdown-content');

if (mobileDropdownTrigger) {
    mobileDropdownTrigger.addEventListener('click', () => {
        mobileDropdownTrigger.classList.toggle('active');
        mobileDropdownContent.classList.toggle('active');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// Close mobile menu when clicking a link
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
});

// ========================================
// Video Background Management
// ========================================
const heroVideo = document.getElementById('heroVideo');

// Intersection Observer for video lazy loading
const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && heroVideo) {
            heroVideo.play().catch(e => console.log('Autoplay prevented'));
            videoObserver.unobserve(heroVideo);
        }
    });
}, { threshold: 0.1 });

if (heroVideo) {
    videoObserver.observe(heroVideo);
}

// Pause video when tab is hidden (battery saving)
document.addEventListener('visibilitychange', () => {
    if (heroVideo) {
        if (document.hidden) {
            heroVideo.pause();
        } else {
            heroVideo.play();
        }
    }
});

// ========================================
// Smooth Scrolling for Anchor Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// Render Colors Grid
// ========================================
const colorsGrid = document.getElementById('colorsGrid');
if (colorsGrid && typeof colors !== 'undefined') {
    colors.forEach(color => {
        const colorItem = document.createElement('div');
        colorItem.className = 'color-item';
        colorItem.innerHTML = `
            <div class="color-circle" style="background-color: ${color.hex}">
                <img src="${color.image}" alt="${color.name}" onerror="this.style.display='none'">
            </div>
            <p class="color-name">${color.name}</p>
        `;
        colorsGrid.appendChild(colorItem);
    });
}

// ========================================
// Render Extension Types Grid
// ========================================
const extensionTypesGrid = document.getElementById('extensionTypesGrid');
if (extensionTypesGrid && typeof extensionTypes !== 'undefined') {
    extensionTypes.forEach(type => {
        const typeCard = document.createElement('a');
        typeCard.href = type.link;
        typeCard.className = 'extension-type-card';
        typeCard.innerHTML = `
            <h3>${type.name}</h3>
            <p>${type.description}</p>
            <span class="explore-link">
                Explorar
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </span>
        `;
        extensionTypesGrid.appendChild(typeCard);
    });
}

// ========================================
// Render Professional Features Grid
// ========================================
const professionalGrid = document.getElementById('professionalGrid');
if (professionalGrid && typeof professionalFeatures !== 'undefined') {
    professionalFeatures.forEach(feature => {
        const featureCard = document.createElement('div');
        featureCard.className = 'professional-card';
        featureCard.innerHTML = `
            <img src="${feature.image}" alt="${feature.title}">
            <div class="professional-overlay"></div>
            <div class="professional-content">
                <div class="professional-icon">${feature.icon}</div>
                <h3>${feature.title}</h3>
                <p>${feature.description}</p>
            </div>
        `;
        professionalGrid.appendChild(featureCard);
    });
}

// ========================================
// Render Products Grid
// ========================================
const productsGrid = document.getElementById('productsGrid');
if (productsGrid && typeof products !== 'undefined') {
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="btn btn-primary btn-block">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    Añadir al Carrito
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// ========================================
// Render Tools Grid
// ========================================
const toolsGrid = document.getElementById('toolsGrid');
if (toolsGrid && typeof tools !== 'undefined') {
    tools.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        toolCard.innerHTML = `
            <div class="tool-image">
                <img src="${tool.image}" alt="${tool.name}">
            </div>
            <div class="tool-info">
                <h4>${tool.name}</h4>
                <p class="tool-price">$${tool.price.toFixed(2)}</p>
                <a href="#" class="tool-link">
                    Ver Producto
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
            </div>
        `;
        toolsGrid.appendChild(toolCard);
    });
}

// ========================================
// Render Gallery Grid
// ========================================
const galleryGrid = document.getElementById('galleryGrid');
if (galleryGrid && typeof galleryImages !== 'undefined') {
    galleryImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${image}" alt="Gallery image ${index + 1}">
            <div class="gallery-overlay">
                <span>@bloomhair</span>
            </div>
        `;
        galleryGrid.appendChild(galleryItem);
    });
}

// ========================================
// Render Transformations
// ========================================
const transformationsContainer = document.getElementById('transformationsContainer');
if (transformationsContainer && typeof transformations !== 'undefined') {
    transformations.forEach((transformation, index) => {
        const transformationRow = document.createElement('div');
        transformationRow.className = 'transformation-row';
        if (index % 2 === 1) transformationRow.classList.add('reverse');
        
        transformationRow.innerHTML = `
            <div class="transformation-image">
                <img src="${transformation.before}" alt="Before transformation">
                <div class="transformation-badge before">ANTES</div>
            </div>
            <div class="transformation-image">
                <img src="${transformation.after}" alt="After transformation">
                <div class="transformation-badge after">DESPUÉS</div>
                <div class="transformation-info">
                    <p class="transformation-artist">${transformation.artist}</p>
                    <p class="transformation-description">${transformation.description}</p>
                </div>
            </div>
        `;
        transformationsContainer.appendChild(transformationRow);
    });
}

// ========================================
// Newsletter Form
// ========================================
const newsletterForm = document.getElementById('newsletterForm');
const toast = document.getElementById('toast');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        
        if (emailInput.value) {
            // Show toast
            toast.classList.add('show');
            
            // Reset form
            newsletterForm.reset();
            
            // Hide toast after 3 seconds
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }
    });
}

// ========================================
// Scroll Animations
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            scrollObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.querySelectorAll('.animate-slide-in').forEach(el => {
    scrollObserver.observe(el);
});

// ========================================
// Add to Cart Functionality (Mock)
// ========================================
document.addEventListener('click', (e) => {
    if (e.target.closest('.btn-primary') && e.target.closest('.product-card')) {
        e.preventDefault();
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            let count = parseInt(cartCount.textContent);
            cartCount.textContent = count + 1;
            
            // Show toast
            toast.querySelector('.toast-title').textContent = '¡Producto añadido!';
            toast.querySelector('.toast-description').textContent = 'El producto se ha añadido a tu carrito.';
            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, 2000);
        }
    }
});

// ========================================
// Initialize
// ========================================
console.log('BloomHair Website Loaded Successfully! 🌸');
