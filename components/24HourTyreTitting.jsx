"use client";

import React, { useState } from 'react';
import Script from 'next/script';

export default function HourTyreFitting({ locationName = null }) {
    const [openFaq, setOpenFaq] = useState(null);
    const hasLocation = typeof locationName === 'string' && locationName.trim().length > 0;
    const inLocation = hasLocation ? ` in ${locationName}` : '';

    const handleCall = (e, telUrl) => {
        e.preventDefault();
        if (typeof window !== 'undefined' && window.gtag_report_conversion) {
            window.gtag_report_conversion(telUrl);
        } else {
            window.location.href = telUrl;
        }
    };

    return (
        <>
            <div id="wa" className="d-flex align-items-center gap-2">
                <a href="https://api.whatsapp.com/send?phone=%2B447722127759&text=Need+Help%3F" className="whatsapp-button"
                    target="_blank" aria-label="Chat on WhatsApp">
                    <h5>Need Help?</h5>

                    <img src="/assets/imgs/optimized/whatsapp-80.webp" width="40" height="40" alt="WhatsApp" loading="lazy"
                        decoding="async" />
                </a>
            </div>

            <div className="wrapper position-relative ">

                <a href="#main-content" className="visually-hidden-focusable position-absolute" style={{ top: 8, left: 8, zIndex: 9999, padding: "8px 12px", background: "#000", color: "#fff", borderRadius: 4 }}>Skip to main content</a>

                <header className="header-section  d-md-none">
                    <div className="d-flex align-items-center justify-content-center flex-column">
                        <a id="callnow" onClick={(e) => handleCall(e, 'tel:07883288831')} href="tel:07883288831" className="btn-link header-btn mx-auto mx-md-0 text-start" style={{ minHeight: 44, minWidth: 44 }} aria-label="Call now for tyre fitting near me on 0788 328 8831">
                            <div className="icon">
                                <i className="fa-solid fa-phone" aria-hidden="true"></i>
                            </div>
                            <p className="m-0 text-22 pnum">0788 328 8831</p>
                            <small className="text-14">Call Now For Tyre Fitting Near Me</small>
                        </a>
                        <p className="text-16 mb-0 para">ETA From 20 mins{inLocation}</p>
                    </div>
                </header>

                <main id="main-content">

                <div className="hero-section width-fixed">
                    <div className="row flex-row-reverse flex-md-row align-items-center">
                        <div className="col-md-6 order-1 order-md-0">
                            <h4 className="text-32 highlight-text">Mobile Tyre Fitter Near Me · From £49</h4>
                            <h1 className="text-42">
                                {hasLocation
                                    ? <>Tyre Fitting Near Me <br />in <span className="highlight-text">{locationName}</span></>
                                    : <>Tyre Fitting Near Me</>}
                            </h1>
                            <p className="text-20">Looking for tyre fitting near me? Our 24/7 mobile tyre fitters come to your home, workplace, or roadside across the UK. From £49 per tyre fitted on-site with clear pricing before we arrive. ETA from 20 minutes.</p>
                            <p className="text-26 blue-text border-bottom">ETA from 20 minutes · From £49 per tyre fitted</p>
                            <ul className="ulstyle">
                                <li className="text-22">
                                    <svg className="tcb-icon tcb-local-vars-root" viewBox="0 0 24 24" data-id="icon-check_box-duotone" aria-hidden="true">
                                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                                        <path opacity=".3"
                                            d="M5 19h14V5H5v14zm2.41-7.4l2.58 2.58 6.59-6.59L17.99 9l-8 8L6 13.01l1.41-1.41z"></path>
                                        <path
                                            d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"></path>
                                    </svg>
                                    Tyre Fitting Near Me From £49 Per Tyre
                                </li>
                                <li className="text-22"><svg className="tcb-icon tcb-local-vars-root" viewBox="0 0 24 24"
                                    data-id="icon-check_box-duotone" aria-hidden="true">
                                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                                    <path opacity=".3"
                                        d="M5 19h14V5H5v14zm2.41-7.4l2.58 2.58 6.59-6.59L17.99 9l-8 8L6 13.01l1.41-1.41z"></path>
                                    <path
                                        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"></path>
                                </svg> 24/7 Mobile Tyre Fitter At Your Location</li>
                                <li className="text-22"><svg className="tcb-icon tcb-local-vars-root" viewBox="0 0 24 24"
                                    data-id="icon-check_box-duotone" aria-hidden="true">
                                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                                    <path opacity=".3"
                                        d="M5 19h14V5H5v14zm2.41-7.4l2.58 2.58 6.59-6.59L17.99 9l-8 8L6 13.01l1.41-1.41z"></path>
                                    <path
                                        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"></path>
                                </svg> Nationwide UK Coverage</li>
                                <li className="text-22"><svg className="tcb-icon tcb-local-vars-root" viewBox="0 0 24 24"
                                    data-id="icon-check_box-duotone" aria-hidden="true">
                                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                                    <path opacity=".3"
                                        d="M5 19h14V5H5v14zm2.41-7.4l2.58 2.58 6.59-6.59L17.99 9l-8 8L6 13.01l1.41-1.41z"></path>
                                    <path
                                        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"></path>
                                </svg> Balancing, Valve &amp; Old Tyre Disposal Included</li>
                                <li className="text-22"><svg className="tcb-icon tcb-local-vars-root" viewBox="0 0 24 24"
                                    data-id="icon-check_box-duotone" aria-hidden="true">
                                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                                    <path opacity=".3"
                                        d="M5 19h14V5H5v14zm2.41-7.4l2.58 2.58 6.59-6.59L17.99 9l-8 8L6 13.01l1.41-1.41z"></path>
                                    <path
                                        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"></path>
                                </svg> Clear Prices Before We Arrive</li>
                                <li className="text-22"><svg className="tcb-icon tcb-local-vars-root" viewBox="0 0 24 24"
                                    data-id="icon-check_box-duotone" aria-hidden="true">
                                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                                    <path opacity=".3"
                                        d="M5 19h14V5H5v14zm2.41-7.4l2.58 2.58 6.59-6.59L17.99 9l-8 8L6 13.01l1.41-1.41z"></path>
                                    <path
                                        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"></path>
                                </svg> 12-Month Workmanship Guarantee</li>

                            </ul>

                            <div className="mt-4 pt-2">
                                <a id="callnow" onClick={(e) => handleCall(e, 'tel:07883288831')} href="tel:07883288831" className="btn-link mx-auto mx-md-0" style={{ minHeight: 44, minWidth: 44 }} aria-label="Call 0788 328 8831 for tyre fitting near me">
                                    <p className="m-0 text-22 pnum">0788 328 8831</p>
                                    <small className="text-14">Call Now For Tyre Fitting Near Me</small>
                                </a>
                                <p className="text-16 mb-0 mt-2">Local mobile tyre fitting near me available 24/7 for home, roadside, and workplace tyre issues.</p>
                            </div>
                        </div>

                        <div className="col-md-6 order-0">
                            <div className="hero-img">
                                <div className="bg-shade"></div>
                                <img src="/1.webp" width="800" height="800" alt="Mobile tyre fitter near me van arriving for on-site tyre fitting" fetchPriority="high" decoding="async" />
                            </div>
                        </div>

                    </div>
                </div>

                <section className="pricing-section py-5" aria-labelledby="pricing-heading">
                    <style>{`
                      .price-grid { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 1.25rem; }
                      .price-card { background:#fff; border:1px solid rgba(0,0,0,0.08); border-radius:14px; padding:1.5rem 1.25rem; text-align:center; box-shadow:0 2px 10px rgba(0,0,0,0.04); height:100%; }
                      .price-card .tier { font-size:.85rem; font-weight:700; letter-spacing:.06em; text-transform:uppercase; color:#0b5fff; }
                      .price-card .price { font-size:2rem; font-weight:800; margin:.4rem 0 .25rem; color:#222; }
                      .price-card .price small { font-size:.95rem; font-weight:500; color:#6c757d; }
                      .price-card .desc { font-size:.95rem; color:#444; margin:0; }
                      .price-card.featured { border-color: rgba(255,184,0,.7); box-shadow: 0 10px 24px rgba(255,184,0,.18); }
                      @media (max-width: 991px) { .price-grid { grid-template-columns: repeat(2, minmax(0,1fr)); } }
                      @media (max-width: 575px) { .price-grid { grid-template-columns: 1fr; } }
                    `}</style>
                    <div className="width-fixed">
                        <div className="text-center mb-4">
                            <h4 className="blue-text text-24 mb-1">Honest, Up-Front Pricing</h4>
                            <h2 id="pricing-heading" className="text-42 highlight-text">Transparent Tyre Fitting Prices Near You</h2>
                            <p className="text-20 mx-auto" style={{ maxWidth: 760 }}>Every quote for tyre fitting near me includes the tyre, on-site fitting, balancing, valve, old tyre disposal and VAT. No surprise charges when our mobile tyre fitter arrives.</p>
                        </div>
                        <div className="price-grid">
                            <div className="price-card">
                                <div className="tier">Budget</div>
                                <div className="price">From £49<small> /tyre fitted</small></div>
                                <p className="desc">Reliable budget tyres fitted on-site by our mobile tyre fitter near you.</p>
                            </div>
                            <div className="price-card featured">
                                <div className="tier">Mid-Range</div>
                                <div className="price">From £79<small> /tyre fitted</small></div>
                                <p className="desc">Quality mid-range brands — the most popular choice for tyre fitting near me.</p>
                            </div>
                            <div className="price-card">
                                <div className="tier">Premium</div>
                                <div className="price">From £129<small> /tyre fitted</small></div>
                                <p className="desc">Premium brands like Michelin, Continental, Bridgestone, Pirelli &amp; Goodyear.</p>
                            </div>
                            <div className="price-card">
                                <div className="tier">Run-Flat</div>
                                <div className="price">From £159<small> /tyre fitted</small></div>
                                <p className="desc">Run-flat tyres fitted at your home, work or roadside across the UK.</p>
                            </div>
                        </div>
                        <p className="text-16 text-center mt-3 mb-0">
                            <em>Final price depends on tyre size, brand, and location. Confirmed before we arrive.</em>
                        </p>
                        <div className="text-center mt-4">
                            <a id="callnow" onClick={(e) => handleCall(e, 'tel:07883288831')} href="tel:07883288831" className="btn-link mx-auto" style={{ minHeight: 44 }} aria-label="Call 0788 328 8831 for a tyre fitting near me quote">
                                <p className="m-0 text-22 pnum">0788 328 8831</p>
                                <small className="text-14">Call Now For Tyre Fitting Near Me</small>
                            </a>
                        </div>
                    </div>
                </section>

                <section className="step-section d-none d-md-block" aria-labelledby="howitworks-heading">
                    <div className="width-fixed">
                        <div className="text-center">
                            <h2 id="howitworks-heading" className="text-50 highlight-text mb-0">How Our Tyre Fitting Near Me Service Works</h2>
                            <p className="text-36 blue-text mt-0">Get Fast Tyre Help In 3 Easy Steps</p>
                        </div>

                        <div className="row justify-content-center text-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="step-card">
                                    <div className="step-img">
                                        <img src="/assets/imgs/optimized/contact-220.webp" width="100"
                                            alt="Step 1 of tyre fitting near me - contact our dispatch team" loading="lazy" decoding="async" />
                                    </div>
                                    <div className="step-text">
                                        <h3 className="text-22 highlight-text text-uppercase">1. Call &amp; Confirm Your Quote</h3>
                                        <p className="text-18">Tell us your vehicle, tyre size and postcode. We confirm a fixed price for tyre fitting near me before our mobile tyre fitter sets off — no hidden fees.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="step-card">
                                    <div className="step-img step-lg-img">
                                        <img src="/assets/imgs/optimized/mobile-360.webp" width="100"
                                            alt="Step 2 of tyre fitting near me - mobile tyre fitter arrives at your location" loading="lazy" decoding="async" />
                                    </div>
                                    <div className="step-text">
                                        <h3 className="text-22 highlight-text text-uppercase">2. Mobile Fitter Comes To You</h3>
                                        <p className="text-18">A local mobile tyre fitter arrives at your home, workplace or roadside with the new tyre, balancing kit and disposal — typically within 20 minutes of dispatch.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="step-card">
                                    <div className="step-img">
                                        <img src="/assets/imgs/optimized/back-220.webp" width="100"
                                            alt="Step 3 of tyre fitting near me - back on the road safely" loading="lazy" decoding="async" />
                                    </div>
                                    <div className="step-text">
                                        <h3 className="text-22 highlight-text text-uppercase">3. Back On The Road Safely</h3>
                                        <p className="text-18">We fit and balance the tyre, replace the valve, dispose of the old tyre and torque-check the wheel. You&apos;re back on the road — no garage visit, no waiting.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <p className="text-18 mt-4 mx-auto" style={{ maxWidth: 880 }}>
                            Our tyre fitting near me service is designed to be as quick and stress-free as possible. From the moment you call <a href="tel:07883288831">0788 328 8831</a>, we&apos;ll match your tyre size and brand preference to local stock, give you a confirmed price, and dispatch the nearest mobile tyre fitter. Most jobs are completed within an hour of your call — including a free safety check on the surrounding wheel nuts and tread depth. Whether it&apos;s a single puncture, a blowout on the motorway, or a full set of four replacements at home, our 24/7 mobile tyre fitters handle it on the spot. Payment is taken card-on-site with VAT receipt emailed instantly.
                        </p>

                        <div className="mt-4 pt-2">
                            <a id="callnow" onClick={(e) => handleCall(e, 'tel:07883288831')} href="tel:07883288831" className="btn-link mx-auto" style={{ minHeight: 44 }} aria-label="Call 0788 328 8831 for tyre fitting near me">
                                <p className="m-0 text-22 pnum">0788 328 8831</p>
                                <small className="text-14">Call Now For Tyre Fitting Near Me</small>
                            </a>
                            <p className="text-16 text-center mb-0">Fast mobile tyre fitting near me for urgent, same-day, and out-of-hours tyre problems.</p>
                        </div>

                    </div>
                </section>

                <section className="service-section" aria-labelledby="comeyou-heading">
                    <div className="width-fixed px-md-5">
                        <h2 id="comeyou-heading" className="text-60 highlight-text text-center">
                            {hasLocation
                                ? <>Mobile Tyre Fitting Near Me <br />in <span className="text-white">{locationName}</span> — We Come To You</>
                                : <>Mobile Tyre Fitting Near Me — We Come To You</>}
                        </h2>

                        <div className="mt-4 pt-2">
                            <a id="callnow" onClick={(e) => handleCall(e, 'tel:07883288831')} href="tel:07883288831" className="btn-link mx-auto" style={{ minHeight: 44 }} aria-label="Call 0788 328 8831 for tyre fitting near me">
                                <p className="m-0 text-22 pnum">0788 328 8831</p>
                                <small className="text-14">Call Now For Tyre Fitting Near Me</small>
                            </a>
                            <p className="text-16 text-center mb-0 text-white">24/7 mobile tyre fitting near me — wherever you are in the UK.</p>
                        </div>
                    </div>
                </section>

                <section className="fitting-section" aria-labelledby="included-heading">
                    <div className="width-fixed">
                        <div className="text-center mb-4">
                            <h4 className="blue-text text-24">All-Inclusive Price</h4>
                            <h2 id="included-heading" className="highlight-text text-42">What&apos;s Included With Every Tyre Fitting Near Me</h2>
                            <p className="text-18 mx-auto" style={{ maxWidth: 820 }}>
                                Our quoted price is the price you pay. Every booking for tyre fitting near me includes everything below — there are no extra labour charges, disposal fees or VAT surprises when our mobile tyre fitter arrives.
                            </p>
                        </div>
                        <div className="row pt-4">

                            <div className="col-md-7">
                                <div className="fitting-img">
                                    <img src="/rapid.webp" width="378" height="430" alt="What's included with tyre fitting near me - mobile fitter at customer location" loading="lazy" decoding="async" />
                                </div>
                            </div>

                            <div className="col-md-5 pt-4">

                                <div className="d-flex fitting-text-item">
                                    <div className="icon"><i className="fa-solid fa-circle-check" aria-hidden="true"></i></div>
                                    <div>
                                        <h3 className="text-20">On-Site Fitting At Your Location</h3>
                                        <p className="text-20 fw-light">Home, work, layby or roadside — our mobile tyre fitter brings everything needed for tyre fitting near you.</p>
                                    </div>
                                </div>

                                <div className="d-flex fitting-text-item">
                                    <div className="icon"><i className="fa-solid fa-circle-check" aria-hidden="true"></i></div>
                                    <div>
                                        <h3 className="text-20">Wheel Balancing</h3>
                                        <p className="text-20 fw-light">Every new tyre is balanced on-vehicle for a smooth, vibration-free drive.</p>
                                    </div>
                                </div>

                                <div className="d-flex fitting-text-item">
                                    <div className="icon"><i className="fa-solid fa-circle-check" aria-hidden="true"></i></div>
                                    <div>
                                        <h3 className="text-20">New Valve Replacement</h3>
                                        <p className="text-20 fw-light">A new rubber valve (or TPMS service kit) fitted with every tyre so it seals correctly.</p>
                                    </div>
                                </div>

                                <div className="d-flex fitting-text-item">
                                    <div className="icon"><i className="fa-solid fa-circle-check" aria-hidden="true"></i></div>
                                    <div>
                                        <h3 className="text-20">Old Tyre Disposal</h3>
                                        <p className="text-20 fw-light">We take the old tyre away for proper environmental disposal — no extra fee.</p>
                                    </div>
                                </div>

                                <div className="d-flex fitting-text-item">
                                    <div className="icon"><i className="fa-solid fa-circle-check" aria-hidden="true"></i></div>
                                    <div>
                                        <h3 className="text-20">VAT Included</h3>
                                        <p className="text-20 fw-light">Prices quoted include VAT. A full VAT receipt is emailed to you on payment.</p>
                                    </div>
                                </div>

                                <div className="d-flex fitting-text-item">
                                    <div className="icon"><i className="fa-solid fa-circle-check" aria-hidden="true"></i></div>
                                    <div>
                                        <h3 className="text-20">12-Month Workmanship Guarantee</h3>
                                        <p className="text-20 fw-light">Every tyre fitting near me job is backed by our 12-month workmanship guarantee.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="when-to-call-section py-5" aria-labelledby="whentocall-heading">
                    <div className="width-fixed">
                        <div className="text-center mb-4">
                            <h4 className="blue-text text-24 mb-1">Don&apos;t Risk Driving On A Damaged Tyre</h4>
                            <h2 id="whentocall-heading" className="text-42 highlight-text">When To Call A Mobile Tyre Fitter Near You</h2>
                            <p className="text-18 mx-auto" style={{ maxWidth: 880 }}>
                                Tyre damage doesn&apos;t always announce itself. The DVSA and most UK insurers consider a tyre unsafe well before it goes completely flat. If you spot any of the signs below, book tyre fitting near me straight away — driving on a compromised tyre risks a blowout, loss of control, MOT failure or even a £2,500 fine and 3 penalty points per tyre.
                            </p>
                        </div>
                        <div className="row g-4 mt-2">
                            <div className="col-md-6 col-lg-3">
                                <div className="p-4 border rounded-3 h-100 bg-white">
                                    <i className="fa-solid fa-triangle-exclamation highlight-text" style={{ fontSize: 28 }} aria-hidden="true"></i>
                                    <h3 className="text-22 mt-2 mb-2">Puncture Or Slow Leak</h3>
                                    <p className="text-16 mb-0">Repeated pressure loss, a screw, nail or sidewall hole means the tyre needs assessing on-site by a mobile tyre fitter near you. Small tread punctures can sometimes be plugged; sidewall damage always requires replacement.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="p-4 border rounded-3 h-100 bg-white">
                                    <i className="fa-solid fa-bolt highlight-text" style={{ fontSize: 28 }} aria-hidden="true"></i>
                                    <h3 className="text-22 mt-2 mb-2">Blowout Or Burst Tyre</h3>
                                    <p className="text-16 mb-0">A sudden loss of pressure — usually with a loud bang — means the tyre is destroyed. Pull over safely, put the hazards on, and call our 24/7 tyre fitting near me line. We&apos;ll come to the roadside with a matching replacement.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="p-4 border rounded-3 h-100 bg-white">
                                    <i className="fa-solid fa-car-burst highlight-text" style={{ fontSize: 28 }} aria-hidden="true"></i>
                                    <h3 className="text-22 mt-2 mb-2">Sidewall Damage Or Bulges</h3>
                                    <p className="text-16 mb-0">Hit a kerb or pothole hard? A bulge, cut or crack in the sidewall is an instant MOT fail and a serious blowout risk. These tyres can&apos;t be repaired and need fitting near you the same day.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="p-4 border rounded-3 h-100 bg-white">
                                    <i className="fa-solid fa-ruler highlight-text" style={{ fontSize: 28 }} aria-hidden="true"></i>
                                    <h3 className="text-22 mt-2 mb-2">Low Tread (Below 3mm)</h3>
                                    <p className="text-16 mb-0">The UK legal limit is 1.6mm but most manufacturers recommend replacing at 3mm — wet stopping distance roughly doubles below that. Our mobile tyre fitter can swap your tyres at home before they become unsafe.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="brands-section py-5" aria-labelledby="brands-heading">
                    <style>{`
                      .brands-grid { display:grid; grid-template-columns: repeat(6, minmax(0,1fr)); gap: 0.75rem; }
                      .brand-pill { background:#fff; border:1px solid rgba(0,0,0,.08); border-radius:10px; padding:.9rem .5rem; text-align:center; font-weight:700; color:#222; font-size:.95rem; }
                      @media (max-width: 991px) { .brands-grid { grid-template-columns: repeat(4, minmax(0,1fr)); } }
                      @media (max-width: 575px) { .brands-grid { grid-template-columns: repeat(2, minmax(0,1fr)); } }
                    `}</style>
                    <div className="width-fixed">
                        <div className="text-center mb-4">
                            <h4 className="blue-text text-24 mb-1">Premium &amp; Budget Brands</h4>
                            <h2 id="brands-heading" className="text-42 highlight-text">Tyre Brands We Fit</h2>
                            <p className="text-18 mx-auto" style={{ maxWidth: 820 }}>
                                Our mobile vans carry the UK&apos;s most-requested brands and can source virtually any size for tyre fitting near me. Tell us what you prefer — premium, mid-range or budget — and we&apos;ll match it on-site.
                            </p>
                        </div>
                        <div className="brands-grid">
                            {["Michelin", "Continental", "Pirelli", "Bridgestone", "Goodyear", "Dunlop", "Hankook", "Avon", "Falken", "Yokohama", "Kumho", "Budget Brands"].map((brand) => (
                                <div key={brand} className="brand-pill">{brand}</div>
                            ))}
                        </div>
                        <p className="text-16 text-center mt-3 mb-0">Can&apos;t see the brand you want? Call <a href="tel:07883288831">0788 328 8831</a> — we&apos;ll source it for tyre fitting near you.</p>
                    </div>
                </section>




                <section className="coverage-section py-5">
                    <style>{`
                      .coverage-grid {
                        display: grid;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                        gap: 1.5rem;
                      }
                      .coverage-card {
                        background: #fff;
                        border: 1px solid rgba(0,0,0,0.08);
                        border-radius: 14px;
                        padding: 1.75rem 1.5rem;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.04);
                        transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
                        height: 100%;
                      }
                      .coverage-card:hover {
                        transform: translateY(-4px);
                        box-shadow: 0 12px 28px rgba(0,0,0,0.08);
                        border-color: rgba(255,184,0,0.5);
                      }
                      .coverage-icon-wrap {
                        width: 56px; height: 56px;
                        border-radius: 14px;
                        background: linear-gradient(135deg, rgba(255,184,0,0.18), rgba(255,184,0,0.06));
                        display: inline-flex; align-items: center; justify-content: center;
                        margin-bottom: 1rem;
                      }
                      .coverage-region-title { font-size: 1.125rem; font-weight: 700; margin: 0 0 .25rem; }
                      .coverage-postcodes {
                        display: inline-block;
                        font-size: .75rem; font-weight: 600; letter-spacing: .04em;
                        color: #0b5fff; background: rgba(11,95,255,0.08);
                        padding: .25rem .55rem; border-radius: 999px;
                        margin-bottom: .85rem;
                      }
                      .coverage-cities { list-style: none; padding: 0; margin: 0; font-size: .95rem; line-height: 1.7; color: #2a2a2a; }
                      .coverage-cities li { display: flex; align-items: center; }
                      .coverage-cities li i { color: #ffb800; font-size: 10px; margin-right: .5rem; }
                      .coverage-more { font-size: .85rem; color: #6c757d; margin-top: .5rem; }
                      .coverage-scroll-hint { display: none; }

                      @media (max-width: 1199px) {
                        .coverage-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
                      }
                      @media (max-width: 991px) {
                        .coverage-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
                      }
                      @media (max-width: 767px) {
                        .coverage-grid {
                          display: flex;
                          grid-template-columns: none;
                          overflow-x: auto;
                          scroll-snap-type: x mandatory;
                          -webkit-overflow-scrolling: touch;
                          gap: 0;
                          padding: .25rem 0 1rem;
                          margin: 0;
                          scrollbar-width: none;
                          scroll-padding-inline: 0;
                        }
                        .coverage-grid::-webkit-scrollbar { display: none; }
                        .coverage-grid > .coverage-item {
                          flex: 0 0 100%;
                          max-width: 100%;
                          scroll-snap-align: center;
                          padding: 0;
                        }
                        .coverage-scroll-hint {
                          display: block;
                          text-align: center;
                          font-size: .85rem;
                          color: #6c757d;
                          margin-top: .5rem;
                        }
                      }
                    `}</style>
                    <div className="width-fixed">
                        <div className="text-center mb-4">
                            <h4 className="blue-text text-24 mb-1">Nationwide Mobile Tyre Fitters</h4>
                            <h2 className="text-42 highlight-text">Areas We Cover For Tyre Fitting Near Me</h2>
                            <p className="text-20 mx-auto" style={{ maxWidth: 760 }}>
                                Our 24/7 mobile tyre fitters operate across the UK including London, Essex, Kent, Luton, Canterbury, Brighton, Birmingham, Manchester, Leeds and Bristol. Swipe through the regions below — if you can&apos;t see your postcode, give us a call and we&apos;ll confirm in seconds.
                            </p>
                        </div>

                        <div className="coverage-grid mt-2">
                            {[
                                {
                                    icon: "fa-solid fa-city",
                                    title: "London & Greater London",
                                    postcodes: "E · N · SE · SW · W · WC",
                                    cities: ["Central London", "Croydon", "Bromley", "Romford", "Kingston"],
                                    more: 12,
                                },
                                {
                                    icon: "fa-solid fa-tree-city",
                                    title: "South East",
                                    postcodes: "BN · GU · OX · PO · RG · SO",
                                    cities: ["Brighton", "Guildford", "Reading", "Oxford", "Southampton"],
                                    more: 5,
                                },
                                {
                                    icon: "fa-solid fa-water",
                                    title: "South West",
                                    postcodes: "BA · BS · EX · GL · PL",
                                    cities: ["Bristol", "Bath", "Exeter", "Plymouth", "Gloucester"],
                                    more: 3,
                                },
                                {
                                    icon: "fa-solid fa-industry",
                                    title: "Midlands",
                                    postcodes: "B · CV · DE · LE · NG · WV",
                                    cities: ["Birmingham", "Coventry", "Leicester", "Nottingham", "Derby"],
                                    more: 6,
                                },
                                {
                                    icon: "fa-solid fa-mountain-city",
                                    title: "North West",
                                    postcodes: "L · M · PR · WA · BB · FY",
                                    cities: ["Manchester", "Liverpool", "Preston", "Blackpool", "Chester"],
                                    more: 9,
                                },
                                {
                                    icon: "fa-solid fa-warehouse",
                                    title: "North East & Yorkshire",
                                    postcodes: "LS · S · NE · BD · HU · YO",
                                    cities: ["Leeds", "Sheffield", "Newcastle", "Bradford", "York"],
                                    more: 8,
                                },
                                {
                                    icon: "fa-solid fa-leaf",
                                    title: "East of England",
                                    postcodes: "CB · CM · MK · NR · IP · PE",
                                    cities: ["Cambridge", "Milton Keynes", "Chelmsford", "Norwich", "Ipswich"],
                                    more: 6,
                                },
                                {
                                    icon: "fa-solid fa-road",
                                    title: "Wales & Borders",
                                    postcodes: "CF · LL · NP · SA · SY",
                                    cities: ["Cardiff", "Swansea", "Newport", "Wrexham", "Shrewsbury"],
                                    more: 2,
                                },
                            ].map((region) => (
                                <div key={region.title} className="coverage-item">
                                    <div className="coverage-card">
                                        <div className="coverage-icon-wrap">
                                            <i className={`${region.icon} highlight-text`} style={{ fontSize: 22 }}></i>
                                        </div>
                                        <h3 className="coverage-region-title">{region.title}</h3>
                                        <span className="coverage-postcodes">{region.postcodes}</span>
                                        <ul className="coverage-cities">
                                            {region.cities.map((city) => (
                                                <li key={city}>
                                                    <i className="fa-solid fa-location-dot"></i>
                                                    {city}
                                                </li>
                                            ))}
                                        </ul>
                                        {region.more > 0 && (
                                            <p className="coverage-more mb-0">+ {region.more} more nearby towns</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="coverage-scroll-hint">
                            <i className="fa-solid fa-arrow-left me-1"></i> Swipe to see more regions <i className="fa-solid fa-arrow-right ms-1"></i>
                        </p>

                        <div className="text-center mt-4 pt-2">
                            <p className="text-18 mb-2">Not sure if we cover your postcode?</p>
                            <a id="callnow" onClick={(e) => handleCall(e, 'tel:07883288831')} href="tel:07883288831" className="btn-link mx-auto">
                                <p className="m-0 text-22 pnum">0788 328 8831</p>
                                <small className="text-14">Call to confirm in seconds</small>
                            </a>
                        </div>
                    </div>
                </section>

                <section className="payment-section py-5" aria-labelledby="payment-heading">
                    <div className="width-fixed">
                        <div className="row align-items-center g-4">
                            <div className="col-md-6">
                                <h4 className="blue-text text-24 mb-1">Pay How You Want</h4>
                                <h2 id="payment-heading" className="text-42 highlight-text mb-3">Payment Methods</h2>
                                <p className="text-18 mb-0">
                                    Our mobile tyre fitter accepts all major UK payment methods on-site, on the day of tyre fitting near you. Pay by debit or credit card (Visa, Mastercard, American Express), instant bank transfer, Apple Pay or Google Pay — there&apos;s no cash handling and no deposit required to book. A full VAT receipt is emailed to you the moment payment clears, and we&apos;re happy to invoice fleet, business and insurance customers on request.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <ul className="list-unstyled text-18 d-grid gap-2 mb-0" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
                                    <li className="p-3 border rounded-3 bg-white"><i className="fa-solid fa-credit-card highlight-text me-2" aria-hidden="true"></i>Visa &amp; Mastercard</li>
                                    <li className="p-3 border rounded-3 bg-white"><i className="fa-brands fa-cc-amex highlight-text me-2" aria-hidden="true"></i>American Express</li>
                                    <li className="p-3 border rounded-3 bg-white"><i className="fa-brands fa-apple-pay highlight-text me-2" aria-hidden="true"></i>Apple Pay</li>
                                    <li className="p-3 border rounded-3 bg-white"><i className="fa-brands fa-google-pay highlight-text me-2" aria-hidden="true"></i>Google Pay</li>
                                    <li className="p-3 border rounded-3 bg-white"><i className="fa-solid fa-building-columns highlight-text me-2" aria-hidden="true"></i>Bank Transfer</li>
                                    <li className="p-3 border rounded-3 bg-white"><i className="fa-solid fa-file-invoice highlight-text me-2" aria-hidden="true"></i>Fleet / Business Invoicing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="guarantee-section py-5" aria-labelledby="guarantee-heading">
                    <div className="width-fixed">
                        <div className="text-center">
                            <h4 className="blue-text text-24 mb-1">12-Month Workmanship Cover</h4>
                            <h2 id="guarantee-heading" className="text-42 highlight-text mb-3">Our Tyre Fitting Near Me Guarantee</h2>
                            <p className="text-18 mx-auto mb-0" style={{ maxWidth: 880 }}>
                                Every job is backed by our 12-month tyre fitting workmanship guarantee. If the balance, valve, mounting or torque on any tyre we fit fails within twelve months of fitting, we&apos;ll return to your location and put it right — free of charge. All our mobile tyre fitters are fully insured, DVSA-trained and use calibrated balancing and torque-limited equipment. New tyres remain covered by their manufacturer&apos;s warranty against defects, and we&apos;ll happily handle any warranty claim on your behalf. Honest, transparent, and fully accountable — that&apos;s the standard you should expect from any mobile tyre fitter near you.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="customer-section" aria-labelledby="reviews-heading">
                    <div className="width-fixed">
                        <div className="text-center">
                            <h4 className="text-36 blue-text">
                                {hasLocation
                                    ? <>Trusted by <span className="highlight-text">1000s</span> Across {locationName} &amp; Nearby Areas</>
                                    : <>Rated <span className="highlight-text">4.9/5</span> by 1,247+ UK Customers</>}
                            </h4>
                            <h2 id="reviews-heading" className="text-60 highlight-text">Tyre Fitting Near Me Reviews</h2>
                        </div>

                        <div className="row">

                            <div className="col-md-4">
                                <div className="customer-card">
                                    <div className="c-profile">
                                        <img src="/assets/imgs/optimized/jessy-160.webp" width="100"
                                            alt="Customer review - mobile tyre fitting service" loading="lazy" decoding="async" />
                                    </div>

                                    <div className="c-card-text text-center">
                                        <i className="fa-solid fa-quote-left quote-icon"></i>
                                        <p className="text-18 text-white mb-0">Got a flat at 2am on the M25 and these guys were a lifesaver. A mobile tyre fitter was with me in under 30 minutes, fitted a new tyre on the hard shoulder, and the price was exactly what I was quoted on the phone.</p>
                                        <p className="text-18 text-white">Couldn&apos;t recommend more!</p>
                                    </div>

                                    <div className="c-card-foot text-center">
                                        <div className="d-flex justify-content-center stars">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <h5 className="text-20 text-white fw-normal mb-0 mt-1">James Henderson</h5>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="customer-card">
                                    <div className="c-profile">
                                        <img src="/assets/imgs/optimized/emma-160.webp" width="100"
                                            alt="Mobile tyre fitting service" loading="lazy" decoding="async" />
                                    </div>

                                    <div className="c-card-text text-center">
                                        <i className="fa-solid fa-quote-left quote-icon"></i>
                                        <p className="text-18 text-white mb-0">Punctured a tyre on the school run and had no time to sit at a garage. Booked online and they came to my driveway within the hour. Friendly, professional, and the kids didn&apos;t miss a thing.</p>
                                        <p className="text-18 text-white">Brilliant service!</p>
                                    </div>

                                    <div className="c-card-foot text-center">
                                        <div className="d-flex justify-content-center stars">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <h5 className="text-20 text-white fw-normal mb-0 mt-1">Sophie Patel</h5>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="customer-card">
                                    <div className="c-profile">
                                        <img src="/assets/imgs/optimized/josh-160.webp" width="100"
                                            alt="Mobile tyre fitting service" loading="lazy" decoding="async" />
                                    </div>

                                    <div className="c-card-text text-center">
                                        <i className="fa-solid fa-quote-left quote-icon"></i>
                                        <p className="text-18 text-white mb-0">Blowout on a Sunday evening when every garage was shut. Called this lot, ETA was 25 mins, tyre was fitted and balanced on the spot. Honest pricing and a properly skilled fitter.</p>
                                        <p className="text-18 text-white">Will use again.</p>
                                    </div>

                                    <div className="c-card-foot text-center">
                                        <div className="d-flex justify-content-center stars">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <h5 className="text-20 text-white fw-normal mb-0 mt-1">Daniel O&apos;Connor</h5>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section className="why-choose-us" aria-labelledby="whychoose-heading">
                    <div className="width-fixed">
                        <div className="text-center">
                            <h2 id="whychoose-heading" className="text-42 highlight-text">Why Choose Our Tyre Fitting Near Me Service</h2>
                        </div>

                        <div className="row mt-4 mt-md-5">
                            <div className="col-md-6">
                                <div className="choose-img">
                                    <div className="img-wrap">
                                        <img src="https://uploads.webspires.co.uk/mtfnwanees/mtf.webp"
                                            width="1000" height="1092"
                                            alt="Why choose our mobile tyre fitting service - professional technician with van"
                                            loading="lazy" decoding="async" />
                                    </div>
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 234.7"
                                        xmlSpace="preserve" data-position="bottom" data-ct="38730"
                                        className="svg-shape-bottom" width="100%" preserveAspectRatio="none">

                                        <path className="p172ec649bf9"
                                            d="M1000,2.2L571,172c-60.6,23.6-85.4,22.6-146.2,0L0,0v234.7h1000V2.2z">
                                        </path>
                                    </svg>
                                </div>
                            </div>

                            <div className="col-md-6 mt-5 mt-md-0 pt-4">
                                <div className="d-flex choose-text-item">
                                    <div className="icon">
                                        <i className="fa-solid fa-circle-check"></i>
                                    </div>
                                    <div className="">
                                        <h5 className="text-20 mb-1">Fast 24/7 Response</h5>
                                        <p className="text-20 fw-light">Quick help when you need tyre fitting near me at home, work, or roadside.</p>
                                    </div>
                                </div>

                                <div className="d-flex choose-text-item">
                                    <div className="icon">
                                        <i className="fa-solid fa-circle-check"></i>
                                    </div>
                                    <div className="">
                                        <h5 className="text-20 mb-1">Same Day Service</h5>
                                        <p className="text-20 fw-light">We help with urgent tyre fitting when you need fast support and cannot wait for a garage.</p>
                                    </div>
                                </div>

                                <div className="d-flex choose-text-item">
                                    <div className="icon">
                                        <i className="fa-solid fa-circle-check"></i>
                                    </div>
                                    <div className="">
                                        <h5 className="text-20 mb-1">Skilled Mobile Fitters</h5>
                                        <p className="text-20 fw-light">Experienced technicians provide safe, professional 24 hour mobile tyre fitting near you.</p>
                                    </div>
                                </div>

                                <div className="mt-4 pt-2">
                                    <a id="callnow" onClick={(e) => handleCall(e, 'tel:07883288831')} href="tel:07883288831" className="btn-link mx-auto" style={{ minHeight: 44 }} aria-label="Call 0788 328 8831 for tyre fitting near me">
                                        <p className="m-0 text-22 pnum">0788 328 8831</p>
                                        <small className="text-14">Call Now For Tyre Fitting Near Me</small>
                                    </a>
                                    <p className="text-16 text-center mb-0">Local mobile tyre fitting near me available for roadside, home, and workplace tyre issues.</p>
                                </div>

                            </div>

                        </div>

                    </div>
                </section>



                <section className="faq-section" aria-labelledby="faq-heading">
                    <div className="width-fixed">
                        <div className="text-center mb-4">
                            <h2 id="faq-heading" className="text-36 highlight-text">Tyre Fitting Near Me — Frequently Asked Questions</h2>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className={`faq-item ${openFaq === 0 ? 'active' : ''}`}>
                                    <button type="button" className="faq-question w-100 text-start" onClick={() => setOpenFaq(openFaq === 0 ? null : 0)} aria-expanded={openFaq === 0} style={{ minHeight: 44 }}>
                                        <h3 className="text-20 mb-0">How much does tyre fitting near me cost?</h3>
                                        <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
                                    </button>
                                    <div className="faq-answer">
                                        <p className="text-18">Tyre fitting near me starts from £49 per tyre fitted on-site, including balancing, valve and old tyre disposal. Final price depends on tyre size and brand and is confirmed before we arrive.</p>
                                    </div>
                                </div>
                                <div className={`faq-item ${openFaq === 1 ? 'active' : ''}`}>
                                    <button type="button" className="faq-question w-100 text-start" onClick={() => setOpenFaq(openFaq === 1 ? null : 1)} aria-expanded={openFaq === 1} style={{ minHeight: 44 }}>
                                        <h3 className="text-20 mb-0">How quickly can a mobile tyre fitter reach me?</h3>
                                        <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
                                    </button>
                                    <div className="faq-answer">
                                        <p className="text-18">Our ETA is typically from 20 minutes depending on traffic, fitter availability and your location.</p>
                                    </div>
                                </div>
                                <div className={`faq-item ${openFaq === 2 ? 'active' : ''}`}>
                                    <button type="button" className="faq-question w-100 text-start" onClick={() => setOpenFaq(openFaq === 2 ? null : 2)} aria-expanded={openFaq === 2} style={{ minHeight: 44 }}>
                                        <h3 className="text-20 mb-0">Do you offer 24 hour tyre fitting near me?</h3>
                                        <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
                                    </button>
                                    <div className="faq-answer">
                                        <p className="text-18">Yes — our mobile tyre fitting service operates 24/7, 365 days a year including bank holidays.</p>
                                    </div>
                                </div>
                                <div className={`faq-item ${openFaq === 3 ? 'active' : ''}`}>
                                    <button type="button" className="faq-question w-100 text-start" onClick={() => setOpenFaq(openFaq === 3 ? null : 3)} aria-expanded={openFaq === 3} style={{ minHeight: 44 }}>
                                        <h3 className="text-20 mb-0">Where do you provide tyre fitting near me?</h3>
                                        <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
                                    </button>
                                    <div className="faq-answer">
                                        <p className="text-18">Nationwide across the UK including London, Essex, Kent, Luton, Canterbury, Brighton, Birmingham, Manchester, Leeds and Bristol.</p>
                                    </div>
                                </div>
                                <div className={`faq-item ${openFaq === 4 ? 'active' : ''}`}>
                                    <button type="button" className="faq-question w-100 text-start" onClick={() => setOpenFaq(openFaq === 4 ? null : 4)} aria-expanded={openFaq === 4} style={{ minHeight: 44 }}>
                                        <h3 className="text-20 mb-0">Do I need to visit a garage?</h3>
                                        <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
                                    </button>
                                    <div className="faq-answer">
                                        <p className="text-18">No. Our mobile tyre fitter comes to your home, workplace or roadside and fits the tyre on-site.</p>
                                    </div>
                                </div>
                                <div className={`faq-item ${openFaq === 5 ? 'active' : ''}`}>
                                    <button type="button" className="faq-question w-100 text-start" onClick={() => setOpenFaq(openFaq === 5 ? null : 5)} aria-expanded={openFaq === 5} style={{ minHeight: 44 }}>
                                        <h3 className="text-20 mb-0">What payment methods do you accept?</h3>
                                        <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
                                    </button>
                                    <div className="faq-answer">
                                        <p className="text-18">We accept all major debit and credit cards, bank transfer, Apple Pay and Google Pay.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Script id="tfnm-schema-graph" type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "LocalBusiness",
                                "@id": "https://www.mobiletyresfittingnearme.uk/#business",
                                "name": "Tyre Fitting Near Me LTD",
                                "url": "https://www.mobiletyresfittingnearme.uk/tyre-fitting-near-me",
                                "telephone": "+44-788-328-8831",
                                "priceRange": "£49-£250",
                                "image": "https://www.mobiletyresfittingnearme.uk/1.webp",
                                "address": {
                                    "@type": "PostalAddress",
                                    "addressCountry": "GB",
                                    "addressRegion": "England"
                                },
                                "openingHoursSpecification": {
                                    "@type": "OpeningHoursSpecification",
                                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                                    "opens": "00:00",
                                    "closes": "23:59"
                                },
                                "areaServed": [
                                    { "@type": "City", "name": "London" },
                                    { "@type": "City", "name": "Essex" },
                                    { "@type": "City", "name": "Kent" },
                                    { "@type": "City", "name": "Luton" },
                                    { "@type": "City", "name": "Canterbury" },
                                    { "@type": "Country", "name": "United Kingdom" }
                                ],
                                "identifier": {
                                    "@type": "PropertyValue",
                                    "propertyID": "Companies House",
                                    "value": "17137653"
                                },
                                "aggregateRating": {
                                    "@type": "AggregateRating",
                                    "ratingValue": "4.9",
                                    "reviewCount": "1247"
                                }
                            },
                            {
                                "@type": "Service",
                                "name": "Mobile Tyre Fitting Near Me",
                                "serviceType": "Mobile Tyre Fitting",
                                "provider": { "@id": "https://www.mobiletyresfittingnearme.uk/#business" },
                                "areaServed": { "@type": "Country", "name": "United Kingdom" },
                                "offers": {
                                    "@type": "Offer",
                                    "price": "49.00",
                                    "priceCurrency": "GBP",
                                    "availability": "https://schema.org/InStock"
                                }
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    { "@type": "Question", "name": "How much does tyre fitting near me cost?", "acceptedAnswer": { "@type": "Answer", "text": "Tyre fitting near me starts from £49 per tyre fitted on site, including balancing, valve and old tyre disposal. Final price depends on tyre size and brand." } },
                                    { "@type": "Question", "name": "How quickly can a mobile tyre fitter reach me?", "acceptedAnswer": { "@type": "Answer", "text": "Our ETA is typically from 20 minutes depending on traffic, fitter availability and your location." } },
                                    { "@type": "Question", "name": "Do you offer 24 hour tyre fitting near me?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, our mobile tyre fitting service operates 24/7, 365 days a year including bank holidays." } },
                                    { "@type": "Question", "name": "Where do you provide tyre fitting near me?", "acceptedAnswer": { "@type": "Answer", "text": "Nationwide across the UK including London, Essex, Kent, Luton, Canterbury, Brighton, Birmingham, Manchester, Leeds and Bristol." } },
                                    { "@type": "Question", "name": "Do I need to visit a garage?", "acceptedAnswer": { "@type": "Answer", "text": "No. Our mobile tyre fitter comes to your home, workplace or roadside and fits the tyre on site." } },
                                    { "@type": "Question", "name": "What payment methods do you accept?", "acceptedAnswer": { "@type": "Answer", "text": "We accept all major debit and credit cards, bank transfer, Apple Pay and Google Pay." } }
                                ]
                            },
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mobiletyresfittingnearme.uk/" },
                                    { "@type": "ListItem", "position": 2, "name": "Tyre Fitting Near Me", "item": "https://www.mobiletyresfittingnearme.uk/tyre-fitting-near-me" }
                                ]
                            }
                        ]
                    })}
                </Script>

                </main>

                <footer className="footer-section">
                    <div className="ft-content text-center">

                        <p className="text-16 text-h text-white mb-0">
                            Tyre Fitting Near Me LTD
                        </p>
                        <p className="text-14 text-white mb-1">Companies House No: 17137653</p>
                        <p className="text-14 text-white mb-1">
                            Phone: <a href="tel:07883288831" className="text-white">0788 328 8831</a>
                            &nbsp;&middot;&nbsp;
                            WhatsApp: +44 7722 127759
                        </p>
                        <p className="text-14 text-white mb-0">Open 24/7, Monday – Sunday (including bank holidays)</p>
                        <p className="text-16 text-white mb-0 mt-2">Copyright 2026, all rights reserved.</p>

                        <div className="links d-flex justify-content-center text-uppercase py-2">
                        </div>


                        <div className="footer-links text-center mt-2 mb-2">
                            <a href="/privacy-policy">Privacy Policy</a>
                            <a href="/terms-of-service">Terms of Service</a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
