import React from 'react'
import { useEffect } from 'react';
import form from '../../assets/js/form';
import designesis from '../../assets/js/designesia';

function PricingTableTwo() {
  useEffect(()=> {
    form();
    designesis();
  },[])
  return (
    <>
            <div className="no-bottom no-top" id="content">
            <div id="top"></div>
            
            <section className="jarallax">
                <img src={require('../../assets/images/background/galactic-oddsey.webp')} className="jarallax-img" alt=""/>
                <div className="de-gradient-edge-top"></div>
                <div className="de-gradient-edge-bottom"></div>
                <div className="container z-1000">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="subtitle wow fadeInUp mb-3">Server Hosting</div>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="wow fadeInUp" data-wow-delay=".2s">Galactic Odyssey</h2>
                            <div className="spacer-20"></div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 mb-sm-30 wow fadeInRight" data-wow-delay=".2s">
                            <div className="de-pricing-plan h-100">
                                <div className="d-title">Warrior</div>
                                <div className="d-stars"><i className="fa fa-star"></i></div>
                                <div className="spacer-20"></div>
                                <div className="d-specs">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="d-item">
                                                40<span>Player Slots</span>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-item">
                                                4GB<span>Memory</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="spacer-20"></div>
                                <div className="d-price">
                                    <span className="d-cur">$</span>
                                    <span className="d-value">9.99</span>
                                    <span className="d-period">/monthly</span>
                                </div>
                                <div className="d-sub-price">
                                    $0.25 per slot
                                </div>
                                <div className="spacer-20"></div>
                                <a className="btn-main btn-fullwidth" href="#">Order Now</a>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-sm-30 wow fadeInRight" data-wow-delay=".4s">
                            <div className="de-pricing-plan h-100 d-feature">
                                <div className="d-badge">Top Seller</div>
                                <div className="d-title">General</div>
                                <div className="d-stars"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                                <div className="spacer-20"></div>
                                <div className="d-specs">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="d-item">
                                                60<span>Player Slots</span>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-item">
                                                8GB<span>Memory</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="spacer-20"></div>
                                <div className="d-price">
                                    <span className="d-cur">$</span>
                                    <span className="d-value">14.99</span>
                                    <span className="d-period">/monthly</span>
                                </div>
                                <div className="d-sub-price">
                                    $0.25 per slot
                                </div>
                                <div className="spacer-20"></div>
                                <a className="btn-main btn-fullwidth" href="#">Order Now</a>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-sm-30 wow fadeInRight" data-wow-delay=".6s">
                            <div className="de-pricing-plan h-100">
                                <div className="d-title">Commander</div>
                                <div className="d-stars"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                                <div className="spacer-20"></div>
                                <div className="d-specs">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="d-item">
                                                125<span>Player Slots</span>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-item">
                                                16GB<span>Memory</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="spacer-20"></div>
                                <div className="d-price">
                                    <span className="d-cur">$</span>
                                    <span className="d-value">24.99</span>
                                    <span className="d-period">/monthly</span>
                                </div>
                                <div className="d-sub-price">
                                    $0.20 per slot
                                </div>
                                <div className="spacer-20"></div>
                                <a className="btn-main btn-fullwidth" href="#">Order Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="spacer-double"></div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="subtitle wow fadeInUp mb-3">Incredibly</div>
                            <h2 className="wow fadeInUp mb20" data-wow-delay=".2s">Features</h2>
                        </div>

                        <div className="col-lg-6"></div>

                        <div className="col-lg-3 col-sm-6 mb-sm-30 wow fadeInRight" data-wow-delay="0s">
                            <div className="padding30 rounded-10" data-bgimage="rgba(0,0,0,.3)">
                                <img src={require('../../assets/images/icons/1.png')} className="mb20" alt=""/>
                                <h4>Super Quick Setup</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 mb-sm-30 wow fadeInRight" data-wow-delay=".2s">
                            <div className="padding30 rounded-10" data-bgimage="rgba(0,0,0,.3)">
                                <img src={require('../../assets/images/icons/2.png')} className="mb20" alt=""/>
                                <h4>Premium Hardware</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 mb-sm-30 wow fadeInRight" data-wow-delay=".4s">
                            <div className="padding30 rounded-10" data-bgimage="rgba(0,0,0,.3)">
                                <img src={require('../../assets/images/icons/3.png')} className="mb20" alt=""/>
                                <h4>DDos Protection</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 mb-sm-30 wow fadeInRight" data-wow-delay=".6s">
                            <div className="padding30 rounded-10" data-bgimage="rgba(0,0,0,.3)">
                                <img src={require('../../assets/images/icons/4.png')} className="mb20" alt=""/>
                                <h4>Fast Support</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="no-top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="subtitle wow fadeInUp mb-3">Payment Methods</div>
                            <h2 className="wow fadeInUp" data-wow-delay=".2s">We accept</h2>
                        </div>
                        <div className="col-lg-6">
                            <div className="row g-4">
                                <div className="col-sm-2 col-4">
                                    <div className="p-2 rounded-10" data-bgcolor="rgba(255, 255, 255, .05)">
                                        <img src={require('../../assets/images/payments/visa.webp')} className="img-fluid" alt=""/>
                                    </div>
                                </div>
                                <div className="col-sm-2 col-4">
                                    <div className="p-2 rounded-10" data-bgcolor="rgba(255, 255, 255, .05)">
                                        <img src={require('../../assets/images/payments/mastercard.webp')} className="img-fluid" alt=""/>
                                    </div>
                                </div>
                                <div className="col-sm-2 col-4">
                                    <div className="p-2 rounded-10" data-bgcolor="rgba(255, 255, 255, .05)">
                                        <img src={require('../../assets/images/payments/paypal.webp')} className="img-fluid" alt=""/>
                                    </div>
                                </div>
                                <div className="col-sm-2 col-4">
                                    <div className="p-2 rounded-10" data-bgcolor="rgba(255, 255, 255, .05)">
                                        <img src={require('../../assets/images/payments/skrill.webp')} className="img-fluid" alt=""/>
                                    </div>
                                </div>
                                <div className="col-sm-2 col-4">
                                    <div className="p-2 rounded-10" data-bgcolor="rgba(255, 255, 255, .05)">
                                        <img src={require('../../assets/images/payments/jcb.webp')} className="img-fluid" alt=""/>
                                    </div>
                                </div>
                                <div className="col-sm-2 col-4">
                                    <div className="p-2 rounded-10" data-bgcolor="rgba(255, 255, 255, .05)">
                                        <img src={require('../../assets/images/payments/american-express.webp')} className="img-fluid" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    </>
  )
}

export default PricingTableTwo