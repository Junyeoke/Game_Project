import React, { useEffect } from 'react'
import designesis from '../../assets/js/designesia';

function PricingTableOne() {
  useEffect(()=> {
    designesis();
  },[])
  
  return (
    <>
            <div className="no-bottom no-top" id="content">
            <div id="top"></div>
            {/* <!-- section begin --> */}
            <section id="subheader" className="jarallax">
                <div className="de-gradient-edge-bottom"></div>
                <img src={require('../../assets/images/background/subheader-game.webp')} className="jarallax-img" alt=""/>
                <div className="container z-1000">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-2 d-lg-block d-none">
                            <img src={require('../../assets/images/covers/1.webp')} className="img-fluid wow fadeInUp" alt=""/>
                        </div>
                        <div className="col-lg-6">
                            <div className="subtitle wow fadeInUp mb-3">Server hosting</div>
                            <h2 className="wow fadeInUp mb20" data-wow-delay=".2s">Thunder and City</h2>
                            <div className="de-rating-ext wow fadeInUp" data-wow-delay=".4s">
                                <span className="d-stars">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-half"></i>
                                </span>
                                <span className="d-val">4.75</span>
                                based on <strong>4086</strong> reviews.
                            </div>
                        </div>      
                    </div>
                </div>
            </section>
            {/* <!-- section close --> */}

            <section className="no-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center wow fadeInUp">
                            <div className="switch-set">
                                <div>Monthly Plan</div>
                                <div><input id="sw-1" className="switch" type="checkbox" /></div>
                                <div>Yearly Plan</div>
                                <div className="spacer-20"></div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 mb-sm-30 wow fadeInRight" data-wow-delay=".2s">
                            <div className="de_pricing-table type-2">
                                <div className="d-head">
                                    <h3>4 Slots</h3>
                                </div>
                                <div className="d-price">
                                    <h4 className="opt-1">$3.59<span>/mo</span></h4>
                                    <h4 className="opt-2">$2.59<span>/mo</span></h4>
                                    <p>Normally <s>$9.99</s></p>
                                </div>                                
                                <div className="d-location">
                                    <h4>Server Location</h4>
                                    <select name='Server Location' className="server_location form-control">
                                      <option value='option-1' data-src="images/flags/united-kingdom.png">
                                        London, England
                                      </option>
                                      <option value='option-2' data-src="images/flags/france.png">
                                        Paris, France
                                      </option>
                                      <option value='option-3' data-src="images/flags/germany.png">
                                        Frankurt, Germany
                                      </option>
                                      <option value='option-4' data-src="images/flags/netherlands.png">
                                        Amsterdam, Netherlands
                                      </option>
                                      <option value='option-5' data-src="images/flags/sweden.png">
                                        Stockholm, Sweden
                                      </option>
                                      <option value='option-6' data-src="images/flags/finland.png">
                                        Helsinki, Finland
                                      </option>
                                      <option value='option-7' data-src="images/flags/usa.png">
                                        Los Angeles, USA
                                      </option>
                                      <option value='option-8' data-src="images/flags/canada.png">
                                        Quebec, Canada
                                      </option>
                                      <option value='option-9' data-src="images/flags/australia.png">
                                        Sydney, Australia
                                      </option>
                                      <option value='option-10' data-src="images/flags/brazil.png">
                                        Sau Paulo, Brazil
                                      </option>
                                      <option value='option-11' data-src="images/flags/thailand.png">
                                        Bangkok, Thailand
                                      </option>
                                      <option value='option-12' data-src="images/flags/indonesia.png">
                                        Jakarta, Indonesia
                                      </option>
                                    </select>
                                </div>
                                <div className="spacer-5"></div>
                                <div className="d-group">
                                    <h4>Top Features</h4>
                                    <ul className="d-list">
                                        <li>Super Quick Setup</li>
                                        <li>Premium Hardware</li>
                                        <li>DDos Protection</li>
                                        <li>24/7 Customer Support</li>
                                    </ul>
                                </div>
                                <div className="d-action">
                                    <a href="#" className="btn-main opt-1 w-100">Get Monthly Plan</a>
                                    <a href="#" className="btn-main opt-2 w-100">Get Yearly Plan</a>
                                    <p>Auto re-news at regular rate</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 mb-sm-30 wow fadeInRight" data-wow-delay=".4s">
                            <div className="de_pricing-table type-2">
                                <div className="d-head">
                                    <h3>10 Slots</h3>
                                </div>
                                <div className="d-price">
                                    <h4 className="opt-1">$5.59<span>/mo</span></h4>
                                    <h4 className="opt-2">$3.59<span>/mo</span></h4>
                                    <p>Normally <s>$15.99</s></p>
                                </div>
                                <div className="d-location">
                                    <h4>Server Location</h4>
                                    <select name='Server Location' className="server_location form-control">
                                      <option value='option-1' data-src="images/flags/united-kingdom.png">
                                        London, England
                                      </option>
                                      <option value='option-2' data-src="images/flags/france.png">
                                        Paris, France
                                      </option>
                                      <option value='option-3' data-src="images/flags/germany.png">
                                        Frankurt, Germany
                                      </option>
                                      <option value='option-4' data-src="images/flags/netherlands.png">
                                        Amsterdam, Netherlands
                                      </option>
                                      <option value='option-5' data-src="images/flags/sweden.png">
                                        Stockholm, Sweden
                                      </option>
                                      <option value='option-6' data-src="images/flags/finland.png">
                                        Helsinki, Finland
                                      </option>
                                      <option value='option-7' data-src="images/flags/usa.png">
                                        Los Angeles, USA
                                      </option>
                                      <option value='option-8' data-src="images/flags/canada.png">
                                        Quebec, Canada
                                      </option>
                                      <option value='option-9' data-src="images/flags/australia.png">
                                        Sydney, Australia
                                      </option>
                                      <option value='option-10' data-src="images/flags/brazil.png">
                                        Sau Paulo, Brazil
                                      </option>
                                      <option value='option-11' data-src="images/flags/thailand.png">
                                        Bangkok, Thailand
                                      </option>
                                      <option value='option-12' data-src="images/flags/indonesia.png">
                                        Jakarta, Indonesia
                                      </option>
                                    </select>
                                </div>
                                <div className="d-group">
                                    <h4>Top Features</h4>
                                    <ul className="d-list">
                                        <li>Super Quick Setup</li>
                                        <li>Premium Hardware</li>
                                        <li>DDos Protection</li>
                                        <li>24/7 Customer Support</li>
                                    </ul>
                                </div>
                                <div className="d-action">
                                    <a href="#" className="btn-main opt-1 w-100">Get Monthly Plan</a>
                                    <a href="#" className="btn-main opt-2 w-100">Get Yearly Plan</a>
                                    <p>Auto re-news at regular rate</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 mb-sm-30 wow fadeInRight" data-wow-delay=".6s">
                            <div className="de_pricing-table type-2 rec">
                                <div className="d-recommend">Best Seller</div>
                                <div className="d-head">
                                    <h3>20 Slots</h3>
                                </div>
                                <div className="d-price">
                                    <h4 className="opt-1">$8.59<span>/mo</span></h4>
                                    <h4 className="opt-2">$5.59<span>/mo</span></h4>
                                    <p>Normally <s>$24.99</s></p>
                                </div>
                                <div className="d-location">
                                    <h4>Server Location</h4>
                                    <select name='Server Location' className="server_location form-control">
                                      <option value='option-1' data-src="images/flags/united-kingdom.png">
                                        London, England
                                      </option>
                                      <option value='option-2' data-src="images/flags/france.png">
                                        Paris, France
                                      </option>
                                      <option value='option-3' data-src="images/flags/germany.png">
                                        Frankurt, Germany
                                      </option>
                                      <option value='option-4' data-src="images/flags/netherlands.png">
                                        Amsterdam, Netherlands
                                      </option>
                                      <option value='option-5' data-src="images/flags/sweden.png">
                                        Stockholm, Sweden
                                      </option>
                                      <option value='option-6' data-src="images/flags/finland.png">
                                        Helsinki, Finland
                                      </option>
                                      <option value='option-7' data-src="images/flags/usa.png">
                                        Los Angeles, USA
                                      </option>
                                      <option value='option-8' data-src="images/flags/canada.png">
                                        Quebec, Canada
                                      </option>
                                      <option value='option-9' data-src="images/flags/australia.png">
                                        Sydney, Australia
                                      </option>
                                      <option value='option-10' data-src="images/flags/brazil.png">
                                        Sau Paulo, Brazil
                                      </option>
                                      <option value='option-11' data-src="images/flags/thailand.png">
                                        Bangkok, Thailand
                                      </option>
                                      <option value='option-12' data-src="images/flags/indonesia.png">
                                        Jakarta, Indonesia
                                      </option>
                                    </select>
                                </div>
                                <div className="d-group">
                                    <h4>Top Features</h4>
                                    <ul className="d-list">
                                        <li>Super Quick Setup</li>
                                        <li>Premium Hardware</li>
                                        <li>DDos Protection</li>
                                        <li>24/7 Customer Support</li>
                                    </ul>
                                </div>                                
                                <div className="d-action">
                                    <a href="#" className="btn-main opt-1 w-100">Get Monthly Plan</a>
                                    <a href="#" className="btn-main opt-2 w-100">Get Yearly Plan</a>
                                    <p>Auto re-news at regular rate</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 mb-sm-30 wow fadeInRight" data-wow-delay=".8s">
                            <div className="de_pricing-table type-2">
                                <div className="d-head">
                                    <h3>Custom</h3>
                                </div>
                                <div className="d-price">
                                    <h4 className="opt-1">$15.59<span>/mo</span></h4>
                                    <h4 className="opt-2">$10.59<span>/mo</span></h4>
                                    <p>Normally <s>$36.99</s></p>
                                </div>
                                <div className="d-location">
                                    <h4>Server Location</h4>
                                    <select name='Server Location' className="server_location form-control">
                                      <option value='option-1' data-src="images/flags/united-kingdom.png">
                                        London, England
                                      </option>
                                      <option value='option-2' data-src="images/flags/france.png">
                                        Paris, France
                                      </option>
                                      <option value='option-3' data-src="images/flags/germany.png">
                                        Frankurt, Germany
                                      </option>
                                      <option value='option-4' data-src="images/flags/netherlands.png">
                                        Amsterdam, Netherlands
                                      </option>
                                      <option value='option-5' data-src="images/flags/sweden.png">
                                        Stockholm, Sweden
                                      </option>
                                      <option value='option-6' data-src="images/flags/finland.png">
                                        Helsinki, Finland
                                      </option>
                                      <option value='option-7' data-src="images/flags/usa.png">
                                        Los Angeles, USA
                                      </option>
                                      <option value='option-8' data-src="images/flags/canada.png">
                                        Quebec, Canada
                                      </option>
                                      <option value='option-9' data-src="images/flags/australia.png">
                                        Sydney, Australia
                                      </option>
                                      <option value='option-10' data-src="images/flags/brazil.png">
                                        Sau Paulo, Brazil
                                      </option>
                                      <option value='option-11' data-src="images/flags/thailand.png">
                                        Bangkok, Thailand
                                      </option>
                                      <option value='option-12' data-src="images/flags/indonesia.png">
                                        Jakarta, Indonesia
                                      </option>
                                    </select>
                                </div>
                                <div className="d-group">
                                    <h4>Top Features</h4>
                                    <ul className="d-list">
                                        <li>Super Quick Setup</li>
                                        <li>Premium Hardware</li>
                                        <li>DDos Protection</li>
                                        <li>24/7 Customer Support</li>
                                    </ul>
                                </div>
                                <div className="d-action">
                                    <a href="#" className="btn-main opt-1 w-100">Get Monthly Plan</a>
                                    <a href="#" className="btn-main opt-2 w-100">Get Yearly Plan</a>
                                    <p>Auto re-news at regular rate</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>

            <section className="no-top">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="subtitle wow fadeInUp mb-3">Incredibly features</div>
                            <h2 className="wow fadeInUp mb20" data-wow-delay=".2s">Premium Features</h2>
                        </div>

                        <div className="col-lg-6"></div>

                        <div className="col-lg-3 col-sm-6 wow fadeInRight" data-wow-delay="0s">
                            <div>
                                <img src={require('../../assets/images/icons/1.png')} className="mb20" alt=""/>
                                <h4>Super Quick Setup</h4>
                                <p>Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 wow fadeInRight" data-wow-delay=".2s">
                            <div>
                                <img src={require('../../assets/images/icons/2.png')} className="mb20" alt=""/>
                                <h4>Premium Hardware</h4>
                                <p>Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 wow fadeInRight" data-wow-delay=".4s">
                            <div>
                                <img src={require('../../assets/images/icons/3.png')} className="mb20" alt=""/>
                                <h4>DDos Protection</h4>
                                <p>Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 wow fadeInRight" data-wow-delay=".6s">
                            <div>
                                <img src={require('../../assets/images/icons/4.png')} className="mb20" alt=""/>
                                <h4>Fast Support</h4>
                                <p>Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default PricingTableOne