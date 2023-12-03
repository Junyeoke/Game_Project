import React , {useEffect} from "react";
import customMarquee from "../../assets/js/custom-marquee";
import customSwiper2 from "../../assets/js/custom-swiper-2";
import designesis from "../../assets/js/designesia";

function HomePage5() {
  useEffect(()=> {
    // customMarquee();
    customSwiper2();
    designesis();
  },[])
  return (
    <>
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          className="full-height no-top no-bottom jarallax"
          data-video-src="https://www.youtube.com/watch?v=QB2DfxkaBeU"
        >
          <div className="de-gradient-edge-top"></div>
          <div className="de-gradient-edge-bottom"></div>
          <div className="overlay-bg t50 no-top no-bottom">
            <div className="v-center">
              <div className="container z-1000">
                <div className="row align-items-center">
                  <div className="col-lg-10 offset-lg-1 text-center">
                    <div className="subtitle blink mb-4">
                      Servers Are Available
                    </div>
                    <h1 className="mb-0 wow fadeInUp">
                      Minecraft Server Hosting
                    </h1>
                  </div>
                  <div className="col-lg-6 offset-lg-3 text-center text-white">
                    <p className="wow fadeInUp">
                      Aute velit non excepteur in eiusmod proident aute qui
                      ullamco incididunt aliqua aliqua velit cillum deserunt
                      dolore consectetur excepteur magna dolor enim voluptate
                      dolore irure nulla culpa sint nulla do.
                    </p>
                    <a className="btn-main wow fadeInUp" href="#compare-plans">
                      Compare Our Plans
                    </a>

                    <div className="spacer-single"></div>

                    <div
                      className="de-rating-ext wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      <span className="d-stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                      <span className="d-val">4.85</span>
                      based on <strong>14086</strong> reviews.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt90 no-bottom">
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-6 offset-lg-3 text-center">
                <div className="subtitle wow fadeInUp mb-3">
                  Incredibly features
                </div>
                <h2 className="wow fadeInUp mb20" data-wow-delay=".2s">
                  Premium Game Server
                </h2>
              </div>

              <div className="clearfix"></div>

              <div
                className="col-lg-3 col-md-6 mb-sm-30 wow fadeInRight"
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices.{" "}
                  </p>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 mb-sm-30 wow fadeInRight"
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices.{" "}
                  </p>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 mb-sm-30 wow fadeInRight"
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices.{" "}
                  </p>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 mb-sm-30 wow fadeInRight"
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="compare-plans" className="no-bottom">
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
            </div>

            <div className="row">
              <div className="row">
                <div
                  className="col-lg-4 mb-sm-30 wow fadeInRight"
                  data-wow-delay=".2s"
                >
                  <div className="de-pricing-plan bg-dark-2 h-100">
                    <div className="d-title">Warrior</div>
                    <div className="d-stars">
                      <i className="fa fa-star"></i>
                    </div>
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
                      <span className="d-value opt-1">14.99</span>
                      <span className="d-value opt-2">9.99</span>
                      <span className="d-period">/monthly</span>
                    </div>
                    <div className="d-sub-price">
                      <span className="opt-1">$0.50</span>
                      <span className="opt-2">$0.25</span> per slot
                    </div>
                    <div className="spacer-20"></div>
                    <a className="btn-main btn-fullwidth" href="#">
                      Order Now
                    </a>
                  </div>
                </div>

                <div
                  className="col-lg-4 mb-sm-30 wow fadeInRight"
                  data-wow-delay=".4s"
                >
                  <div className="de-pricing-plan bg-dark-2 h-100 d-feature">
                    <div className="d-badge">Top Seller</div>
                    <div className="d-title">General</div>
                    <div className="d-stars">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
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
                      <span className="d-value opt-1">19.99</span>
                      <span className="d-value opt-2">14.99</span>
                      <span className="d-period">/monthly</span>
                    </div>
                    <div className="d-sub-price">
                      <span className="opt-1">$0.50</span>
                      <span className="opt-2">$0.25</span> per slot
                    </div>
                    <div className="spacer-20"></div>
                    <a className="btn-main btn-fullwidth" href="#">
                      Order Now
                    </a>
                  </div>
                </div>

                <div
                  className="col-lg-4 mb-sm-30 wow fadeInRight"
                  data-wow-delay=".6s"
                >
                  <div className="de-pricing-plan bg-dark-2 h-100">
                    <div className="d-title">Commander</div>
                    <div className="d-stars">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
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
                      <span className="d-value opt-1">29.99</span>
                      <span className="d-value opt-2">24.99</span>
                      <span className="d-period">/monthly</span>
                    </div>
                    <div className="d-sub-price">
                      <span className="opt-1">$0.40</span>
                      <span className="opt-2">$0.20</span> per slot
                    </div>
                    <div className="spacer-20"></div>
                    <a className="btn-main btn-fullwidth" href="#">
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container z-1000">
            <div className="row align-items-center">
              <div className="col-lg-6 offset-lg-3 text-center">
                <div className="subtitle wow fadeInUp mb-3">Most complete</div>
                <h2 className="wow fadeInUp mb20" data-wow-delay=".2s">
                  Game Collection
                </h2>
              </div>
            </div>
            <div className="row g-4 sequence">
              <div className="col-lg-3 col-md-6 gallery-item">
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

              <div className="col-lg-3 col-md-6 gallery-item">
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

              <div className="col-lg-3 col-md-6 gallery-item">
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

              <div className="col-lg-3 col-md-6 gallery-item">
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

              <div className="col-lg-3 col-md-6 gallery-item">
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

              <div className="col-lg-3 col-md-6 gallery-item">
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

              <div className="col-lg-3 col-md-6 gallery-item">
                <div className="de-item wow">
                  <div className="d-overlay">
                    <div className="d-label">20% OFF</div>
                    <div className="d-text">
                      <h4>Raceway Revolution</h4>
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
                    src={require("../../assets/images/covers/7.webp")}
                    className="img-fluid "
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-3 col-md-6 gallery-item sandbox">
                <div className="de-item wow">
                  <div className="d-overlay">
                    <div className="d-label">20% OFF</div>
                    <div className="d-text">
                      <h4>Starborne Odyssey</h4>
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
                    src={require("../../assets/images/covers/8.webp")}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="no-top no-bottom jarallax">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 text-center">
                <div className="subtitle wow fadeInUp mb-3">
                  Server locations
                </div>
                <h2 className="wow fadeInUp mb20" data-wow-delay=".2s">
                  25 Servers Worldwide
                </h2>
              </div>

              <div className="spacer-10"></div>

              <div className="col-lg-12 wow fadeInUp">
                <div className="p-sm-30 pb-sm-0 mb-sm-0">
                  <div className="de-map-hotspot">
                    <div
                      className="de-spot wow fadeIn"
                      style={{ top: "39%", left: "20%" }}
                    >
                      <span>United&nbsp;States</span>
                      <div className="de-circle-1"></div>
                      <div className="de-circle-2"></div>
                    </div>
                    <div
                      className="de-spot wow fadeIn"
                      style={{ top: "76%", left: "87%" }}
                    >
                      <span>Australia</span>
                      <div className="de-circle-1"></div>
                      <div className="de-circle-2"></div>
                    </div>
                    <div
                      className="de-spot wow fadeIn"
                      style={{ top: "68%", left: "80%" }}
                    >
                      <span>Indonesia</span>
                      <div className="de-circle-1"></div>
                      <div className="de-circle-2"></div>
                    </div>
                    <div
                      className="de-spot wow fadeIn"
                      style={{ top: "23%", left: "18%" }}
                    >
                      <span>Canada</span>
                      <div className="de-circle-1"></div>
                      <div className="de-circle-2"></div>
                    </div>
                    <div
                      className="de-spot wow fadeIn"
                      style={{ top: "68%", left: "33%" }}
                    >
                      <span>Brazil</span>
                      <div className="de-circle-1"></div>
                      <div className="de-circle-2"></div>
                    </div>
                    <div
                      className="de-spot wow fadeIn"
                      style={{ top: "45%", left: "75%" }}
                    >
                      <span>China</span>
                      <div className="de-circle-1"></div>
                      <div className="de-circle-2"></div>
                    </div>
                    <div
                      className="de-spot wow fadeIn"
                      style={{ top: "36%", left: "48%" }}
                    >
                      <span>France</span>
                      <div className="de-circle-1"></div>
                      <div className="de-circle-2"></div>
                    </div>
                    <div
                      className="de-spot wow fadeIn"
                      style={{ top: "23%", left: "51%" }}
                    >
                      <span>Sweden</span>
                      <div className="de-circle-1"></div>
                      <div className="de-circle-2"></div>
                    </div>
                    <div
                      className="de-spot wow fadeIn"
                      style={{ top: "78%", left: "53%" }}
                    >
                      <span>South&nbsp;Africa</span>
                      <div className="de-circle-1"></div>
                      <div className="de-circle-2"></div>
                    </div>
                    <img
                      src={require("../../assets/images/misc/world-map.webp")}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="no-bottom wow fadeInRight d-flex z-1000">
            <div className="de-marquee-list wow">
              <div className="d-item">
                <span className="d-item-txt">London</span>
                <span className="d-item-display">
                  <i className="d-item-block"></i>
                </span>
                <span className="d-item-txt">Paris</span>
                <span className="d-item-display">
                  <i className="d-item-block"></i>
                </span>
                <span className="d-item-txt">Frankurt</span>
                <span className="d-item-display">
                  <i className="d-item-block"></i>
                </span>
                <span className="d-item-txt">Amsterdam</span>
                <span className="d-item-display">
                  <i className="d-item-block"></i>
                </span>
                <span className="d-item-txt">Stockholm</span>
                <span className="d-item-display">
                  <i className="d-item-block"></i>
                </span>
                <span className="d-item-txt">Helsinki</span>
                <span className="d-item-display">
                  <i className="d-item-block"></i>
                </span>
                <span className="d-item-txt">Los Angeles</span>
                <span className="d-item-display">
                  <i className="d-item-block"></i>
                </span>
                <span className="d-item-txt">Quebec</span>
                <span className="d-item-display">
                  <i className="d-item-block"></i>
                </span>
                <span className="d-item-txt">Singapore</span>
                <span className="d-item-display">
                  <i className="d-item-block"></i>
                </span>
                <span className="d-item-txt">Sydney</span>
                <span className="d-item-display">
                  <i className="d-item-block"></i>
                </span>
                <span className="d-item-txt">Sau Paulo</span>
                <span className="d-item-display">
                  <i className="d-item-block"></i>
                </span>
                <span className="d-item-txt">Bangkok</span>
                <span className="d-item-display">
                  <i className="d-item-block"></i>
                </span>
                <span className="d-item-txt">Jakarta</span>
                <span className="d-item-display">
                  <i className="d-item-block"></i>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="no-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 text-center">
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

        <section className="no-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 offset-lg-3 text-center">
                <div className="subtitle wow fadeInUp mb-3">Latest From Us</div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  News &amp; Promo
                </h2>
                <div className="spacer-20"></div>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-lg-4 col-md-6 mb10">
                <div className="bloglist item">
                  <div className="post-content">
                    <div className="post-image">
                      <div className="d-tagline">
                        <span>games</span>
                        <span>guide</span>
                      </div>
                      <img
                        alt=""
                        src={require("../../assets/images/news/1.webp")}
                        className="lazy"
                      />
                    </div>
                    <div className="post-text">
                      <div className="d-date">25.10.2023</div>
                      <h4>
                        <a href="news-single.html">
                          How to Set Up Your Own Game Server<span></span>
                        </a>
                      </h4>
                      <p>
                        Dolore officia sint incididunt non excepteur ea mollit
                        commodo ut enim reprehenderit cupidatat labore ad
                        laborum consectetur consequat...
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb10">
                <div className="bloglist item">
                  <div className="post-content">
                    <div className="post-image">
                      <div className="d-tagline">
                        <span>games</span>
                        <span>guide</span>
                      </div>
                      <img
                        alt=""
                        src={require("../../assets/images/news/2.webp")}
                        className="lazy"
                      />
                    </div>
                    <div className="post-text">
                      <div className="d-date">25.10.2023</div>
                      <h4>
                        <a href="news-single.html">
                          Rise in Demand for Private Game Servers<span></span>
                        </a>
                      </h4>
                      <p>
                        Dolore officia sint incididunt non excepteur ea mollit
                        commodo ut enim reprehenderit cupidatat labore ad
                        laborum consectetur consequat...
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb10">
                <div className="bloglist item">
                  <div className="post-content">
                    <div className="post-image">
                      <div className="d-tagline">
                        <span>games</span>
                        <span>guide</span>
                      </div>
                      <img
                        alt=""
                        src={require("../../assets/images/news/3.webp")}
                        className="lazy"
                      />
                    </div>
                    <div className="post-text">
                      <div className="d-date">25.10.2023</div>
                      <h4>
                        <a href="news-single.html">
                          Top Hosting Providers for Game Servers<span></span>
                        </a>
                      </h4>
                      <p>
                        Dolore officia sint incididunt non excepteur ea mollit
                        commodo ut enim reprehenderit cupidatat labore ad
                        laborum consectetur consequat...
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
              <div className="col-lg-6 offset-lg-3 text-center">
                <div className="subtitle wow fadeInUp mb-3">
                  Payment Methods
                </div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  We accept
                </h2>
              </div>
              <div className="col-lg-12 text-center">
                <div className="row g-4">
                  <div className="col-sm-2 col-4">
                    <div
                      className="m-4 rounded-10"
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
                      className="m-4 rounded-10"
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
                      className="m-4 rounded-10"
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
                      className="m-4 rounded-10"
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
                      className="m-4 rounded-10"
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
                      className="m-4 rounded-10"
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
    </>
  );
}

export default HomePage5;
