(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  const revealItems = document.querySelectorAll(
    ".hero, .section, .tech-strip, .ai-section, .internship-section, .about-section, .contact-section, .service-card, .course-card, .tech-card, .ai-capabilities article, .value-grid article, .site-header, .brand, .nav a, .button"
  );

  revealItems.forEach((item, index) => {
    item.classList.add("reveal");
    item.style.transitionDelay = `${Math.min(index * 80, 500)}ms`;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.16,
    rootMargin: "0px 0px -40px 0px"
  });

  revealItems.forEach((item) => observer.observe(item));

  const form = document.querySelector("#contact-form");
  const status = document.querySelector("#form-status");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const data = new FormData(form);
      const recipient = "dada.diwane001@gmail.com";
      if (recipient.includes("YOUR-BUSINESS-EMAIL")) {
        status.textContent = "Website setup required: replace YOUR-BUSINESS-EMAIL@example.com in script.js with your official business email.";
        return;
      }
      const subject = encodeURIComponent(`Website enquiry: ${data.get("interest")}`);
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nInterest: ${data.get("interest")}\n\nMessage:\n${data.get("message")}`
      );
      status.textContent = "Opening your email application…";
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    });
  }
})();
