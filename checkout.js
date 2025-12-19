// Checkout Page JavaScript

// Cart data structure
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let selectedPaymentMethod = 'mpesa';
let shippingCost = 100; // Default delivery fee for Nairobi
let deliveryMethod = 'delivery'; // 'delivery' or 'pickup'
let selectedLocation = 'kasarani'; // Default location
let customerInfo = {};
let paymentInfo = {};

// Location prices mapping
const locationPrices = {
    // Nairobi areas (100 Kshs)
    'kasarani': 100,
    'roysambu': 100,
    'imara': 100,
    'ngong': 100,
    'westlands': 100,
    'kilimani': 100,
    'langata': 100,
    'karen': 100,
    'runda': 100,
    'lavington': 100,
    'parklands': 100,
    'hillview': 100,
    'south_b': 100,
    'south_c': 100,
    'upperhill': 100,
    'donholm': 100,
    'buruburu': 100,
    'uhuru': 100,
    'kawangware': 100,
    'dagoretti': 100,
    'kileleshwa': 100,
    
    // Outside Nairobi
    'mombasa': 500,
    'kisumu': 400,
    'nakuru': 300,
    'eldoret': 350,
    'thika': 200,
    'naivasha': 250,
    'nyeri': 300,
    'kakamega': 400,
    'machakos': 200,
    'kitui': 400,
    'kisii': 450,
    'meru': 400
};

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const steps = document.querySelectorAll('.checkout-steps');
    const progressSteps = document.querySelectorAll('.progress-step');
    const nextButtons = document.querySelectorAll('.next-step');
    const prevButtons = document.querySelectorAll('.prev-step');
    const paymentMethods = document.querySelectorAll('.payment-method');
    const deliveryOptions = document.querySelectorAll('.delivery-option');
    const placeOrderBtn = document.getElementById('place-order-btn');
    const successModal = document.getElementById('success-modal');
    const termsCheckbox = document.getElementById('terms');
    const continueToPaymentBtn = document.getElementById('continueToPayment');
    const continueToReviewBtn = document.getElementById('continueToReview');
    const deliveryLocationSelect = document.getElementById('deliveryLocation');
    const shopPickupRadio = document.getElementById('shop-pickup');
    const deliveryRadio = document.getElementById('delivery');
    
    // Form validation functions
    function validateShippingForm() {
        let isValid = true;
        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const phone = document.getElementById('phone');
        const email = document.getElementById('email');
        
        // Reset errors
        document.querySelectorAll('.error-message').forEach(el => {
            el.classList.remove('show');
            el.previousElementSibling?.classList?.remove('error');
        });
        
        // Validate First Name
        if (!firstName.value.trim()) {
            document.getElementById('firstNameError').classList.add('show');
            firstName.classList.add('error');
            isValid = false;
        }
        
        // Validate Last Name
        if (!lastName.value.trim()) {
            document.getElementById('lastNameError').classList.add('show');
            lastName.classList.add('error');
            isValid = false;
        }
        
        // Validate Phone
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        const phoneValue = phone.value.replace(/\s+/g, '');
        if (!phoneValue || !phoneRegex.test(phoneValue)) {
            document.getElementById('phoneError').classList.add('show');
            phone.classList.add('error');
            isValid = false;
        }
        
        // Validate Email (optional, but must be valid if provided)
        if (email.value && !isValidEmail(email.value)) {
            document.getElementById('emailError').classList.add('show');
            email.classList.add('error');
            isValid = false;
        }
        
        // Validate delivery location if delivery is selected
        if (deliveryMethod === 'delivery') {
            if (!deliveryLocationSelect.value) {
                document.getElementById('locationError').classList.add('show');
                deliveryLocationSelect.classList.add('error');
                isValid = false;
            }
        }
        
        return isValid;
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function validateMpesaForm() {
        const mpesaPhone = document.getElementById('mpesaPhone');
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        const phoneValue = mpesaPhone.value.replace(/\s+/g, '');
        
        // Reset error
        document.getElementById('mpesaPhoneError').classList.remove('show');
        mpesaPhone.classList.remove('error');
        
        if (!phoneValue || !phoneRegex.test(phoneValue)) {
            document.getElementById('mpesaPhoneError').classList.add('show');
            mpesaPhone.classList.add('error');
            return false;
        }
        
        return true;
    }
    
    function validateCardForm() {
        const cardNumber = document.getElementById('cardNumber');
        const cardExpiry = document.getElementById('cardExpiry');
        const cardCvv = document.getElementById('cardCvv');
        const cardName = document.getElementById('cardName');
        
        // Reset errors
        ['cardNumberError', 'cardExpiryError', 'cardCvvError', 'cardNameError'].forEach(id => {
            document.getElementById(id).classList.remove('show');
        });
        [cardNumber, cardExpiry, cardCvv, cardName].forEach(el => el.classList.remove('error'));
        
        let isValid = true;
        
        // Validate Card Number (basic validation)
        const cardNumberValue = cardNumber.value.replace(/\s+/g, '');
        if (!cardNumberValue || cardNumberValue.length < 13 || cardNumberValue.length > 19) {
            document.getElementById('cardNumberError').classList.add('show');
            cardNumber.classList.add('error');
            isValid = false;
        }
        
        // Validate Expiry Date
        const expiryRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
        if (!cardExpiry.value || !expiryRegex.test(cardExpiry.value)) {
            document.getElementById('cardExpiryError').classList.add('show');
            cardExpiry.classList.add('error');
            isValid = false;
        }
        
        // Validate CVV
        const cvvRegex = /^[0-9]{3,4}$/;
        if (!cardCvv.value || !cvvRegex.test(cardCvv.value)) {
            document.getElementById('cardCvvError').classList.add('show');
            cardCvv.classList.add('error');
            isValid = false;
        }
        
        // Validate Card Name
        if (!cardName.value.trim()) {
            document.getElementById('cardNameError').classList.add('show');
            cardName.classList.add('error');
            isValid = false;
        }
        
        return isValid;
    }
    
    // Load cart from localStorage and display
    function loadCart() {
        const orderItemsContainer = document.getElementById('orderItemsContainer');
        const reviewOrderItems = document.getElementById('reviewOrderItems');
        
        if (cart.length === 0) {
            // Show empty cart message
            orderItemsContainer.innerHTML = `
                <div class="empty-cart-message">
                    <i class="fas fa-shopping-bag"></i>
                    <p>Your cart is empty</p>
                    <a href="index.html" class="btn-secondary" style="font-size: 14px; padding: 8px 16px;">Continue Shopping</a>
                </div>
            `;
            
            reviewOrderItems.innerHTML = `
                <div class="empty-cart-message">
                    <i class="fas fa-shopping-bag"></i>
                    <p>Your cart is empty</p>
                    <a href="index.html" class="btn-secondary" style="font-size: 14px; padding: 8px 16px;">Continue Shopping</a>
                </div>
            `;
            
            // Disable checkout buttons
            if (continueToPaymentBtn) continueToPaymentBtn.disabled = true;
            if (placeOrderBtn) placeOrderBtn.disabled = true;
            
            return;
        }
        
        let orderItemsHTML = '';
        let reviewItemsHTML = '';
        let subtotal = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            
            // Order summary item with controls
            orderItemsHTML += `
                <div class="order-item" data-id="${item.id}">
                    <div class="order-item-img" style="background-image: url('${item.image}');"></div>
                    <div class="order-item-info">
                        <div class="order-item-name">${item.name}</div>
                        ${item.size ? `<div class="order-item-meta">Size: ${item.size}</div>` : ''}
                        ${item.color ? `<div class="order-item-meta" style="display: flex; align-items: center; gap: 5px;">
                            <span>Color:</span>
                            <div style="width: 15px; height: 15px; background-color: ${item.color}; border-radius: 50%;"></div>
                        </div>` : ''}
                        <div class="order-item-price">Kshs ${item.price.toFixed(2)}</div>
                        <div class="order-item-actions">
                            <div class="quantity-controls">
                                <button class="quantity-btn minus" data-id="${item.id}">-</button>
                                <span class="quantity-display">${item.quantity}</span>
                                <button class="quantity-btn plus" data-id="${item.id}">+</button>
                            </div>
                            <button class="remove-item-btn" data-id="${item.id}">
                                <i class="fas fa-trash"></i> Remove
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            // Review step item (without controls)
            reviewItemsHTML += `
                <div class="order-item" data-id="${item.id}">
                    <div class="order-item-img" style="background-image: url('${item.image}');"></div>
                    <div class="order-item-info">
                        <div class="order-item-name">${item.name}</div>
                        ${item.size ? `<div class="order-item-meta">Size: ${item.size}</div>` : ''}
                        ${item.color ? `<div class="order-item-meta" style="display: flex; align-items: center; gap: 5px;">
                            <span>Color:</span>
                            <div style="width: 15px; height: 15px; background-color: ${item.color}; border-radius: 50%;"></div>
                        </div>` : ''}
                        <div class="order-item-meta">Qty: ${item.quantity}</div>
                        <div class="order-item-price">Kshs ${itemTotal.toFixed(2)}</div>
                    </div>
                </div>
            `;
        });
        
        orderItemsContainer.innerHTML = orderItemsHTML;
        reviewOrderItems.innerHTML = reviewItemsHTML;
        
        // Add event listeners to quantity buttons
        document.querySelectorAll('.quantity-btn.minus').forEach(button => {
            button.addEventListener('click', function() {
                const itemId = parseInt(this.dataset.id);
                const item = cart.find(item => item.id === itemId);
                if (item && item.quantity > 1) {
                    item.quantity -= 1;
                    updateCart();
                    loadCart();
                }
            });
        });
        
        document.querySelectorAll('.quantity-btn.plus').forEach(button => {
            button.addEventListener('click', function() {
                const itemId = parseInt(this.dataset.id);
                const item = cart.find(item => item.id === itemId);
                if (item) {
                    item.quantity += 1;
                    updateCart();
                    loadCart();
                }
            });
        });
        
        // Add event listeners to remove buttons
        document.querySelectorAll('.remove-item-btn').forEach(button => {
            button.addEventListener('click', function() {
                const itemId = parseInt(this.dataset.id);
                removeFromCart(itemId);
                loadCart();
            });
        });
        
        // Calculate and update totals
        calculateTotals(subtotal);
    }
    
    // Remove item from cart
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCart();
        showNotification('Item removed from cart', 'success');
    }
    
    // Update cart in localStorage
    function updateCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Update cart count in header if it exists
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
        }
    }
    
    // Calculate totals
    function calculateTotals(subtotal) {
        // Removed tax calculation
        const total = subtotal + shippingCost;
        
        // Update order summary
        document.getElementById('subtotal').textContent = `Kshs ${subtotal.toFixed(2)}`;
        document.getElementById('shippingCost').textContent = `Kshs ${shippingCost.toFixed(2)}`;
        document.getElementById('total').textContent = `Kshs ${total.toFixed(2)}`;
        
        // Update order total in modal if it exists
        const orderTotalElement = document.getElementById('order-total');
        if (orderTotalElement) {
            orderTotalElement.textContent = `Kshs ${total.toFixed(2)}`;
        }
    }
    
    // Update shipping cost based on selection
    function updateShippingCost() {
        if (deliveryMethod === 'pickup') {
            shippingCost = 0;
        } else {
            // Get price from location mapping
            shippingCost = locationPrices[selectedLocation] || 100;
        }
        
        // Update display
        document.getElementById('shippingCost').textContent = `Kshs ${shippingCost.toFixed(2)}`;
        
        // Update delivery option price display
        if (deliveryMethod === 'pickup') {
            document.querySelector('.delivery-option[data-type="pickup"] .delivery-option-price').textContent = 'Kshs 0';
        } else {
            document.querySelector('.delivery-option[data-type="delivery"] .delivery-option-price').textContent = `Kshs ${shippingCost}`;
        }
        
        // Recalculate totals
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        calculateTotals(subtotal);
    }
    
    // Update progress bar
    function updateProgress() {
        progressSteps.forEach(step => {
            const stepNum = parseInt(step.dataset.step);
            
            step.classList.remove('active', 'completed');
            
            if (stepNum < currentStep) {
                step.classList.add('completed');
            } else if (stepNum === currentStep) {
                step.classList.add('active');
            }
        });
    }
    
    // Show step
    let currentStep = 1;
    function showStep(stepNumber) {
        // Hide all steps
        steps.forEach(step => {
            step.style.display = 'none';
        });
        
        // Show current step
        document.getElementById(`step-${stepNumber}`).style.display = 'block';
        currentStep = stepNumber;
        
        // Update progress
        updateProgress();
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Next step buttons
    nextButtons.forEach(button => {
        button.addEventListener('click', function() {
            const nextStep = parseInt(this.dataset.next);
            
            // Validate current step before proceeding
            let canProceed = true;
            
            if (currentStep === 1) {
                canProceed = validateShippingForm();
                if (canProceed) {
                    // Save customer info
                    customerInfo = {
                        firstName: document.getElementById('firstName').value,
                        lastName: document.getElementById('lastName').value,
                        phone: document.getElementById('phone').value,
                        email: document.getElementById('email').value,
                        deliveryMethod: deliveryMethod === 'pickup' ? 'Shop Pickup' : 'Home Delivery',
                        location: deliveryMethod === 'delivery' ? deliveryLocationSelect.options[deliveryLocationSelect.selectedIndex].text : 'Nairobi Shop'
                    };
                }
            } else if (currentStep === 2) {
                if (selectedPaymentMethod === 'mpesa') {
                    canProceed = validateMpesaForm();
                    if (canProceed) {
                        paymentInfo = {
                            method: 'M-Pesa',
                            phone: document.getElementById('mpesaPhone').value
                        };
                    }
                } else {
                    canProceed = validateCardForm();
                    if (canProceed) {
                        paymentInfo = {
                            method: 'Credit Card',
                            cardLast4: document.getElementById('cardNumber').value.slice(-4),
                            cardName: document.getElementById('cardName').value
                        };
                    }
                }
            }
            
            if (canProceed) {
                showStep(nextStep);
                
                // Update review section if going to step 3
                if (nextStep === 3) {
                    updateReviewSection();
                }
            }
        });
    });
    
    // Previous step buttons
    prevButtons.forEach(button => {
        button.addEventListener('click', function() {
            const prevStep = parseInt(this.dataset.prev);
            showStep(prevStep);
        });
    });
    
    // Payment method selection
    paymentMethods.forEach(method => {
        method.addEventListener('click', function() {
            // Remove active class from all methods
            paymentMethods.forEach(m => {
                m.classList.remove('active');
                m.querySelector('.fa-check-circle').style.color = '#ddd';
            });
            
            // Add active class to selected method
            this.classList.add('active');
            this.querySelector('.fa-check-circle').style.color = '#2C3E50';
            
            // Update selected payment method
            selectedPaymentMethod = this.dataset.method;
            
            // Show/hide payment details
            document.getElementById('card-details').classList.remove('active');
            document.getElementById('mpesa-details').classList.remove('active');
            
            document.getElementById(`${selectedPaymentMethod}-details`).classList.add('active');
        });
    });
    
    // Delivery option selection
    deliveryOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            // Don't toggle if clicking on radio or select
            if (e.target.type === 'radio' || e.target.tagName === 'SELECT') {
                return;
            }
            
            const type = this.dataset.type;
            
            // Update radio buttons
            if (type === 'pickup') {
                shopPickupRadio.checked = true;
                deliveryRadio.checked = false;
            } else {
                deliveryRadio.checked = true;
                shopPickupRadio.checked = false;
            }
            
            // Update active class
            deliveryOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            // Update delivery method
            deliveryMethod = type;
            
            // Update shipping cost
            updateShippingCost();
        });
    });
    
    // Radio button change handlers
    if (shopPickupRadio) {
        shopPickupRadio.addEventListener('change', function() {
            if (this.checked) {
                deliveryMethod = 'pickup';
                deliveryOptions.forEach(opt => opt.classList.remove('active'));
                document.querySelector('.delivery-option[data-type="pickup"]').classList.add('active');
                updateShippingCost();
            }
        });
    }
    
    if (deliveryRadio) {
        deliveryRadio.addEventListener('change', function() {
            if (this.checked) {
                deliveryMethod = 'delivery';
                deliveryOptions.forEach(opt => opt.classList.remove('active'));
                document.querySelector('.delivery-option[data-type="delivery"]').classList.add('active');
                updateShippingCost();
            }
        });
    }
    
    // Delivery location change handler
    if (deliveryLocationSelect) {
        deliveryLocationSelect.addEventListener('change', function() {
            selectedLocation = this.value;
            updateShippingCost();
        });
    }
    
    // Update review section
    function updateReviewSection() {
        // Update delivery info
        const deliveryHTML = `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                <div>
                    <div style="font-weight: 500; margin-bottom: 8px;">Delivery Method</div>
                    <div style="color: #666; line-height: 1.5;">
                        ${customerInfo.deliveryMethod}<br>
                        ${deliveryMethod === 'pickup' ? 'Pickup from our Nairobi shop' : `Delivery to ${customerInfo.location}`}<br>
                        ${customerInfo.phone}
                    </div>
                </div>
                <div>
                    <div style="font-weight: 500; margin-bottom: 8px;">Delivery Fee</div>
                    <div style="color: #666; line-height: 1.5; font-size: 18px; font-weight: 600;">
                        Kshs ${shippingCost.toFixed(2)}
                    </div>
                </div>
            </div>
        `;
        document.getElementById('reviewDelivery').innerHTML = deliveryHTML;
        
        // Update payment info
        let paymentHTML = '';
        if (selectedPaymentMethod === 'mpesa') {
            paymentHTML = `
                <div style="display: flex; align-items: center; gap: 12px;">
                    <div class="payment-method-icon mpesa-icon" style="margin: 0;">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <div>
                        <div style="font-weight: 500;">M-Pesa</div>
                        <div style="color: #666; font-size: 14px;">${paymentInfo.phone}</div>
                    </div>
                </div>
            `;
        } else {
            paymentHTML = `
                <div style="display: flex; align-items: center; gap: 12px;">
                    <div class="payment-method-icon card-icon" style="margin: 0;">
                        <i class="fas fa-credit-card"></i>
                    </div>
                    <div>
                        <div style="font-weight: 500;">Credit/Debit Card</div>
                        <div style="color: #666; font-size: 14px;">Ending in ${paymentInfo.cardLast4}</div>
                    </div>
                </div>
            `;
        }
        document.getElementById('reviewPayment').innerHTML = paymentHTML;
        
        // Update order total in modal
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const total = subtotal + shippingCost;
        document.getElementById('order-total').textContent = `Kshs ${total.toFixed(2)}`;
        document.getElementById('order-payment-method').textContent = paymentInfo.method;
        document.getElementById('order-delivery').textContent = `${customerInfo.deliveryMethod} (${deliveryMethod === 'pickup' ? 'Shop Pickup' : customerInfo.location})`;
        document.getElementById('customer-email').textContent = customerInfo.email || 'No email provided';
    }
    
    // Place order button
    placeOrderBtn.addEventListener('click', function() {
        // Check if terms are accepted
        if (!termsCheckbox.checked) {
            showNotification('Please accept the Terms and Conditions to proceed.', 'error');
            return;
        }
        
        // Check if cart is empty
        if (cart.length === 0) {
            showNotification('Your cart is empty. Please add items to your cart before placing an order.', 'error');
            return;
        }
        
        // Show loading state
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        this.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // Generate random order number
            const orderNumber = `ELG-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`;
            document.getElementById('order-number').textContent = orderNumber;
            
            // Save order to localStorage (for demo purposes)
            const order = {
                id: orderNumber,
                date: new Date().toISOString(),
                customer: customerInfo,
                payment: paymentInfo,
                items: cart,
                shipping: shippingCost,
                deliveryMethod: deliveryMethod,
                location: selectedLocation,
                status: 'confirmed'
            };
            
            // Save order to localStorage
            const orders = JSON.parse(localStorage.getItem('orders')) || [];
            orders.push(order);
            localStorage.setItem('orders', JSON.stringify(orders));
            
            // Clear cart
            localStorage.removeItem('cart');
            cart = [];
            
            // Update cart count
            updateCart();
            
            // Show success modal
            successModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Reset button
            this.innerHTML = '<i class="fas fa-lock"></i> Place Order';
            this.disabled = false;
        }, 2000);
    });
    
    // Print receipt
    document.getElementById('print-receipt').addEventListener('click', function() {
        window.print();
    });
    
    // Close modal when clicking outside
    successModal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Format card number input
    const cardNumberInput = document.getElementById('cardNumber');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
            let formatted = '';
            
            for (let i = 0; i < value.length; i++) {
                if (i > 0 && i % 4 === 0) formatted += ' ';
                formatted += value[i];
            }
            
            e.target.value = formatted;
        });
    }
    
    // Format expiry date input
    const expiryInput = document.getElementById('cardExpiry');
    if (expiryInput) {
        expiryInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/[^0-9]/gi, '');
            
            if (value.length >= 2) {
                e.target.value = value.substring(0, 2) + '/' + value.substring(2, 4);
            } else {
                e.target.value = value;
            }
        });
    }
    
    // Format phone inputs
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9+]/gi, '');
            
            // Ensure + at beginning for international numbers
            if (value.startsWith('+')) {
                // Keep + and format the rest
                const rest = value.substring(1).replace(/\D/g, '');
                e.target.value = '+' + rest;
            } else {
                // Format as local number
                e.target.value = value.replace(/\D/g, '');
            }
            
            // Auto-add country code for Kenyan numbers
            if (value.startsWith('07') && value.length === 10) {
                e.target.value = '+254' + value.substring(1);
            }
        });
    });
    
    // Real-time form validation
    const shippingInputs = document.querySelectorAll('#shippingForm input, #shippingForm select');
    shippingInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                const errorId = this.id + 'Error';
                const errorElement = document.getElementById(errorId);
                if (errorElement) {
                    errorElement.classList.add('show');
                    this.classList.add('error');
                }
            }
        });
        
        input.addEventListener('input', function() {
            const errorId = this.id + 'Error';
            const errorElement = document.getElementById(errorId);
            if (errorElement) {
                errorElement.classList.remove('show');
                this.classList.remove('error');
            }
        });
    });
    
    // Notification system
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'error' ? '#E74C3C' : '#27AE60'};
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
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
    
    // Add notification styles
    const notificationStyle = document.createElement('style');
    notificationStyle.textContent = `
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
    document.head.appendChild(notificationStyle);
    
    // Initialize
    loadCart();
    updateProgress();
    
    // Set current date in modal
    const now = new Date();
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    document.getElementById('order-date').textContent = now.toLocaleDateString('en-US', options);
});