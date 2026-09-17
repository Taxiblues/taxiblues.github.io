(() => {
  const pages = [
    ["index.html", "Dal gioco al film"],
    ["il-gioco-del-cinema.html", "Il gioco del cinema"],
    ["giocare-immaginare-recitare.html", "Giocare. Immaginare. Recitare."],
    ["il-futuro.html", "Il futuro ha nuovi protagonisti"],
    ["corpo-voce-identita.html", "Corpo. Voce. Identità."],
    ["corso-recitazione.html", "Corso 2026/2027"],
    ["non-promettiamo-fama.html", "Costruiamo attori"],
    ["risorse-umane.html", "Risorse Umane"],
    ["info-iscrizioni.html", "Info e iscrizioni"]
  ];

  const body = document.body;
  const menu = document.querySelector(".site-menu");
  const toggle = document.querySelector(".menu-toggle");
  const current = Number(body.dataset.page || 0);

  menu.innerHTML = pages.map(([url, label], index) => {
    const active = index === current ? ' aria-current="page"' : "";
    return `<a href="${url}" data-number="${String(index + 1).padStart(2, "0")}"${active}>${label}</a>`;
  }).join("");

  const setMenu = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.querySelector("b").textContent = open ? "Chiudi il menu" : "Apri il menu";
    menu.classList.toggle("is-open", open);
    body.classList.toggle("menu-open", open);
    if (open) menu.querySelector("a")?.focus();
  };

  toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));

  document.addEventListener("keydown", (event) => {
    const menuOpen = toggle.getAttribute("aria-expanded") === "true";
    if (event.key === "Escape" && menuOpen) return setMenu(false);
    if (menuOpen || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.key === "ArrowLeft" && body.dataset.prev) location.href = body.dataset.prev;
    if (event.key === "ArrowRight" && body.dataset.next) location.href = body.dataset.next;
  });
})();
