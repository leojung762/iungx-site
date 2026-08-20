(() => {
  const root = document.documentElement;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const wipe = document.querySelector(".screen-wipe");
  const wipeLabel = wipe?.querySelector("span");
  const indicator = document.querySelector(".section-indicator");
  const indicatorNumber = indicator?.querySelector("span");
  const indicatorLabel = indicator?.querySelector("b");
  const stages = [...document.querySelectorAll(".motion-stage")];

  root.classList.add("motion-enabled");

  if (!reducedMotion) {
    root.classList.add("site-entering");
    window.setTimeout(() => root.classList.remove("site-entering"), 900);
  }

  let pointerFrame = 0;
  window.addEventListener("pointermove", (event) => {
    if (reducedMotion || pointerFrame) return;
    pointerFrame = window.requestAnimationFrame(() => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      root.style.setProperty("--pointer-x", x.toFixed(3));
      root.style.setProperty("--pointer-y", y.toFixed(3));
      pointerFrame = 0;
    });
  }, { passive: true });

  for (const card of document.querySelectorAll("[data-tilt]")) {
    card.addEventListener("pointermove", (event) => {
      if (reducedMotion) return;
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      card.style.setProperty("--tilt-x", `${(-y * 7).toFixed(2)}deg`);
      card.style.setProperty("--tilt-y", `${(x * 7).toFixed(2)}deg`);
      card.style.setProperty("--light-x", `${((x + 0.5) * 100).toFixed(1)}%`);
      card.style.setProperty("--light-y", `${((y + 0.5) * 100).toFixed(1)}%`);
    });
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    });
  }

  if ("IntersectionObserver" in window) {
    const currentObserver = new IntersectionObserver((entries) => {
      const current = entries.find((entry) => entry.isIntersecting);
      if (!current) return;
      for (const stage of stages) stage.classList.toggle("is-current", stage === current.target);
      if (indicatorNumber) indicatorNumber.textContent = current.target.dataset.index || "01";
      if (indicatorLabel) indicatorLabel.textContent = current.target.dataset.section || "IUNGX";
    }, { rootMargin: "-43% 0px -43% 0px", threshold: 0 });
    stages.forEach((stage) => currentObserver.observe(stage));
  }

  for (const anchor of document.querySelectorAll('a[href^="#"]')) {
    anchor.addEventListener("click", (event) => {
      if (reducedMotion || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target || root.classList.contains("is-navigating")) return;
      event.preventDefault();
      if (wipeLabel) wipeLabel.textContent = target.dataset.section || "IUNGX";
      root.classList.add("is-navigating");
      window.setTimeout(() => {
        target.scrollIntoView({ behavior: "auto", block: "start" });
        window.history.replaceState(null, "", anchor.getAttribute("href"));
      }, 360);
      window.setTimeout(() => root.classList.remove("is-navigating"), 820);
    });
  }
})();
