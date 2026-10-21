"use strict";

const navbarToggler = document.querySelector(".navbar-toggler");
const navigation = document.querySelector("#primary-navigation");
const navigationLinks = document.querySelectorAll("#primary-navigation .nav-link, #primary-navigation .nav-cta a");
const backToTopButton = document.querySelector(".back-to-top-fab");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function closeNavigation() {
  if (!navbarToggler || !navigation) return;
  navbarToggler.setAttribute("aria-expanded", "false");
  navbarToggler.setAttribute("aria-label", "Buka menu navigasi");
  navigation.classList.remove("is-open");
}

navbarToggler?.addEventListener("click", () => {
  const isExpanded = navbarToggler.getAttribute("aria-expanded") === "true";
  navbarToggler.setAttribute("aria-expanded", String(!isExpanded));
  navbarToggler.setAttribute("aria-label", isExpanded ? "Buka menu navigasi" : "Tutup menu navigasi");
  navigation?.classList.toggle("is-open", !isExpanded);
});

navigationLinks.forEach((link) => link.addEventListener("click", closeNavigation));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeNavigation();
});

const revealElements = document.querySelectorAll("[data-reveal]");
if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => revealObserver.observe(element));
}

function updateBackToTop() {
  backToTopButton?.classList.toggle("is-visible", window.scrollY > 500);
}

window.addEventListener("scroll", updateBackToTop, { passive: true });
updateBackToTop();
backToTopButton?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion.matches ? "auto" : "smooth" });
});

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  const number = link.dataset.whatsappNumber?.replace(/\D/g, "");
  if (!number) {
    link.setAttribute("aria-disabled", "true");
    link.removeAttribute("target");
    link.href = "#kontak";
    return;
  }
  link.href = `https://wa.me/${number}`;
});

const fieldRules = {
  name: (value) => value.trim().length >= 2 ? "" : "Masukkan nama minimal 2 karakter.",
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? "" : "Masukkan alamat email yang valid.",
  subject: (value) => value.trim().length >= 3 ? "" : "Subjek harus berisi minimal 3 karakter.",
  message: (value) => value.trim().length >= 10 ? "" : "Pesan harus berisi minimal 10 karakter."
};

function validateField(field) {
  const errorElement = document.querySelector(`#${field.name}-error`);
  const errorMessage = fieldRules[field.name](field.value);
  field.setAttribute("aria-invalid", String(Boolean(errorMessage)));
  if (errorElement) errorElement.textContent = errorMessage;
  return !errorMessage;
}

contactForm?.querySelectorAll("input, textarea").forEach((field) => {
  field.addEventListener("blur", () => validateField(field));
  field.addEventListener("input", () => {
    if (field.hasAttribute("aria-invalid")) validateField(field);
  });
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const fields = [...contactForm.querySelectorAll("input, textarea")];
  const isValid = fields.map(validateField).every(Boolean);
  if (!isValid) {
    formStatus.textContent = "Periksa kembali kolom yang ditandai. Pesan belum dikirim.";
    formStatus.classList.remove("is-success");
    contactForm.querySelector('[aria-invalid="true"]')?.focus();
    return;
  }
  formStatus.textContent = "Input valid, tetapi pesan belum dikirim. Hubungkan formulir ini ke backend atau layanan formulir sebelum digunakan.";
  formStatus.classList.add("is-success");
});

const currentYear = document.querySelector("#current-year");
if (currentYear) currentYear.textContent = String(new Date().getFullYear());

const sectionObserver = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const activeLink = document.querySelector(`#primary-navigation .nav-link[href="#${entry.target.id}"]`);
    document.querySelectorAll("#primary-navigation .nav-link").forEach((link) => link.classList.remove("active"));
    activeLink?.classList.add("active");
  });
}, { rootMargin: "-35% 0px -55% 0px" }) : null;

document.querySelectorAll("main section[id]").forEach((section) => sectionObserver?.observe(section));
