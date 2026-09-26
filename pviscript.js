    
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  const fltnv = document.getElementById("fltnv");

  if (currentScroll <= 0) {
    fltnv.classList.remove("nvshow");
  } else if (currentScroll < lastScrollTop) {
    fltnv.classList.add("nvshow");
  } else {
    fltnv.classList.remove("nvshow");
  }

  lastScrollTop = currentScroll;
});

    // gallery
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".gallery").forEach((gallery) => {
    const contents = gallery.querySelectorAll(".gallerycontent");
    let current = 0;

    function show(index) {
      contents.forEach((el, i) => {
        el.classList.toggle("active", i === index);
      });
    }

    // Setup navigation buttons inside each slide
    contents.forEach((content, i) => {
      const prevBtn = content.querySelector(".prev");
      const nextBtn = content.querySelector(".next");

      if (prevBtn) {
        prevBtn.addEventListener("click", (e) => {
          e.stopPropagation(); // prevent bubbling if needed
          current = (current - 1 + contents.length) % contents.length;
          show(current);
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          current = (current + 1) % contents.length;
          show(current);
        });
      }
    });

    // Swipe support

    let startX = 0;
    let isDragging = false;

    gallery.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    });

    gallery.addEventListener("touchmove", (e) => {
      if (!isDragging) return;
      const diffX = e.touches[0].clientX - startX;
      if (Math.abs(diffX) > 10) {
        e.preventDefault();
      }
    }, { passive: false });

    gallery.addEventListener("touchend", (e) => {
      if (!isDragging) return;
      isDragging = false;
      const endX = e.changedTouches[0].clientX;
      const delta = endX - startX;

      if (delta > 50) {
        current = (current - 1 + contents.length) % contents.length;
      } else if (delta < -50) {
        current = (current + 1) % contents.length;
      }
      show(current);
    });

    show(current); // Initialize
  });
});

// animateonscroll

function runAnimationOnScrollPure(selector = ".animate-on-scroll") {
  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate using Web Animations API
        entry.target.animate([
          { opacity: 0, transform: "translateY(90px)" },
          { opacity: 1, transform: "translateY(0)" }
        ], {
          duration: 900,
          easing: "ease-out",
          fill: "forwards"
        });

        obs.unobserve(entry.target); // animate only once
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(el => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  runAnimationOnScrollPure();
});

 document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const isOpen = content.style.height && content.style.height !== '0px';

    if (isOpen) {
      content.style.height = content.scrollHeight + 'px';
      requestAnimationFrame(() => {
        content.style.height = '0px';
      });
    } else {
      content.style.height = content.scrollHeight + 'px';
      content.addEventListener('transitionend', function cleanup() {
        content.style.height = 'auto';
        content.removeEventListener('transitionend', cleanup);
      });
    }
  });
});