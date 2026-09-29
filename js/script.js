document.addEventListener("DOMContentLoaded", () => {
  // Build links from the site root so the same script works on every page.
  const scriptElement = document.querySelector('script[src*="script.js"]');
  const siteRoot = scriptElement
    ? new URL("../", new URL(scriptElement.getAttribute("src"), document.baseURI))
    : new URL("./", document.baseURI);

  const page = document.body;
  page.classList.add("page-ready");

  const pageUrl = (path) => new URL(path, siteRoot).href;

  const navHost = document.querySelector("#site-nav");
  const footerHost = document.querySelector("#site-footer");

  const navHTML = `
    <a class="skip-link" href="#main-content">Skip to content</a>
    <nav class="site-nav" aria-label="Main navigation" id="siteNav">
      <div class="nav-inner">
        <a class="brand" href="${pageUrl("/")}" aria-label="Work&Hands home">
          <img src="${pageUrl("images/logo-no-words.png")}" alt="logo"/>
          <span class="brand-text">WORK&<em>HANDS</em></span>
        </a>

        <div class="nav-links" id="navLinks">
          <div class="nav-item">
            <a class="nav-link" href="${pageUrl("/")}">Home</a>
          </div>

          <div class="nav-item">
            <a class="nav-link" href="${pageUrl("/about")}">About</a>
          </div>

          <div class="nav-item has-dropdown">
            <a class="nav-link" href="${pageUrl("/services")}" aria-haspopup="true" aria-expanded="false">
              Services
              <span class="drop-arrow"><i class="fa-solid fa-chevron-down"></i></span>
            </a>
            <div class="dropdown">
              <a href="${pageUrl("/services")}"><i class="fa-solid fa-layer-group"></i> All Services</a>
              <a href="${pageUrl("/weclean")}"><i class="fa-solid fa-spray-can-sparkles"></i> Cleaning</a>
              <a href="${pageUrl("/laundry-services")}"><i class="fa-solid fa-shirt"></i> Laundry</a>
              <a href="${pageUrl("/other-services")}"><i class="fa-solid fa-broom"></i> Other Services</a>
            </div>
          </div>

          <div class="nav-item has-dropdown">
            <a class="nav-link" href="${pageUrl("/domestic-work")}" aria-haspopup="true" aria-expanded="false">
              Domestic Work
              <span class="drop-arrow"><i class="fa-solid fa-chevron-down"></i></span>
            </a>
            <div class="dropdown">
              <a href="${pageUrl("/domestic-work/")}"><i class="fa-solid fa-house-chimney"></i> Domestic Work</a>
              <a href="${pageUrl("/washing/")}"><i class="fa-solid fa-soap"></i> Washing</a>
              <a href="${pageUrl("/iron/")}"><i class="fa-solid fa-fire"></i> Ironing</a>
              <a href="${pageUrl("/folding/")}"><i class="fa-solid fa-layer-group"></i> Folding</a>
              <a href="${pageUrl("/windows/")}"><i class="fa-solid fa-border-all"></i> Windows</a>
              <a href="${pageUrl("/curtains/")}"><i class="fa-solid fa-window-restore"></i> Curtains</a>
              <a href="${pageUrl("/dishes/")}"><i class="fa-solid fa-utensils"></i> Dishes</a>
              <a href="${pageUrl("/cupboard-cleaning/")}"><i class="fa-solid fa-box-open"></i> Cupboard Cleaning</a>
              <a href="${pageUrl("/cupboard-organising/")}"><i class="fa-solid fa-boxes-stacked"></i> Cupboard Organising</a>
              <a href="${pageUrl("/wardrobe-organising/")}"><i class="fa-solid fa-shirt"></i> Wardrobe Organising</a>
            </div>
          </div>

          <div class="nav-item">
            <a class="nav-link" href="${pageUrl("/booking/")}">Book a Service</a>
          </div>

          <div class="nav-item">
            <a class="nav-link" href="${pageUrl("/contact/")}">Contact</a>
          </div>
        </div>

        <div class="nav-actions">
          <button class="icon-btn menu-toggle" id="menuToggle" aria-label="Open navigation" aria-expanded="false">
            <span class="burger">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>
    </nav>`;

  const footerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <img src="${pageUrl("images/logo-no-words.png")}" alt="Work&Hands logo">
            <p>WORKANDHANDS-CLEANING SERVICES PROVIDERS (Pty) LTD 2026/07/24.</p>
            <p>Tracking number: 9465762928</p>
            <div class="socials">
              <a href="https://wa.me/+27787321699?text=Hi,%20I%20would%20like%20to%20get%20in%20touch." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
            </div>
          </div>
          <div class="footer-col">
            <h3>Services</h3>
            <ul>
              <li><a href="${pageUrl("/cleaning/")}">Cleaning</a></li>
              <li><a href="${pageUrl("/churches/")}">Churches</a></li>
              <li><a href="${pageUrl("/offices/")}">Business/Offices</a></li>
              <li><a href="${pageUrl("/yards-gardens/")}">Yards/Gardens</a></li>
              <li><a href="${pageUrl("/preschools/")}">Pre-Schools</a></li>
              <li><a href="${pageUrl("/car-cleaning/")}">Car Cleaning</a></li>
              <li><a href="${pageUrl("/fumigation/")}">Fumigation</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h3>Domestic Work</h3>
            <ul>
              <li><a href="${pageUrl("/washing/")}">Washing</a></li>
              <li><a href="${pageUrl("/iron/")}">Ironing</a></li>
              <li><a href="${pageUrl("/folding/")}">Folding</a></li>
              <li><a href="${pageUrl("/windows/")}">Windows</a></li>
              <li><a href="${pageUrl("/curtains/")}">Curtains</a></li>
              <li><a href="${pageUrl("/dishes/")}">Dishes</a></li>
              <li><a href="${pageUrl("/cupboard-cleaning/")}">Cupboard Cleaning</a></li>
              <li><a href="${pageUrl("/wardrobe-organising/")}">Wardrobe Organising</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h3>Company</h3>
            <ul>
              <li><strong>Email: </strong><a href="mailto:workandhands@gmail.com">workandhands@gmail.com</a></li>
              <li><strong>Call: <br></strong><a href="tel:+27 12 345 6789">+27 12 345 6789</a> | <a href="tel:+27 82 423 5466">+27 82 423 5466</a></li>
              <li><a href="${pageUrl(/"about/")}">About WORK&HANDS</a></li>
              <li><a href="${pageUrl("/booking/")}">Book a Service</a></li>
              <li><a href="${pageUrl("/contact/")}">Contact Us</a></li>
              <li><strong>Location: </strong><br><a href="https://www.google.com/maps/search/?api=1&query=146+18th+Ave+Atteridgeville" target="_blank" rel="noopener noreferrer">146, 18th Avenue Street <br>Extension 7, 9154 <br>Atteridgeville, Pretoria West</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© <span id="year"></span> WORKANDHANDS. All rights reserved.</span>
          <span>Professional care. Every time.</span>
        </div>
      </div>
    </footer>`;

  if (navHost) navHost.innerHTML = navHTML;
  if (footerHost) footerHost.innerHTML = footerHTML;

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  const menuToggle = document.querySelector("#menuToggle");
  const navLinks = document.querySelector("#navLinks");

  function closeMobileMenu() {
    navLinks?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    document.querySelectorAll(".has-dropdown").forEach((item) => {
      item.classList.remove("open");
      const link = item.querySelector(".nav-link");
      if (link) link.setAttribute("aria-expanded", "false");
    });
  }

  menuToggle?.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    if (!open) {
      document.querySelectorAll(".has-dropdown").forEach((item) => {
        item.classList.remove("open");
        const link = item.querySelector(".nav-link");
        if (link) link.setAttribute("aria-expanded", "false");
      });
    }
  });

  const dropdownItems = document.querySelectorAll(".has-dropdown");

  dropdownItems.forEach((item) => {
    const link = item.querySelector(".nav-link");

    link?.addEventListener("click", (e) => {
      if (window.innerWidth <= 820) {
        e.preventDefault();
        e.stopPropagation();

        const isOpen = item.classList.contains("open");
        dropdownItems.forEach((other) => {
          if (other !== item) {
            other.classList.remove("open");
            const otherLink = other.querySelector(".nav-link");
            if (otherLink) otherLink.setAttribute("aria-expanded", "false");
          }
        });

        item.classList.toggle("open", !isOpen);
        link.setAttribute("aria-expanded", String(!isOpen));

        if (!isOpen && navLinks) {
          navLinks.classList.add("open");
          menuToggle?.setAttribute("aria-expanded", "true");
          setTimeout(() => {
            item.scrollIntoView({ block: "nearest", behavior: "smooth" });
          }, 50);
        }
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) {
      closeMobileMenu();
    }
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".site-nav")) {
      closeMobileMenu();
    }
  });

  document.querySelectorAll('a[href]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        link.target === "_blank" ||
        href.startsWith("http")
      ) return;
      const parentItem = link.closest(".has-dropdown");
      if (
        parentItem &&
        link.classList.contains("nav-link") &&
        window.innerWidth <= 820
      ) {
        return;
      }

      e.preventDefault();
      document.body.classList.remove("page-ready");
      document.body.classList.add("page-exit");
      setTimeout(() => (window.location.href = href), 220);
    });
  });

  const revealItems = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  revealItems.forEach((el) => observer.observe(el));

  function showToast(message) {
    let toast = document.querySelector(".toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2800);
  }
});

emailjs.init("BMkQ3jc8PbYOLM52-");

const sendEmail = async (event) => {
  event.preventDefault();

  const form = event.target;

  try {
    await emailjs.sendForm("service_work&hands", "template_booking20", form);
    document.getElementById("results").textContent = "Sent successfully!";
    document.getElementById("results").style.color = "#159957";
    form.reset();
  } catch (error) {
    document.getElementById("results").textContent =
      "Failed to send! Please try again later.";
    document.getElementById("results").style.color = "#dc2626";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", sendEmail);
  }
});

const contactFormEmail = async (event) => {
  event.preventDefault();

  const form = event.target;

  try {
    await emailjs.sendForm("service_work&hands", "template_contact20", form);
    document.getElementById("conResults").textContent = "Sent successfully!";
    document.getElementById("conResults").style.color = "#159957";
    form.reset();
  } catch (error) {
    document.getElementById("conResults").textContent =
      "Failed to send! Please try again later.";
    document.getElementById("conResults").style.color = "#dc2626";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", contactFormEmail);
  }
});
