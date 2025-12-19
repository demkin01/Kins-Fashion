// Product Data with sizes and colors
const products = [
    {
           id: 1,
        name: "Premium Leather Jacket",
        category: "men",
        price: 1809.99,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Genuine leather jacket with premium stitching",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#2C3E50", "#1A252F", "#BDC3C7", "#7F8C8D"]
    },
    {
        id: 2,
        name: "Elegant Evening Gown",
        category: "women",
        price: 2409.99,
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Silk evening gown with intricate detailing",
        sizes: ["XS", "S", "M", "L"],
        colors: ["#E74C3C", "#9B59B6", "#34495E", "#ECF0F1"]
    },
    {
        id: 3,
        name: "Kids Casual Set",
        category: "kids",
        price: 4900.99,
        image: "https://images.unsplash.com/photo-1558769132-cb1c458e4222?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Comfortable cotton set for daily wear",
        sizes: ["2Y", "4Y", "6Y", "8Y"],
        colors: ["#3498DB", "#27AE60", "#F1C40F", "#E74C3C"]
    },
    {
        id: 4,
        name: "Running Sneakers",
        category: "shoes",
        price: 8900.99,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "High-performance running shoes",
        sizes: ["40", "41", "42", "43", "44"],
        colors: ["#1A252F", "#BDC3C7", "#E74C3C", "#3498DB"]
    },
    {
        id: 5,
        name: "Classic Suit",
        category: "men",
        price: 2990.99,
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4c6bdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Wool blend classic business suit",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["#2C3E50", "#1A252F", "#95A5A6"]
    },
    {
        id: 6,
        name: "Summer Dress",
        category: "women",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Lightweight cotton summer dress",
        sizes: ["XS", "S", "M", "L"],
        colors: ["#F1C40F", "#E74C3C", "#3498DB", "#27AE60"]
    },
    {
        id: 7,
        name: "Kids Winter Jacket",
        category: "kids",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1513569771920-c9e1d31714af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Warm insulated winter jacket",
        sizes: ["4Y", "6Y", "8Y", "10Y"],
        colors: ["#2C3E50", "#E74C3C", "#3498DB", "#27AE60"]
    },
    {
        id: 8,
        name: "Formal Oxford Shoes",
        category: "shoes",
        price: 1209.99,
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Premium leather formal shoes",
        sizes: ["39", "40", "41", "42", "43"],
        colors: ["#1A252F", "#2C3E50", "#7F8C8D"]
    },
// Add these after product 8 and before the helper function
{
    id: 9,
    name: "Casual T-Shirt",
    category: "men",
    price: 1599.,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Premium cotton casual t-shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#2C3E50", "#1A252F", "#E74C3C", "#3498DB"]
},
{
    id: 10,
    name: "Designer Handbag",
    category: "women",
    price: 3499.,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Luxury leather designer handbag",
    sizes: ["One Size"],
    colors: ["#1A252F", "#BDC3C7", "#E74C3C"]
},
{
    id: 11,
    name: "School Backpack",
    category: "kids",
    price: 1299.,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Durable school backpack with multiple compartments",
    sizes: ["Small", "Medium", "Large"],
    colors: ["#3498DB", "#27AE60", "#F1C40F", "#E74C3C"]
},
{
    id: 12,
    name: "Casual Loafers",
    category: "shoes",
    price: 2199.,
    image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Comfortable casual leather loafers",
    sizes: ["39", "40", "41", "42", "43"],
    colors: ["#1A252F", "#7F8C8D", "#BDC3C7"]
},
{
    id: 14,
    name: "Business Casual Shirt",
    category: "men",
    price: 1499.99,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Premium cotton business casual shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#ECF0F1", "#BDC3C7", "#2C3E50"],
    colorNames: ["White", "Grey", "Navy"]
},
{
    id: 15,
    name: "Casual Chino Pants",
    category: "men",
    price: 1699.99,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Comfortable chino pants for casual wear",
    sizes: ["30", "32", "34", "36"],
    colors: ["#8B4513", "#1A252F", "#BDC3C7"],
    colorNames: ["Beige", "Black", "Grey"]
},
{
    id: 16,
    name: "Office Blazer",
    category: "women",
    price: 2299.99,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Professional office blazer for women",
    sizes: ["XS", "S", "M", "L"],
    colors: ["#2C3E50", "#1A252F", "#7F8C8D"],
    colorNames: ["Navy", "Black", "Grey"]
},
{
    id: 17,
    name: "Casual Sneakers",
    category: "shoes",
    price: 1899.99,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Comfortable casual sneakers for women",
    sizes: ["37", "38", "39", "40"],
    colors: ["#E74C3C", "#F1C40F", "#3498DB"],
    colorNames: ["Red", "Yellow", "Blue"]
}
];

