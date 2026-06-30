/* ════════════════════════════════════════════════
   Formation Bourse BVMAC — interactions
   ════════════════════════════════════════════════ */
(function () {
  "use strict";

  // ─────────────────────────────────────────────
  //  Ticker tape (bande de cotation)
  // ─────────────────────────────────────────────
  const TICKERS = [
    { s: "BGFI", p: "8 750", c: "+2,4%", up: true },
    { s: "SONATEL", p: "19 200", c: "+1,1%", up: true },
    { s: "ORAGROUP", p: "4 130", c: "-0,8%", up: false },
    { s: "SAFACAM", p: "57 000", c: "+3,2%", up: true },
    { s: "TOTAL GABON", p: "16 480", c: "+0,6%", up: true },
    { s: "SOCAPALM", p: "31 900", c: "-1,3%", up: false },
    { s: "BOA CI", p: "5 615", c: "+1,9%", up: true },
    { s: "SEMC", p: "92 300", c: "+4,1%", up: true },
    { s: "ECOBANK", p: "16,5", c: "-0,5%", up: false },
    { s: "PALMCI", p: "7 200", c: "+2,0%", up: true },
    { s: "DANGOTE IPO", p: "À VENIR 2026", c: "40–50 Md $", up: true, big: true },
    { s: "BVMAC INDEX", p: "1 248,7", c: "+1,5%", up: true, big: true }
  ];
  const track = document.getElementById("tickerTrack");
  if (track) {
    function buildItem(t) {
      const el = document.createElement("span");
      el.className = "tk" + (t.big ? " tk-big" : "");
      el.innerHTML =
        '<b class="tk-sym">' + t.s + '</b>' +
        '<span class="tk-price">' + t.p + '</span>' +
        '<span class="tk-chg ' + (t.up ? "up" : "down") + '">' +
          (t.up ? "▲" : "▼") + " " + t.c +
        '</span>';
      return el;
    }
    // two identical groups for a seamless loop
    for (let g = 0; g < 2; g++) {
      const group = document.createElement("div");
      group.className = "ticker-group";
      TICKERS.forEach(function (t) { group.appendChild(buildItem(t)); });
      track.appendChild(group);
    }
  }

  // ─────────────────────────────────────────────
  //  FAQ data + render (accordion)
  // ─────────────────────────────────────────────
  const FAQ = [
    { q: "Faut-il déjà avoir investi pour suivre cette formation ?", a: "Non. La formation est construite pour accompagner tout le monde — du débutant complet à l'investisseur avec quelques bases. Nous partons des fondamentaux et progressons module par module." },
    { q: "Est-ce que je peux investir depuis l'étranger (diaspora) ?", a: "Oui. Umdeny Capital accompagne aussi bien les personnes basées sur le continent que dans la diaspora. Nous vous guidons sur les démarches spécifiques à votre pays de résidence." },
    { q: "Combien de temps faut-il pour suivre la formation ?", a: "La formation est disponible en ligne, à votre rythme. Comptez environ 2 à 4 heures par semaine selon votre disponibilité. Il n'y a pas de délai imposé." },
    { q: "Quand les modules sur la BRVM, le Maroc et les autres bourses seront-ils disponibles ?", a: "Ces modules seront ajoutés progressivement en fonction des développements de marché. Dès qu'ils sont publiés, ils sont automatiquement accessibles dans votre espace — sans frais supplémentaires." },
    { q: "La décote de 5% s'applique à tous les investissements ?", a: "La décote pouvant aller jusqu'à 5% s'applique aux investissements réalisés via Umdeny Capital après la formation, selon les conditions de marché et le type de titre souscrit. Notre équipe vous précise les modalités au cas par cas." },
    { q: "Quelle est la différence entre la formation seule et l'accompagnement ?", a: "La formation seule vous donne accès à l'intégralité des modules, des ressources et des outils pour investir de manière autonome. L'accompagnement ajoute un suivi personnalisé par notre équipe à chaque étape — analyse de votre portefeuille, sessions dédiées, validation de vos décisions d'investissement." },
    { q: "Comment payer ?", a: "Nous acceptons Mobile Money (MTN, Orange Money), virement bancaire et crypto (USDT), ainsi que le paiement en ligne sécurisé. Écrivez-nous à formation@umdeny.com pour recevoir les instructions de paiement." },
    { q: "Est-ce que je peux poser des questions pendant la formation ?", a: "Oui. Les apprenants avec accompagnement bénéficient d'un accès direct à notre équipe. Les apprenants formation seule peuvent nous contacter via vireel@umdeny.com pour les questions générales." },
    { q: "Est-ce que j'accède vraiment à la formation tout de suite après le paiement ?", a: "Oui, l'accès est automatique et immédiat. Dès que votre paiement est confirmé par notre équipe, vous recevez un email depuis formation@umdeny.com avec vos identifiants, et vous êtes redirigé directement vers votre espace de formation." }
  ];

  const faqList = document.getElementById("faqList");
  FAQ.forEach(function (item, i) {
    const qa = document.createElement("div");
    qa.className = "qa";
    qa.innerHTML =
      '<button class="qa-q" aria-expanded="false">' +
        '<span>' + item.q + '</span>' +
        '<span class="qa-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></span>' +
      '</button>' +
      '<div class="qa-a"><div class="qa-a-inner">' + item.a + '</div></div>';
    faqList.appendChild(qa);

    const btn = qa.querySelector(".qa-q");
    const ans = qa.querySelector(".qa-a");
    btn.addEventListener("click", function () {
      const isOpen = qa.classList.contains("open");
      // close others
      faqList.querySelectorAll(".qa.open").forEach(function (o) {
        if (o !== qa) { o.classList.remove("open"); o.querySelector(".qa-a").style.maxHeight = null; o.querySelector(".qa-q").setAttribute("aria-expanded", "false"); }
      });
      if (isOpen) {
        qa.classList.remove("open"); ans.style.maxHeight = null; btn.setAttribute("aria-expanded", "false");
      } else {
        qa.classList.add("open"); ans.style.maxHeight = ans.scrollHeight + "px"; btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  // ─────────────────────────────────────────────
  //  Animated counters
  // ─────────────────────────────────────────────
  function formatNum(n) {
    return Math.round(n).toLocaleString("fr-FR").replace(/ /g, " ");
  }
  function animateCounter(el) {
    const target = parseFloat(el.getAttribute("data-count"));
    const suffix = el.getAttribute("data-suffix") || "";
    const dur = 1600;
    const start = performance.now();
    function tick(now) {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.innerHTML = formatNum(target * eased) + '<span class="suffix">' + suffix + "</span>";
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  const counters = document.querySelectorAll("[data-count]");
  const cObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { animateCounter(e.target); cObserver.unobserve(e.target); }
    });
  }, { threshold: 0.4 });
  counters.forEach(function (c) { cObserver.observe(c); });

  // ─────────────────────────────────────────────
  //  Reveal on scroll
  // ─────────────────────────────────────────────
  const rObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); rObserver.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach(function (el) { rObserver.observe(el); });

  // ─────────────────────────────────────────────
  //  Currency switch (USD / XAF)
  // ─────────────────────────────────────────────
  const priceSwitch = document.getElementById("priceSwitch");
  function setCurrency(cur) {
    document.querySelectorAll("[data-usd]").forEach(function (el) {
      const val = el.getAttribute("data-" + cur);
      if (val != null) el.textContent = val;
    });
    priceSwitch.querySelectorAll("button").forEach(function (b) {
      b.classList.toggle("on", b.getAttribute("data-cur") === cur);
    });
  }
  priceSwitch.querySelectorAll("button").forEach(function (b) {
    b.addEventListener("click", function () { setCurrency(b.getAttribute("data-cur")); });
  });

  // ─────────────────────────────────────────────
  //  Burger (mobile) → smooth scroll to sections list
  // ─────────────────────────────────────────────
  const burger = document.getElementById("burger");
  if (burger) {
    burger.addEventListener("click", function () {
      document.getElementById("programme").scrollIntoView({ behavior: "smooth" });
    });
  }

  // ─────────────────────────────────────────────
  //  Modal (inscription)
  // ─────────────────────────────────────────────
  const overlay = document.getElementById("overlay");
  const modal = document.getElementById("modal");
  const form = document.getElementById("leadForm");
  const planPick = document.getElementById("planPick");
  let lastFocus = null;
  let chosenPlan = "formation";

  function selectPlan(plan) {
    chosenPlan = plan === "accompagnement" ? "accompagnement" : "formation";
    planPick.querySelectorAll(".pp").forEach(function (p) {
      p.classList.toggle("on", p.getAttribute("data-plan") === chosenPlan);
    });
  }
  planPick.querySelectorAll(".pp").forEach(function (p) {
    p.addEventListener("click", function () { selectPlan(p.getAttribute("data-plan")); });
  });

  function openModal(plan) {
    if (plan) selectPlan(plan);
    lastFocus = document.activeElement;
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
    setTimeout(function () { const i = form.querySelector('input[name="name"]'); if (i) i.focus(); }, 120);
  }
  function closeModal() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }
  document.querySelectorAll("[data-open-modal]").forEach(function (btn) {
    btn.addEventListener("click", function () { openModal(btn.getAttribute("data-plan")); });
  });
  document.getElementById("closeForm").addEventListener("click", closeModal);
  document.getElementById("closeSuccess").addEventListener("click", function () {
    closeModal();
    setTimeout(function () { modal.classList.remove("done"); form.reset(); selectPlan("formation"); }, 300);
  });
  overlay.addEventListener("click", function (e) { if (e.target === overlay) closeModal(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && overlay.classList.contains("open")) closeModal(); });

  // ─────────────────────────────────────────────
  //  Validation + submit
  // ─────────────────────────────────────────────
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  function setInvalid(id, on) { document.getElementById(id).classList.toggle("invalid", on); }

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    let ok = true;
    if (name.length < 2) { setInvalid("f-name", true); ok = false; } else setInvalid("f-name", false);
    if (!EMAIL_RE.test(email)) { setInvalid("f-email", true); ok = false; } else setInvalid("f-email", false);
    if (!ok) return;

    const lead = {
      plan: chosenPlan,
      product_id: chosenPlan === "accompagnement" ? "FORMATION_BOURSE_ACCOMPAGNEMENT" : "FORMATION_BOURSE_BVMAC",
      amount: chosenPlan === "accompagnement" ? 1000 : 100,
      name: name,
      email: email,
      phone: form.phone.value.trim(),
      country: form.country.value.trim(),
      currency: form.currency.value
    };

    const btn = document.getElementById("submitBtn");
    btn.disabled = true;
    btn.querySelector("span").textContent = "Envoi en cours…";

    try {
      await submitLead(lead);
    } catch (err) {
      console.warn("[Vireel] submitLead failed, stored locally:", err);
    }

    // local fallback so no prospect is ever lost if the API call fails
    try {
      const store = JSON.parse(localStorage.getItem("vireel_inscriptions") || "[]");
      store.push(Object.assign({ ts: new Date().toISOString() }, lead));
      localStorage.setItem("vireel_inscriptions", JSON.stringify(store));
    } catch (_) {}

    document.getElementById("okEmail").textContent = email;
    document.getElementById("okPlan").textContent = chosenPlan === "accompagnement" ? "Formation + Accompagnement" : "Formation Bourse BVMAC";
    modal.classList.add("done");
    btn.disabled = false;
    btn.querySelector("span").textContent = "Envoyer ma demande d'inscription";
  });

  async function submitLead(lead) {
    const res = await fetch("/api/subscribe-formation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead)
    });
    if (!res.ok) throw new Error("HTTP " + res.status);
    return res.json();
  }
})();
