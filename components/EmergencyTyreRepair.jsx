"use client";

import React, { useState } from 'react';
import Script from 'next/script';

export default function EmergencyTyreRepair({ locationName = null }) {
    const [openFaq, setOpenFaq] = useState(null);
    const hasReadableLocation = Boolean(locationName);
    const etaLocationText = hasReadableLocation ? locationName : 'your area';
    const reviewHeading = hasReadableLocation
        ? <>Trusted by <span className="highlight-text">1000s</span> Across {locationName} & Nearby Areas</>
        : <>Trusted by <span className="highlight-text">1000s</span> for Emergency Tyre Repair Near You</>;

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

            <div className="wrapper position-relative">

                <header className="header-section d-md-none">
                    <div className="d-flex align-items-center justify-content-center flex-column">
                        <a id="callnow" onClick={(e) => handleCall(e, 'tel:07883288831')} href="tel:07883288831" className="btn-link header-btn mx-auto mx-md-0 text-start">
                            <div className="icon">
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <p className="m-0 text-22 pnum">0788 328 8831</p>
                        </a>
                        <p className="text-16 mb-0 para">ETA From 20 mins in {etaLocationText}</p>
                    </div>
                </header>

                <div className="hero-section width-fixed">
                    <div className="row flex-row-reverse flex-md-row align-items-center">
                        <div className="col-md-6 order-1 order-md-0">
                            <h4 className="text-32 highlight-text">24 Hours</h4>
                            <h1 className="text-42">Emergency Tyre Repair Near Me <br />
                                {hasReadableLocation ? <><span>in </span><span className="highlight-text">{locationName}</span></> : null}</h1>
                            <p className="text-18">Need emergency tyre repair near me? Our local mobile tyre repair team comes to your home, workplace, or roadside to help with flat tyres, tyre damage, and urgent tyre problems.</p>
                            <p className="text-26 blue-text border-bottom">ETA from 20 minutes</p>
                            <ul className="ulstyle">
                                <li className="text-22">
                                    <svg className="tcb-icon tcb-local-vars-root" viewBox="0 0 24 24" data-id="icon-check_box-duotone">
                                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                                        <path opacity=".3" d="M5 19h14V5H5v14zm2.41-7.4l2.58 2.58 6.59-6.59L17.99 9l-8 8L6 13.01l1.41-1.41z"></path>
                                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"></path>
                                    </svg>
                                    Emergency Tyre Repair Near Me
                                </li>
                                <li className="text-22">
                                    <svg className="tcb-icon tcb-local-vars-root" viewBox="0 0 24 24" data-id="icon-check_box-duotone">
                                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                                        <path opacity=".3" d="M5 19h14V5H5v14zm2.41-7.4l2.58 2.58 6.59-6.59L17.99 9l-8 8L6 13.01l1.41-1.41z"></path>
                                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"></path>
                                    </svg> Flat Tyre Call Out Service
                                </li>
                                <li className="text-22">
                                    <svg className="tcb-icon tcb-local-vars-root" viewBox="0 0 24 24" data-id="icon-check_box-duotone">
                                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                                        <path opacity=".3" d="M5 19h14V5H5v14zm2.41-7.4l2.58 2.58 6.59-6.59L17.99 9l-8 8L6 13.01l1.41-1.41z"></path>
                                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"></path>
                                    </svg> Roadside Tyre Repair
                                </li>
                                <li className="text-22">
                                    <svg className="tcb-icon tcb-local-vars-root" viewBox="0 0 24 24" data-id="icon-check_box-duotone">
                                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                                        <path opacity=".3" d="M5 19h14V5H5v14zm2.41-7.4l2.58 2.58 6.59-6.59L17.99 9l-8 8L6 13.01l1.41-1.41z"></path>
                                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"></path>
                                    </svg> Mobile Tyre Repair Near Me
                                </li>
                                <li className="text-22">
                                    <svg className="tcb-icon tcb-local-vars-root" viewBox="0 0 24 24" data-id="icon-check_box-duotone">
                                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                                        <path opacity=".3" d="M5 19h14V5H5v14zm2.41-7.4l2.58 2.58 6.59-6.59L17.99 9l-8 8L6 13.01l1.41-1.41z"></path>
                                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"></path>
                                    </svg> 24/7 Emergency Tyre Help
                                </li>
                                <li className="text-22">
                                    <svg className="tcb-icon tcb-local-vars-root" viewBox="0 0 24 24" data-id="icon-check_box-duotone">
                                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                                        <path opacity=".3" d="M5 19h14V5H5v14zm2.41-7.4l2.58 2.58 6.59-6.59L17.99 9l-8 8L6 13.01l1.41-1.41z"></path>
                                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"></path>
                                    </svg> Clear Prices Before We Arrive
                                </li>
                            </ul>

                            <div className="mt-4 pt-2">
                                <a id="callnow" onClick={(e) => handleCall(e, 'tel:07883288831')} href="tel:07883288831" className="btn-link mx-auto mx-md-0">
                                    <p className="m-0 text-22 pnum">0788 328 8831</p>
                                    <small className="text-14">Call Now For Emergency Tyre Repair</small>
                                </a>
                                <p className="text-16 mb-0 text-center text-md-start">Flat tyre or pressure loss? Call now for fast mobile tyre repair at your location.</p>
                            </div>
                        </div>

                        <div className="col-md-6 order-0">
                            <div className="hero-img">
                                <div className="bg-shade"></div>
                                <img src="/1.webp" width="700" height="700" alt="Emergency tyre repair van" fetchPriority="high" decoding="async" />
                            </div>
                        </div>

                    </div>
                </div>

                <section className="step-section d-none d-md-block">
                    <div className="width-fixed">
                        <div className="text-center">
                            <h2 className="text-50 highlight-text mb-0">Emergency Tyre Repair Near You - We Come to You</h2>
                            <p className="text-36 blue-text mt-0">Get Fast Tyre Help in 3 Easy Steps</p>
                        </div>

                        <div className="row justify-content-center text-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="step-card">
                                    <div className="step-img">
                                        <img src="/assets/imgs/optimized/contact-220.webp" width="100"
                                            alt="Emergency tyre repair contact and dispatch" loading="lazy" decoding="async" />
                                    </div>
                                    <div className="step-text">
                                        <h4 className="text-22 highlight-text text-uppercase">Contact and Dispatch</h4>
                                        <p className="text-18">When you need emergency tyre repair near me, call our team and we&apos;ll dispatch a local mobile tyre technician to your location.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="step-card">
                                    <div className="step-img step-lg-img">
                                        <img src="/assets/imgs/optimized/mobile-360.webp" width="100"
                                            alt="Mobile tyre repair service" loading="lazy" decoding="async" />
                                    </div>
                                    <div className="step-text">
                                        <h4 className="text-22 highlight-text text-uppercase">Mobile Tyre Repair</h4>
                                        <p className="text-18">Our mobile tyre repair service arrives with the tools and equipment needed to inspect the tyre and help you safely.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="step-card">
                                    <div className="step-img">
                                        <img src="/assets/imgs/optimized/back-220.webp" width="100"
                                            alt="Back on the road after tyre repair" loading="lazy" decoding="async" />
                                    </div>
                                    <div className="step-text">
                                        <h4 className="text-22 highlight-text text-uppercase">Back on the Road</h4>
                                        <p className="text-18">We repair, replace, or advise on the safest option, then help you get moving again with no garage visit needed.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="mt-4 pt-2">
                            <a id="callnow" onClick={(e) => handleCall(e, 'tel:07883288831')} href="tel:07883288831" className="btn-link mx-auto">
                                <p className="m-0 text-22 pnum">0788 328 8831</p>
                                <small className="text-14">Call Now For Tyre Repair</small>
                            </a>
                            <p className="text-16 text-center mb-0">Fast mobile tyre repair for flat tyres, roadside issues, and urgent tyre problems.</p>
                            <p className="text-16 text-center mb-0">ETA - From 20 mins in {etaLocationText}</p>
                        </div>

                    </div>
                </section>

                <section className="service-section">
                    <div className="width-fixed px-md-5">
                        <h2 className="text-60 highlight-text text-center">Emergency Tyre Repair Near You <br />{hasReadableLocation ? <>in <span className="text-white">{locationName}</span></> : null}</h2>

                        <div className="mt-4 pt-2">
                            <a id="callnow" onClick={(e) => handleCall(e, 'tel:07883288831')} href="tel:07883288831" className="btn-link mx-auto">
                                <p className="m-0 text-22 pnum">0788 328 8831</p>
                                <small className="text-14">Call Now For Emergency Tyre Repair</small>
                            </a>
                            <p className="text-16 text-center mb-0 text-white">24/7 mobile tyre repair available when tyre problems happen.</p>
                            <p className="text-16 text-center mb-0 text-white">ETA - From 20 mins in {etaLocationText}</p>
                        </div>
                    </div>
                </section>

                <section className="fitting-section">
                    <div className="width-fixed">
                        <div className="text-center mb-4">
                            <h4 className="blue-text text-24">Your Rapid Response Partner for</h4>
                            <h2 className="highlight-text text-42">Fast Emergency Tyre Repair Near You</h2>
                        </div>
                        <div className="row pt-4">

                            <div className="col-md-7">
                                <div className="fitting-img">
                                    <img src="/rapid.webp" alt="Fast emergency tyre repair near you" loading="lazy" decoding="async" />
                                </div>
                            </div>

                            <div className="col-md-5 pt-4">

                                <div className="d-flex fitting-text-item">
                                    <div className="icon">
                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                    </div>
                                    <div className="">
                                        <h5 className="text-20">Flat Tyre Help:</h5>
                                        <p className="text-20 fw-light">If you have a flat tyre, our mobile tyre repair team can come to your location and check the safest solution. We inspect the tyre first and only repair it where it is safe and suitable. If the tyre cannot be repaired safely, we can advise the best replacement option.</p>
                                    </div>
                                </div>

                                <div className="d-flex fitting-text-item">
                                    <div className="icon">
                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                    </div>
                                    <div className="">
                                        <h5 className="text-20">Roadside Tyre Repair:</h5>
                                        <p className="text-20 fw-light">We provide roadside tyre repair support when you are stuck away from home and need urgent tyre help.</p>
                                    </div>
                                </div>

                                <div className="d-flex fitting-text-item">
                                    <div className="icon">
                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                    </div>
                                    <div className="">
                                        <h5 className="text-20">Mobile Tyre Repair:</h5>
                                        <p className="text-20 fw-light">Our local mobile tyre technicians help with tyre damage, puncture concerns, pressure loss, and emergency tyre problems.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="customer-section">
                    <div className="width-fixed">
                        <div className="text-center">
                            <h4 className="text-36 blue-text">{reviewHeading}</h4>
                            <h2 className="text-60 highlight-text">OUR CUSTOMERS LOVE US</h2>
                        </div>

                        <div className="row">

                            <div className="col-md-4">
                                <div className="customer-card">
                                    <div className="c-profile">
                                        <img src="/assets/imgs/optimized/jessy-160.webp" width="100"
                                            alt="Customer review - emergency tyre repair service" loading="lazy" decoding="async" />
                                    </div>

                                    <div className="c-card-text text-center">
                                        <i className="fa-solid fa-quote-left quote-icon"></i>
                                        <p className="text-18 text-white mb-0">Absolutely impressed with the emergency tyre repair service. I had a flat tyre and the local technician arrived quickly, checked everything, and got me moving again.</p>
                                        <p className="text-18 text-white">Highly recommend!</p>
                                    </div>

                                    <div className="c-card-foot text-center">
                                        <div className="d-flex justify-content-center stars">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <h5 className="text-20 text-white fw-normal mb-0 mt-1">Jessy Jhon</h5>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="customer-card">
                                    <div className="c-profile">
                                        <img src="/assets/imgs/optimized/emma-160.webp" width="100"
                                            alt="Customer review - mobile tyre repair service" loading="lazy" decoding="async" />
                                    </div>

                                    <div className="c-card-text text-center">
                                        <i className="fa-solid fa-quote-left quote-icon"></i>
                                        <p className="text-18 text-white mb-0">I needed mobile tyre repair near me and the response was fast. The team was clear, friendly, and made the whole process easy.</p>
                                        <p className="text-18 text-white">Highly recommend!</p>
                                    </div>

                                    <div className="c-card-foot text-center">
                                        <div className="d-flex justify-content-center stars">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <h5 className="text-20 text-white fw-normal mb-0 mt-1">Emma Steve</h5>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="customer-card">
                                    <div className="c-profile">
                                        <img src="/assets/imgs/optimized/josh-160.webp" width="100"
                                            alt="Customer review - roadside tyre repair" loading="lazy" decoding="async" />
                                    </div>

                                    <div className="c-card-text text-center">
                                        <i className="fa-solid fa-quote-left quote-icon"></i>
                                        <p className="text-18 text-white mb-0">A stressful roadside tyre problem was sorted quickly. The technician explained the safest option and helped me get back on the road.</p>
                                        <p className="text-18 text-white">Highly recommend!</p>
                                    </div>

                                    <div className="c-card-foot text-center">
                                        <div className="d-flex justify-content-center stars">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <h5 className="text-20 text-white fw-normal mb-0 mt-1">Josh Lu</h5>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section className="why-choose-us">
                    <div className="width-fixed">
                        <div className="text-center">
                            <h2 className="text-42 highlight-text">WHY CHOOSE OUR EMERGENCY TYRE REPAIR SERVICE</h2>
                        </div>

                        <div className="row mt-4 mt-md-5">
                            <div className="col-md-6">
                                <div className="choose-img">
                                    <div className="img-wrap">
                                        <img src="https://uploads.webspires.co.uk/mtfnwanees/mtf.webp"
                                            width="1000" height="1092"
                                            alt="Why choose our emergency tyre repair service - professional technician with van"
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
                                        <h5 className="text-20 mb-1">Fast Emergency Response</h5>
                                        <p className="text-20 fw-light">Quick help when you need emergency tyre repair near me at home, work, or roadside.</p>
                                    </div>
                                </div>

                                <div className="d-flex choose-text-item">
                                    <div className="icon">
                                        <i className="fa-solid fa-circle-check"></i>
                                    </div>
                                    <div className="">
                                        <h5 className="text-20 mb-1">24/7 Availability</h5>
                                        <p className="text-20 fw-light">Our mobile tyre repair service is available day and night when urgent tyre problems happen.</p>
                                    </div>
                                </div>

                                <div className="d-flex choose-text-item">
                                    <div className="icon">
                                        <i className="fa-solid fa-circle-check"></i>
                                    </div>
                                    <div className="">
                                        <h5 className="text-20 mb-1">Skilled Tyre Technicians</h5>
                                        <p className="text-20 fw-light">Experienced technicians provide safe, professional support for flat tyres and roadside tyre issues.</p>
                                    </div>
                                </div>

                                <div className="mt-4 pt-2">
                                    <a id="callnow" onClick={(e) => handleCall(e, 'tel:07883288831')} href="tel:07883288831" className="btn-link mx-auto">
                                        <p className="m-0 text-22 pnum">0788 328 8831</p>
                                        <small className="text-14">Call Now For Emergency Tyre Repair</small>
                                    </a>
                                    <p className="text-16 text-center mb-0">Local tyre repair help available for roadside, home, and workplace emergencies.</p>
                                    <p className="text-16 text-center mb-0">ETA - From 20 mins in {etaLocationText}</p>
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
                                        <p className="text-18">We aim to reach many local customers from around 20 minutes, depending on traffic, technician availability, tyre issue, and your exact location.</p>
                                    </div>
                                </div>
                                <div className={`faq-item ${openFaq === 1 ? 'active' : ''}`}>
                                    <div className="faq-question" onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}>
                                        <h3 className="text-20 mb-0">Do you offer emergency tyre repair near me?</h3>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <div className="faq-answer">
                                        <p className="text-18">Yes. Our emergency mobile tyre repair service can come to your home, workplace, roadside, or another safe location near you.</p>
                                    </div>
                                </div>
                                <div className={`faq-item ${openFaq === 2 ? 'active' : ''}`}>
                                    <div className="faq-question" onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}>
                                        <h3 className="text-20 mb-0">Can you repair a flat tyre?</h3>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <div className="faq-answer">
                                        <p className="text-18">We can inspect the tyre and advise the safest option. Some tyre issues can be repaired, while others may need replacement for safety.</p>
                                    </div>
                                </div>
                                <div className={`faq-item ${openFaq === 3 ? 'active' : ''}`}>
                                    <div className="faq-question" onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}>
                                        <h3 className="text-20 mb-0">Do I need to visit a garage?</h3>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <div className="faq-answer">
                                        <p className="text-18">No. Our mobile tyre repair team comes to your location, so you do not need to drive on a damaged or flat tyre.</p>
                                    </div>
                                </div>
                                <div className={`faq-item ${openFaq === 4 ? 'active' : ''}`}>
                                    <div className="faq-question" onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}>
                                        <h3 className="text-20 mb-0">How much does emergency tyre repair cost?</h3>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <div className="faq-answer">
                                        <p className="text-18">The cost depends on your tyre issue, location, service time, and whether repair or replacement is needed. Call us for a clear price before we come out.</p>
                                    </div>
                                </div>
                                <div className={`faq-item ${openFaq === 5 ? 'active' : ''}`}>
                                    <div className="faq-question" onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}>
                                        <h3 className="text-20 mb-0">Do you provide roadside tyre repair?</h3>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <div className="faq-answer">
                                        <p className="text-18">Yes. We provide roadside tyre repair support where it is safe and possible to work at your location.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

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
                                    "text": "We aim to reach many local customers from around 20 minutes, depending on traffic, technician availability, tyre issue, and your exact location."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you offer emergency tyre repair near me?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. Our emergency mobile tyre repair service can come to your home, workplace, roadside, or another safe location near you."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can you repair a flat tyre?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We can inspect the tyre and advise the safest option. Some tyre issues can be repaired, while others may need replacement for safety."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do I need to visit a garage?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "No. Our mobile tyre repair team comes to your location, so you do not need to drive on a damaged or flat tyre."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How much does emergency tyre repair cost?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The cost depends on your tyre issue, location, service time, and whether repair or replacement is needed. Call us for a clear price before we come out."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you provide roadside tyre repair?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. We provide roadside tyre repair support where it is safe and possible to work at your location."
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

                              smartlook('init', '43adb320c41f63674d5523146230b9b5c319c691', {
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
                            Mobile Tyre Service Near Me LTD
                        </p>
                        <p className="text-16 text-white mb-0">Copyright 2026, all rights reserved.</p>

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