// Price formatting helper function
function formatPrice(price) {
    return 'Kshs ' + price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Cart State
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentAction = ''; // 'add' or 'buy'
let selectedProduct = null;
let selectedSize = null;
let selectedColor = null;

// DOM Elements
const productsGrid = document.querySelector('.products-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const categoryCards = document.querySelectorAll('.category-card');
const searchBtn = document.querySelector('.search-btn');
const searchContainer = document.querySelector('.search-container');
const searchInput = document.querySelector('.search-input');
const searchClose = document.querySelector('.search-close');
const cartIcon = document.querySelector('.cart-icon');
const cartCount = document.querySelector('.cart-count');
const cartSidebar = document.querySelector('.cart-sidebar');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.total-price');
const cartClose = document.querySelector('.cart-close');
const continueShopping = document.querySelector('.continue-shopping');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Quick Modal Elements
const quickModal = document.querySelector('.quick-modal');
const quickModalOverlay = document.querySelector('.quick-modal-overlay');
const quickModalClose = document.querySelector('.quick-modal-close');
const quickModalTitle = document.querySelector('.quick-modal-title');
const quickModalPrice = document.querySelector('.quick-modal-price');
const quickSizeOptions = document.querySelector('.quick-modal .size-options');
const quickColorOptions = document.querySelector('.quick-modal .color-options');
const quickActionBtn = document.querySelector('.quick-action-btn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    updateCartCount();
    setupEventListeners();
    setupQuickModalListeners();
});

// Display Products
function displayProducts(productsToShow, searchTerm = '') {
    productsGrid.innerHTML = '';
    
    if (productsToShow.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <i class="fas fa-search"></i>
                <h3>No products found</h3>
                <p>${searchTerm ? `No products match "${searchTerm}"` : 'Try a different category'}</p>
            </div>
        `;
        return;
    }
    
    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-category', product.category);
        
        productCard.innerHTML = `
            <div class="product-img" style="background-image: url('${product.image}')" data-id="${product.id}"></div>
            <div class="product-info">
                <h3 class="product-title" data-id="${product.id}">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${formatPrice(product.price)}</div>
                <button class="view-details-btn" data-id="${product.id}">
                    <i class="fas fa-eye"></i> View Details
                </button>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
    
    // Make entire product cards clickable for product details page
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't trigger if clicking on the view details button
            if (!e.target.closest('.view-details-btn')) {
                const productId = card.querySelector('.product-img').dataset.id;
                window.location.href = `product.html?id=${productId}`;
            }
        });
    });
    
    // View Details button click handler
    document.querySelectorAll('.view-details-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = button.dataset.id;
            window.location.href = `product.html?id=${productId}`;
        });
    });
}

// Filter Products by category
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.dataset.filter;
        filterProducts(filter);
    });
});

// Category cards filtering
categoryCards.forEach(card => {
    card.addEventListener('click', (e) => {
        e.preventDefault();
        const category = card.dataset.category;
        
        // Update filter buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector(`.filter-btn[data-filter="${category}"]`).classList.add('active');
        
        // Filter products
        filterProducts(category);
        
        // Scroll to products section
        document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
        
        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});

// Dropdown menu filtering
document.querySelectorAll('.dropdown-menu a[data-category]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const category = this.dataset.category;
        
        // Update filter buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector(`.filter-btn[data-filter="${category}"]`).classList.add('active');
        
        // Filter products
        filterProducts(category);
        
        // Scroll to products section
        document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
        
        // Close mobile menu if open
        navMenu.classList.remove('active');
    });
});

