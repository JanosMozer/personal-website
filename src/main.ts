const path = window.location.pathname.replace(/\/$/, "") || "/";
const page =
  path.endsWith("projects.html") || path.endsWith("/projects")
    ? "projects"
    : path.endsWith("about.html") || path.endsWith("/about")
      ? "about"
      : path.endsWith("blog.html") || path.endsWith("/blog")
        ? "blog"
        : "home";

document.querySelectorAll<HTMLAnchorElement>(".nav a[data-page]").forEach((link) => {
  if (link.dataset.page === page) {
    link.classList.add("active");
  }
});

const pages = ["/", "/projects.html", "/about.html", "/blog.html"];

for (const href of pages) {
  const link = document.createElement("link");
  link.rel = "prefetch";
  link.href = href;
  document.head.appendChild(link);
}

document.querySelector(".tb-close")?.addEventListener("click", () => {
  document.querySelector(".window")?.remove();
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then((regs) => {
    for (const reg of regs) reg.unregister();
  });
  if ("caches" in window) {
    caches.keys().then((keys) => {
      for (const key of keys) caches.delete(key);
    });
  }
}
