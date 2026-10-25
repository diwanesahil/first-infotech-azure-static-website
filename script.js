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

  const form = document.querySelector("#contact-form");
  const status = document.querySelector("#form-status");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const data = new FormData(form);
      // Replace this placeholder with your official business email before launch.
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