// Mobile dropdown toggle
document.querySelectorAll('.dropdown > .nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        if (window.innerWidth <= 992) {
            e.preventDefault();
            const dropdown = this.parentElement;
            dropdown.classList.toggle('open');
        }
    });
});

// Filter products function
function filterProducts(category) {
    if (category === 'all') {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}

// Search functionality
searchBtn.addEventListener('click', () => {
    searchContainer.classList.toggle('active');
    if (searchContainer.classList.contains('active')) {
        searchInput.focus();
    } else {
        searchInput.value = '';
        // Restore current filter view
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
        if (activeFilter === 'all') {
            displayProducts(products);
        } else {
            const filteredProducts = products.filter(product => product.category === activeFilter);
            displayProducts(filteredProducts);
        }
    }
});

searchClose.addEventListener('click', () => {
    searchContainer.classList.remove('active');
    searchInput.value = '';
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    if (activeFilter === 'all') {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === activeFilter);
        displayProducts(filteredProducts);
    }
});

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
        if (activeFilter === 'all') {
            displayProducts(products);
        } else {
            const filteredProducts = products.filter(product => product.category === activeFilter);
            displayProducts(filteredProducts);
        }
        return;
    }
    
    // Show searching message
    productsGrid.innerHTML = `
        <div class="no-products">
            <i class="fas fa-search"></i>
            <h3>Searching...</h3>
        </div>
    `;
    
    // Simulate search delay for better UX
    setTimeout(() => {
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
        
        displayProducts(filteredProducts, searchTerm);
    }, 300);
});

// Close search when clicking outside (desktop)
document.addEventListener('click', (e) => {
    const isClickInsideSearch = searchContainer.contains(e.target) || searchBtn.contains(e.target);
    
    if (!isClickInsideSearch && searchContainer.classList.contains('active')) {
        searchContainer.classList.remove('active');
        searchInput.value = '';
        // Restore current filter view
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
        if (activeFilter === 'all') {
            displayProducts(products);
        } else {
            const filteredProducts = products.filter(product => product.category === activeFilter);
            displayProducts(filteredProducts);
        }
    }
});

// Quick Modal Functions
function openQuickModal(productId, action) {
    selectedProduct = products.find(p => p.id === productId);
    if (!selectedProduct) {
        showNotification('Product not found', 'error');
        return;
    }
    
    // Reset selections
    selectedSize = null;
    selectedColor = null;
    
    // Set action type
    currentAction = action;
    
    // Update modal content
    quickModalTitle.textContent = selectedProduct.name;
    quickModalPrice.textContent = formatPrice(selectedProduct.price);
    
    // Clear previous selections
    quickSizeOptions.innerHTML = '';
    quickColorOptions.innerHTML = '';
    
    // Populate size options
    selectedProduct.sizes.forEach(size => {
        const sizeOption = document.createElement('button');
        sizeOption.className = 'size-option';
        sizeOption.textContent = size;
        sizeOption.addEventListener('click', () => {
            document.querySelectorAll('.size-option').forEach(opt => opt.classList.remove('active'));
            sizeOption.classList.add('active');
            selectedSize = size;
        });
        quickSizeOptions.appendChild(sizeOption);
    });
    
    // Populate color options
    selectedProduct.colors.forEach(color => {
        const colorOption = document.createElement('div');
        colorOption.className = 'color-option';
        colorOption.style.backgroundColor = color;
        colorOption.addEventListener('click', () => {
            document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('active'));
            colorOption.classList.add('active');
            selectedColor = color;
        });
        quickColorOptions.appendChild(colorOption);
    });
    
    // Update button based on action
    if (action === 'add') {
        quickActionBtn.className = 'quick-action-btn success';
        quickActionBtn.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
    } else if (action === 'buy') {
        quickActionBtn.className = 'quick-action-btn primary';
        quickActionBtn.innerHTML = '<i class="fas fa-bolt"></i> Buy Now';
    }
    
    // Show modal
    quickModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeQuickModal() {
    quickModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    selectedProduct = null;
    selectedSize = null;
    selectedColor = null;
}

