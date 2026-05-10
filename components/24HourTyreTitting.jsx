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

                <header className="header-section  d-md-none">
                    <div className="d-flex align-items-center justify-content-center flex-column">
                        <a id="callnow" onClick={(e) => handleCall(e, 'tel:07883288831')} href="tel:07883288831" className="btn-link header-btn mx-auto mx-md-0 text-start">
                            <div className="icon">
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <p className="m-0 text-22 pnum">0788 328 8831</p>
                            <small className="text-14">Call Now For 24 Hour Tyre Fitting</small>
                        </a>
                        <p className="text-16 mb-0 para">ETA From 20 mins{inLocation}</p>
                    </div>
                </header>

                <div className="hero-section width-fixed">
                    <div className="row flex-row-reverse flex-md-row align-items-center">
                        <div className="col-md-6 order-1 order-md-0">
                            <h4 className="text-32 highlight-text">24/7 Mobile Service</h4>
                            <h1 className="text-42">
                                {hasLocation
                                    ? <>Tyre Fitting Near Me <br />in <span className="highlight-text">{locationName}</span></>
                                    : <>Tyre Fitting Near Me</>}
                            </h1>
                            <p className="text-20">Need 24 hour tyre fitting near me? Our local mobile tyre fitters come to your home, workplace, or roadside with fast same-day and out-of-hours tyre fitting.</p>
                            <p className="text-26 blue-text border-bottom">ETA from 20 minutes</p>
                            <ul className="ulstyle">
                                <li className="text-22">
                                    <svg className="tcb-icon tcb-local-vars-root" viewBox="0 0 24 24" data-id="icon-check_box-duotone">
                                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                                        <path opacity=".3"
                                            d="M5 19h14V5H5v14zm2.41-7.4l2.58 2.58 6.59-6.59L17.99 9l-8 8L6 13.01l1.41-1.41z"></path>
                                        <path
                                            d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"></path>
                                    </svg>
                                    24 Hour Tyre Fitting Near Me
                                </li>
                                <li className="text-22"><svg className="tcb-icon tcb-local-vars-root" viewBox="0 0 24 24"
                                    data-id="icon-check_box-duotone">
                                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                                    <path opacity=".3"
                                        d="M5 19h14V5H5v14zm2.41-7.4l2.58 2.58 6.59-6.59L17.99 9l-8 8L6 13.01l1.41-1.41z"></path>
                                    <path
                                        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"></path>
                                </svg> 24/7 Mobile Tyre Fitting</li>
                                <li className="text-22"><svg className="tcb-icon tcb-local-vars-root" viewBox="0 0 24 24"
                                    data-id="icon-check_box-duotone">
                                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                                    <path opacity=".3"
                                        d="M5 19h14V5H5v14zm2.41-7.4l2.58 2.58 6.59-6.59L17.99 9l-8 8L6 13.01l1.41-1.41z"></path>
                                    <path
                                        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"></path>
                                </svg> Tyre Fitting Open Now</li>
                                <li className="text-22"><svg className="tcb-icon tcb-local-vars-root" viewBox="0 0 24 24"
                                    data-id="icon-check_box-duotone">
                                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                                    <path opacity=".3"
                                        d="M5 19h14V5H5v14zm2.41-7.4l2.58 2.58 6.59-6.59L17.99 9l-8 8L6 13.01l1.41-1.41z"></path>
                                    <path
                                        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"></path>
                                </svg> Same Day Tyre Fitting</li>
                                <li className="text-22"><svg className="tcb-icon tcb-local-vars-root" viewBox="0 0 24 24"
                                    data-id="icon-check_box-duotone">
                                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                                    <path opacity=".3"
                                        d="M5 19h14V5H5v14zm2.41-7.4l2.58 2.58 6.59-6.59L17.99 9l-8 8L6 13.01l1.41-1.41z"></path>
                                    <path
                                        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"></path>
                                </svg> Mobile Tyre Service Near Me</li>
                                <li className="text-22"><svg className="tcb-icon tcb-local-vars-root" viewBox="0 0 24 24"
                                    data-id="icon-check_box-duotone">
                                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                                    <path opacity=".3"
                                        d="M5 19h14V5H5v14zm2.41-7.4l2.58 2.58 6.59-6.59L17.99 9l-8 8L6 13.01l1.41-1.41z"></path>
                                    <path
                                        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"></path>
                                </svg> Clear Prices Before We Arrive</li>

                            </ul>

                            <div className="mt-4 pt-2">
                                <a id="callnow" onClick={(e) => handleCall(e, 'tel:07883288831')} href="tel:07883288831" className="btn-link mx-auto mx-md-0">
                                    <p className="m-0 text-22 pnum">0788 328 8831</p>
                                    <small className="text-14">Call Now For 24 Hour Tyre Fitting</small>
                                </a>
                                <p className="text-16 mb-0 mt-2">Local 24/7 mobile tyre fitting available for home, roadside, and workplace tyre issues.</p>
                            </div>
                        </div>

                        <div className="col-md-6 order-0">
                            <div className="hero-img">
                                <div className="bg-shade"></div>
                                <img src="/1.webp" width="700" height="700" alt="Mobile tyre fitting van" fetchPriority="high" decoding="async" />
                            </div>
                        </div>

                    </div>
                </div>

                <section className="step-section d-none d-md-block">
                    <div className="width-fixed">
                        <div className="text-center">
                            <h2 className="text-50 highlight-text mb-0">24 Hour Tyre Fitting Near You - We Come to You</h2>
                            <p className="text-36 blue-text mt-0">Get Fast Tyre Help in 3 Easy Steps</p>
                        </div>

                        <div className="row justify-content-center text-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="step-card">
                                    <div className="step-img">
                                        <img src="/assets/imgs/optimized/contact-220.webp" width="100"
                                            alt="Mobile tyre fitting service" loading="lazy" decoding="async" />
                                    </div>
                                    <div className="step-text">
                                        <h4 className="text-22 highlight-text text-uppercase">Contact and Dispatch</h4>
                                        <p className="text-18">When you need 24 hour tyre fitting near me, call our team and we&apos;ll dispatch a local mobile tyre fitter to your location.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="step-card">
                                    <div className="step-img step-lg-img">
                                        <img src="/assets/imgs/optimized/mobile-360.webp" width="100"
                                            alt="Mobile tyre fitting service" loading="lazy" decoding="async" />
                                    </div>
                                    <div className="step-text">
                                        <h4 className="text-22 highlight-text text-uppercase">24/7 Mobile Tyre Fitting</h4>
                                        <p className="text-18">Our mobile tyre fitting service arrives with the tools and equipment needed to fit your tyre safely at home, work, or roadside.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="step-card">
                                    <div className="step-img">
                                        <img src="/assets/imgs/optimized/back-220.webp" width="100"
                                            alt="Mobile tyre fitting service" loading="lazy" decoding="async" />
                                    </div>
                                    <div className="step-text">
                                        <h4 className="text-22 highlight-text text-uppercase">Back on the Road</h4>
                                        <p className="text-18">We fit the tyre, check everything is secure, and help you get moving again without waiting for a garage to open.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="mt-4 pt-2">
                            <a id="callnow" onClick={(e) => handleCall(e, 'tel:07883288831')} href="tel:07883288831" className="btn-link mx-auto">
                                <p className="m-0 text-22 pnum">0788 328 8831</p>
                                <small className="text-14">Call Now For 24 Hour Tyre Fitting</small>
                            </a>
                            <p className="text-16 text-center mb-0">Fast mobile tyre fitting for urgent, same day, and out-of-hours tyre problems.</p>
                        </div>

                    </div>
                </section>

                <section className="service-section">
                    <div className="width-fixed px-md-5">
                        <h2 className="text-60 highlight-text text-center">
                            {hasLocation
                                ? <>24 Hour Tyre Fitting Near You <br />in <span className="text-white">{locationName}</span></>
                                : <>24 Hour Tyre Fitting Near You</>}
                        </h2>

                        <div className="mt-4 pt-2">
                            <a id="callnow" onClick={(e) => handleCall(e, 'tel:07883288831')} href="tel:07883288831" className="btn-link mx-auto">
                                <p className="m-0 text-22 pnum">0788 328 8831</p>
                                <small className="text-14">Call Now For 24 Hour Tyre Fitting</small>
                            </a>
                            <p className="text-16 text-center mb-0 text-white">24/7 mobile tyre fitting available when tyre problems happen.</p>
                        </div>
                    </div>
                </section>

                <section className="fitting-section">
                    <div className="width-fixed">
                        <div className="text-center mb-4">
                            <h4 className="blue-text text-24">Your Rapid Response Partner for</h4>
                            <h2 className="highlight-text text-42">Fast 24 Hour Tyre Fitting Near You</h2>
                        </div>
                        <div className="row pt-4">

                            <div className="col-md-7">
                                <div className="fitting-img">
                                    <img src="/rapid.webp" width="378" height="430" alt="Fast 24 hour mobile tyre fitting" loading="lazy" decoding="async" />
                                </div>
                            </div>

                            <div className="col-md-5 pt-4">

                                <div className="d-flex fitting-text-item">
                                    <div className="icon">
                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                    </div>
                                    <div className="">
                                        <h5 className="text-20">24/7 Mobile Tyre Fitting:</h5>
                                        <p className="text-20 fw-light">Our local mobile tyre fitters provide fast tyre fitting support day or night at your location.</p>
                                    </div>
                                </div>

                                <div className="d-flex fitting-text-item">
                                    <div className="icon">
                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                    </div>
                                    <div className="">
                                        <h5 className="text-20">Same Day Tyre Fitting:</h5>
                                        <p className="text-20 fw-light">When tyre stock and local availability allow, we can provide same day tyre fitting at your home, workplace, or roadside.</p>
                                    </div>
                                </div>

                                <div className="d-flex fitting-text-item">
                                    <div className="icon">
                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                    </div>
                                    <div className="">
                                        <h5 className="text-20">Out-of-Hours Tyre Help:</h5>
                                        <p className="text-20 fw-light">If your tyre problem happens late, early, or outside normal garage hours, our mobile tyre service can help you get moving again.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
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
                          padding: .25rem 20px 1rem;
                          margin: 0;
                          scrollbar-width: none;
                          scroll-padding-inline: 20px;
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
                            <h2 className="text-42 highlight-text">Areas We Cover</h2>
                            <p className="text-20 mx-auto" style={{ maxWidth: 760 }}>
                                Our 24/7 mobile tyre fitters operate across the UK. Swipe through the regions below — if you can&apos;t see your postcode, give us a call and we&apos;ll confirm in seconds.
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

                <section className="customer-section">
                    <div className="width-fixed">
                        <div className="text-center">
                            <h4 className="text-36 blue-text">
                                {hasLocation
                                    ? <>Trusted by <span className="highlight-text">1000s</span> Across {locationName} &amp; Nearby Areas</>
                                    : <>Trusted by <span className="highlight-text">1000s</span> for 24 Hour Tyre Fitting Near You</>}
                            </h4>
                            <h2 className="text-60 highlight-text">OUR CUSTOMERS LOVE US</h2>
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

                <section className="why-choose-us">
                    <div className="width-fixed">
                        <div className="text-center">
                            <h2 className="text-42 highlight-text">WHY CHOOSE OUR 24 HOUR TYRE FITTING SERVICE</h2>
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
                                    <a id="callnow" onClick={(e) => handleCall(e, 'tel:07883288831')} href="tel:07883288831" className="btn-link mx-auto">
                                        <p className="m-0 text-22 pnum">0788 328 8831</p>
                                        <small className="text-14">Call Now For 24 Hour Tyre Fitting</small>
                                    </a>
                                    <p className="text-16 text-center mb-0">Local 24 hour tyre fitting available for roadside, home, and workplace tyre issues.</p>
                                </div>

                            </div>

                        </div>

                    </div>
                </section>



                <section className="faq-section">
                    <div className="width-fixed">
                        <div className="text-center mb-4">
                            <h2 className="text-36 highlight-text">Frequently Asked Questions</h2>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className={`faq-item ${openFaq === 0 ? 'active' : ''}`}>
                                    <div className="faq-question" onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}>
                                        <h3 className="text-20 mb-0">How quickly can you get to me?</h3>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <div className="faq-answer">
                                        <p className="text-18">We aim to reach many local customers from around 20 minutes, depending on traffic, fitter availability, tyre stock, and your exact location.</p>
                                    </div>
                                </div>
                                <div className={`faq-item ${openFaq === 1 ? 'active' : ''}`}>
                                    <div className="faq-question" onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}>
                                        <h3 className="text-20 mb-0">Do you offer 24 hour tyre fitting near me?</h3>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <div className="faq-answer">
                                        <p className="text-18">Yes. Our 24 hour mobile tyre fitting service can come to your home, workplace, roadside, or another safe location near you.</p>
                                    </div>
                                </div>
                                <div className={`faq-item ${openFaq === 2 ? 'active' : ''}`}>
                                    <div className="faq-question" onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}>
                                        <h3 className="text-20 mb-0">Can I get tyre fitting outside normal garage hours?</h3>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <div className="faq-answer">
                                        <p className="text-18">Yes. We provide out-of-hours mobile tyre fitting where local availability and tyre stock allow.</p>
                                    </div>
                                </div>
                                <div className={`faq-item ${openFaq === 3 ? 'active' : ''}`}>
                                    <div className="faq-question" onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}>
                                        <h3 className="text-20 mb-0">Do I need to visit a garage?</h3>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <div className="faq-answer">
                                        <p className="text-18">No. Our mobile tyre fitter comes to your location and fits the tyre on-site.</p>
                                    </div>
                                </div>
                                <div className={`faq-item ${openFaq === 4 ? 'active' : ''}`}>
                                    <div className="faq-question" onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}>
                                        <h3 className="text-20 mb-0">How much does 24 hour tyre fitting cost?</h3>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <div className="faq-answer">
                                        <p className="text-18">The cost depends on tyre size, tyre brand, location, and service time. Call us for a clear price before we come out.</p>
                                    </div>
                                </div>
                                <div className={`faq-item ${openFaq === 5 ? 'active' : ''}`}>
                                    <div className="faq-question" onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}>
                                        <h3 className="text-20 mb-0">Do you provide same day tyre fitting?</h3>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <div className="faq-answer">
                                        <p className="text-18">Yes. Same day tyre fitting is available where tyre stock and local mobile fitters are available.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Script id="localbusiness-schema" type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "@id": "https://www.mobiletyresfittingnearme.uk/#localbusiness",
                        "name": "Tyre Fitting Near Me LTD",
                        "image": "https://www.mobiletyresfittingnearme.uk/1.webp",
                        "url": "https://www.mobiletyresfittingnearme.uk/tyre-fitting-near-me",
                        "telephone": "+44-788-328-8831",
                        "priceRange": "££",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "[BUSINESS_STREET_ADDRESS]",
                            "addressLocality": "[BUSINESS_CITY]",
                            "postalCode": "[BUSINESS_POSTCODE]",
                            "addressCountry": "GB"
                        },
                        "openingHoursSpecification": [
                            {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": [
                                    "Monday", "Tuesday", "Wednesday", "Thursday",
                                    "Friday", "Saturday", "Sunday"
                                ],
                                "opens": "00:00",
                                "closes": "23:59"
                            }
                        ],
                        "areaServed": {
                            "@type": "Country",
                            "name": "United Kingdom"
                        },
                        "identifier": {
                            "@type": "PropertyValue",
                            "propertyID": "Companies House",
                            "value": "17137653"
                        }
                    })}
                </Script>

                <Script id="service-schema" type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "24 Hour Mobile Tyre Fitting",
                        "name": "24/7 Mobile Tyre Fitting",
                        "description": "Fast 24/7 mobile tyre fitting at home, workplace, or roadside. ETA from 20 minutes.",
                        "provider": {
                            "@type": "LocalBusiness",
                            "@id": "https://www.mobiletyresfittingnearme.uk/#localbusiness",
                            "name": "Tyre Fitting Near Me LTD",
                            "telephone": "+44-788-328-8831"
                        },
                        "areaServed": {
                            "@type": "Country",
                            "name": "United Kingdom"
                        },
                        "hoursAvailable": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday",
                                "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "url": "https://www.mobiletyresfittingnearme.uk/tyre-fitting-near-me"
                    })}
                </Script>

                <Script id="faq-schema" type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How quickly can you get to me?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We aim to reach many local customers from around 20 minutes, depending on traffic, fitter availability, tyre stock, and your exact location."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you offer 24 hour tyre fitting near me?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. Our 24 hour mobile tyre fitting service can come to your home, workplace, roadside, or another safe location near you."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I get tyre fitting outside normal garage hours?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. We provide out-of-hours mobile tyre fitting where local availability and tyre stock allow."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do I need to visit a garage?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "No. Our mobile tyre fitter comes to your location and fits the tyre on-site."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How much does 24 hour tyre fitting cost?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The cost depends on tyre size, tyre brand, location, and service time. Call us for a clear price before we come out."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you provide same day tyre fitting?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. Same day tyre fitting is available where tyre stock and local mobile fitters are available."
                                }
                            }
                        ]
                    })}
                </Script>

                <Script id="smartlook-init" strategy="lazyOnload">
                    {`
              window.addEventListener('load', function () {
                  var bootSmartlook = function () {
                      window.smartlook || (function (d) {
                          var o = smartlook = function () {
                              o.api.push(arguments);
                          },
                              h = d.getElementsByTagName('head')[0],
                              c = d.createElement('script');

                          o.api = [];
                          c.async = true;
                          c.type = 'text/javascript';
                          c.charset = 'utf-8';
                          c.src = 'https://web-sdk.smartlook.com/recorder.js';
                          h.appendChild(c);
                      })(document);

                      smartlook('init', 'aca46ea591b1492fb9ded798a83c9344adb140ee', {
                          region: 'eu'
                      });
                  };

                  if ('requestIdleCallback' in window) {
                      requestIdleCallback(bootSmartlook);
                      return;
                  }

                  setTimeout(bootSmartlook, 1500);
              });
            `}
                </Script>

                <div className="footer-section">
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
                </div>
            </div>
        </>
    );
}
