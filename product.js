// Product Details Page JavaScript

// Product Data (Same as homepage for consistency)
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

// Get product ID from URL
function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id'));
}

// Load product details
function loadProductDetails() {
    const productId = getProductIdFromUrl();
    if (!productId) {
        window.location.href = 'index.html';
        return;
    }
    
    const product = products.find(p => p.id === productId);
    if (!product) {
        window.location.href = 'index.html';
        return;
    }
    
    // Update page title
    document.title = `${product.name} | Elegance Fashion`;
    
    // Update breadcrumb
    document.getElementById('product-category').textContent = 
        product.category.charAt(0).toUpperCase() + product.category.slice(1);
    document.getElementById('product-name').textContent = product.name;
    
    // Update product info
    document.getElementById('product-title').textContent = product.name;
    document.getElementById('product-price').textContent = formatPrice(product.price);
    document.getElementById('product-description').textContent = product.description;
    
    // Set main image
    const mainImg = document.getElementById('main-product-img');
    mainImg.src = product.image;
    mainImg.alt = product.name;
    
    // Load image thumbnails
    const thumbnailsContainer = document.querySelector('.image-thumbnails');
    const productImages = product.images || [product.image, product.image, product.image];
    
    productImages.forEach((imgSrc, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        thumbnail.innerHTML = `<img src="${imgSrc}" alt="${product.name} - View ${index + 1}">`;
        
        thumbnail.addEventListener('click', () => {
            // Update main image
            mainImg.src = imgSrc;
            
            // Update active thumbnail
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            thumbnail.classList.add('active');
        });
        
        thumbnailsContainer.appendChild(thumbnail);
    });
    
    // Load color options
    const colorOptionsContainer = document.getElementById('color-options');
    const colorNames = product.colorNames || product.colors.map(() => 'Color');
    
    product.colors.forEach((color, index) => {
        const colorOption = document.createElement('div');
        colorOption.className = `color-option ${index === 0 ? 'active' : ''}`;
        colorOption.style.backgroundColor = color;
        colorOption.title = colorNames[index];
        
        colorOption.addEventListener('click', () => {
            // Update active color
            document.querySelectorAll('.color-option').forEach(c => c.classList.remove('active'));
            colorOption.classList.add('active');
            
            // Update selected color name
            document.getElementById('selected-color-name').textContent = colorNames[index];
        });
        
        colorOptionsContainer.appendChild(colorOption);
    });
    
    // Load size options
    const sizeOptionsContainer = document.getElementById('size-options');
    
    product.sizes.forEach((size, index) => {
        const sizeOption = document.createElement('button');
        sizeOption.className = `size-option ${index === 0 ? 'active' : ''}`;
        sizeOption.textContent = size;
        sizeOption.type = 'button';
        
        sizeOption.addEventListener('click', () => {
            // Update active size
            document.querySelectorAll('.size-option').forEach(s => s.classList.remove('active'));
            sizeOption.classList.add('active');
        });
        
        sizeOptionsContainer.appendChild(sizeOption);
    });
    
    // Load related products
    loadRelatedProducts(product.category, productId);
    
    // Initialize event listeners
    initializeProductPage(product);
}

// Load related products
function loadRelatedProducts(category, currentProductId) {
    const relatedProductsContainer = document.getElementById('related-products');
    const relatedProducts = products
        .filter(p => p.category === category && p.id !== currentProductId)
        .slice(0, 4);
    
    if (relatedProducts.length === 0) {
        relatedProductsContainer.innerHTML = `
            <div class="no-products">
                <p>No related products found</p>
            </div>
        `;
        return;
    }
    
    relatedProductsContainer.innerHTML = '';
    
    relatedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-category', product.category);
        
        productCard.innerHTML = `
            <div class="product-img" style="background-image: url('${product.image}')"></div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">${formatPrice(product.price)}</div>
                <div class="product-actions">
                    <button class="view-details" data-id="${product.id}">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                </div>
            </div>
        `;
        
        relatedProductsContainer.appendChild(productCard);
    });
    
    // Add event listeners to view details buttons
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(e.target.closest('.view-details').dataset.id);
            window.location.href = `product.html?id=${productId}`;
        });
    });
}

