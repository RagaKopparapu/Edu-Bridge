// Login Page JavaScript

// Form validation and functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeLoginPage();
});

function initializeLoginPage() {
    // Add event listeners
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('signupForm').addEventListener('submit', handleSignup);
    
    // Add real-time validation
    addRealTimeValidation();
    
    // Add social login handlers
    addSocialLoginHandlers();
}

// Switch between login and signup tabs
function switchTab(tab) {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const loginTab = document.querySelector('.tab-btn:first-child');
    const signupTab = document.querySelector('.tab-btn:last-child');
    
    // Remove active classes
    loginForm.classList.remove('active');
    signupForm.classList.remove('active');
    loginTab.classList.remove('active');
    signupTab.classList.remove('active');
    
    // Add active class to selected tab
    if (tab === 'login') {
        loginForm.classList.add('active');
        loginTab.classList.add('active');
    } else {
        signupForm.classList.add('active');
        signupTab.classList.add('active');
    }
    
    // Clear forms
    clearForms();
}

// Handle login form submission
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    // Validate form
    if (!validateLoginForm(email, password)) {
        return;
    }
    
    // Show loading state
    const submitBtn = e.target.querySelector('.btn-login');
    showLoading(submitBtn);
    
    // Simulate API call
    setTimeout(() => {
        hideLoading(submitBtn);
        
        // Simulate successful login
        if (email && password) {
            // Store user data
            const userData = {
                email: email,
                name: email.split('@')[0],
                role: 'student',
                loginTime: new Date().toISOString()
            };
            
            localStorage.setItem('edubridge_user', JSON.stringify(userData));
            
            // Show success message
            showMessage('Login successful! Redirecting...', 'success');
            
            // Redirect to main page
            setTimeout(() => {
                window.location.href = 'main.html';
            }, 1500);
        } else {
            showMessage('Invalid email or password', 'error');
        }
    }, 2000);
}

// Handle signup form submission
function handleSignup(e) {
    e.preventDefault();
    
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const userType = document.getElementById('userType').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;
    
    // Validate form
    if (!validateSignupForm(name, email, password, confirmPassword, userType, agreeTerms)) {
        return;
    }
    
    // Show loading state
    const submitBtn = e.target.querySelector('.btn-login');
    showLoading(submitBtn);
    
    // Simulate API call
    setTimeout(() => {
        hideLoading(submitBtn);
        
        // Store user data
        const userData = {
            name: name,
            email: email,
            role: userType,
            signupTime: new Date().toISOString()
        };
        
        localStorage.setItem('edubridge_user', JSON.stringify(userData));
        
        // Show success message
        showMessage('Account created successfully! Redirecting...', 'success');
        
        // Redirect to main page
        setTimeout(() => {
            window.location.href = 'main.html';
        }, 1500);
    }, 2000);
}

