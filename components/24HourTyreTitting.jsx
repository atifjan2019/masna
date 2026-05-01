"use client";

import React, { useState } from 'react';
import Script from 'next/script';

export default function HourTyreFitting({ locationName = null }) {
    const [openFaq, setOpenFaq] = useState(null);
    const hasLocation = typeof locationName === 'string' && locationName.trim().length > 0;

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
                        <p className="text-16 mb-0 para">ETA From 20 mins in {locationName}</p>
                    </div>
                </header>

                <div className="hero-section width-fixed">
                    <div className="row flex-row-reverse flex-md-row align-items-center">
                        <div className="col-md-6 order-1 order-md-0">
                            <h4 className="text-32 highlight-text">24 Hours</h4>
                            <h1 className="text-42">
                                {hasLocation
                                    ? <>24 Hour Tyre Fitting Near Me <br />in <span className="highlight-text">{locationName}</span></>
                                    : <>24 Hour Tyre Fitting Near Me</>}
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
                            <h2 className="text-50 highlight-text mb-0">Mobile Tyre Fitting - We Come to You</h2>
                            <p className="text-36 blue-text mt-0">Get Back on The Road in 3 Easy Steps</p>
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
                                        <p className="text-18">When you find yourself in need of emergency tyre fitting or roadside
                                            assistance, simply give us a call.</p>
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
                                        <h4 className="text-22 highlight-text text-uppercase">Mobile Tyre Fitting</h4>
                                        <p className="text-18">Once our mobile unit arrives, we will efficiently fit your tyres. We
                                            use state-of-the-art equipment to ensure safe and precise tyre fitting.</p>
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
                                        <p className="text-18">We believe in transparent and fair pricing. Before we begin any tyre
                                            fitting services, you'll receive a clear explanation of the costs involved.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="mt-4 pt-2">
                            <a id="callnow" onClick={(e) => handleCall(e, 'tel:07883288831')} href="tel:07883288831" className="btn-link mx-auto">
                                <p className="m-0 text-22 pnum">0788 328 8831</p>
                                <small className="text-14">24/7 Service - Call Now</small>
                            </a>
                            <p className="text-16 text-center mb-0">ETA - From 20 mins in {locationName}</p>
                        </div>

                    </div>
                </section>

                <section className="service-section">
                    <div className="width-fixed px-md-5">
                        <h2 className="text-60 highlight-text text-center"><span style={{ textTransform: "capitalize" }}>{titleKwd}</span> <br /> in <span className="text-white">{locationName}</span> & <span
                            className="text-white">Outskirts</span>
                        </h2>

                        <div className="mt-4 pt-2">
                            <a id="callnow" onClick={(e) => handleCall(e, 'tel:07883288831')} href="tel:07883288831" className="btn-link mx-auto">
                                <p className="m-0 text-22 pnum">0788 328 8831</p>
                                <small className="text-14">24/7 Service - Call Now</small>
                            </a>
                            <p className="text-16 text-center mb-0 text-white">ETA - From 20 mins in {locationName}</p>
                        </div>
                    </div>
                </section>

                <section className="fitting-section">
                    <div className="width-fixed">
                        <div className="text-center mb-4">
                            <h4 className="blue-text text-24">Your Rapid Response Partner for</h4>
                            <h2 className="highlight-text text-42">Convenient {titleKwd}</h2>
                        </div>
                        <div className="row pt-4">

                            <div className="col-md-7">
                                <div className="fitting-img">
                                    <img src="/rapid.webp" alt="Convenient mobile tyre fitting" loading="lazy" decoding="async" />
                                </div>
                            </div>

                            <div className="col-md-5 pt-4">

                                <div className="d-flex fitting-text-item">
                                    <div className="icon">
                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                    </div>
                                    <div className="">
                                        <h5 className="text-20">Brand New Tyres:</h5>
                                        <p className="text-20 fw-light">We offer a wide selection of brand new tyres to suit all
                                            budgets and preferences. Available 24/7 in {locationName} & Outskirts.</p>
                                    </div>
                                </div>

                                <div className="d-flex fitting-text-item">
                                    <div className="icon">
                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                    </div>
                                    <div className="">
                                        <h5 className="text-20">TPMS (Tyre Pressure Monitoring System):</h5>
                                        <p className="text-20 fw-light">Our experts provide TPMS installation and maintenance to
                                            ensure your tyres are always at optimal pressure for safe driving.</p>
                                    </div>
                                </div>

                                <div className="d-flex fitting-text-item">
                                    <div className="icon">
                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                    </div>
                                    <div className="">
                                        <h5 className="text-20">Tyre Maintenance:</h5>
                                        <p className="text-20 fw-light">Seamless tyre fitting and maintenance tailored to your
                                            needs. Trust us for safe and efficient mobile tyre services in
                                            {locationName} &
                                            Outskirts.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>




                <section className="customer-section">
                    <div className="width-fixed">
                        <div className="text-center">
                            <h4 className="text-36 blue-text">Trusted by <span className="highlight-text">1000s</span> Across
                                {locationName}
                                & Outskirts.</h4>
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
                                        <p className="text-18 text-white mb-0">Absolutely impressed with the {titleKwd}
                                            service! When I had a flat tyre on
                                            a deserted road, I called for help, and the team arrived within 15 minutes. They
                                            were professional, efficient, and had my tyre changed in no time. Highly recommended
                                            for their quick response and top-notch service!
                                        </p>
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
                                            alt="Mobile tyre fitting service" loading="lazy" decoding="async" />
                                    </div>

                                    <div className="c-card-text text-center">
                                        <i className="fa-solid fa-quote-left quote-icon"></i>
                                        <p className="text-18 text-white mb-0">I cannot express how grateful I am for the 24-hour
                                            {titleKwd} service. When my tyre went flat late at night, I called for
                                            assistance, and the team arrived within 20 minutes. Their commitment to 24/7
                                            availability is unmatched, and the professionalism of the crew made the entire
                                            experience stress-free.
                                        </p>
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
                                            alt="Mobile tyre fitting service" loading="lazy" decoding="async" />
                                    </div>

                                    <div className="c-card-text text-center">
                                        <i className="fa-solid fa-quote-left quote-icon"></i>
                                        <p className="text-18 text-white mb-0">A flat tyre is never convenient, but this mobile tyre
                                            fitting service turned a stressful situation into a breeze. Their team arrived
                                            promptly, assessed the issue, and had my tyre replaced efficiently. The
                                            professionalism and courtesy of the staff made a significant difference. I highly
                                            recommend their {titleKwd} service.


                                        </p>
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
                            <h2 className="text-42 highlight-text">WHY CHOOSE US</h2>
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
                                        <h5 className="text-20 mb-1">Swift Response</h5>
                                        <p className="text-20 fw-light">Immediate assistance when you need it most.</p>
                                    </div>
                                </div>

                                <div className="d-flex choose-text-item">
                                    <div className="icon">
                                        <i className="fa-solid fa-circle-check"></i>
                                    </div>
                                    <div className="">
                                        <h5 className="text-20 mb-1">24/7 Availability</h5>
                                        <p className="text-20 fw-light">We're here for you around the clock.</p>
                                    </div>
                                </div>

                                <div className="d-flex choose-text-item">
                                    <div className="icon">
                                        <i className="fa-solid fa-circle-check"></i>
                                    </div>
                                    <div className="">
                                        <h5 className="text-20 mb-1">Expertise</h5>
                                        <p className="text-20 fw-light">Skilled professionals ensuring reliable solutions.</p>
                                    </div>
                                </div>

                                <div className="mt-4 pt-2">
                                    <a id="callnow" onClick={(e) => handleCall(e, 'tel:07883288831')} href="tel:07883288831" className="btn-link mx-auto">
                                        <p className="m-0 text-22 pnum">0788 328 8831</p>
                                        <small className="text-14">24/7 Service - Call Now</small>
                                    </a>
                                    <p className="text-16 text-center mb-0">ETA - From 20 mins in {locationName}</p>
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
                                        <p className="text-18">Our average response time is 20-35 minutes across {locationName} and
                                            Birmingham. For emergency roadside callouts, we prioritise getting to you as fast as
                                            possible, 24 hours a day, 7 days a week.</p>
                                    </div>
                                </div>
                                <div className={`faq-item ${openFaq === 1 ? 'active' : ''}`}>
                                    <div className="faq-question" onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}>
                                        <h3 className="text-20 mb-0">What types of tyres do you carry?</h3>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <div className="faq-answer">
                                        <p className="text-18">We carry a full range of premium, mid-range and budget tyres from brands
                                            like Michelin, Continental, Pirelli, Bridgestone, Hankook and Goodyear. Our vans are
                                            stocked with the most common sizes so we can fit on the spot.</p>
                                    </div>
                                </div>
                                <div className={`faq-item ${openFaq === 2 ? 'active' : ''}`}>
                                    <div className="faq-question" onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}>
                                        <h3 className="text-20 mb-0">Do you offer puncture repair or only replacement?</h3>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <div className="faq-answer">
                                        <p className="text-18">We offer both! Our technicians will assess whether a puncture repair is
                                            safe under BS AU 159 standards. If repair is not viable, we can fit a brand new tyre on
                                            the spot. You only pay for what you need.</p>
                                    </div>
                                </div>
                                <div className={`faq-item ${openFaq === 3 ? 'active' : ''}`}>
                                    <div className="faq-question" onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}>
                                        <h3 className="text-20 mb-0">How much does {titleKwd} cost?</h3>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <div className="faq-answer">
                                        <p className="text-18">Prices vary depending on tyre size and brand. We offer transparent,
                                            competitive pricing with no hidden callout fees. Call us for an instant free quote —
                                            we'll beat most online prices and include mobile fitting at no extra charge.</p>
                                    </div>
                                </div>
                                <div className={`faq-item ${openFaq === 4 ? 'active' : ''}`}>
                                    <div className="faq-question" onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}>
                                        <h3 className="text-20 mb-0">Do you provide TPMS sensor replacement?</h3>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <div className="faq-answer">
                                        <p className="text-18">Yes, our technicians are fully equipped to diagnose and replace TPMS
                                            (Tyre Pressure Monitoring System) sensors. We reset and calibrate the system after every
                                            tyre fitting to ensure your dashboard warning lights are cleared.</p>
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
                                    "text": `Our average response time is 20-35 minutes across ${locationName} and Birmingham. For emergency roadside callouts, we prioritise getting to you as fast as possible, 24 hours a day, 7 days a week.`
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What types of tyres do you carry?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We carry a full range of premium, mid-range and budget tyres from brands like Michelin, Continental, Pirelli, Bridgestone, Hankook and Goodyear."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you offer puncture repair or only replacement?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We offer both! Our technicians will assess whether a puncture repair is safe under BS AU 159 standards. If repair is not viable, we can fit a brand new tyre on the spot."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": `How much does ${titleKwd} cost?`,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Prices vary depending on tyre size and brand. We offer transparent, competitive pricing with no hidden callout fees. Call us for an instant free quote."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you provide TPMS sensor replacement?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, our technicians are fully equipped to diagnose and replace TPMS sensors. We reset and calibrate the system after every tyre fitting."
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
