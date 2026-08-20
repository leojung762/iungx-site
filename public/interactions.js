(() => {
  const root = document.documentElement;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const wipe = document.querySelector(".screen-wipe");
  const wipeLabel = wipe?.querySelector("span");
  const indicator = document.querySelector(".section-indicator");
  const indicatorNumber = indicator?.querySelector("span");
  const indicatorLabel = indicator?.querySelector("b");
  const stages = [...document.querySelectorAll(".motion-stage")];
  const languageSwitch = document.querySelector(".language-switch");
  let currentStage = stages[0];

  const applyLanguage = (language, persist = true) => {
    const lang = language === "pt" ? "pt" : "en";
    root.lang = lang === "pt" ? "pt-BR" : "en";
    root.dataset.language = lang;

    for (const element of document.querySelectorAll("[data-en][data-pt]")) {
      element.textContent = element.dataset[lang];
    }
    for (const element of document.querySelectorAll("[data-aria-en][data-aria-pt]")) {
      element.setAttribute("aria-label", element.dataset[`aria${lang === "pt" ? "Pt" : "En"}`]);
    }
    for (const image of document.querySelectorAll("[data-alt-en][data-alt-pt]")) {
      image.alt = image.dataset[`alt${lang === "pt" ? "Pt" : "En"}`];
    }
    for (const link of document.querySelectorAll("[data-href-en][data-href-pt]")) {
      link.href = link.dataset[`href${lang === "pt" ? "Pt" : "En"}`];
    }
    for (const stage of stages) {
      stage.dataset.section = stage.dataset[`section${lang === "pt" ? "Pt" : "En"}`] || "IUNGX";
    }
    for (const option of document.querySelectorAll("[data-lang-option]")) {
      option.classList.toggle("is-active", option.dataset.langOption === lang);
    }
    if (languageSwitch) {
      languageSwitch.setAttribute("aria-pressed", String(lang === "pt"));
      languageSwitch.setAttribute("aria-label", lang === "pt" ? "Switch language to English" : "Mudar idioma para português");
    }
    if (indicatorLabel && currentStage) indicatorLabel.textContent = currentStage.dataset.section || "IUNGX";
    document.title = lang === "pt" ? "IungX — Tecnologia aplicada ao negócio" : "IungX — Technology built for business";
    if (persist) window.localStorage.setItem("iungx-language", lang);
  };

  let savedLanguage = "en";
  try {
    savedLanguage = window.localStorage.getItem("iungx-language") || "en";
  } catch {}
  applyLanguage(savedLanguage, false);
  languageSwitch?.addEventListener("click", () => {
    applyLanguage(root.dataset.language === "en" ? "pt" : "en");
  });

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
      currentStage = current.target;
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