function handleModalAction() {
    if (!selectedProduct) return;
    
    if (!selectedSize) {
        showNotification('Please select a size', 'error');
        return;
    }
    
    if (!selectedColor) {
        showNotification('Please select a color', 'error');
        return;
    }
    
    if (currentAction === 'add') {
        // Add product to cart with selected size and color
        addToCart(selectedProduct.id, selectedSize, selectedColor);
        closeQuickModal();
        showNotification('Product added to cart!');
    } else if (currentAction === 'buy') {
        // Add product to cart and redirect to checkout
        addToCart(selectedProduct.id, selectedSize, selectedColor);
        closeQuickModal();
        
        // Redirect to checkout page after a short delay
        setTimeout(() => {
            window.location.href = 'checkout.html';
        }, 500);
    }
}

// Cart Functions
function addToCart(productId, size = null, color = null) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => 
        item.id === productId && 
        item.size === size && 
        item.color === color
    );
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1,
            size: size,
            color: color
        });
    }
    
    updateCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity < 1) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            updateCart();
        }
    }
}

function updateCart() {
    // Update localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count
    updateCartCount();
    
    // Update cart display
    updateCartDisplay();
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function updateCartDisplay() {
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartTotal.textContent = 'Kshs 0.00';
        return;
    }
    
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-img" style="background-image: url('${item.image}')"></div>
            <div class="cart-item-info">
                <h4 class="cart-item-title">${item.name}</h4>
                ${item.size ? `<div class="cart-item-meta">Size: ${item.size}</div>` : ''}
                ${item.color ? `<div style="display: flex; align-items: center; gap: 5px; margin-bottom: 5px;">
                    <span>Color:</span>
                    <div style="width: 15px; height: 15px; background-color: ${item.color}; border-radius: 50%;"></div>
                </div>` : ''}
                <div class="cart-item-price">${formatPrice(item.price)} × ${item.quantity}</div>
                <div style="font-weight: 600;">${formatPrice(itemTotal)}</div>
                <div class="cart-item-actions">
                    <button class="quantity-btn minus" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    <button class="remove-item" data-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = formatPrice(total);
    
    // Add event listeners to cart item buttons
    document.querySelectorAll('.quantity-btn.minus').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.closest('.quantity-btn').dataset.id);
            const item = cart.find(item => item.id === productId);
            updateQuantity(productId, item.quantity - 1);
        });
    });
    
    document.querySelectorAll('.quantity-btn.plus').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.closest('.quantity-btn').dataset.id);
            const item = cart.find(item => item.id === productId);
            updateQuantity(productId, item.quantity + 1);
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.closest('.remove-item').dataset.id);
            removeFromCart(productId);
        });
    });
}

// Event Listeners Setup
function setupEventListeners() {
    // Cart Toggle
    cartIcon.addEventListener('click', (e) => {
        e.preventDefault();
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
        updateCartDisplay();
    });
    
    cartClose.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
    });
    
    cartOverlay.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
    });
    
    continueShopping.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
    });
    
    // Mobile Menu Toggle
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-container')) {
            navMenu.classList.remove('active');
        }
    });
    
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

function setupQuickModalListeners() {
    // Close modal
    quickModalClose.addEventListener('click', closeQuickModal);
    quickModalOverlay.addEventListener('click', closeQuickModal);
    
    // Action button
    quickActionBtn.addEventListener('click', handleModalAction);
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && quickModal.classList.contains('active')) {
            closeQuickModal();
        }
    });
}

// Notification System
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'error' ? 'var(--accent)' : 'var(--success)'};
        color: white;
        padding: 1rem 2rem;
        border-radius: var(--radius);
        box-shadow: var(--shadow);
        z-index: 1003;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);