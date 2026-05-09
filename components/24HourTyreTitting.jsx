"use client";

import React, { useState } from 'react';
import Script from 'next/script';

const PHONE_DISPLAY = '0788 328 8831';
const PHONE_TEL = 'tel:07883288831';
const WA_LINK = 'https://wa.me/447722127759';

export default function HourTyreFitting({ locationName = null }) {
    const hasLocation = typeof locationName === 'string' && locationName.trim().length > 0;

    const handleCall = (e) => {
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
            window.gtag('event', 'conversion', { 'send_to': 'AW-CONVERSION_ID/LABEL' });
        }
        if (typeof window !== 'undefined' && window.gtag_report_conversion) {
            e.preventDefault();
            window.gtag_report_conversion(PHONE_TEL);
        }
    };

    const PhoneIcon = () => (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="ph-icon">
            <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.6 1 1 0 0 1-.25 1z" />
        </svg>
    );

    const CallButton = ({ size = 'lg', label = 'Call Now For 24 Hour Tyre Fitting', className = '' }) => (
        <a
            href={PHONE_TEL}
            onClick={handleCall}
            className={`cta cta-${size} ${className}`}
            aria-label={`Call ${PHONE_DISPLAY} now for 24 hour tyre fitting`}
        >
            <PhoneIcon />
            <span className="cta-text">
                <strong>{PHONE_DISPLAY}</strong>
                <small>{label}</small>
            </span>
        </a>
    );

    const faqs = [
        { q: 'How quickly can you get to me?', a: 'We aim to reach many local customers from around 20 minutes, depending on traffic, fitter availability, tyre stock, and your exact location.' },
        { q: 'Do you offer 24 hour tyre fitting near me?', a: 'Yes. Our 24 hour mobile tyre fitting service can come to your home, workplace, roadside, or another safe location near you.' },
        { q: 'Can I get tyre fitting outside normal garage hours?', a: 'Yes. We provide out-of-hours mobile tyre fitting where local availability and tyre stock allow.' },
        { q: 'Do I need to visit a garage?', a: 'No. Our mobile tyre fitter comes to your location and fits the tyre on-site at home, work, or roadside.' },
        { q: 'How much does 24 hour tyre fitting cost?', a: `The cost depends on tyre size, brand, location and service time. Call ${PHONE_DISPLAY} for a clear price before we come out.` },
        { q: 'Do you provide same day tyre fitting?', a: 'Yes. Same day tyre fitting is available where tyre stock and local mobile fitters are available.' },
    ];

    const [openFaq, setOpenFaq] = useState(0);

    return (
        <>
            <style>{`
*,*::before,*::after{box-sizing:border-box}
.tf-page{font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#1A1A4E;background:#fff;line-height:1.5;-webkit-font-smoothing:antialiased}
.tf-page img{max-width:100%;height:auto;display:block}
.tf-page a{color:inherit;text-decoration:none}
.tf-page h1,.tf-page h2,.tf-page h3,.tf-page h4,.tf-page h5,.tf-page p{margin:0 0 .5rem}
.tf-page h1{font-size:clamp(1.75rem,5vw,2.6rem);line-height:1.15;font-weight:800;letter-spacing:-.01em}
.tf-page h2{font-size:clamp(1.4rem,3.5vw,2rem);font-weight:800;letter-spacing:-.01em}
.tf-page h3{font-size:1.15rem;font-weight:700}
.tf-container{max-width:1140px;margin:0 auto;padding:0 1rem}
.tf-orange{color:#FF5722}

.tf-topbar{position:sticky;top:0;z-index:50;background:#1A1A4E;color:#fff;border-bottom:3px solid #FF5722}
.tf-topbar-inner{display:flex;align-items:center;justify-content:space-between;gap:.75rem;padding:.6rem 1rem;max-width:1140px;margin:0 auto}
.tf-brand{font-weight:800;font-size:.95rem;letter-spacing:.02em;color:#fff}
.tf-brand small{display:block;font-weight:500;opacity:.85;font-size:.7rem}
.tf-topbar a.tf-tel{display:inline-flex;align-items:center;gap:.5rem;color:#FF5722;font-weight:800;font-size:1.1rem;padding:.45rem .75rem;border-radius:8px;background:rgba(255,87,34,.12);border:1px solid rgba(255,87,34,.4)}
.tf-topbar a.tf-tel:hover{background:rgba(255,87,34,.2)}
.tf-topbar a.tf-tel svg{width:18px;height:18px;fill:#FF5722}

.cta{display:inline-flex;align-items:center;justify-content:center;gap:.6rem;background:#FF5722;color:#fff;font-weight:800;padding:1rem 1.4rem;min-height:56px;border-radius:8px;border:0;box-shadow:0 6px 18px rgba(255,87,34,.35);transition:transform .15s ease,box-shadow .15s ease;text-align:left;line-height:1.2;cursor:pointer}
.cta:hover{transform:translateY(-1px);box-shadow:0 10px 24px rgba(255,87,34,.45);color:#fff}
.cta .ph-icon{width:22px;height:22px;fill:#fff;flex-shrink:0}
.cta .cta-text strong{display:block;font-size:1.15rem;color:#fff}
.cta .cta-text small{display:block;font-size:.75rem;font-weight:600;opacity:.95;margin-top:2px;color:#fff}
.cta-xl{min-height:64px;padding:1.1rem 1.6rem}
.cta-xl .cta-text strong{font-size:1.3rem}
.cta-light{background:#fff;color:#FF5722;box-shadow:0 6px 18px rgba(0,0,0,.15)}
.cta-light .ph-icon{fill:#FF5722}
.cta-light .cta-text strong,.cta-light .cta-text small{color:#FF5722}
.cta-wrap{display:flex;flex-direction:column;align-items:flex-start;gap:.5rem}
.tf-urgency{font-weight:700;color:#2E7D32;font-size:.95rem;display:inline-flex;align-items:center;gap:.35rem}

.tf-hero{padding:1.25rem 0 1.5rem;background:linear-gradient(180deg,#fff 0,#fff7f4 100%)}
.tf-hero-grid{display:grid;grid-template-columns:1fr;gap:1.25rem;align-items:center}
.tf-hero p.tf-lead{font-size:1.05rem;color:#334155;margin:.6rem 0 1rem}
.tf-eta-pill{display:inline-flex;align-items:center;gap:.5rem;background:#1A1A4E;color:#fff;font-weight:700;padding:.5rem .9rem;border-radius:999px;font-size:.95rem;margin-bottom:.85rem}
.tf-eta-pill .tf-dot{width:8px;height:8px;background:#22c55e;border-radius:50%;box-shadow:0 0 0 0 rgba(34,197,94,.6);animation:tfpulse 1.6s infinite}
@keyframes tfpulse{0%{box-shadow:0 0 0 0 rgba(34,197,94,.6)}70%{box-shadow:0 0 0 10px rgba(34,197,94,0)}100%{box-shadow:0 0 0 0 rgba(34,197,94,0)}}
.tf-usp{list-style:none;padding:0;margin:.75rem 0 1rem;display:grid;grid-template-columns:1fr;gap:.4rem}
.tf-usp li{display:flex;align-items:flex-start;gap:.5rem;font-weight:600;color:#1A1A4E;font-size:.98rem}
.tf-usp li::before{content:"";flex:0 0 22px;height:22px;background:#2E7D32;border-radius:50%;display:inline-block;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff'><path d='M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z'/></svg>");background-size:18px;background-repeat:no-repeat;background-position:center;margin-top:1px}
.tf-hero-img{position:relative;border-radius:14px;overflow:hidden;aspect-ratio:4/3;background:linear-gradient(135deg,#1A1A4E 0%,#2a2a78 55%,#FF5722 100%);display:flex;align-items:center;justify-content:center;color:#fff;text-align:center;padding:1.5rem;box-shadow:0 16px 40px rgba(26,26,78,.25)}
.tf-hero-img::after{content:"";position:absolute;inset:0;background:radial-gradient(circle at 30% 20%,rgba(255,255,255,.15),transparent 50%)}
.tf-hero-img-inner{position:relative;z-index:1}
.tf-hero-img-inner .tf-big{font-size:clamp(2rem,6vw,3.2rem);font-weight:900;letter-spacing:-.02em;line-height:1}
.tf-hero-img-inner .tf-sm{font-size:1rem;opacity:.92;margin-top:.5rem;font-weight:600}
.tf-hero-img-inner .tf-van{font-size:3rem;margin-bottom:.4rem}

.tf-trust{background:#fff;border-top:1px solid #eef2f7;border-bottom:1px solid #eef2f7;padding:.85rem 0}
.tf-trust-row{display:flex;flex-wrap:wrap;gap:.5rem .9rem;justify-content:center;align-items:center;font-size:.92rem;font-weight:700;color:#1A1A4E}
.tf-trust-row span{display:inline-flex;align-items:center;gap:.35rem;white-space:nowrap}
.tf-trust-row .tf-tick{color:#2E7D32;font-weight:900}

.tf-section{padding:2.25rem 0}
.tf-section-head{text-align:center;margin-bottom:1.5rem}
.tf-section-head h2{margin-bottom:.4rem}
.tf-section-head p{color:#475569;margin:0}

.tf-steps{display:grid;grid-template-columns:1fr;gap:1rem}
.tf-step{background:#fff;border:1px solid #eef2f7;border-radius:12px;padding:1.1rem;box-shadow:0 4px 14px rgba(15,23,42,.04);text-align:center}
.tf-step .tf-num{width:44px;height:44px;border-radius:50%;background:#FF5722;color:#fff;font-weight:800;display:inline-flex;align-items:center;justify-content:center;margin-bottom:.6rem;font-size:1.15rem}
.tf-step h3{color:#1A1A4E;margin-bottom:.3rem}
.tf-step p{color:#475569;margin:0;font-size:.95rem}

.tf-mid{background:#1A1A4E;color:#fff;text-align:center}
.tf-mid h2{color:#fff}
.tf-mid p{color:#cbd5e1;margin:.4rem 0 1rem}

.tf-reviews{background:#f8fafc}
.tf-review-grid{display:grid;grid-template-columns:1fr;gap:1rem}
.tf-review{background:#fff;border:1px solid #eef2f7;border-radius:12px;padding:1.1rem;box-shadow:0 4px 14px rgba(15,23,42,.04)}
.tf-stars{color:#f59e0b;font-size:1rem;letter-spacing:2px;margin-bottom:.4rem}
.tf-review p{color:#334155;font-size:.97rem;margin:.25rem 0 .75rem}
.tf-reviewer{display:flex;align-items:center;gap:.6rem}
.tf-avatar{width:42px;height:42px;border-radius:50%;background:#1A1A4E;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.85rem;letter-spacing:.05em}
.tf-reviewer-meta{font-weight:700;color:#1A1A4E;font-size:.95rem}
.tf-reviewer-meta small{display:block;color:#64748b;font-weight:500;font-size:.78rem}

.tf-why{background:#fff}
.tf-why-grid{display:grid;grid-template-columns:1fr;gap:1rem}
.tf-feature{background:#fff;border:1px solid #eef2f7;border-radius:12px;padding:1.1rem;display:flex;gap:.8rem;align-items:flex-start;box-shadow:0 4px 14px rgba(15,23,42,.04)}
.tf-feature-icon{width:48px;height:48px;flex-shrink:0;border-radius:10px;background:rgba(255,87,34,.1);color:#FF5722;display:flex;align-items:center;justify-content:center;font-size:1.4rem}
.tf-feature h3{color:#1A1A4E;margin-bottom:.25rem}
.tf-feature p{color:#475569;font-size:.95rem;margin:0}

.tf-faq{background:#f8fafc}
.tf-faq-list{max-width:820px;margin:0 auto}
.tf-faq-item{background:#fff;border:1px solid #e2e8f0;border-radius:10px;margin-bottom:.6rem;overflow:hidden}
.tf-faq-q{padding:1rem 1.1rem;font-weight:700;color:#1A1A4E;display:flex;justify-content:space-between;align-items:center;gap:.75rem;font-size:1rem;cursor:pointer;background:none;border:0;width:100%;text-align:left;font-family:inherit}
.tf-faq-q::after{content:"+";font-size:1.4rem;font-weight:700;color:#FF5722;transition:transform .2s ease}
.tf-faq-item.tf-open .tf-faq-q::after{content:"−"}
.tf-faq-a{padding:0 1.1rem 1.1rem;color:#475569;font-size:.97rem;line-height:1.55;display:none}
.tf-faq-item.tf-open .tf-faq-a{display:block}

.tf-bottom{background:linear-gradient(135deg,#FF5722,#e64a19);color:#fff;text-align:center}
.tf-bottom h2{color:#fff}
.tf-bottom p{color:rgba(255,255,255,.92);margin:.4rem 0 1rem}

.tf-footer{background:#1A1A4E;color:#cbd5e1;padding:1.5rem 0;text-align:center;font-size:.9rem}
.tf-footer p{margin:0 0 .35rem;color:#cbd5e1}
.tf-footer a{color:#fff;font-weight:600;margin:0 .55rem;text-decoration:underline;text-underline-offset:3px}
.tf-footer a:hover{color:#FF5722}

.tf-wa{position:fixed;right:1rem;bottom:1rem;z-index:60;background:#25D366;color:#fff;border-radius:999px;padding:.85rem 1.1rem;display:inline-flex;align-items:center;gap:.55rem;font-weight:700;box-shadow:0 10px 26px rgba(37,211,102,.4);transition:transform .15s ease}
.tf-wa:hover{transform:translateY(-2px);color:#fff}
.tf-wa svg{width:22px;height:22px;fill:#fff}

@media (min-width:768px){
  .tf-hero{padding:2rem 0 2.5rem}
  .tf-hero-grid{grid-template-columns:1.1fr 1fr;gap:2rem}
  .tf-usp{grid-template-columns:1fr 1fr;gap:.5rem .9rem}
  .tf-steps{grid-template-columns:repeat(3,1fr);gap:1.25rem}
  .tf-review-grid{grid-template-columns:repeat(3,1fr);gap:1.25rem}
  .tf-why-grid{grid-template-columns:repeat(3,1fr);gap:1.25rem}
  .tf-brand small{display:inline;margin-left:.4rem;opacity:.85}
  .tf-section{padding:3rem 0}
  .tf-topbar a.tf-tel{font-size:1.25rem}
}
@media (max-width:480px){
  .tf-topbar-inner{padding:.55rem .75rem}
  .tf-brand{font-size:.85rem;line-height:1.1}
  .tf-topbar a.tf-tel{font-size:1rem;padding:.4rem .6rem}
  .tf-topbar a.tf-tel .tf-tel-label{display:none}
  .tf-wa-label{display:none}
  .tf-wa{padding:.85rem;border-radius:50%}
}
            `}</style>

            <div className="tf-page">

                {/* Sticky top bar */}
                <div className="tf-topbar" role="banner">
                    <div className="tf-topbar-inner">
                        <div className="tf-brand">Mobile Tyre Service Near Me<small>24/7 mobile tyre fitting</small></div>
                        <a className="tf-tel" href={PHONE_TEL} onClick={handleCall} aria-label={`Call ${PHONE_DISPLAY} now`}>
                            <PhoneIcon />
                            <span><span className="tf-tel-label">Call now </span>{PHONE_DISPLAY}</span>
                        </a>
                    </div>
                </div>

                {/* HERO */}
                <section className="tf-hero" aria-label="24 hour tyre fitting hero">
                    <div className="tf-container">
                        <div className="tf-hero-grid">
                            <div>
                                <span className="tf-eta-pill"><span className="tf-dot" aria-hidden="true"></span>ETA from 20 minutes — open right now</span>
                                <h1>
                                    {hasLocation
                                        ? <>24 Hour Tyre Fitting <span className="tf-orange">Near Me</span> in <span className="tf-orange">{locationName}</span></>
                                        : <>24 Hour Tyre Fitting <span className="tf-orange">Near Me</span></>}
                                </h1>
                                <p className="tf-lead">Need 24 hour tyre fitting near me? Our local mobile tyre fitters come to your home, workplace, or roadside with fast same-day and out-of-hours tyre fitting.</p>

                                <ul className="tf-usp">
                                    <li>24 Hour Tyre Fitting Near Me</li>
                                    <li>24/7 Mobile Tyre Fitting</li>
                                    <li>Tyre Fitting Open Now</li>
                                    <li>Same Day Tyre Fitting</li>
                                    <li>Mobile Tyre Service Near Me</li>
                                    <li>Clear Prices Before We Arrive</li>
                                </ul>

                                <div className="cta-wrap">
                                    <CallButton size="xl" />
                                    <span className="tf-urgency">⚡ Mobile fitters available near you now</span>
                                </div>
                            </div>

                            <div>
                                <div className="tf-hero-img" role="img" aria-label="24/7 mobile tyre fitting van">
                                    <div className="tf-hero-img-inner">
                                        <div className="tf-van" aria-hidden="true">🚐</div>
                                        <div className="tf-big">24/7</div>
                                        <div className="tf-sm">Mobile Tyre Fitting Van<br />We come to you</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TRUST BADGES */}
                <div className="tf-trust" aria-label="Trust badges">
                    <div className="tf-container">
                        <div className="tf-trust-row">
                            <span><span className="tf-tick">✓</span> Fully Insured</span>
                            <span><span className="tf-tick">✓</span> All Tyre Brands</span>
                            <span><span className="tf-tick">✓</span> 24/7 Service</span>
                            <span><span className="tf-tick">✓</span> ETA 20 Mins</span>
                            <span><span className="tf-tick">✓</span> No Garage Visit</span>
                            <span><span className="tf-tick">✓</span> Clear Prices</span>
                        </div>
                    </div>
                </div>

                {/* 3 STEPS */}
                <section className="tf-section" aria-label="How it works">
                    <div className="tf-container">
                        <div className="tf-section-head">
                            <h2>Fast Tyre Help in 3 Easy Steps</h2>
                            <p>From your call to back on the road — usually within an hour</p>
                        </div>
                        <div className="tf-steps">
                            <div className="tf-step">
                                <div className="tf-num">1</div>
                                <h3>Contact &amp; Dispatch</h3>
                                <p>Call our team and we&apos;ll dispatch a local mobile tyre fitter to your location with a clear price before we set off.</p>
                            </div>
                            <div className="tf-step">
                                <div className="tf-num">2</div>
                                <h3>24/7 Mobile Tyre Fitting</h3>
                                <p>Our mobile tyre fitter arrives with the tools and equipment to safely fit your tyre at home, work or roadside.</p>
                            </div>
                            <div className="tf-step">
                                <div className="tf-num">3</div>
                                <h3>Back on the Road</h3>
                                <p>We fit the tyre, check everything is secure, and have you moving again — no waiting for a garage to open.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MID CTA */}
                <section className="tf-section tf-mid" aria-label="Call now">
                    <div className="tf-container">
                        <h2>Tyre Trouble? Call Our 24/7 Line Now</h2>
                        <p>Local mobile tyre fitters dispatched in minutes — day or night</p>
                        <CallButton size="xl" />
                        <p style={{ marginTop: '.85rem', fontSize: '.92rem', color: '#cbd5e1' }}>⚡ Mobile fitters available near you now</p>
                    </div>
                </section>

                {/* REVIEWS */}
                <section className="tf-section tf-reviews" aria-label="Customer reviews">
                    <div className="tf-container">
                        <div className="tf-section-head">
                            <h2>{hasLocation ? <>Trusted by 1000s Across {locationName} &amp; Nearby</> : <>Trusted by 1000s for 24 Hour Tyre Help</>}</h2>
                            <p>Verified 5-star feedback from customers we&apos;ve helped at home, work and roadside</p>
                        </div>
                        <div className="tf-review-grid">
                            <article className="tf-review">
                                <div className="tf-stars" aria-label="5 out of 5 stars">★★★★★</div>
                                <p>&quot;Absolutely brilliant 24 hour tyre fitting service. I called late at night, the mobile tyre fitter arrived fast and had me back on the road with no garage visit needed.&quot;</p>
                                <div className="tf-reviewer">
                                    <div className="tf-avatar" aria-hidden="true">J.H.</div>
                                    <div className="tf-reviewer-meta">J.H.<small>Verified customer · Roadside</small></div>
                                </div>
                            </article>
                            <article className="tf-review">
                                <div className="tf-stars" aria-label="5 out of 5 stars">★★★★★</div>
                                <p>&quot;Fast response and clear pricing from start to finish. They provided same day tyre fitting at my home and the 24/7 mobile tyre fitter was professional throughout.&quot;</p>
                                <div className="tf-reviewer">
                                    <div className="tf-avatar" aria-hidden="true">E.S.</div>
                                    <div className="tf-reviewer-meta">E.S.<small>Verified customer · Home fit</small></div>
                                </div>
                            </article>
                            <article className="tf-review">
                                <div className="tf-stars" aria-label="5 out of 5 stars">★★★★★</div>
                                <p>&quot;Great late-night tyre help when I needed tyre fitting open now. The technician reached me quickly at the roadside, fitted the tyre safely and got me moving again.&quot;</p>
                                <div className="tf-reviewer">
                                    <div className="tf-avatar" aria-hidden="true">J.L.</div>
                                    <div className="tf-reviewer-meta">J.L.<small>Verified customer · Out-of-hours</small></div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE US */}
                <section className="tf-section tf-why" aria-label="Why choose us">
                    <div className="tf-container">
                        <div className="tf-section-head">
                            <h2>Why Choose Our 24 Hour Tyre Fitting Service</h2>
                            <p>Faster, safer and more convenient than waiting for a garage</p>
                        </div>
                        <div className="tf-why-grid">
                            <div className="tf-feature">
                                <div className="tf-feature-icon" aria-hidden="true">⚡</div>
                                <div>
                                    <h3>Fast 24/7 Response</h3>
                                    <p>Quick local help when you need tyre fitting near me at home, work or roadside — any time of day or night.</p>
                                </div>
                            </div>
                            <div className="tf-feature">
                                <div className="tf-feature-icon" aria-hidden="true">📅</div>
                                <div>
                                    <h3>Same Day Service</h3>
                                    <p>Urgent tyre fitting without waiting for a garage to open — most jobs completed the same day you call.</p>
                                </div>
                            </div>
                            <div className="tf-feature">
                                <div className="tf-feature-icon" aria-hidden="true">🔧</div>
                                <div>
                                    <h3>Skilled Mobile Fitters</h3>
                                    <p>Experienced, fully insured technicians provide safe, professional 24 hour mobile tyre fitting in all weather.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="tf-section tf-faq" aria-label="Frequently asked questions">
                    <div className="tf-container">
                        <div className="tf-section-head">
                            <h2>Frequently Asked Questions</h2>
                            <p>Everything you need to know about our 24 hour mobile tyre fitting</p>
                        </div>
                        <div className="tf-faq-list">
                            {faqs.map((f, i) => (
                                <div key={i} className={`tf-faq-item ${openFaq === i ? 'tf-open' : ''}`}>
                                    <button type="button" className="tf-faq-q" aria-expanded={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                                        <span>{f.q}</span>
                                    </button>
                                    <div className="tf-faq-a">{f.a}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* BOTTOM CTA */}
                <section className="tf-section tf-bottom" aria-label="Final call to action">
                    <div className="tf-container">
                        <h2>Get Mobile Tyre Help Right Now</h2>
                        <p>Open 24/7 · ETA from 20 minutes · Clear prices before we arrive</p>
                        <CallButton size="xl" className="cta-light" />
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="tf-footer">
                    <div className="tf-container">
                        <p><strong>Mobile Tyre Service Near Me LTD</strong> | Copyright 2026</p>
                        <p>24/7 Mobile Tyre Fitting · United Kingdom · <a href={PHONE_TEL} onClick={handleCall} style={{ textDecoration: 'underline' }}>{PHONE_DISPLAY}</a></p>
                        <p style={{ marginTop: '.6rem' }}>
                            <a href="/privacy-policy">Privacy Policy</a>
                            <a href="/terms-of-service">Terms of Service</a>
                        </p>
                    </div>
                </footer>

                {/* WhatsApp floating */}
                <a className="tf-wa" href={WA_LINK} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                    <svg viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.8 5.5 2.2 7.9L0 32l8.4-2.2c2.3 1.3 5 1.9 7.6 1.9 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.4c-2.4 0-4.7-.6-6.7-1.9l-.5-.3-5 1.3 1.3-4.9-.3-.5c-1.4-2.2-2.2-4.7-2.2-7.4C2.6 8.6 8.6 2.6 16 2.6S29.4 8.6 29.4 16 23.4 28.8 16 28.8zm7.4-9.6c-.4-.2-2.4-1.2-2.7-1.3-.4-.1-.6-.2-.9.2s-1 1.3-1.3 1.6c-.2.2-.5.3-.8.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8s.4-.5.6-.7c.2-.2.3-.4.4-.6.1-.3 0-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.8-.6-.7-.9-.7h-.7c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.3 2.4 3.7 5.9 5.2 2.1.9 2.9.9 4 .8.6-.1 2.1-.9 2.4-1.7.3-.8.3-1.5.2-1.7-.1-.1-.4-.2-.8-.4z" />
                    </svg>
                    <span className="tf-wa-label">WhatsApp Us</span>
                </a>
            </div>

            {/* Google Ads conversion tracking - Replace with your conversion ID */}
            <Script id="gads-base" strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=AW-CONVERSION_ID" />
            <Script id="gads-init" strategy="afterInteractive">
                {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','AW-CONVERSION_ID');function gtag_report_conversion(url){var cb=function(){if(typeof url!='undefined'){window.location=url}};gtag('event','conversion',{'send_to':'AW-CONVERSION_ID/LABEL','event_callback':cb});return false;}`}
            </Script>

            {/* LocalBusiness JSON-LD */}
            <Script id="lb-schema" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "@id": "https://www.mobiletyresfittingnearme.uk/#business",
                    "name": "Mobile Tyre Service Near Me LTD",
                    "telephone": "07883288831",
                    "url": "https://www.mobiletyresfittingnearme.uk",
                    "priceRange": "££",
                    "serviceType": "Mobile Tyre Fitting",
                    "areaServed": { "@type": "Country", "name": "United Kingdom" },
                    "address": { "@type": "PostalAddress", "addressCountry": "GB" },
                    "openingHoursSpecification": {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                        "opens": "00:00",
                        "closes": "23:59"
                    },
                    "makesOffer": {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "24 Hour Mobile Tyre Fitting",
                            "serviceType": "Mobile Tyre Fitting",
                            "areaServed": "United Kingdom"
                        }
                    }
                })}
            </Script>

            {/* FAQPage JSON-LD */}
            <Script id="faq-schema" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqs.map(f => ({
                        "@type": "Question",
                        "name": f.q,
                        "acceptedAnswer": { "@type": "Answer", "text": f.a }
                    }))
                })}
            </Script>
        </>
    );
}
