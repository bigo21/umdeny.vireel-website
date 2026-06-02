import { useState, useEffect } from 'react';
import CONTENT from './content.js';
import './site.css';
import logo from '../public/vireel-logo.png';

function Brand() {
  return (
    <div className="brand">
      <img src={logo} alt="VIREEL" className="brand-logo" />
    </div>
  );
}

function Banner({ c }) {
  return (
    <div className="banner">
      <span className="b-icon">🧭</span>
      <span>{c.banner}</span>
      <a href="#quiz" className="b-cta">{c.bannerCta} <span>→</span></a>
    </div>
  );
}

function Header({ c, lang, setLang }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [open]);
  return (
    <div className="nav-wrap">
      <div className="nav">
        <Brand />
        <nav className="nav-links">
          {c.nav.links.map((l, i) => (
            <a key={i} href={l.href}>
              {l.label}{l.hasMenu && <span> ▾</span>}
            </a>
          ))}
        </nav>
        <div className="nav-right">
          <div className="lang-toggle" onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}>
            <span className={lang === 'fr' ? 'on' : ''}>FR</span>
            <span className={lang === 'en' ? 'on' : ''}>EN</span>
          </div>
          <a href="#contact" className="btn btn-red nav-cta-desktop" style={{ padding: '10px 18px', fontSize: 13 }}>
            {c.nav.cta} <span className="arr">→</span>
          </a>
          <button className="nav-burger" aria-label="Menu" onClick={() => setOpen(true)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      {open && (
        <div className="nav-drawer" onClick={() => setOpen(false)}>
          <div className="nav-drawer-inner" onClick={(e) => e.stopPropagation()}>
            <div className="nav-drawer-head">
              <Brand />
              <button className="nav-drawer-close" onClick={() => setOpen(false)} aria-label="Fermer">✕</button>
            </div>
            <nav className="nav-drawer-links">
              {c.nav.links.map((l, i) => (
                <a key={i} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              ))}
            </nav>
            <div className="nav-drawer-foot">
              <div className="lang-toggle" onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}>
                <span className={lang === 'fr' ? 'on' : ''}>FR</span>
                <span className={lang === 'en' ? 'on' : ''}>EN</span>
              </div>
              <a href="#contact" className="btn btn-red" onClick={() => setOpen(false)}>
                {c.nav.cta} <span className="arr">→</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Hero({ c, lang }) {
  const h = c.hero;
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <span className="eyebrow">{h.eyebrow}</span>
            <h1 className="hero-h1">
              {lang === "fr" ? (
                <>
                  Bien investir commence par <em>une bonne formation</em>.
                </>
              ) : (
                <>
                  Smart investing starts with <em>proper training</em>.
                </>
              )}
            </h1>
            <p className="hero-sub">{h.sub}</p>
            <p className="hero-sub">{h.sub2}</p>
            <div className="hero-ctas">
              <a href="#formations" className="btn btn-red">
                {h.cta1} <span className="arr">→</span>
              </a>
            </div>
            <div className="hero-stats">
              {h.stats.map((s, i) => (
                <div className="hero-stat" key={i}>
                  <div className="n">
                    {s.num}
                    {s.unit && <span className="u">{s.unit}</span>}
                  </div>
                  <div className="l">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "relative", paddingTop: 16 }}>
            <div className="hero-visual">
              <div className="hero-frame">
                <div className="hero-frame-placeholder">
                  Portrait fondateur / équipe (4:5)
                </div>
                <span className="frame-label">{h.reelLabel}</span>
                <div className="frame-caption">{h.reelCaption}</div>
              </div>
            </div>
            <div className="float-card f1">
              <div className="ic">★</div>
              <div>
                <div className="num">+ 1M USD</div>
                <div className="lb">{h.stats[0].label} · 2019 →</div>
              </div>
            </div>
            <div className="float-card f2">
              <div className="ic">🛡</div>
              <div>
                <div className="num">100 % régulé</div>
                <div className="lb">COSUMAF · FCA · CySEC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About({ c, lang }) {
  const a = c.about;
  return (
    <section className="section bg-white" id="about">
      <div className="container">
        <div className="about-grid">
          <div>
            <div className="about-photo">
              <div className="about-photo-placeholder">Photo équipe Umdeny Capital (4:5)</div>
              <div className="about-photo-cap">
                <span>Équipe Umdeny Capital · Libreville</span>
                <em>Depuis 2019</em>
              </div>
            </div>
            <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'space-between' }}>
              <span className="pill"><span className="dot"></span>10+ {lang === 'fr' ? 'pays traversés' : 'countries'}</span>
              <span className="pill"><span className="dot"></span>14 {lang === 'fr' ? "ans d'expérience cumulée" : 'years cumulated expertise'}</span>
            </div>
          </div>
          <div>
            <span className="eyebrow">{a.eyebrow}</span>
            <h2 className="sec-h2">
              {lang === 'fr'
                ? <>Une équipe d'experts,<br/><em>une mission claire.</em></>
                : <>Expert team,<br/><em>clear mission.</em></>
              }
            </h2>
            <p className="about-lead">{a.lead}</p>
            {a.paragraphs.map((p, i) => <p className="about-para" key={i}>{p}</p>)}
            <div className="country-row">
              {a.countries.map((co) => (
                <span className="pill" key={co}><span className="dot"></span>{co}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="reg-card">
          <div>
            <h4>{a.partnersTitle}</h4>
            <div className="partners">
              {a.partners.map((p) => <span className="partner" key={p}>{p}</span>)}
            </div>
          </div>
          <div>
            <h4>{a.regulationsAfrica}</h4>
            <div className="reg-list">
              {a.regulationsAfricaList.map((r) => <span key={r}>{r}</span>)}
            </div>
          </div>
          <div>
            <h4>{a.regulationsIntl}</h4>
            <div className="reg-list">
              {a.regulationsIntlList.map((r) => <span key={r}>{r}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Opportunities({ c, lang }) {
  const o = c.opportunities;
  return (
    <section className="section bg-warm" id="opportunities">
      <div className="container">
        <div className="sec-head">
          <div>
            <span className="eyebrow">{o.eyebrow}</span>
            <h2 className="sec-h2">
              {lang === 'fr'
                ? <>L'opportunité est là.<br/><em>{o.h2Italic} ?</em></>
                : <><em>{o.h2}</em></>
              }
            </h2>
          </div>
          <p className="sec-lead">{o.lead}</p>
        </div>

        <div className="opp-cards">
          {o.cards.map((card, i) => (
            <article className="opp-card" key={i}>
              <span className="opp-tag">{card.tag}</span>
              <h3 className="opp-title"><span className="ic">{card.icon}</span><span>{card.title}</span></h3>
              <p className="opp-body">{card.body}</p>
              <div className="opp-highlight">
                <span className="n">{card.highlight}</span>
                <span className="l">{card.highlightLabel}</span>
              </div>
              <p className="opp-body" style={{ fontSize: 14 }}>{card.subBody}</p>
              <p className="opp-tail">{card.tail}</p>
            </article>
          ))}
        </div>

        <div className="stories-head">
          <h3>{o.tradingTitle}</h3>
          <p>{o.tradingLead}</p>
        </div>
        <div className="stories-grid">
          {o.stories.map((s, i) => (
            <article className="story" key={i}>
              <div className="story-avatar">{s.name[0]}</div>
              <div>
                <div className="story-head">
                  <div>
                    <div className="story-name">{s.name}</div>
                    <div className="story-meta">{s.age} · {s.city}</div>
                  </div>
                  <span className="story-tag">{s.tag}</span>
                </div>
                <p className="story-body">{s.body}</p>
                <div className="story-metric">
                  <span className="m">{s.metric}</span>
                  <span className="l">{s.metricLabel}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="opp-foot">{o.footerLine}</div>
      </div>
    </section>
  );
}

function Risks({ c, lang }) {
  const r = c.risks;
  return (
    <section className="section risks">
      <div className="container">
        <div className="sec-head">
          <div>
            <span className="eyebrow">{r.eyebrow}</span>
            <h2 className="sec-h2">
              {lang === 'fr'
                ? <>Ces mêmes opportunités peuvent devenir<br/><em>{r.h2Italic}.</em></>
                : <>These same opportunities can become <em>{r.h2Italic}.</em></>
              }
            </h2>
          </div>
          <p className="sec-lead">{r.lead}</p>
        </div>
        <div className="risk-grid">
          {r.stats.map((s, i) => (
            <div className="risk" key={i}>
              <div className="risk-n">{s.num}</div>
              <div className="risk-src">{s.source}</div>
              <p className="risk-text">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="verity">
          <div>
            <h3>{r.verityTitle}</h3>
            <p style={{ marginTop: 14 }}>{r.verityBody}</p>
            <p>{r.verityClose}</p>
          </div>
          <div className="verity-rule">{r.verityRule}</div>
        </div>
        <div className="risks-tagline">
          {lang === 'fr'
            ? <>La formation n'est pas une option. C'est votre <em>première ligne de défense</em> — et votre meilleure stratégie de rendement.</>
            : <>Training isn't optional. It's your <em>first line of defence</em> — and your best return strategy.</>
          }
        </div>
      </div>
    </section>
  );
}

function Formations({ c, lang }) {
  const f = c.formations;
  const bourse = f.cards[0];
  const others = f.cards.slice(1);
  return (
    <section className="section bg-warm" id="formations">
      <div className="container">
        <div className="sec-head">
          <div>
            <span className="eyebrow">{f.eyebrow}</span>
            <h2 className="sec-h2">
              {lang === 'fr'
                ? <>Apprenez les stratégies qui fonctionnent —<br/>de praticiens <em>{f.h2Italic}.</em></>
                : <>Learn the strategies that work —<br/>from practitioners <em>{f.h2Italic}.</em></>
              }
            </h2>
          </div>
          <p className="sec-lead">{f.lead}</p>
        </div>

        <div className="formats-row">
          <span className="lbl">{f.formatLabel}</span>
          {f.formats.map((x) => <span className="fmt" key={x}>{x}</span>)}
        </div>

        <div className="formation-bourse">
          <div className="formation-bourse-left">
            <span className="stamp">● {bourse.tag}</span>
            <div className="ic">{bourse.icon}</div>
            <h3>{bourse.title}</h3>
            <div className="sub">{bourse.subtitle}</div>
            <p className="body">{bourse.body}</p>
            <div className="curriculum">
              {bourse.curriculum.map((it, i) => (
                <div className="item" key={i}>
                  <span className="check">✓</span>
                  <span>{it}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="formation-bourse-right">
            <h4>{bourse.bonusTitle}</h4>
            <div className="bonus-grid">
              {bourse.bonus.map((b, i) => (
                <div className="bonus-item" key={i}>
                  <div className="b-ic">{['🛡', '%', '🎯'][i]}</div>
                  <div>
                    <div className="b-t">{b.t}</div>
                    <div className="b-d">{b.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <h4 style={{ marginTop: 8 }}>{lang === 'fr' ? 'Tarification' : 'Pricing'}</h4>
            <div className="pricing-table">
              {bourse.pricingTable.map((p, i) => (
                <div className="price-row" key={i}>
                  <div>
                    <div className="price-label">{p.label}</div>
                    <div className="price-xaf">
                      {p.xafCross && <span style={{ textDecoration: 'line-through', marginRight: 6, color: '#aaa' }}>{p.xafCross}</span>}
                      {p.xaf}
                    </div>
                  </div>
                  {p.crossPrice && <div className="price-cross">{p.crossPrice}</div>}
                  <div className="price-main">{p.price}<span className="suf">{p.suffix}</span></div>
                </div>
              ))}
            </div>
            <div className="payment-row">
              <span className="lbl">{bourse.paymentLabel} :</span>
              {bourse.payment.map((p) => <span className="pm" key={p}>{p}</span>)}
            </div>
            <div className="form-ctas">
              <a href="#contact" className="btn btn-red">{bourse.cta} <span className="arr">→</span></a>
              <a href="#contact" className="btn btn-ghost">{bourse.cta2} <span className="arr">→</span></a>
            </div>
          </div>
        </div>

        <div className="formation-soon">
          {others.map((card, i) => (
            <article className="formation-card" key={i}>
              <span className="stamp">{card.tag}</span>
              <div className="ic">{card.icon}</div>
              <div>
                <h3>{card.title}</h3>
                <div className="sub">{card.subtitle}</div>
              </div>
              <p className="body">{card.body}</p>
              <div className="curriculum-light">
                {card.curriculum.map((it, j) => <div className="item" key={j}>{it}</div>)}
              </div>
              <a href="#contact" className="btn btn-ghost">{card.cta} <span className="arr">→</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials({ c, lang }) {
  const t = c.testimonials;
  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <div className="sec-head">
          <div>
            <span className="eyebrow">{t.eyebrow}</span>
            <h2 className="sec-h2">
              {lang === 'fr'
                ? <>Ils ont franchi <em>{t.h2Italic}.</em></>
                : <>They took <em>{t.h2Italic}.</em></>
              }
            </h2>
          </div>
          <p className="sec-lead">{t.lead}</p>
        </div>
        <div className="testi-grid">
          {t.items.map((x, i) => (
            <article className="testi" key={i}>
              <div className="quote-mark">"</div>
              <p className="q">{x.quote}</p>
              <div className="by">
                <div className="av">{x.name.split(' ').map(w => w[0]).join('')}</div>
                <div>
                  <div className="name">{x.name}</div>
                  <div className="role">{x.role}</div>
                </div>
                <span className="profile">{x.profile}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quiz({ c, lang }) {
  const q = c.quiz;
  return (
    <section className="section bg-white" id="quiz">
      <div className="container">
        <div className="quiz-band">
          <div>
            <span className="eyebrow">{q.eyebrow}</span>
            <h2>
              {lang === "fr" ? (
                <>
                  Vous pensez vous connaître en tant qu'investisseur.{" "}
                  <em>{q.h2Italic} ?</em>
                </>
              ) : (
                <>
                  You think you know yourself as an investor.{" "}
                  <em>{q.h2Italic}?</em>
                </>
              )}
            </h2>
            <p>{q.lead}</p>
            <ul className="quiz-points">
              {q.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
          <div className="quiz-card">
            <div className="ic">🧭</div>
            <h4>
              {lang === "fr" ? "Quiz patrimonial" : "Wealth profile quiz"}
            </h4>
            <p>{q.body}</p>
            <p style={{ fontSize: 13.5, color: "var(--ink-soft)" }}>
              {q.result}
            </p>
            <a
              href="https://quizz.umdeny.com"
              className="btn btn-red"
              style={{ width: "100%" }}
            >
              {q.cta} <span className="arr">→</span>
            </a>
            <div
              style={{
                marginTop: 12,
                fontSize: 12,
                color: "var(--mute)",
                textAlign: "center",
              }}
            >
              {q.ctaSub}
            </div>
          </div>
          <div className="quiz-tail">
            <span>{c.hero.cta2}</span>
            <a href="https://umdeny.com" className="btn btn-light">
              {lang === 'fr' ? "Nos véhicules d'investissement" : 'Our investment vehicles'} <span className="arr">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ c }) {
  const f = c.footer;
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              <img src={logo} alt="VIREEL" className="brand-logo brand-logo-footer" />
            </div>
            <p
              style={{
                maxWidth: 320,
                fontSize: 13.5,
                color: "rgba(255,255,255,0.7)",
              }}
            >
              {f.tagline}
            </p>
          </div>
          {f.cols.map((col, i) => (
            <div key={i}>
              <h5>{col.title}</h5>
              <ul>
                {col.links.map((l) => (
                  <li key={l.text}>
                    <a href={l.href}>{l.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-disclaim">
          <p>{f.disclaimer}</p>
        </div>
        <div className="footer-legal">
          <span>{f.legal}</span>
          <a
            href="https://umdeny.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            MERIAZ · Cream Corporate
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [lang, setLang] = useState('fr');
  const c = CONTENT[lang];

  return (
    <div className="site-root v1">
      <Banner c={c} />
      <Header c={c} lang={lang} setLang={setLang} />
      <Hero c={c} lang={lang} />
      <About c={c} lang={lang} />
      <Opportunities c={c} lang={lang} />
      <Risks c={c} lang={lang} />
      <Formations c={c} lang={lang} />
      <Testimonials c={c} lang={lang} />
      <Quiz c={c} lang={lang} />
      <Footer c={c} />
    </div>
  );
}
