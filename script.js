/* ==========================================================================
   Ghar Ka Dabba - Premium Interactive JavaScript
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Sticky Header scroll trigger
    const header = document.querySelector(".header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // 2. Mobile Menu Toggle Drawer
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const menuIcon = menuToggle.querySelector(".menu-icon");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
        
        // Toggle Icon state
        if (navMenu.classList.contains("open")) {
            menuIcon.innerHTML = `<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>`;
        } else {
            menuIcon.innerHTML = `<line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line>`;
        }
    });

    // Close menu when clicking links
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
            menuIcon.innerHTML = `<line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line>`;
        });
    });

    // 3. Scroll Active Link Highlighter
    const sections = document.querySelectorAll("section[id]");
    window.addEventListener("scroll", () => {
        let scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute("id");
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(`.nav-links-wrapper a[href*=${sectionId}]`)?.classList.add("active");
            } else {
                document.querySelector(`.nav-links-wrapper a[href*=${sectionId}]`)?.classList.remove("active");
            }
        });
    });

    // 4. FAQ Accordion toggle behavior
    const faqQuestions = document.querySelectorAll(".faq-question");
    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const item = question.parentElement;
            
            // Toggle active state on current item
            item.classList.toggle("active");
            
            // Close other items (optional, but premium feel)
            document.querySelectorAll(".faq-item").forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });
        });
    });

    // 5. Subscription Form Submit Action
    const subscribeForm = document.getElementById("subscribeForm");
    if (subscribeForm) {
        subscribeForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const emailInput = subscribeForm.querySelector(".subscribe-input");
            
            if (emailInput.value.trim() !== "") {
                showToast("Subscription successful! Check your inbox for updates.");
                emailInput.value = "";
            }
        });
    }

    /* ==========================================================================
       6. Live Modals, Cart & Interactive Ordering Flow
       ========================================================================== */

    // DOM Elements for Modals & Drawers
    const authModal = document.getElementById("authModal");
    const orderModal = document.getElementById("orderModal");
    const cartDrawer = document.getElementById("cartDrawer");
    const toast = document.getElementById("toastNotification");

    // Profile Trigger Buttons
    const profileBtn = document.querySelector('button[aria-label="User Profile"]');
    const closeAuthBtn = document.getElementById("closeAuthModal");

    // Cart Trigger Buttons
    const cartBtn = document.querySelector('button[aria-label="Shopping Cart"]');
    const closeCartBtn = document.getElementById("closeCartDrawer");

    // Order/Subscription Trigger Buttons
    const closeOrderBtn = document.getElementById("closeOrderModal");
    const plansButtons = document.querySelectorAll(".plan-btn");

    // Global Toast Notification Trigger
    function showToast(message, isSuccess = true) {
        const toastMsg = toast.querySelector(".toast-message");
        const toastIcon = toast.querySelector(".toast-icon");
        
        toastMsg.textContent = message;
        if (!isSuccess) {
            toastIcon.textContent = "×";
            toastIcon.style.backgroundColor = "var(--color-red)";
        } else {
            toastIcon.textContent = "✓";
            toastIcon.style.backgroundColor = "var(--color-green)";
        }
        
        toast.classList.add("show");
        setTimeout(() => {
            toast.classList.remove("show");
        }, 3500);
    }

    // Modal Opening & Closing Utilities
    function openModal(modal) {
        modal.classList.add("open");
    }

    function closeModal(modal) {
        modal.classList.remove("open");
    }

    // Auth Modal tab switching logic
    const loginTabBtn = document.getElementById("loginTabBtn");
    const registerTabBtn = document.getElementById("registerTabBtn");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    loginTabBtn.addEventListener("click", () => {
        loginTabBtn.classList.add("active");
        registerTabBtn.classList.remove("active");
        loginForm.classList.remove("hidden");
        registerForm.classList.add("hidden");
    });

    registerTabBtn.addEventListener("click", () => {
        registerTabBtn.classList.add("active");
        loginTabBtn.classList.remove("active");
        registerForm.classList.remove("hidden");
        loginForm.classList.add("hidden");
    });

    // Profile Action Trigger
    if (profileBtn) {
        profileBtn.addEventListener("click", () => openModal(authModal));
    }
    if (closeAuthBtn) {
        closeAuthBtn.addEventListener("click", () => closeModal(authModal));
    }

    // Cart Action Trigger
    if (cartBtn) {
        cartBtn.addEventListener("click", () => openModal(cartDrawer));
    }
    if (closeCartBtn) {
        closeCartBtn.addEventListener("click", () => closeModal(cartDrawer));
    }

    // Form Submissions
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const emailVal = document.getElementById("loginEmail").value;
            closeModal(authModal);
            showToast(`Welcome back to Ghar Ka Dabba, User!`);
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const nameVal = document.getElementById("regName").value;
            closeModal(authModal);
            showToast(`Account successfully created! Welcome, ${nameVal}.`);
        });
    }

    // Order Booking Configuration States
    let currentSelectedPlan = {
        name: "Family Plan",
        basePrice: 299,
        rotiCount: 12,
        dietType: "veg"
    };

    plansButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const card = e.target.closest(".plan-card");
            const planTitle = card.querySelector(".plan-title").textContent;
            
            // Set prices
            let basePrice = 299;
            let initialRoti = 12;
            if (planTitle.includes("Basic")) {
                basePrice = 120;
                initialRoti = 4;
            } else if (planTitle.includes("Office")) {
                basePrice = 99;
                initialRoti = 5;
            }
            
            currentSelectedPlan = {
                name: planTitle,
                basePrice: basePrice,
                rotiCount: initialRoti,
                dietType: "veg"
            };

            // Update DOM configuration modal details
            document.getElementById("selectedPlanTitle").textContent = `Plan: ${planTitle}`;
            document.getElementById("rotiCountVal").textContent = initialRoti;
            updateEstimatedPrice();
            
            openModal(orderModal);
        });
    });

    if (closeOrderBtn) {
        closeOrderBtn.addEventListener("click", () => closeModal(orderModal));
    }

    // Roti Counter logic inside Booking modal
    const rotiDec = document.getElementById("rotiDec");
    const rotiInc = document.getElementById("rotiInc");
    const rotiCountVal = document.getElementById("rotiCountVal");

    rotiDec.addEventListener("click", () => {
        if (currentSelectedPlan.rotiCount > 1) {
            currentSelectedPlan.rotiCount--;
            rotiCountVal.textContent = currentSelectedPlan.rotiCount;
            updateEstimatedPrice();
        }
    });

    rotiInc.addEventListener("click", () => {
        currentSelectedPlan.rotiCount++;
        rotiCountVal.textContent = currentSelectedPlan.rotiCount;
        updateEstimatedPrice();
    });

    // Diet Selector Radio button custom triggers
    const dietOptions = document.querySelectorAll(".diet-option");
    dietOptions.forEach(opt => {
        opt.addEventListener("click", () => {
            dietOptions.forEach(o => o.classList.remove("active"));
            opt.classList.add("active");
            
            const radio = opt.querySelector('input[type="radio"]');
            radio.checked = true;
            currentSelectedPlan.dietType = radio.value;
            updateEstimatedPrice();
        });
    });

    function updateEstimatedPrice() {
        // Simple logic: +₹5 for non-veg, +₹5 per extra roti above default counts
        let defaultRoti = 12;
        if (currentSelectedPlan.name.includes("Basic")) defaultRoti = 4;
        if (currentSelectedPlan.name.includes("Office")) defaultRoti = 5;

        let extraRotiCost = Math.max(0, currentSelectedPlan.rotiCount - defaultRoti) * 5;
        let nonVegCost = currentSelectedPlan.dietType === "nonveg" ? 40 : 0;
        let finalEst = currentSelectedPlan.basePrice + extraRotiCost + nonVegCost;
        
        document.getElementById("estimatedBookingPrice").textContent = `₹${finalEst}`;
    }

    // Confirm Booking Form submit
    const bookingForm = document.getElementById("bookingForm");
    const emptyCartState = document.getElementById("emptyCartState");
    const cartContentArea = document.getElementById("cartContentArea");

    if (bookingForm) {
        bookingForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Extract final price
            const finalPriceText = document.getElementById("estimatedBookingPrice").textContent;
            
            // Populating Cart Panel Details
            document.getElementById("cartPlanName").textContent = currentSelectedPlan.name;
            document.getElementById("cartPlanMeta").textContent = `${currentSelectedPlan.dietType === 'veg' ? 'Pure Veg' : 'Veg + Non-Veg'} • Roti Count: ${currentSelectedPlan.rotiCount}`;
            document.getElementById("cartPlanPrice").textContent = finalPriceText;
            document.getElementById("summarySubtotal").textContent = finalPriceText;
            document.getElementById("summaryTotal").textContent = finalPriceText;

            // Show Cart Items, Hide Empty State
            emptyCartState.classList.add("hidden");
            cartContentArea.classList.remove("hidden");

            closeModal(orderModal);
            showToast("Plan configured! Proceed to checkout in your cart.");
            
            // Open the Cart Drawer to show items immediately
            setTimeout(() => {
                openModal(cartDrawer);
            }, 800);
        });
    }

    // Cart Checkout confirm
    const cartCheckoutBtn = document.getElementById("cartCheckoutBtn");
    if (cartCheckoutBtn) {
        cartCheckoutBtn.addEventListener("click", () => {
            closeModal(cartDrawer);
            showToast("Order booked successfully! Our delivery agent is on the way.");
            
            // Reset Cart Drawer State
            emptyCartState.classList.remove("hidden");
            cartContentArea.classList.add("hidden");
        });
    }
});

