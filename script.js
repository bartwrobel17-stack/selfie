(() => {
  const menuSearch = document.querySelector("#menu-search");
  const filters = [...document.querySelectorAll(".filter")];
  const dishes = [...document.querySelectorAll(".dish")];
  const resultCount = document.querySelector("#result-count");
  const emptyState = document.querySelector("#empty-state");
  let activeFilter = "all";
  function filterMenu() {
    const query = (menuSearch?.value || "").trim().toLocaleLowerCase("pl");
    let visible = 0;
    dishes.forEach((dish) => {
      const matchesCategory = activeFilter === "all" || dish.dataset.category === activeFilter;
      const matchesText = (dish.dataset.search + " " + dish.textContent).toLocaleLowerCase("pl").includes(query);
      const show = matchesCategory && matchesText;
      dish.hidden = !show;
      if (show) visible++;
    });
    if (resultCount) resultCount.textContent = visible + (visible === 1 ? " PROPOZYCJA MENU" : " INSPIRACJE MENU");
    if (emptyState) emptyState.hidden = visible !== 0;
  }
  filters.forEach(button => button.addEventListener("click", () => {
    activeFilter = button.dataset.filter || "all";
    filters.forEach(filter => {
      const active = filter === button;
      filter.classList.toggle("active", active);
      filter.setAttribute("aria-pressed", String(active));
    });
    filterMenu();
  }));
  menuSearch?.addEventListener("input", filterMenu);

  const mobileButton = document.querySelector(".mobile-menu");
  const nav = document.querySelector(".nav");
  mobileButton?.addEventListener("click", () => {
    const open = mobileButton.getAttribute("aria-expanded") !== "true";
    mobileButton.setAttribute("aria-expanded", String(open));
    mobileButton.setAttribute("aria-label", open ? "Zamknij nawigację" : "Otwórz nawigację");
    mobileButton.textContent = open ? "×" : "☰";
    nav?.classList.toggle("open", open);
  });
  nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    mobileButton?.setAttribute("aria-expanded", "false");
    if (mobileButton) { mobileButton.textContent = "☰"; mobileButton.setAttribute("aria-label", "Otwórz nawigację"); }
  }));

  document.querySelectorAll(".faq-item > button").forEach(button => button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const wasOpen = button.getAttribute("aria-expanded") === "true";
    document.querySelectorAll(".faq-item > button").forEach(other => {
      other.setAttribute("aria-expanded", "false");
      other.querySelector("b").textContent = "+";
      other.closest(".faq-item").querySelector("p").hidden = true;
    });
    if (!wasOpen && item) {
      button.setAttribute("aria-expanded", "true");
      button.querySelector("b").textContent = "−";
      item.querySelector("p").hidden = false;
    }
  }));
  document.querySelectorAll(".faq-item > button").forEach(button => {
    const open = button.getAttribute("aria-expanded") === "true";
    button.closest(".faq-item").querySelector("p").hidden = !open;
  });

  const lightbox = document.querySelector("#lightbox");
  const lightboxImage = lightbox?.querySelector("img");
  const lightboxCaption = lightbox?.querySelector("p");
  const galleryItems = [...document.querySelectorAll(".gallery-item")];
  let photoIndex = 0;
  let previousFocus = null;
  function showPhoto(index) {
    if (!galleryItems.length || !lightbox || !lightboxImage || !lightboxCaption) return;
    photoIndex = (index + galleryItems.length) % galleryItems.length;
    const button = galleryItems[photoIndex];
    lightboxImage.src = button.dataset.image || "";
    lightboxImage.alt = button.dataset.caption || "Zdjęcie z galerii";
    lightboxCaption.textContent = (button.dataset.caption || "Galeria") + " · " + (photoIndex + 1) + " / " + galleryItems.length;
  }
  function closeLightbox() {
    if (!lightbox || lightbox.hidden) return;
    lightbox.hidden = true;
    document.body.classList.remove("no-scroll");
    previousFocus?.focus();
  }
  galleryItems.forEach((button, index) => button.addEventListener("click", () => {
    if (!lightbox) return;
    previousFocus = button;
    showPhoto(index);
    lightbox.hidden = false;
    document.body.classList.add("no-scroll");
    lightbox.querySelector(".lightbox-close")?.focus();
  }));
  lightbox?.querySelector(".lightbox-close")?.addEventListener("click", closeLightbox);
  lightbox?.querySelector(".lightbox-prev")?.addEventListener("click", () => showPhoto(photoIndex - 1));
  lightbox?.querySelector(".lightbox-next")?.addEventListener("click", () => showPhoto(photoIndex + 1));
  lightbox?.addEventListener("click", event => { if (event.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", event => {
    if (!lightbox || lightbox.hidden) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") showPhoto(photoIndex - 1);
    if (event.key === "ArrowRight") showPhoto(photoIndex + 1);
  });
  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());
  filterMenu();
})();