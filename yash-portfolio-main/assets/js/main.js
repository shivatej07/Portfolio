var animatedspan = document.querySelector(".animated");
var cursor = document.querySelector(".cursor");

var words = [
  "Competitive Programmer.",
  "Web Developer.",
  "Software Developer.",
];
var typingdelay = 200;
var erasingdelay = 100;
var newtextdelay = 2000;
var wordsindex = 0;
var charindex = 0;

function type() {
  if (charindex < words[wordsindex].length) {
    if (cursor.classList.contains("blink")) {
      cursor.classList.remove("blink");
    }
    animatedspan.textContent += words[wordsindex].charAt(charindex);
    charindex++;
    setTimeout(type, typingdelay);
  } else {
    cursor.classList.add("blink");
    setTimeout(erase, newtextdelay);
  }
}
function erase() {
  if (charindex > 0) {
    if (cursor.classList.contains("blink")) {
      cursor.classList.remove("blink");
    }
    animatedspan.textContent = words[wordsindex].substring(0, charindex - 1);
    charindex--;
    setTimeout(erase, erasingdelay);
  } else {
    cursor.classList.add("blink");
    wordsindex++;
    if (wordsindex >= words.length) {
      wordsindex = 0;
    }
    setTimeout(type, typingdelay);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, newtextdelay);
});
() => {
  setTimeout(type, newtextdelay);
};

// sticky header

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 300);
});

//  toggle theme

const toggleButton = document.querySelector("[data-toggle-theme-btn]"),
  icon = toggleButton.querySelector("i");

toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  // set in local storage
  localStorage.setItem("theme", document.body.classList.contains("dark-theme"));
  // check local storage for theme
  if (localStorage.getItem("theme") === "true") {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
});

// get theme settings

if (localStorage.getItem("theme") === "true") {
  document.body.classList.add("dark-theme");
}

// Smooth scroll

const links = document.querySelectorAll("a[href^='#']");

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);

    const startPosition = window.pageYOffset;
    const targetPosition = targetElement.offsetTop - "20";
    const distance = targetPosition - startPosition;

    const duration = 750;
    let start = null;

    function animateScroll(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;

      if (progress > duration) progress = duration;

      const easeProgress = Math.easeInOutQuad(progress, 0, 1, duration);
      window.scrollTo(0, startPosition + distance * easeProgress);

      if (progress < duration) {
        requestAnimationFrame(animateScroll);
      }
    }

    requestAnimationFrame(animateScroll);
  });
});

// Easing function
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

// goto top show after 1000px scroll

window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    document.querySelector(".goto-top").classList.add("active");
  } else {
    document.querySelector(".goto-top").classList.remove("active");
  }
});

// toggle the "active" class on navigation links based on the scroll position
document.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2
    ) {
      // Remove active class from all links
      navLinks.forEach((link) => link.classList.remove("active"));
      // Add active class to the corresponding link
      const activeLink = document.querySelector(
        `.nav-link[href="#${section.id}"]`
      );
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
});

// toggle menu

const menu = document.querySelector("[data-menu-lists]");
const toggleMenuBtn = document.querySelector("[data-toggle-menu-btn]");

toggleMenuBtn.addEventListener("click", function () {
  menu.classList.toggle("active");
  document.body.classList.toggle("active");
});

document.addEventListener("scroll", function () {
  menu.classList.remove("active");
  document.body.classList.remove("active");
});
