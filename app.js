function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Load footer only if NOT on contact page
document.addEventListener("DOMContentLoaded", () => {
  const isContactPage = window.location.pathname.includes("1");

  if (!isContactPage) {
    const footerTarget = document.getElementById("footer-placeholder");

    if (footerTarget) {
      fetch("footer.html")
        .then(res => {
          if (!res.ok) throw new Error("Footer fetch failed");
          return res.text();
        })
        .then(html => {
          footerTarget.innerHTML = html;
        })
        .catch(err => console.error("Could not load footer:", err));
    } else {
      console.warn("No #footer-placeholder found.");
    }
  }
});
// ===== Reset Overlay Animation Loop =====
function restartOverlayAnimation() {
  const overlay = document.getElementById("videoOverlay");
  if (overlay) {
    const clone = overlay.cloneNode(true);
    overlay.parentNode.replaceChild(clone, overlay);
  }
}

// Repeat every 25 seconds (adjust as needed)
setInterval(restartOverlayAnimation, 25000);
