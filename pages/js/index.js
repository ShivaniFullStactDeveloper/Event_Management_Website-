
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
            link.addEventListener('click', function () {
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            });
        });

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

        // ***********************************************
// ========   SERVICES ARRAY IMAGE ========
   // Wedding event images array
    const services = [
      {
        title: 'Wedding Events',
        description: "A day to celebrate love's journey join us in joy and togetherness. ",
        image: 'https://i.pinimg.com/1200x/bd/fc/27/bdfc27350c27ffe77e740171400824cd.jpg',
       alt:'Wedding Event'
      },
      {
        title: 'Destination Wedding',
        description: 'A destination of dreams—let’s celebrate love in paradise.',
        image: 'https://i.pinimg.com/1200x/63/d7/43/63d743ec37aa461b8c31fb2d1be91654.jpg',
        alt: 'Destination Weddings'
      },
      {
        title: 'Corporate Events',
        description: 'Where professionals meet, learn, and lead—be part of our corporate experience.',
        image: 'https://zzeeh.com/wp-content/uploads/2023/02/corporate-event-decorators.jpg',
        alt: 'Corporate Events'
      },
        {
        title: 'Birthday Parties',
        description: 'A surprise of smiles, laughter, and unforgettable birthday vibes.',
        image: 'https://cdn.balloondekor.com/14/1750496871349.webp',
        alt: 'Birthday Parties'
      },
        {
        title: 'Other Events',
        description: 'Celebrate life’s moments big or small with joy and togetherness.',
        image: './assets/images/front_page_images/private-party.JPG',
        alt: 'Other Events'
      }
    ];

    // Function to build gallery from an array
    function createGalleryItems(events) {
      const gallery = document.getElementById('gallery');
      gallery.innerHTML = '';

      events.forEach((event, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.style.animationDelay = `${index * 0.1}s`;

        galleryItem.innerHTML = `
          <img src="${event.image}" alt="${event.alt}">
          <div class="gallery-overlay">
            <div class="gallery-title">${event.title}</div>
            <div class="gallery-desc">${event.description}</div>
          </div>
        `;

        gallery.appendChild(galleryItem);
      });
    }

    // Load wedding images on page load
    createGalleryItems(services);
        // *****************************************
        // ===== CLIENT SECTION CAROUSEL =====
 const testimonials = [
      { name: "Vaishakh Chavhan", letter: "V", bg: "linear-gradient(135deg, #667eea, #764ba2)", stars: 5, text: "Karyam Event turned our special day into a beautiful memory! Perfect planning, elegant decor, and a truly professional team. Highly recommended!" },
      { name: "Nikita Rewatkar", letter: "N", bg: "linear-gradient(135deg, #f093fb, #f5576c)", stars: 4, text: "Professional team, beautiful execution, and smooth coordination. Karyam Event Management exceeded expectations." },
      { name: "Bhushan Jatgade", letter: "B", bg: "linear-gradient(135deg, #4facfe, #00f2fe)", stars: 4, text: "Karyam Event Management delivered a flawless event with excellent planning and execution. Truly professional and reliable." },
      { name: "Shivani Kharpuriya", letter: "S", bg: "linear-gradient(135deg, #fa709a, #fee140)", stars: 4, text: "Very happy with Karyam Event Management. Their dedication, creativity, and attention to detail made our event truly very special." },
      { name: "Sanket Narnavre", letter: "S", bg: "linear-gradient(135deg, #a8edea, #fed6e3)", stars: 3, text: "Extremely happy with the fantastic job done by the KARYM EVENT... Highly recommend to anyone looking for reliable event management services." },
      { name: "Vrushabh Rode ", letter: "V", bg: "linear-gradient(135deg, #ffecd2, #fcb69f)", stars: 4, text: "Outstanding experience with Karyam event Management. Their team delivered an exceptional event, exceeding our expectations." },
      { name: "Robin Khurpade", letter: "R", bg: "linear-gradient(135deg, #ff9a9e, #fecfef)", stars: 5, text: "Excellent service by Karyam Event Management. From planning to execution, everything was handled professionally. The event exceeded our expectations." },
      { name: "Arati Bhole", letter: "A", bg: "linear-gradient(135deg, #ff9a9e, #fecfef)", stars: 5, text: "Stress-free planning and beautiful results! The team's dedication and creativity made our anniversary celebration unforgettable." },
      { name: "Rushikesh Darbhe", letter: "R", bg: "linear-gradient(135deg, #ff9a9e, #fecfef)", stars: 4, text: "Very reliable and professional team. Karyam Event Management took care of every detail and ensured a smooth, stress-free event." },
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

    //********************************************************************* */
    // ---------- GET IN TOUCH -------------------
      // Create floating gold particles
    function createParticle() {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const size = Math.random() * 4 + 2;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDuration = (Math.random() * 6 + 6) + 's';
      particle.style.animationDelay = Math.random() * 3 + 's';
      
      const wrapper = document.querySelector('.contact-wrapper');
      wrapper.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 12000);
    }

    // Create particles periodically
    setInterval(createParticle, 1500);

    // Add button click effect with gold ripple
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(245, 215, 110, 0.6)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.8s ease-out';
        ripple.style.pointerEvents = 'none';
        
        this.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 800);
      });
    });

    // **********************************************
    // ============ KNOW MORE FEATURES =============
 
//     function showFeatures(features) {
//     const featureList = ['wedding', 'birthday', 'corporate', 'catering', 'photography', 'entertainment'];

//     featureList.forEach(feature => {
//       const section = document.getElementById(feature);
//       if (section) {
//         section.hidden = feature !== features;
//       }
//     });
//  }

function showFeatures(features) {
  const featureList = ['wedding', 'birthday', 'corporate', 'catering', 'photography', 'entertainment'];

  featureList.forEach(feature => {
    const section = document.getElementById(feature);
    if (section) {
      section.hidden = feature !== features;
    }
  });

  // Optional: smooth scroll to the revealed section
  const activeSection = document.getElementById(features);
  if (activeSection) {
    activeSection.scrollIntoView({ behavior: 'smooth' });
  }
}


      // Optional: highlight active button if you use .feature-btn class
    // document.querySelectorAll('.feature-btn').forEach(btn => btn.classList.remove('active'));
    // const indexMap = {
    //   'wedding': 0,
    //   'birthday': 1,
    //   'corporate': 2,
    //   'catering': 3,
    //   'photography': 4,
    //   'entertainment': 5
    // };
    // document.querySelectorAll('.feature-btn')[indexMap[features]].classList.add('active');
  

    // ************************************************
    // photos section
    