
        // ===== HEADER SCROLL EFFECT =====
        window.addEventListener('scroll', function () {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // ===== MOBILE MENU TOGGLE =====
        const menuToggle = document.getElementById('menu-toggle');
        const navbar = document.getElementById('navbar');

        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        // ===== NAVIGATION ACTIVE STATE =====
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section[id]');

        function updateActiveNav() {
            const scrollY = window.pageYOffset;

            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 100;
                const sectionId = section.getAttribute('id');

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }

        // Manual navigation click handler
        navLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');

                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }

                // Close mobile menu if open
                navbar.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            });
        });

        // Update active navigation on scroll
        window.addEventListener('scroll', updateActiveNav);

        // Initial call
        updateActiveNav();

        // ===== SCROLL REVEAL ANIMATION =====
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe service containers
        const serviceContainers = document.querySelectorAll('.service-container');
        serviceContainers.forEach(container => {
            observer.observe(container);
        });

        // Observe scroll reveal items
        const revealItems = document.querySelectorAll('.scroll-reveal-item');
        revealItems.forEach((item, index) => {
            item.style.setProperty('--animation-delay', `${index * 0.2}s`);
            observer.observe(item);
        });

        // ===== DROPDOWN MENU FOR MOBILE =====
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            const dropdownLink = dropdown.querySelector('a');
            dropdownLink.addEventListener('click', function (e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        });

        // *****************************************
        // ===== CLIENT SECTION CAROUSEL =====
 const testimonials = [
      { name: "Sanket Narnaware", letter: "S", bg: "linear-gradient(135deg, #667eea, #764ba2)", stars: 5, text: "Karyam Event turned our special day into a beautiful memory! Perfect planning, elegant decor, and a truly professional team. Highly recommended!" },
      { name: "Bhushan Jatgade", letter: "B", bg: "linear-gradient(135deg, #f093fb, #f5576c)", stars: 5, text: "Karyam Event turned our special day into a beautiful memory! Perfect planning, elegant decor, and a truly professional team. Highly recommended!" },
      { name: "Arati Bhole", letter: "A", bg: "linear-gradient(135deg, #4facfe, #00f2fe)", stars: 4, text: "Karyam Event turned our special day into a beautiful memory! Perfect planning, elegant decor, and a truly professional team. Highly recommended!" },
      { name: "Raj Sharma", letter: "R", bg: "linear-gradient(135deg, #fa709a, #fee140)", stars: 5, text: "Outstanding service and attention to detail! The team made our wedding absolutely magical. Every moment was perfectly orchestrated." },
      { name: "Priya Deshmukh", letter: "P", bg: "linear-gradient(135deg, #a8edea, #fed6e3)", stars: 5, text: "Exceeded all expectations! From venue selection to final cleanup, everything was handled with utmost professionalism and care." },
      { name: "Manoj Patil", letter: "M", bg: "linear-gradient(135deg, #ffecd2, #fcb69f)", stars: 4, text: "Creative ideas and flawless execution! They transformed our vision into reality. The best event management company in the city!" },
      { name: "Neha Kulkarni", letter: "N", bg: "linear-gradient(135deg, #ff9a9e, #fecfef)", stars: 5, text: "Stress-free planning and beautiful results! The team's dedication and creativity made our anniversary celebration unforgettable." }
    ];

    const track = document.getElementById('carouselTrack');
    const dotsContainer = document.getElementById('navDots');
    const cardWidth = 310;
    let currentSlide = 0;

    function createCard({ name, letter, bg, stars, text }) {
      const starHTML = "★".repeat(stars) + "☆".repeat(5 - stars);
      return `
        <div class="testimonial-card">
          <div class="card-content">
            <div class="client-avatar" style="background:${bg};">${letter}</div>
            <div class="client-name">${name}</div>
            <div class="rating">${[...starHTML].map(s => `<span class="star">${s}</span>`).join('')}</div>
            <div class="testimonial-text">${text}</div>
          </div>
        </div>`;
    }

    function renderCards() {
      track.innerHTML = "";
      testimonials.forEach(t => track.innerHTML += createCard(t));
      testimonials.slice(0, 4).forEach(t => track.innerHTML += createCard(t)); // duplicate for loop
    }

    function renderDots() {
      dotsContainer.innerHTML = "";
      testimonials.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.className = "dot";
        dot.dataset.slide = i;
        dot.addEventListener("click", () => {
          currentSlide = i;
          updateCarousel();
        });
        dotsContainer.appendChild(dot);
      });
    }

    function updateCarousel() {
      track.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
      document.querySelectorAll(".dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === currentSlide);
      });
      document.querySelectorAll(".testimonial-card").forEach((card, i) => {
        card.classList.toggle("active", i === currentSlide);
      });
    }

    function nextSlide() {
      currentSlide++;
      if (currentSlide >= testimonials.length) {
        track.style.transform = `translateX(-${testimonials.length * cardWidth}px)`;
        setTimeout(() => {
          track.style.transition = 'none';
          currentSlide = 0;
          track.style.transform = 'translateX(0)';
          setTimeout(() => {
            track.style.transition = 'transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          }, 50);
        }, 200);
      } else {
        updateCarousel();
      }
    }

    renderCards();
    renderDots();
    updateCarousel();
    setInterval(nextSlide, 3000);
