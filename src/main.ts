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
