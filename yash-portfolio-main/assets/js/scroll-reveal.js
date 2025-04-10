// Initialize ScrollReveal with default settings

ScrollReveal({
  distance: "50px",
  duration: 2500,
  delay: 100,
});

ScrollReveal().reveal(
  ".home-texts h1,.section-texts .alpha-text , .section-texts .text",
  {
    delay: 500,
    origin: "top",
  }
);

ScrollReveal().reveal(".home-texts h3 , .home-btn , .contact-right-col", {
  delay: 600,
  origin: "bottom",
});

ScrollReveal().reveal(".social-lists a , .contact-left-col li", {
  delay: 500,
  origin: "left",
  interval: 200,
});

ScrollReveal().reveal(".hero-image-wrapper , .image-aria, .cv-wrapper", {
  delay: 500,
  origin: "bottom",
});
ScrollReveal().reveal(".cv-wrapper", {
  delay: 2000,
  origin: "bottom",
});

ScrollReveal().reveal(".about-texts", {
  delay: 600,
  origin: "top",
});

ScrollReveal().reveal(".edu-label , .contact-left-col h2", {
  delay: 500,
  origin: "top",
});

ScrollReveal().reveal(
  ".coding-profile , .education-list,.skills-lists li,.tools-lists li , .project-card,.footer-links li",
  {
    delay: 500,
    origin: "bottom",
    interval: 200,
  }
);

ScrollReveal().reveal(".footer-container p", {
  delay: 500,
  origin: "top",
});

ScrollReveal().reveal(".home-container .home-btn", {
  delay: 500,
  origin: "bottom",
});