// Validate login form
function validateLoginForm(email, password) {
    let isValid = true;
    
    // Clear previous errors
    clearErrors();
    
    // Validate email
    if (!email) {
        showFieldError('loginEmail', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showFieldError('loginEmail', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate password
    if (!password) {
        showFieldError('loginPassword', 'Password is required');
        isValid = false;
    } else if (password.length < 6) {
        showFieldError('loginPassword', 'Password must be at least 6 characters');
        isValid = false;
    }
    
    return isValid;
}

// Validate signup form
function validateSignupForm(name, email, password, confirmPassword, userType, agreeTerms) {
    let isValid = true;
    
    // Clear previous errors
    clearErrors();
    
    // Validate name
    if (!name) {
        showFieldError('signupName', 'Full name is required');
        isValid = false;
    } else if (name.length < 2) {
        showFieldError('signupName', 'Name must be at least 2 characters');
        isValid = false;
    }
    
    // Validate email
    if (!email) {
        showFieldError('signupEmail', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showFieldError('signupEmail', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate password
    if (!password) {
        showFieldError('signupPassword', 'Password is required');
        isValid = false;
    } else if (password.length < 8) {
        showFieldError('signupPassword', 'Password must be at least 8 characters');
        isValid = false;
    } else if (!isStrongPassword(password)) {
        showFieldError('signupPassword', 'Password must contain at least one letter and one number');
        isValid = false;
    }
    
    // Validate confirm password
    if (!confirmPassword) {
        showFieldError('confirmPassword', 'Please confirm your password');
        isValid = false;
    } else if (password !== confirmPassword) {
        showFieldError('confirmPassword', 'Passwords do not match');
        isValid = false;
    }
    
    // Validate user type
    if (!userType) {
        showFieldError('userType', 'Please select your role');
        isValid = false;
    }
    
    // Validate terms agreement
    if (!agreeTerms) {
        showFieldError('agreeTerms', 'You must agree to the terms and conditions');
        isValid = false;
    }
    
    return isValid;
}

// Add real-time validation
function addRealTimeValidation() {
    const inputs = document.querySelectorAll('.form-control');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
}

// Validate individual field
function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.id;
    
    clearFieldError(field);
    
    switch (fieldName) {
        case 'loginEmail':
        case 'signupEmail':
            if (value && !isValidEmail(value)) {
                showFieldError(fieldName, 'Please enter a valid email address');
            }
            break;
            
        case 'signupPassword':
            if (value && value.length < 8) {
                showFieldError(fieldName, 'Password must be at least 8 characters');
            } else if (value && !isStrongPassword(value)) {
                showFieldError(fieldName, 'Password must contain at least one letter and one number');
            }
            break;
            
        case 'confirmPassword':
            const password = document.getElementById('signupPassword').value;
            if (value && value !== password) {
                showFieldError(fieldName, 'Passwords do not match');
            }
            break;
    }
}

// Show field error
function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const formGroup = field.closest('.form-group');
    
    field.classList.add('error');
    
    // Remove existing error message
    const existingError = formGroup.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Add new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    formGroup.appendChild(errorDiv);
}

// Clear field error
function clearFieldError(field) {
    field.classList.remove('error');
    const formGroup = field.closest('.form-group');
    const errorMessage = formGroup.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

// Clear all errors
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
    
    const errorFields = document.querySelectorAll('.form-control.error');
    errorFields.forEach(field => field.classList.remove('error'));
}

// Clear forms
function clearForms() {
    const forms = document.querySelectorAll('.auth-form');
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.value = '';
            input.classList.remove('error');
        });
    });
    clearErrors();
}

// Toggle password visibility
function togglePassword(fieldId) {
    const field = document.getElementById(fieldId);
    const toggleBtn = field.parentElement.querySelector('.password-toggle i');
    
    if (field.type === 'password') {
        field.type = 'text';
        toggleBtn.classList.remove('fa-eye');
        toggleBtn.classList.add('fa-eye-slash');
    } else {
        field.type = 'password';
        toggleBtn.classList.remove('fa-eye-slash');
        toggleBtn.classList.add('fa-eye');
    }
}

// Show loading state
function showLoading(button) {
    button.classList.add('loading');
    button.disabled = true;
}

// Hide loading state
function hideLoading(button) {
    button.classList.remove('loading');
    button.disabled = false;
}

// Show message
function showMessage(message, type) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.message-toast');
    existingMessages.forEach(msg => msg.remove());
    
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `message-toast ${type}`;
    messageDiv.innerHTML = `
        <div class="message-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(messageDiv);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        messageDiv.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => messageDiv.remove(), 300);
    }, 5000);
}

// Add social login handlers
function addSocialLoginHandlers() {
    const googleBtns = document.querySelectorAll('.btn-social.google');
    const facebookBtns = document.querySelectorAll('.btn-social.facebook');
    
    googleBtns.forEach(btn => {
        btn.addEventListener('click', () => handleSocialLogin('google'));
    });
    
    facebookBtns.forEach(btn => {
        btn.addEventListener('click', () => handleSocialLogin('facebook'));
    });
}

// Handle social login
function handleSocialLogin(provider) {
    showMessage(`Redirecting to ${provider} login...`, 'success');
    
    // Simulate social login
    setTimeout(() => {
        const userData = {
            name: `User from ${provider}`,
            email: `user@${provider}.com`,
            role: 'student',
            provider: provider,
            loginTime: new Date().toISOString()
        };
        
        localStorage.setItem('edubridge_user', JSON.stringify(userData));
        
        showMessage(`Logged in with ${provider}! Redirecting...`, 'success');
        
        setTimeout(() => {
            window.location.href = 'main.html';
        }, 1500);
    }, 2000);
}

// Utility functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isStrongPassword(password) {
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    return hasLetter && hasNumber;
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .message-toast .message-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
`;
document.head.appendChild(style);
