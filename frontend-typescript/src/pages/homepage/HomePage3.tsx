import React, {useEffect} from "react";
import customMarquee from "../../assets/js/custom-marquee";
import customSwiper2 from "../../assets/js/custom-swiper-2";
import designesis from "../../assets/js/designesia";

function HomePage3() {
  useEffect(()=>{
    customMarquee(); // 얘가 문제가 많음
    customSwiper2();
    designesis();
  },[])
  return (
    <>
      {/* <!-- content begin --> */}
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          className="pt60 no-bottom"
          data-bgimage="url(images/background/4.webp"
        >
          <div className="container">
            <div className="row align-items-center gx-5">
              <div className="col-lg-6">
                <div className="subtitle wow fadeInUp mb-3">
                  Level Up Your Game
                </div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  Your victory begins with ultra performance
                </h2>
                <p className="wow fadeInUp">
                  Welcome to the ultimate gaming experience! Our game hosting
                  service is designed to take your gaming adventures to the next
                  level. With lightning-fast servers, unbeatable reliability,
                  and 24/7 support, we're here to ensure your gaming experience
                  is seamless and stress-free. Join us and let's embark on an
                  epic gaming journey together. Your victory begins here!
                </p>

                <div className="spacer-10"></div>
                <a className="btn-main mb10 wow fadeInUp" href="games.html">
                  Order Your Game Server Now
                </a>
              </div>

              <div className="col-lg-6">
                <div className="d_wrap">
                  <img
                    src={require("../../assets/images/misc/server-2.webp")}
                    className="lazy img-fluid wow fadeIn"
                    data-wow-delay=".6s"
                    alt=""
                  />
                  <div
                    className="d_wrap_sm-box d-lg-block d-none b1 wow zoomIn"
                    data-wow-delay=".8s"
                  >
                    <i className="bg-gradient fa fa-users"></i>
                    <h3>15425</h3>
                    <h6>Happy Gamers</h6>
                  </div>

                  <div
                    className="d_wrap_sm-box d-lg-block d-none b2 wow zoomIn"
                    data-wow-delay="1s"
                  >
                    <i className="bg-gradient fa fa-rotate"></i>
                    <h3>99.99%</h3>
                    <h6>Uptime</h6>
                  </div>

                  <div
                    className="d_wrap_sm-box d-lg-block d-none b3 wow zoomIn"
                    data-wow-delay="1.2s"
                  >
                    <i className="bg-gradient fa fa-thumbs-up"></i>
                    <h3>15 Years</h3>
                    <h6>Experiences</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="no-bottom">
          <div className="no-bottom wow fadeInRight d-flex z-1000">
            <div className="de-marquee-list s2 wow">
              <div className="d-item">
                <span className="d-item-txt">
                  <img
                    src={require("../../assets/images/flags/united-kingdom.png")}
                    className=""
                    alt=""
                  />
                  London
                </span>
                <span className="d-item-display">
                  <i className="d-item-block"></i>
                </span>
                <span className="d-item-txt">
                  <img
                    src={require("../../assets/images/flags/france.png")}
                    className=""
                    alt=""
                  />
                  Paris
                </span>
                <span className="d-item-display">
                  <i className="d-item-block"></i>
                </span>
                <span className="d-item-txt">
                  <img
                    src={require("../../assets/images/flags/germany.png")}
                    className=""
                    alt=""
                  />
                  Frankurt
                </span>
                <span className="d-item-display">
                  <i className="d-item-block"></i>
                </span>
                <span className="d-item-txt">
                  <img
                    src={require("../../assets/images/flags/netherlands.png")}
                    className=""
                    alt=""
                  />
                  Amsterdam
                </span>
                <span className="d-item-display">
                  <i className="d-item-block"></i>
                </span>
                <span className="d-item-txt">
                  <img
                    src={require("../../assets/images/flags/sweden.png")}
                    className=""
                    alt=""
                  />
                  Stockholm
                </span>
                <span className="d-item-display">
                  <i className="d-item-block"></i>
                </span>
                <span className="d-item-txt">
                  <img
                    src={require("../../assets/images/flags/finland.png")}
                    className=""
                    alt=""
                  />
                  Helsinki
                </span>
                <span className="d-item-display">
                  <i className="d-item-block"></i>
                </span>
                <span className="d-item-txt">
                  <img
                    src={require("../../assets/images/flags/usa.png")}
                    className=""
                    alt=""
                  />
                  Los Angeles
                </span>
                <span className="d-item-display">
                  <i className="d-item-block"></i>
                </span>
                <span className="d-item-txt">
                  <img
                    src={require("../../assets/images/flags/canada.png")}
                    className=""
                    alt=""
                  />
                  Quebec
                </span>
                <span className="d-item-display">
                  <i className="d-item-block"></i>
                </span>
                <span className="d-item-txt">
                  <img
                    src={require("../../assets/images/flags/france.png")}
                    className=""
                    alt=""
                  />
                  Singapore
                </span>
                <span className="d-item-display">
                  <i className="d-item-block"></i>
                </span>
                <span className="d-item-txt">
                  <img
                    src={require("../../assets/images/flags/australia.png")}
                    className=""
                    alt=""
                  />
                  Sydney
                </span>
                <span className="d-item-display">
                  <i className="d-item-block"></i>
                </span>
                <span className="d-item-txt">
                  <img
                    src={require("../../assets/images/flags/brazil.png")}
                    className=""
                    alt=""
                  />
                  Sau Paulo
                </span>
                <span className="d-item-display">
                  <i className="d-item-block"></i>
                </span>
                <span className="d-item-txt">
                  <img
                    src={require("../../assets/images/flags/thailand.png")}
                    className=""
                    alt=""
                  />
                  Bangkok
                </span>
                <span className="d-item-display">
                  <i className="d-item-block"></i>
                </span>
                <span className="d-item-txt">
                  <img
                    src={require("../../assets/images/flags/indonesia.png")}
                    className=""
                    alt=""
                  />
                  Jakarta
                </span>
                <span className="d-item-display">
                  <i className="d-item-block"></i>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="jarallax">
          <img
            src={require("../../assets/images/background/5.webp")}
            className="jarallax-img"
            alt=""
          />
          <div className="de-gradient-edge-top"></div>
          <div className="de-gradient-edge-bottom"></div>
          <div className="container z-1000">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 text-center">
                <div className="subtitle wow fadeInUp mb-3">Pricing Plans</div>
                <h2 className="wow fadeInUp mb20" data-wow-delay=".2s">
                  Choose plan for you
                </h2>
                <div className="switch-set">
                  <div>Monthly Plan</div>
                  <div>
                    <input id="sw-1" className="switch" type="checkbox" />
                  </div>
                  <div>Yearly Plan</div>
                  <div className="spacer-20"></div>
                </div>
              </div>

              <div className="clearfix"></div>

              <div
                className="col-xl-3 col-md-6 mb-sm-30 wow fadeInRight"
                data-wow-delay=".2s"
              >
                <div className="de_pricing-table type-2">
                  <div className="d-head">
                    <h3>4 Slots</h3>
                  </div>
                  <div className="d-price">
                    <h4 className="opt-1">
                      $3.59<span>/mo</span>
                    </h4>
                    <h4 className="opt-2">
                      $2.59<span>/mo</span>
                    </h4>
                    <p>
                      Normally <s>$9.99</s>
                    </p>
                  </div>
                  <div className="d-location">
                    <h4>Server Location</h4>
                    <select
                      name="Server Location"
                      className="server_location form-control"
                    >
                      <option
                        value="option-1"
                        data-src="images/flags/united-kingdom.png"
                      >
                        London, England
                      </option>
                      <option
                        value="option-2"
                        data-src="images/flags/france.png"
                      >
                        Paris, France
                      </option>
                      <option
                        value="option-3"
                        data-src="images/flags/germany.png"
                      >
                        Frankurt, Germany
                      </option>
                      <option
                        value="option-4"
                        data-src="images/flags/netherlands.png"
                      >
                        Amsterdam, Netherlands
                      </option>
                      <option
                        value="option-5"
                        data-src="images/flags/sweden.png"
                      >
                        Stockholm, Sweden
                      </option>
                      <option
                        value="option-6"
                        data-src="images/flags/finland.png"
                      >
                        Helsinki, Finland
                      </option>
                      <option value="option-7" data-src="images/flags/usa.png">
                        Los Angeles, USA
                      </option>
                      <option
                        value="option-8"
                        data-src="images/flags/canada.png"
                      >
                        Quebec, Canada
                      </option>
                      <option
                        value="option-9"
                        data-src="images/flags/australia.png"
                      >
                        Sydney, Australia
                      </option>
                      <option
                        value="option-10"
                        data-src="images/flags/brazil.png"
                      >
                        Sau Paulo, Brazil
                      </option>
                      <option
                        value="option-11"
                        data-src="images/flags/thailand.png"
                      >
                        Bangkok, Thailand
                      </option>
                      <option
                        value="option-12"
                        data-src="images/flags/indonesia.png"
                      >
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
                    <a href="#" className="btn-main opt-1 w-100">
                      Get Monthly Plan
                    </a>
                    <a href="#" className="btn-main opt-2 w-100">
                      Get Yearly Plan
                    </a>
                    <p>Auto re-news at regular rate</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-md-6 mb-sm-30 wow fadeInRight"
                data-wow-delay=".4s"
              >
                <div className="de_pricing-table type-2">
                  <div className="d-head">
                    <h3>10 Slots</h3>
                  </div>
                  <div className="d-price">
                    <h4 className="opt-1">
                      $5.59<span>/mo</span>
                    </h4>
                    <h4 className="opt-2">
                      $3.59<span>/mo</span>
                    </h4>
                    <p>
                      Normally <s>$15.99</s>
                    </p>
                  </div>
                  <div className="d-location">
                    <h4>Server Location</h4>
                    <select
                      name="Server Location"
                      className="server_location form-control"
                    >
                      <option
                        value="option-1"
                        data-src="images/flags/united-kingdom.png"
                      >
                        London, England
                      </option>
                      <option
                        value="option-2"
                        data-src="images/flags/france.png"
                      >
                        Paris, France
                      </option>
                      <option
                        value="option-3"
                        data-src="images/flags/germany.png"
                      >
                        Frankurt, Germany
                      </option>
                      <option
                        value="option-4"
                        data-src="images/flags/netherlands.png"
                      >
                        Amsterdam, Netherlands
                      </option>
                      <option
                        value="option-5"
                        data-src="images/flags/sweden.png"
                      >
                        Stockholm, Sweden
                      </option>
                      <option
                        value="option-6"
                        data-src="images/flags/finland.png"
                      >
                        Helsinki, Finland
                      </option>
                      <option value="option-7" data-src="images/flags/usa.png">
                        Los Angeles, USA
                      </option>
                      <option
                        value="option-8"
                        data-src="images/flags/canada.png"
                      >
                        Quebec, Canada
                      </option>
                      <option
                        value="option-9"
                        data-src="images/flags/australia.png"
                      >
                        Sydney, Australia
                      </option>
                      <option
                        value="option-10"
                        data-src="images/flags/brazil.png"
                      >
                        Sau Paulo, Brazil
                      </option>
                      <option
                        value="option-11"
                        data-src="images/flags/thailand.png"
                      >
                        Bangkok, Thailand
                      </option>
                      <option
                        value="option-12"
                        data-src="images/flags/indonesia.png"
                      >
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
                    <a href="#" className="btn-main opt-1 w-100">
                      Get Monthly Plan
                    </a>
                    <a href="#" className="btn-main opt-2 w-100">
                      Get Yearly Plan
                    </a>
                    <p>Auto re-news at regular rate</p>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 mb-sm-30 wow fadeInRight"
                data-wow-delay=".6s"
              >
                <div className="de_pricing-table type-2 rec">
                  <div className="d-recommend">Best Seller</div>
                  <div className="d-head">
                    <h3>20 Slots</h3>
                  </div>
                  <div className="d-price">
                    <h4 className="opt-1">
                      $8.59<span>/mo</span>
                    </h4>
                    <h4 className="opt-2">
                      $5.59<span>/mo</span>
                    </h4>
                    <p>
                      Normally <s>$24.99</s>
                    </p>
                  </div>
                  <div className="d-location">
                    <h4>Server Location</h4>
                    <select
                      name="Server Location"
                      className="server_location form-control"
                    >
                      <option
                        value="option-1"
                        data-src="images/flags/united-kingdom.png"
                      >
                        London, England
                      </option>
                      <option
                        value="option-2"
                        data-src="images/flags/france.png"
                      >
                        Paris, France
                      </option>
                      <option
                        value="option-3"
                        data-src="images/flags/germany.png"
                      >
                        Frankurt, Germany
                      </option>
                      <option
                        value="option-4"
                        data-src="images/flags/netherlands.png"
                      >
                        Amsterdam, Netherlands
                      </option>
                      <option
                        value="option-5"
                        data-src="images/flags/sweden.png"
                      >
                        Stockholm, Sweden
                      </option>
                      <option
                        value="option-6"
                        data-src="images/flags/finland.png"
                      >
                        Helsinki, Finland
                      </option>
                      <option value="option-7" data-src="images/flags/usa.png">
                        Los Angeles, USA
                      </option>
                      <option
                        value="option-8"
                        data-src="images/flags/canada.png"
                      >
                        Quebec, Canada
                      </option>
                      <option
                        value="option-9"
                        data-src="images/flags/australia.png"
                      >
                        Sydney, Australia
                      </option>
                      <option
                        value="option-10"
                        data-src="images/flags/brazil.png"
                      >
                        Sau Paulo, Brazil
                      </option>
                      <option
                        value="option-11"
                        data-src="images/flags/thailand.png"
                      >
                        Bangkok, Thailand
                      </option>
                      <option
                        value="option-12"
                        data-src="images/flags/indonesia.png"
                      >
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
                    <a href="#" className="btn-main opt-1 w-100">
                      Get Monthly Plan
                    </a>
                    <a href="#" className="btn-main opt-2 w-100">
                      Get Yearly Plan
                    </a>
                    <p>Auto re-news at regular rate</p>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 mb-sm-30 wow fadeInRight"
                data-wow-delay=".8s"
              >
                <div className="de_pricing-table type-2">
                  <div className="d-head">
                    <h3>Custom</h3>
                  </div>
                  <div className="d-price">
                    <h4 className="opt-1">
                      $15.59<span>/mo</span>
                    </h4>
                    <h4 className="opt-2">
                      $10.59<span>/mo</span>
                    </h4>
                    <p>
                      Normally <s>$36.99</s>
                    </p>
                  </div>
                  <div className="d-location">
                    <h4>Server Location</h4>
                    <select
                      name="Server Location"
                      className="server_location form-control"
                    >
                      <option
                        value="option-1"
                        data-src="images/flags/united-kingdom.png"
                      >
                        London, England
                      </option>
                      <option
                        value="option-2"
                        data-src="images/flags/france.png"
                      >
                        Paris, France
                      </option>
                      <option
                        value="option-3"
                        data-src="images/flags/germany.png"
                      >
                        Frankurt, Germany
                      </option>
                      <option
                        value="option-4"
                        data-src="images/flags/netherlands.png"
                      >
                        Amsterdam, Netherlands
                      </option>
                      <option
                        value="option-5"
                        data-src="images/flags/sweden.png"
                      >
                        Stockholm, Sweden
                      </option>
                      <option
                        value="option-6"
                        data-src="images/flags/finland.png"
                      >
                        Helsinki, Finland
                      </option>
                      <option value="option-7" data-src="images/flags/usa.png">
                        Los Angeles, USA
                      </option>
                      <option
                        value="option-8"
                        data-src="images/flags/canada.png"
                      >
                        Quebec, Canada
                      </option>
                      <option
                        value="option-9"
                        data-src="images/flags/australia.png"
                      >
                        Sydney, Australia
                      </option>
                      <option
                        value="option-10"
                        data-src="images/flags/brazil.png"
                      >
                        Sau Paulo, Brazil
                      </option>
                      <option
                        value="option-11"
                        data-src="images/flags/thailand.png"
                      >
                        Bangkok, Thailand
                      </option>
                      <option
                        value="option-12"
                        data-src="images/flags/indonesia.png"
                      >
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
                    <a href="#" className="btn-main opt-1 w-100">
                      Get Monthly Plan
                    </a>
                    <a href="#" className="btn-main opt-2 w-100">
                      Get Yearly Plan
                    </a>
                    <p>Auto re-news at regular rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="no-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="subtitle wow fadeInUp mb-3">Most complete</div>
                <h2 className="wow fadeInUp mb20" data-wow-delay=".2s">
                  Game Collection
                </h2>
              </div>
              <div className="col-lg-6 text-lg-end">
                <a className="btn-main mb-sm-30" href="games.html">
                  View all games
                </a>
              </div>
            </div>
            <div className="row g-4 sequence">
              <div className="col-lg-4 col-sm-6 gallery-item">
                <div className="de-item wow">
                  <div className="d-overlay">
                    <div className="d-label">20% OFF</div>
                    <div className="d-text">
                      <h4>Thunder and City</h4>
                      <p className="d-price">
                        Starting at <span className="price">$14.99</span>
                      </p>
                      <a
                        className="btn-main btn-fullwidth"
                        href="pricing-table-one.html"
                      >
                        Order Now
                      </a>
                    </div>
                  </div>
                  <img
                    src={require("../../assets/images/covers/1.webp")}
                    className="img-fluid "
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 gallery-item">
                <div className="de-item wow">
                  <div className="d-overlay">
                    <div className="d-label">20% OFF</div>
                    <div className="d-text">
                      <h4>Mystic Racing Z</h4>
                      <p className="d-price">
                        Starting at <span className="price">$14.99</span>
                      </p>
                      <a
                        className="btn-main btn-fullwidth"
                        href="pricing-table-one.html"
                      >
                        Order Now
                      </a>
                    </div>
                  </div>
                  <img
                    src={require("../../assets/images/covers/2.webp")}
                    className="img-fluid "
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 gallery-item">
                <div className="de-item wow">
                  <div className="d-overlay">
                    <div className="d-label">20% OFF</div>
                    <div className="d-text">
                      <h4>Silent Wrath</h4>
                      <p className="d-price">
                        Starting at <span className="price">$14.99</span>
                      </p>
                      <a
                        className="btn-main btn-fullwidth"
                        href="pricing-table-one.html"
                      >
                        Order Now
                      </a>
                    </div>
                  </div>
                  <img
                    src={require("../../assets/images/covers/3.webp")}
                    className="img-fluid "
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 gallery-item">
                <div className="de-item wow">
                  <div className="d-overlay">
                    <div className="d-label">20% OFF</div>
                    <div className="d-text">
                      <h4>Funk Dungeon</h4>
                      <p className="d-price">
                        Starting at <span className="price">$14.99</span>
                      </p>
                      <a
                        className="btn-main btn-fullwidth"
                        href="pricing-table-one.html"
                      >
                        Order Now
                      </a>
                    </div>
                  </div>
                  <img
                    src={require("../../assets/images/covers/4.webp")}
                    className="img-fluid "
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 gallery-item">
                <div className="de-item wow">
                  <div className="d-overlay">
                    <div className="d-label">20% OFF</div>
                    <div className="d-text">
                      <h4>Galactic Odyssey</h4>
                      <p className="d-price">
                        Starting at <span className="price">$14.99</span>
                      </p>
                      <a
                        className="btn-main btn-fullwidth"
                        href="pricing-table-one.html"
                      >
                        Order Now
                      </a>
                    </div>
                  </div>
                  <img
                    src={require("../../assets/images/covers/5.webp")}
                    className="img-fluid "
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 gallery-item">
                <div className="de-item wow">
                  <div className="d-overlay">
                    <div className="d-label">20% OFF</div>
                    <div className="d-text">
                      <h4>Warfare Legends</h4>
                      <p className="d-price">
                        Starting at <span className="price">$14.99</span>
                      </p>
                      <a
                        className="btn-main btn-fullwidth"
                        href="pricing-table-one.html"
                      >
                        Order Now
                      </a>
                    </div>
                  </div>
                  <img
                    src={require("../../assets/images/covers/6.webp")}
                    className="img-fluid "
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="no-top no-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="subtitle wow fadeInUp mb-3">
                  Incredibly features
                </div>
                <h2 className="wow fadeInUp mb20" data-wow-delay=".2s">
                  Premium Game Server
                </h2>
              </div>

              <div className="col-lg-6"></div>

              <div
                className="col-lg-3 col-md-6 mb-sm-20 wow fadeInRight"
                data-wow-delay="0s"
              >
                <div>
                  <img
                    src={require("../../assets/images/icons/1.png")}
                    className="mb20"
                    alt=""
                  />
                  <h4>Super Quick Setup</h4>
                  <p>
                    Dolor minim in pariatur in deserunt laboris eu pariatur
                    labore excepteur cupidatat cupidatat duis dolor in.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 mb-sm-20 wow fadeInRight"
                data-wow-delay=".2s"
              >
                <div>
                  <img
                    src={require("../../assets/images/icons/2.png")}
                    className="mb20"
                    alt=""
                  />
                  <h4>Premium Hardware</h4>
                  <p>
                    Dolor minim in pariatur in deserunt laboris eu pariatur
                    labore excepteur cupidatat cupidatat duis dolor in.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 mb-sm-20 wow fadeInRight"
                data-wow-delay=".4s"
              >
                <div>
                  <img
                    src={require("../../assets/images/icons/3.png")}
                    className="mb20"
                    alt=""
                  />
                  <h4>DDos Protection</h4>
                  <p>
                    Dolor minim in pariatur in deserunt laboris eu pariatur
                    labore excepteur cupidatat cupidatat duis dolor in.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 mb-sm-20 wow fadeInRight"
                data-wow-delay=".6s"
              >
                <div>
                  <img
                    src={require("../../assets/images/icons/4.png")}
                    className="mb20"
                    alt=""
                  />
                  <h4>Fast Support</h4>
                  <p>
                    Dolor minim in pariatur in deserunt laboris eu pariatur
                    labore excepteur cupidatat cupidatat duis dolor in.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="jarallax">
          <img
            src={require("../../assets/images/background/6.webp")}
            className="jarallax-img"
            alt=""
          />
          <div className="de-gradient-edge-top"></div>
          <div className="de-gradient-edge-bottom"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="subtitle mb20">Customer reviews</div>
                <h2 className="wow fadeInUp">4.85 out of 5</h2>
                <div className="spacer-20"></div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div
                className="owl-carousel owl-theme wow fadeInUp"
                id="testimonial-carousel"
              >
                <div className="item">
                  <div className="de_testi type-2">
                    <blockquote>
                      <div className="de-rating-ext">
                        <span className="d-stars">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                      </div>
                      <p>
                        "I've been using Playhost for my game server needs, and
                        I couldn't be happier. The server uptime is fantastic,
                        and the customer support team is always quick to assist
                        with any issues."
                      </p>
                      <div className="de_testi_by">
                        <img
                          alt=""
                          src={require("../../assets/images/people/1.jpg")}
                        />{" "}
                        <span>Michael S.</span>
                      </div>
                    </blockquote>
                  </div>
                </div>
                <div className="item">
                  <div className="de_testi type-2">
                    <blockquote>
                      <div className="de-rating-ext">
                        <span className="d-stars">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                      </div>
                      <p>
                        "Running a game server used to be a hassle, but Playhost
                        makes it easy. The control panel is user-friendly, and I
                        love how they handle server maintenance and updates."
                      </p>
                      <div className="de_testi_by">
                        <img
                          alt=""
                          src={require("../../assets/images/people/2.jpg")}
                        />{" "}
                        <span>Robert L.</span>
                      </div>
                    </blockquote>
                  </div>
                </div>
                <div className="item">
                  <div className="de_testi type-2">
                    <blockquote>
                      <div className="de-rating-ext">
                        <span className="d-stars">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                      </div>
                      <p>
                        "I've tried several hosting providers in the past, and
                        Playhost is by far the best. Their server performance is
                        top-notch, and I've never experienced lag while playing
                        with friends."
                      </p>
                      <div className="de_testi_by">
                        <img
                          alt=""
                          src={require("../../assets/images/people/3.jpg")}
                        />{" "}
                        <span>Jake M.</span>
                      </div>
                    </blockquote>
                  </div>
                </div>
                <div className="item">
                  <div className="de_testi type-2">
                    <blockquote>
                      <div className="de-rating-ext">
                        <span className="d-stars">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                      </div>
                      <p>
                        As a new server owner, I was worried about setup and
                        configuration, but Playhost made it a breeze. They have
                        detailed tutorials and helpful support, which made the
                        process smooth."
                      </p>
                      <div className="de_testi_by">
                        <img
                          alt=""
                          src={require("../../assets/images/people/4.jpg")}
                        />{" "}
                        <span>Alex P.</span>
                      </div>
                    </blockquote>
                  </div>
                </div>
                <div className="item">
                  <div className="de_testi type-2">
                    <blockquote>
                      <div className="de-rating-ext">
                        <span className="d-stars">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                      </div>
                      <p>
                        "The flexibility Playhost offers is incredible. I can
                        easily switch between game servers or even host multiple
                        games on the same plan. It's a gamer's dream come true!"
                      </p>
                      <div className="de_testi_by">
                        <img
                          alt=""
                          src={require("../../assets/images/people/5.jpg")}
                        />{" "}
                        <span>Carlos R.</span>
                      </div>
                    </blockquote>
                  </div>
                </div>
                <div className="item">
                  <div className="de_testi type-2">
                    <blockquote>
                      <div className="de-rating-ext">
                        <span className="d-stars">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                      </div>
                      <p>
                        "I've been a loyal customer of Playhost for years now.
                        Their dedication to keeping their hardware up-to-date
                        ensures my gaming experience is always optimal."
                      </p>
                      <div className="de_testi_by">
                        <img
                          alt=""
                          src={require("../../assets/images/people/6.jpg")}
                        />{" "}
                        <span>Edward B.</span>
                      </div>
                    </blockquote>
                  </div>
                </div>
                <div className="item">
                  <div className="de_testi type-2">
                    <blockquote>
                      <div className="de-rating-ext">
                        <span className="d-stars">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                      </div>
                      <p>
                        "When our community needed a reliable server for our
                        esports tournaments, we turned to Playhost, and they've
                        never let us down. Their servers are perfect for
                        competitive gaming."
                      </p>
                      <div className="de_testi_by">
                        <img
                          alt=""
                          src={require("../../assets/images/people/7.jpg")}
                        />{" "}
                        <span>Daniel H.</span>
                      </div>
                    </blockquote>
                  </div>
                </div>
                <div className="item">
                  <div className="de_testi type-2">
                    <blockquote>
                      <div className="de-rating-ext">
                        <span className="d-stars">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                      </div>
                      <p>
                        "The DDoS protection from Playhost is a lifesaver. We
                        used to get attacked regularly, but since switching to
                        their servers, we haven't had any downtime."
                      </p>
                      <div className="de_testi_by">
                        <img
                          alt=""
                          src={require("../../assets/images/people/8.jpg")}
                        />{" "}
                        <span>Bryan G.</span>
                      </div>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="no-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="subtitle wow fadeInUp mb-3">Do you have</div>
                <h2 className="wow fadeInUp mb20" data-wow-delay=".2s">
                  Any questions?
                </h2>
              </div>

              <div className="clearfix"></div>

              <div className="col-lg-6">
                <div className="accordion s2 wow fadeInUp">
                  <div className="accordion-section">
                    <div
                      className="accordion-section-title"
                      data-tab="#accordion-a1"
                    >
                      What is game hosting?
                    </div>
                    <div
                      className="accordion-section-content"
                      id="accordion-a1"
                    >
                      <p>
                        Game hosting refers to the process of renting or setting
                        up servers to run multiplayer online games. These
                        servers allow players to connect and play together in
                        the same game world.
                      </p>
                    </div>
                    <div
                      className="accordion-section-title"
                      data-tab="#accordion-a2"
                    >
                      Why do I need game hosting?
                    </div>
                    <div
                      className="accordion-section-content"
                      id="accordion-a2"
                    >
                      <p>
                        Game hosting is essential for multiplayer gaming. It
                        provides a dedicated server where players can join,
                        ensuring a smooth and lag-free gaming experience. It
                        also allows you to customize game settings and mods.
                      </p>
                    </div>
                    <div
                      className="accordion-section-title"
                      data-tab="#accordion-a3"
                    >
                      How do I choose a game hosting provider?
                    </div>
                    <div
                      className="accordion-section-content"
                      id="accordion-a3"
                    >
                      <p>
                        Consider factors like server location, performance,
                        scalability, customer support, and price when choosing a
                        game hosting provider. Read reviews and ask for
                        recommendations from fellow gamers.
                      </p>
                    </div>
                    <div
                      className="accordion-section-title"
                      data-tab="#accordion-a4"
                    >
                      What types of games can I host?
                    </div>
                    <div
                      className="accordion-section-content"
                      id="accordion-a4"
                    >
                      <p>
                        You can host various types of games, including
                        first-person shooters, role-playing games, survival
                        games, strategy games, and more. The type of game
                        hosting you need depends on the game's requirements.
                      </p>
                    </div>
                    <div
                      className="accordion-section-title"
                      data-tab="#accordion-a5"
                    >
                      What is server latency or ping?
                    </div>
                    <div
                      className="accordion-section-content"
                      id="accordion-a5"
                    >
                      <p>
                        Server latency or ping measures the time it takes for
                        data to travel between your computer and the game
                        server. Lower ping values indicate better responsiveness
                        and less lag.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="accordion s2 wow fadeInUp">
                  <div className="accordion-section">
                    <div
                      className="accordion-section-title"
                      data-tab="#accordion-b1"
                    >
                      How do I manage a game server?
                    </div>
                    <div
                      className="accordion-section-content"
                      id="accordion-b1"
                    >
                      <p>
                        Game server management varies depending on the hosting
                        provider and game type. Typically, you'll have access to
                        a control panel or command-line interface to configure
                        settings, mods, and player access.
                      </p>
                    </div>
                    <div
                      className="accordion-section-title"
                      data-tab="#accordion-b2"
                    >
                      Can I run mods on my game server?
                    </div>
                    <div
                      className="accordion-section-content"
                      id="accordion-b2"
                    >
                      <p>
                        Yes, many game hosting providers support mods. You can
                        install and manage mods to enhance gameplay or customize
                        the game to your liking.
                      </p>
                    </div>
                    <div
                      className="accordion-section-title"
                      data-tab="#accordion-b3"
                    >
                      What is DDoS protection, and do I need it?
                    </div>
                    <div
                      className="accordion-section-content"
                      id="accordion-b3"
                    >
                      <p>
                        DDoS (Distributed Denial of Service) protection helps
                        defend your game server from malicious attacks that
                        could disrupt gameplay. It's essential for maintaining
                        server stability, especially for popular games.
                      </p>
                    </div>
                    <div
                      className="accordion-section-title"
                      data-tab="#accordion-b4"
                    >
                      How much does game hosting cost?
                    </div>
                    <div
                      className="accordion-section-content"
                      id="accordion-b4"
                    >
                      <p>
                        Game hosting costs vary depending on the provider,
                        server type, and game. Prices can range from a few
                        dollars per month for small servers to hundreds for
                        high-performance dedicated servers.
                      </p>
                    </div>
                    <div
                      className="accordion-section-title"
                      data-tab="#accordion-b5"
                    >
                      Is there 24/7 customer support?
                    </div>
                    <div
                      className="accordion-section-content"
                      id="accordion-b5"
                    >
                      <p>
                        Many reputable game hosting providers offer 24/7
                        customer support to assist with technical issues and
                        server management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="subtitle wow fadeInUp mb-3">
                  Payment Methods
                </div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  We accept
                </h2>
              </div>
              <div className="col-lg-6">
                <div className="row g-4">
                  <div className="col-sm-2 col-4">
                    <div
                      className="p-2 rounded-10"
                      data-bgcolor="rgba(255, 255, 255, .05)"
                    >
                      <img
                        src={require("../../assets/images/payments/visa.webp")}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-sm-2 col-4">
                    <div
                      className="p-2 rounded-10"
                      data-bgcolor="rgba(255, 255, 255, .05)"
                    >
                      <img
                        src={require("../../assets/images/payments/mastercard.webp")}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-sm-2 col-4">
                    <div
                      className="p-2 rounded-10"
                      data-bgcolor="rgba(255, 255, 255, .05)"
                    >
                      <img
                        src={require("../../assets/images/payments/paypal.webp")}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-sm-2 col-4">
                    <div
                      className="p-2 rounded-10"
                      data-bgcolor="rgba(255, 255, 255, .05)"
                    >
                      <img
                        src={require("../../assets/images/payments/skrill.webp")}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-sm-2 col-4">
                    <div
                      className="p-2 rounded-10"
                      data-bgcolor="rgba(255, 255, 255, .05)"
                    >
                      <img
                        src={require("../../assets/images/payments/jcb.webp")}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-sm-2 col-4">
                    <div
                      className="p-2 rounded-10"
                      data-bgcolor="rgba(255, 255, 255, .05)"
                    >
                      <img
                        src={require("../../assets/images/payments/american-express.webp")}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <!-- content close --> */}
    </>
  );
}

export default HomePage3;
