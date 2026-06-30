import { useState, useEffect, useRef } from 'react';
import logoLight from '../../../public/vireel-logo-light.png';
import logoDark from '../../../public/vireel-logo-dark.png';
import './formation-bourse-bvmac.css';
import {
  TICKERS, PAIN_POINTS, NEWS, WARN_STATS, GUARANTEES, FORMATS, MODULES,
  UPCOMING, PRICING_PLANS, PAYMENT_FLOW, TRUST_PARTNERS, TRUST_REGULATIONS,
  TESTIMONIALS, FAQ,
} from './content.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* ─── Small reusable bits ─── */

function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { setInView(true); obs.unobserve(e.target); }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${inView ? 'in' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

function Counter({ target, suffix = '' }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const dur = 1600;
          const start = performance.now();
          function tick(now) {
            const p = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          obs.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);
  return (
    <div className="num" ref={ref}>
      {val.toLocaleString('fr-FR')}<span className="suffix">{suffix}</span>
    </div>
  );
}

function IconCheck() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>;
}
function IconCross() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>;
}

/* ─── Sections ─── */

function UrgencyBar() {
  return (
    <div className="urgency">
      <div className="wrap">
        <span className="blip"></span>
        <span className="u-txt"><b>Lancement officiel</b> — Places limitées pour la première promotion</span>
        <a className="u-cta" href="#tarifs">Réserver ma place →</a>
      </div>
    </div>
  );
}

