const menuButton = document.querySelector(".menu-icon");
const siteNav = document.querySelector(".site-nav");
const menuIcon = menuButton?.querySelector("img");

if (menuButton && siteNav && menuIcon) {
  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
    siteNav.classList.remove("is-open");
    menuIcon.src = "./images/icon-hamburger.svg";
    menuIcon.alt = "";
    document.body.classList.remove("nav-open");
  };

  const openMenu = () => {
    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "Close navigation menu");
    siteNav.classList.add("is-open");
    menuIcon.src = "./images/icon-close.svg";
    menuIcon.alt = "";
    document.body.classList.add("nav-open");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      closeMenu();
      return;
    }

    openMenu();
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target === siteNav) {
      closeMenu();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
}