// Initialize product page functionality
function initializeProductPage(product) {
    // Quantity selector
    const quantityInput = document.querySelector('.quantity-input');
    const minusBtn = document.querySelector('.quantity-btn.minus');
    const plusBtn = document.querySelector('.quantity-btn.plus');
    
    minusBtn.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });
    
    plusBtn.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue < 10) {
            quantityInput.value = currentValue + 1;
        }
    });
    
    quantityInput.addEventListener('change', () => {
        let value = parseInt(quantityInput.value);
        if (isNaN(value) || value < 1) value = 1;
        if (value > 10) value = 10;
        quantityInput.value = value;
    });
    
    // Add to Cart button
    const addToCartBtn = document.querySelector('.btn-add-to-cart');
    addToCartBtn.addEventListener('click', () => {
        const selectedSize = document.querySelector('.size-option.active')?.textContent;
        const selectedColor = document.querySelector('.color-option.active')?.style.backgroundColor;
        const quantity = parseInt(quantityInput.value);
        
        if (!selectedSize) {
            showNotification('Please select a size', 'error');
            return;
        }
        
        // Add to cart (you'll need to integrate with your cart system)
        addProductToCart(product.id, selectedSize, selectedColor, quantity);
        showNotification('Product added to cart!', 'success');
        
        // Update cart count
        updateCartCount();
    });
    
    // Buy Now button
    const buyNowBtn = document.querySelector('.btn-buy-now');
    buyNowBtn.addEventListener('click', () => {
        const selectedSize = document.querySelector('.size-option.active')?.textContent;
        const selectedColor = document.querySelector('.color-option.active')?.style.backgroundColor;
        const quantity = parseInt(quantityInput.value);
        
        if (!selectedSize) {
            showNotification('Please select a size', 'error');
            return;
        }
        
        // Add to cart and redirect to checkout
        addProductToCart(product.id, selectedSize, selectedColor, quantity);
        
        // Redirect to checkout after a short delay
        setTimeout(() => {
            window.location.href = 'checkout.html';
        }, 500);
    });
    
    // Wishlist button
    const wishlistBtn = document.querySelector('.btn-wishlist');
    wishlistBtn.addEventListener('click', () => {
        wishlistBtn.querySelector('i').classList.toggle('far');
        wishlistBtn.querySelector('i').classList.toggle('fas');
        
        if (wishlistBtn.querySelector('i').classList.contains('fas')) {
            showNotification('Added to wishlist', 'success');
        } else {
            showNotification('Removed from wishlist', 'info');
        }
    });
}

function loadRelatedProducts(category, currentProductId) {
    const relatedProductsContainer = document.getElementById('related-products');
    
    // Clear previous content
    relatedProductsContainer.innerHTML = '';
    
    const relatedProducts = products
        .filter(p => p.category === category && p.id !== currentProductId)
        .slice(0, 4);
    
    if (relatedProducts.length === 0) {
        relatedProductsContainer.innerHTML = `
            <div class="no-products" style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #666;">
                <p>No related products found</p>
            </div>
        `;
        return;
    }
    
    relatedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-category', product.category);
        
        productCard.innerHTML = `
            <div class="product-img" style="background-image: url('${product.image}')" data-id="${product.id}"></div>
            <div class="product-info">
                <h3 class="product-title" data-id="${product.id}">${product.name}</h3>
                <div class="product-price">${formatPrice(product.price)}</div>
                <div class="product-actions">
                    <button class="view-details" data-id="${product.id}">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                </div>
            </div>
        `;
        
        relatedProductsContainer.appendChild(productCard);
    });
    
    // Add event listeners to view details buttons
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(e.target.closest('.view-details').dataset.id);
            window.location.href = `product.html?id=${productId}`;
        });
    });
    
    // Make product images and titles clickable
    document.querySelectorAll('#related-products .product-img, #related-products .product-title').forEach(element => {
        element.addEventListener('click', (e) => {
            const productId = e.target.closest('[data-id]')?.dataset.id;
            if (productId) {
                window.location.href = `product.html?id=${productId}`;
            }
        });
    });
}

// Cart functions (simplified version - integrate with your existing cart system)
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addProductToCart(productId, size, color, quantity = 1) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => 
        item.id === productId && 
        item.size === size && 
        item.color === color
    );
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity,
            size: size,
            color: color
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// Notification system
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

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadProductDetails();
    updateCartCount();
});