function Nav({ onOpenModal }) {
  function scrollToProgramme() {
    document.getElementById('programme')?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <nav className="nav">
      <div className="wrap">
        <a href="https://vireel.umdeny.com" className="brand" aria-label="VIREEL — accueil">
          <img className="brand-logo" src={logoLight} alt="VIREEL" />
        </a>
        <div className="nav-links">
          <a href="#apprendre">Ce que vous apprendrez</a>
          <a href="#maintenant">Pourquoi maintenant</a>
          <a href="#programme">Programme</a>
          <a href="#tarifs">Tarifs</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="nav-right">
          <button className="btn btn-orange" onClick={() => onOpenModal()}>S'inscrire maintenant</button>
          <button className="nav-burger" aria-label="Menu" onClick={scrollToProgramme}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero({ onOpenModal }) {
  return (
    <header className="hero">
      <div className="hero-bg"></div>
      <div className="hero-chart" aria-hidden="true">
        <svg viewBox="0 0 1200 500" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E8500A" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#E8500A" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1">
            <line x1="0" y1="125" x2="1200" y2="125" /><line x1="0" y1="250" x2="1200" y2="250" /><line x1="0" y1="375" x2="1200" y2="375" />
          </g>
          <path d="M0,380 L80,360 L160,390 L240,320 L320,340 L400,270 L480,300 L560,230 L640,250 L720,180 L800,200 L880,130 L960,160 L1040,90 L1120,120 L1200,60 L1200,500 L0,500 Z" fill="url(#cg)" />
          <path d="M0,380 L80,360 L160,390 L240,320 L320,340 L400,270 L480,300 L560,230 L640,250 L720,180 L800,200 L880,130 L960,160 L1040,90 L1120,120 L1200,60" fill="none" stroke="#E8500A" strokeWidth="2.5" strokeOpacity="0.85" />
        </svg>
      </div>
      <svg className="hero-candles" viewBox="0 0 1200 360" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
        <g className="cs up"><line x1="60" y1="150" x2="60" y2="300" /><rect x="50" y="190" width="20" height="80" /></g>
        <g className="cs down"><line x1="130" y1="170" x2="130" y2="320" /><rect x="120" y="210" width="20" height="70" /></g>
        <g className="cs up"><line x1="200" y1="120" x2="200" y2="285" /><rect x="190" y="160" width="20" height="95" /></g>
        <g className="cs up"><line x1="270" y1="100" x2="270" y2="255" /><rect x="260" y="135" width="20" height="90" /></g>
        <g className="cs down"><line x1="340" y1="130" x2="340" y2="270" /><rect x="330" y="160" width="20" height="65" /></g>
        <g className="cs up"><line x1="410" y1="90" x2="410" y2="240" /><rect x="400" y="120" width="20" height="95" /></g>
        <g className="cs up"><line x1="480" y1="70" x2="480" y2="215" /><rect x="470" y="100" width="20" height="90" /></g>
        <g className="cs down"><line x1="550" y1="95" x2="550" y2="235" /><rect x="540" y="125" width="20" height="70" /></g>
        <g className="cs up"><line x1="620" y1="60" x2="620" y2="205" /><rect x="610" y="90" width="20" height="95" /></g>
        <g className="cs up"><line x1="690" y1="45" x2="690" y2="180" /><rect x="680" y="72" width="20" height="88" /></g>
        <g className="cs down"><line x1="760" y1="70" x2="760" y2="205" /><rect x="750" y="98" width="20" height="65" /></g>
        <g className="cs up"><line x1="830" y1="40" x2="830" y2="175" /><rect x="820" y="66" width="20" height="92" /></g>
        <g className="cs up"><line x1="900" y1="30" x2="900" y2="160" /><rect x="890" y="55" width="20" height="88" /></g>
        <g className="cs down"><line x1="970" y1="55" x2="970" y2="185" /><rect x="960" y="82" width="20" height="62" /></g>
        <g className="cs up"><line x1="1040" y1="25" x2="1040" y2="150" /><rect x="1030" y="48" width="20" height="90" /></g>
        <g className="cs up"><line x1="1110" y1="20" x2="1110" y2="140" /><rect x="1100" y="42" width="20" height="85" /></g>
      </svg>
      <div className="wrap">
        <div className="hero-inner">
          <span className="eyebrow light">Formation Bourse · BVMAC · Afrique Centrale</span>
          <h1>Apprenez à investir en Bourse en Afrique Centrale — avec les <span className="hl">mêmes méthodes que les professionnels.</span></h1>
          <p className="chapo">La BVMAC s'ouvre. <b>BGFI vient d'entrer en bourse.</b> Dangote prépare la plus grande IPO de l'histoire africaine. Les opportunités sont là — documentées, réelles, accessibles. Mais sans méthode, sans formation, sans accompagnement sérieux : <b>vous risquez votre capital.</b> Cette formation vous donne les outils pour saisir ces opportunités avec confiance — et les éviter quand elles sont des pièges.</p>
          <div className="hero-cta">
            <button className="btn btn-orange btn-lg" onClick={() => onOpenModal()}>
              Je m'inscris maintenant
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
            </button>
            <a className="btn btn-outline-light btn-lg" href="#programme">Voir le programme complet</a>
          </div>
          <div className="hero-counters">
            <div className="counter"><Counter target={1000000} suffix=" USD+" /><div className="lbl">de capital géré depuis 2019</div></div>
            <div className="counter"><Counter target={10} suffix="+" /><div className="lbl">années cumulées d'expérience</div></div>
            <div className="counter"><Counter target={10} suffix="+" /><div className="lbl">pays couverts · Afrique &amp; diaspora</div></div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {[0, 1].map((g) => (
          <div className="ticker-group" key={g}>
            {TICKERS.map((t, i) => (
              <span className={`tk${t.big ? ' tk-big' : ''}`} key={i}>
                <b className="tk-sym">{t.s}</b>
                <span className="tk-price">{t.p}</span>
                <span className={`tk-chg ${t.up ? 'up' : 'down'}`}>{t.up ? '▲' : '▼'} {t.c}</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function PainSection() {
  return (
    <section className="section" id="apprendre">
      <div className="wrap">
        <div className="center-head">
          <span className="eyebrow center">Vous reconnaissez-vous ?</span>
          <h2 className="sec-title">Est-ce que l'une de ces situations vous ressemble&nbsp;?</h2>
        </div>
        <div className="pain-grid">
          {PAIN_POINTS.map((p, i) => (
            <Reveal as="div" className="pain" key={p.num}>
              <span className="qmark">{p.num}</span>
              <span className="pic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {i === 0 && <><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></>}
                  {i === 1 && <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></>}
                  {i === 2 && <><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></>}
                </svg>
              </span>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal as="p" className="pain-link">Si vous vous reconnaissez dans l'une de ces situations — <span className="accent">cette formation a été construite pour vous.</span></Reveal>
      </div>
    </section>
  );
}

function WhyNowSection() {
  return (
    <section className="section why-now" id="maintenant">
      <div className="wrap">
        <div className="center-head">
          <span className="eyebrow center">Pourquoi maintenant</span>
          <h2 className="sec-title">Le marché boursier africain entre dans une nouvelle ère. Les premiers positionnés en profiteront.</h2>
          <p className="sec-sub">Voici ce qui se passe en ce moment sur les marchés africains — et pourquoi attendre coûte de l'argent.</p>
        </div>
        <div className="news-grid">
          {NEWS.map((n) => (
            <Reveal as="article" className="news" key={n.title}>
              <div className="news-top"></div>
              <div className="news-body">
                <span className="tag">{n.tag}</span>
                <div className="news-spark">
                  <svg viewBox="0 0 120 32" preserveAspectRatio="none"><polyline points={n.points} /></svg>
                  <span className="spark-pill up">{n.pill}</span>
                </div>
                <h3>{n.title}</h3>
                <p>{n.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal as="div" className="callout">
          <span className="ci">💡</span>
          <p>Il y a clairement de quoi réaliser de grosses plus-values à l'avenir sur les marchés africains. Mais saisir ces opportunités demande une chose : savoir comment naviguer dans ces eaux-là.</p>
        </Reveal>
      </div>
    </section>
  );
}

function WarningSection() {
  return (
    <section className="section warning">
      <div className="wrap">
        <div className="center-head">
          <span className="eyebrow center">La réalité, sans filtre</span>
          <h2 className="sec-title">Ces mêmes marchés détruisent du capital chaque jour. Voici pourquoi.</h2>
          <p className="sec-sub">Avant de vous parler de rendements, il faut vous parler de réalité.</p>
        </div>
        <div className="warn-grid">
          {WARN_STATS.map((w) => (
            <Reveal as="div" className={`warn ${w.truth ? 'truth' : ''}`} key={w.title}>
              <div className="stat">{w.stat}</div>
              <div className="w-body">
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal as="div" className="warn-quote">
          <p>La formation n'est pas un luxe. C'est votre <span className="accent">première ligne de défense</span> — et votre meilleure stratégie de rendement.</p>
        </Reveal>
      </div>
    </section>
  );
}

const GUARANTEE_ICONS = [
  <><path key="g1a" d="M3 21h18" /><path key="g1b" d="M5 21V8l7-5 7 5v13" /><path key="g1c" d="M9 21v-6h6v6" /></>,
  <><path key="g2a" d="M21 8 13 16l-4-4-6 6" /><path key="g2b" d="M16 8h5v5" /></>,
  <><path key="g3a" d="M21 12a9 9 0 1 1-9-9" /><path key="g3b" d="M12 7v5l3 2" /><path key="g3c" d="M16 3h5v5" /></>,
];

function SolutionSection() {
  return (
    <section className="section solution">
      <div className="wrap">
        <div className="center-head">
          <span className="eyebrow center">La solution</span>
          <h2 className="sec-title">Formation Bourse BVMAC — Investir en Bourse en Afrique Centrale</h2>
          <p className="sec-sub">Construite par des praticiens actifs. Adaptée aux réalités africaines. Accompagnée de A à Z.</p>
        </div>
        <div className="guarantee-grid">
          {GUARANTEES.map((g, i) => (
            <Reveal as="div" className="guarantee" key={g.title}>
              <span className="gi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{GUARANTEE_ICONS[i]}</svg></span>
              <h3>{g.title}</h3>
              <p>{g.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal as="div" className="format-band">
          <div className="fb-title">Format pédagogique</div>
          <div className="format-grid">
            {FORMATS.map((f, i) => (
              <div className="fmt" key={f}>
                <span className="fi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {i === 0 && <><rect x="2" y="3" width="20" height="14" rx="2" /><path d="m10 8 5 3-5 3V8Z" /></>}
                    {i === 1 && <><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><path d="M12 19v3" /></>}
                    {i === 2 && <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6" /></>}
                    {i === 3 && <><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></>}
                    {i === 4 && <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /></>}
                    {i === 5 && <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>}
                  </svg>
                </span>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProgramSection() {
  return (
    <section className="section program" id="programme">
      <div className="wrap">
        <div className="center-head">
          <span className="eyebrow center">Le programme</span>
          <h2 className="sec-title">Ce que vous apprendrez — Module par module</h2>
          <p className="sec-sub">Un programme complet, progressif, adapté du débutant à l'investisseur intermédiaire.</p>
        </div>
        <div className="modules">
          {MODULES.map((m) => (
            <Reveal as="div" className="module" key={m.num}>
              <div className="m-num">{m.num}</div>
              <div className="m-body"><h3>{m.title}</h3><p>{m.body}</p></div>
            </Reveal>
          ))}
        </div>
        <Reveal as="div" className="upcoming">
          <div className="uc-head">
            <span className="uc-badge">À venir</span>
            <span className="t">Mises à jour incluses dans votre accès</span>
          </div>
          <div className="upcoming-grid">
            {UPCOMING.map((u) => (
              <div className="up-item" key={u}><span className="pin">📍</span> {u}</div>
            ))}
          </div>
          <p className="uc-note">Votre accès à la formation est valable <b>à vie</b>. Chaque nouveau marché ajouté au programme vous est automatiquement accessible — sans frais supplémentaires.</p>
        </Reveal>
      </div>
    </section>
  );
}

function PricingSection({ currency, setCurrency, onOpenModal }) {
  return (
    <section className="section pricing" id="tarifs">
      <div className="wrap">
        <div className="center-head">
          <span className="eyebrow center">Tarifs</span>
          <h2 className="sec-title">Un investissement unique. Un accès permanent.</h2>
          <p className="sec-sub">Vous payez une fois. Vous accédez à la formation complète — maintenant et à toutes les mises à jour futures sur les marchés africains.</p>
          <div className="price-switch">
            <button className={currency === 'usd' ? 'on' : ''} onClick={() => setCurrency('usd')}>USD</button>
            <button className={currency === 'xaf' ? 'on' : ''} onClick={() => setCurrency('xaf')}>XAF</button>
          </div>
        </div>
        <div className="plans">
          {PRICING_PLANS.map((plan) => (
            <Reveal as="div" className={`plan ${plan.featured ? 'featured' : ''}`} key={plan.id}>
              {plan.ribbon && <span className="p-ribbon">{plan.ribbon}</span>}
              <div className="p-head">
                <div className="p-name">{plan.name}</div>
                <div className="p-price">
                  {plan.old && <span className="p-old">{plan.old[currency]}</span>}
                  <span className="p-now">{plan.now[currency]}</span>
                  <span className="p-per">{plan.per[currency]}</span>
                </div>
                <div className="p-xaf">{plan.sub[currency]}</div>
              </div>
              <div className="p-feats">
                {plan.features.map((f, i) => (
                  <div className={`feat ${f.ok ? 'yes' : 'no'}`} key={i}>
                    <span className="fk">{f.ok ? <IconCheck /> : <IconCross />}</span>{f.text}
                  </div>
                ))}
              </div>
              <div className="p-foot">
                <button className={`btn ${plan.btnClass} btn-block btn-lg`} onClick={() => onOpenModal(plan.id)}>
                  {plan.ctaLabel} {plan.ctaPrice[currency]}
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" className="pay-modes">
          <div className="pm-title">Modes de paiement</div>
          <div className="pm-list">
            <span className="pm"><span className="pmi">💳</span> Mobile Money (MTN, Orange Money)</span>
            <span className="pm"><span className="pmi">🏦</span> Virement bancaire</span>
            <span className="pm"><span className="pmi">₿</span> Crypto (USDT)</span>
            <span className="pm"><span className="pmi">💻</span> Paiement en ligne sécurisé</span>
          </div>
        </Reveal>

        <Reveal as="div" className="pay-online">
          <div className="po-left">
            <h3>Une réponse rapide après votre demande</h3>
            <p>Remplissez le formulaire d'inscription — notre équipe vous recontacte sous 24h avec les instructions de paiement et vos accès.</p>
            <span className="po-rea"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" /></svg> Réponse sous 24h. Suivi personnalisé par notre équipe.</span>
          </div>
          <div className="flow">
            {PAYMENT_FLOW.map((step, i) => (
              <div className="flow-step" key={i}><span className="fs-n">{i + 1}</span><p>{step}</p></div>
            ))}
          </div>
          <div className="po-cta">
            <button className="btn btn-orange btn-lg btn-block" onClick={() => onOpenModal('formation')}>
              M'inscrire à la formation
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
            </button>
          </div>
        </Reveal>
        <p style={{ textAlign: 'center', marginTop: 22, fontSize: 14, color: 'var(--ink-soft)' }}>
          Questions avant de vous décider ? Écrivez-nous : <a href="mailto:formation@umdeny.com" style={{ color: 'var(--orange-deep)', fontWeight: 600 }}>formation@umdeny.com</a> · <a href="mailto:vireel@umdeny.com" style={{ color: 'var(--orange-deep)', fontWeight: 600 }}>vireel@umdeny.com</a>
        </p>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="section trust">
      <div className="wrap">
        <div className="center-head">
          <span className="eyebrow center">La confiance</span>
          <h2 className="sec-title">Des experts qui pratiquent ce qu'ils enseignent</h2>
          <p className="sec-sub">Cette formation n'a pas été construite dans un bureau. Elle est le résultat de plusieurs années de gestion active de capitaux, d'accompagnement d'investisseurs et de présence directe sur les marchés africains et internationaux.</p>
        </div>
        <div className="trust-grid">
          <Reveal as="div" className="trust-card">
            <div className="tc-k"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg> L'expérience terrain</div>
            <p>Depuis 2019, notre équipe a géré plus de 1 000 000 USD de capital, accompagné des investisseurs à travers 10+ pays, et opéré sur les marchés africains et internationaux. Nous connaissons ces marchés — leurs opportunités, leurs mécanismes et leurs pièges.</p>
          </Reveal>
          <Reveal as="div" className="trust-card">
            <div className="tc-k"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.6L5.7 21 8 13.9 2 9.4h7.6L12 2Z" /></svg> Les expertises</div>
            <p>Notre équipe réunit des expertises en finance, structuration d'investissement et analyse des marchés africains. Nous travaillons exclusivement avec des partenaires agréés et régulés. Ce que nous vous enseignons, nous le pratiquons au quotidien.</p>
          </Reveal>
          <Reveal as="div" className="trust-card">
            <div className="tc-k"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> Le réseau partenaire</div>
            <div className="partners">
              {TRUST_PARTNERS.map((p) => <span className="partner" key={p}>{p}</span>)}
            </div>
            <div className="reg-label">Cadre réglementaire</div>
            <div className="partners">
              {TRUST_REGULATIONS.map((p) => <span className="partner reg" key={p}>{p}</span>)}
            </div>
          </Reveal>
          <Reveal as="div" className="trust-card">
            <div className="tc-k"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /></svg> L'engagement</div>
            <p>Vous ne recevrez jamais de promesse de rendement garantie de notre part. Nous vous donnons les méthodes, les outils et l'accompagnement pour prendre des décisions éclairées — les résultats dépendent ensuite de votre application, du marché et du contexte. C'est ça, l'honnêteté d'un praticien.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="section testimonials">
      <div className="wrap">
        <div className="center-head">
          <span className="eyebrow center">Témoignages</span>
          <h2 className="sec-title">Ils ont commencé là où vous êtes maintenant</h2>
        </div>
        <div className="testi-grid">
          {TESTIMONIALS.map((t) => (
            <Reveal as="div" className="testi" key={t.name}>
              <p className="t-quote">{t.quote}</p>
              <div className="t-by"><span className="t-av">{t.initials}</span><div className="t-meta"><div className="t-name">{t.name}</div><div className="t-role">{t.role}</div></div></div>
            </Reveal>
          ))}
        </div>
        <p className="testi-note">Emplacements réservés — vrais témoignages à intégrer</p>
      </div>
    </section>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="section faq" id="faq">
      <div className="wrap">
        <div className="center-head">
          <span className="eyebrow center">FAQ</span>
          <h2 className="sec-title">Les questions qu'on nous pose le plus</h2>
        </div>
        <div className="faq-list">
          {FAQ.map((item, i) => {
            const open = openIndex === i;
            return (
              <div className={`qa ${open ? 'open' : ''}`} key={item.q}>
                <button className="qa-q" aria-expanded={open} onClick={() => setOpenIndex(open ? null : i)}>
                  <span>{item.q}</span>
                  <span className="qa-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg></span>
                </button>
                <div className="qa-a" style={{ maxHeight: open ? '600px' : 0 }}>
                  <div className="qa-a-inner">{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalSection({ onOpenModal }) {
  return (
    <section className="section final">
      <div className="wrap">
        <span className="eyebrow center light">Dernier appel</span>
        <h2>Les opportunités n'attendent pas. <span className="hl">Vous non plus.</span></h2>
        <p>BGFI vient d'entrer à la BVMAC. Dangote prépare l'IPO du siècle. D'autres entreprises africaines s'apprêtent à entrer en bourse. <b>Les investisseurs formés et positionnés seront prêts.</b> Les autres attendront — ou perdront leur capital sur une mauvaise décision. Vous avez maintenant toutes les informations. La décision vous appartient.</p>
        <div className="final-cta">
          <button className="btn btn-orange btn-lg" onClick={() => onOpenModal('formation')}>
            M'inscrire à la formation
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
          </button>
          <button className="btn btn-outline-light btn-lg" onClick={() => onOpenModal('accompagnement')}>Je veux l'Accompagnement — 1 000 USD</button>
        </div>
        <div className="final-note"><span className="dot"></span> Réponse sous 24h · Confirmation automatique par email · formation@umdeny.com · vireel@umdeny.com</div>
      </div>
    </section>
  );
}

function PageFooter() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <img className="brand-logo" src={logoDark} alt="VIREEL" />
            <p>Formation Bourse BVMAC — par Umdeny Capital. Apprenez à investir sur les marchés d'Afrique Centrale avec des praticiens actifs, dans un cadre réglementé.</p>
          </div>
          <div className="foot-col">
            <h4>Liens utiles</h4>
            <ul>
              <li><a href="https://vireel.umdeny.com">Accueil Vireel</a></li>
              <li><a href="https://vireel.umdeny.com">Toutes les formations</a></li>
              <li><a href="https://quizz.umdeny.com">Quiz Profil →</a></li>
              <li><a href="https://umdeny.com">Investir → umdeny.com</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:formation@umdeny.com">formation@umdeny.com</a></li>
              <li><a href="mailto:vireel@umdeny.com">vireel@umdeny.com</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span className="foot-copy">© 2026 Vireel — Tous droits réservés</span>
          <span className="foot-disc">Les performances et exemples cités sont basés sur des cas réels et des données de marché observées. Ils ne constituent pas une garantie de résultats. Tout investissement comporte des risques. La formation a pour objectif de vous aider à les comprendre et à les gérer.</span>
        </div>
      </div>
    </footer>
  );
}

function MobileCta({ onOpenModal }) {
  return (
    <div className="mobile-cta">
      <button className="btn btn-orange btn-block btn-lg" onClick={() => onOpenModal()}>S'inscrire à la formation →</button>
    </div>
  );
}

/* ─── Registration modal ─── */

function RegistrationModal({ open, plan, onChoosePlan, onClose, onSubmitted }) {
  const chosenPlan = plan || 'formation';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const nameRef = useRef(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => nameRef.current?.focus(), 120);
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [open]);

  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape' && open) onClose(); }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  function resetAndClose() {
    onClose();
    setTimeout(() => {
      setDone(false);
      setName(''); setEmail(''); setPhone(''); setCountry(''); setCurrency('USD');
      setErrors({});
    }, 300);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = {};
    if (name.trim().length < 2) nextErrors.name = true;
    if (!EMAIL_RE.test(email.trim())) nextErrors.email = true;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const isAccompagnement = chosenPlan === 'accompagnement';
    const lead = {
      plan: chosenPlan,
      product_id: isAccompagnement ? 'FORMATION_BOURSE_ACCOMPAGNEMENT' : 'FORMATION_BOURSE_BVMAC',
      amount: isAccompagnement ? 1000 : 100,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      country: country.trim(),
      currency,
    };

    setSubmitting(true);
    try {
      const res = await fetch('/api/subscribe-formation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
    } catch (err) {
      console.warn('[Vireel] subscribe-formation failed, stored locally:', err);
      try {
        const store = JSON.parse(localStorage.getItem('vireel_inscriptions') || '[]');
        store.push({ ...lead, ts: new Date().toISOString() });
        localStorage.setItem('vireel_inscriptions', JSON.stringify(store));
      } catch { /* ignore */ }
    }
    setSubmitting(false);
    setDone(true);
    onSubmitted?.();
  }

  const planLabel = chosenPlan === 'accompagnement' ? 'Formation + Accompagnement' : 'Formation Bourse BVMAC';

  return (
    <div className={`overlay ${open ? 'open' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) resetAndClose(); }}>
      <div className={`modal ${done ? 'done' : ''}`} role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <button className="modal-x" aria-label="Fermer" onClick={resetAndClose}>✕</button>
        <div className="modal-head">
          <span className="mh-tag">Inscription · Formation Bourse BVMAC</span>
          <h2 id="modalTitle">Réservez votre place</h2>
          <p>Choisissez votre formule — notre équipe vous recontacte sous 24h avec les instructions de paiement.</p>
        </div>

        <form className="lead" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label>Formule choisie</label>
            <div className="plan-pick">
              <div className={`pp ${chosenPlan === 'formation' ? 'on' : ''}`} onClick={() => onChoosePlan('formation')}>
                <div className="pp-n">Formation</div><div className="pp-p">100 USD<span style={{ fontSize: 12, fontWeight: 500, color: 'var(--ink-soft)' }}>/mois</span></div>
              </div>
              <div className={`pp ${chosenPlan === 'accompagnement' ? 'on' : ''}`} onClick={() => onChoosePlan('accompagnement')}>
                <div className="pp-n">+ Accompagnement</div><div className="pp-p">1 000 USD</div>
              </div>
            </div>
          </div>
          <div className={`field ${errors.name ? 'invalid' : ''}`}>
            <label>Prénom &amp; Nom</label>
            <input ref={nameRef} type="text" autoComplete="name" placeholder="Yvan Tadie" required value={name} onChange={(e) => setName(e.target.value)} />
            <span className="msg">Merci d'indiquer votre prénom et nom.</span>
          </div>
          <div className="row2">
            <div className={`field ${errors.email ? 'invalid' : ''}`}>
              <label>Adresse e-mail</label>
              <input type="email" autoComplete="email" placeholder="vous@exemple.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
              <span className="msg">Adresse e-mail invalide.</span>
            </div>
            <div className="field">
              <label>WhatsApp <span className="opt">(facultatif)</span></label>
              <input type="tel" autoComplete="tel" placeholder="+237 6 00 00 00 00" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
          </div>
          <div className="row2">
            <div className="field">
              <label>Pays de résidence</label>
              <input type="text" placeholder="Cameroun" autoComplete="country-name" value={country} onChange={(e) => setCountry(e.target.value)} />
            </div>
            <div className="field">
              <label>Devise</label>
              <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                <option value="USD">USD</option>
                <option value="XAF">XAF (FCFA)</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-orange btn-block btn-lg" style={{ marginTop: 4 }} disabled={submitting}>
            <span>{submitting ? 'Envoi en cours…' : "Envoyer ma demande d'inscription"}</span>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
          </button>
          <p className="consent">Paiement sécurisé · Mobile Money, virement, carte ou crypto. En continuant, vous acceptez d'être recontacté par l'équipe Vireel concernant votre inscription.</p>
        </form>

        <div className="success">
          <div className="check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></div>
          <h2>Demande enregistrée !</h2>
          <p>Nous avons bien reçu votre inscription à la <span className="em-out">{planLabel}</span>. Un email de confirmation vient d'être envoyé à <span className="em-out">{email}</span> — notre équipe vous recontactera sous 24h pour finaliser votre inscription et le paiement. Pensez à vérifier vos spams.</p>
          <button className="btn-close2" onClick={resetAndClose}>Fermer</button>
        </div>
      </div>
    </div>
  );
}

/* ─── Page ─── */

export default function FormationBourseBvmac() {
  const [currency, setCurrency] = useState('usd');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPlan, setModalPlan] = useState('formation');

  function openModal(plan = 'formation') {
    setModalPlan(plan);
    setModalOpen(true);
  }
  function closeModal() {
    setModalOpen(false);
  }

  useEffect(() => {
    document.title = 'Formation Bourse BVMAC — Investir en Bourse en Afrique Centrale | VIREEL';
  }, []);

  return (
    <div className="formation-bvmac-page">
      <UrgencyBar />
      <Nav onOpenModal={openModal} />
      <Hero onOpenModal={openModal} />
      <Ticker />
      <PainSection />
      <WhyNowSection />
      <WarningSection />
      <SolutionSection />
      <ProgramSection />
      <PricingSection currency={currency} setCurrency={setCurrency} onOpenModal={openModal} />
      <TrustSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalSection onOpenModal={openModal} />
      <PageFooter />
      <MobileCta onOpenModal={openModal} />
      <RegistrationModal open={modalOpen} plan={modalPlan} onChoosePlan={setModalPlan} onClose={closeModal} />
    </div>
  );
}
