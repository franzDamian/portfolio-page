// ========================================
// Portfolio - Franz Schulze
// Interactive Elements
// ========================================

document.addEventListener("DOMContentLoaded", () => {
	// Mobile Menu Toggle
	const menuToggle = document.querySelector(".menu-toggle");
	const navLinks = document.querySelector(".nav-links");

	if (menuToggle && navLinks) {
		menuToggle.addEventListener("click", () => {
			navLinks.classList.toggle("active");

			// Animate hamburger
			const spans = menuToggle.querySelectorAll("span");
			if (navLinks.classList.contains("active")) {
				spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
				spans[1].style.opacity = "0";
				spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
			} else {
				spans[0].style.transform = "none";
				spans[1].style.opacity = "1";
				spans[2].style.transform = "none";
			}
		});

		// Close menu on link click
		navLinks.querySelectorAll("a").forEach((link) => {
			link.addEventListener("click", () => {
				navLinks.classList.remove("active");
				const spans = menuToggle.querySelectorAll("span");
				spans[0].style.transform = "none";
				spans[1].style.opacity = "1";
				spans[2].style.transform = "none";
			});
		});
	}

	// Navbar background on scroll
	const navbar = document.querySelector(".navbar");

	window.addEventListener("scroll", () => {
		if (window.scrollY > 50) {
			navbar.style.background = "rgba(10, 10, 15, 0.95)";
		} else {
			navbar.style.background = "rgba(10, 10, 15, 0.8)";
		}
	});

	// Smooth scroll for anchor links
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute("href"));
			if (target) {
				const offsetTop = target.offsetTop - 80;
				window.scrollTo({
					top: offsetTop,
					behavior: "smooth",
				});
			}
		});
	});

	// Intersection Observer for animations
	const observerOptions = {
		threshold: 0.1,
		rootMargin: "0px 0px -50px 0px",
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("animate-in");
				observer.unobserve(entry.target);
			}
		});
	}, observerOptions);

	// Observe elements for animation
	document
		.querySelectorAll(
			".skill-category, .timeline-item, .education-card, .language-card",
		)
		.forEach((el) => {
			el.style.opacity = "0";
			el.style.transform = "translateY(20px)";
			el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
			observer.observe(el);
		});

	// Add animation class
	document.addEventListener("scroll", () => {
		document.querySelectorAll(".animate-in").forEach((el) => {
			el.style.opacity = "1";
			el.style.transform = "translateY(0)";
		});
	});

	// Initial check for elements in view
	setTimeout(() => {
		document
			.querySelectorAll(
				".skill-category, .timeline-item, .education-card, .language-card",
			)
			.forEach((el) => {
				const rect = el.getBoundingClientRect();
				if (rect.top < window.innerHeight - 100) {
					el.style.opacity = "1";
					el.style.transform = "translateY(0)";
				}
			});
	}, 100);

	// Typing effect for code block (optional enhancement)
	const codeBlock = document.querySelector(".code-block code");
	if (codeBlock) {
		codeBlock.style.opacity = "0";
		setTimeout(() => {
			codeBlock.style.transition = "opacity 1s ease";
			codeBlock.style.opacity = "1";
		}, 500);
	}
});
