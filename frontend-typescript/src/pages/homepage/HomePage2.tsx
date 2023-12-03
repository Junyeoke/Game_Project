import React, { useEffect } from "react";
import customMarquee from "../../assets/js/custom-marquee";
import customSwiper2 from "../../assets/js/custom-swiper-2";
import designesis from "../../assets/js/designesia";

function HomePage2() {
  useEffect(() => {
    customMarquee();
    customSwiper2();
    designesis();
  },[]);
  return (
    <>
      {/* <!-- content begin --> */}
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        {/* 첫번째 섹션 : slider */}
        <section
          id="swiper-s2"
          className="no-top no-bottom position-relative z-1000"
        >
          {/* <!-- Slider main wrapper --> */}
          <div className="swiper-container-wrapper">
            {/* <!-- Slider main container --> */}
            <div className="swiper-container gallery-top">
              {/* <!-- Additional required wrapper --> */}
              <div className="swiper-wrapper">
                {/* <!-- Slides --> */}
                <div
                  className="swiper-slide"
                  data-bgimage="url(images/slider/5.webp)"
                >
                  <div className="sw-caption s2">
                    <div className="container">
                      <div className="row gx-5 align-items-center">
                        <div className="col-lg-8 offset-lg-2 mb-sm-30">
                          <div className="subtitle blink mb-4">
                            Servers Are Available
                          </div>
                          <h1 className="slider-title text-uppercase mb-1">
                            Cyber Nexus
                          </h1>
                        </div>
                        <div className="col-lg-6 offset-lg-3">
                          <p className="slider-text">
                            Aute esse non magna elit dolore dolore dolor sit
                            est. Ea occaecat ea duis laborum reprehenderit id
                            cillum tempor cupidatat qui nisi proident nostrud
                            dolore id do eiusmod. Lorem ipsum non labore.
                          </p>
                          <div className="spacer-10"></div>
                          <a className="btn-main mb10" href="games.html">
                            Order Your Game Server Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sw-overlay"></div>
                </div>
                <div
                  className="swiper-slide"
                  data-bgimage="url(images/slider/6.webp)"
                >
                  <div className="sw-caption s2">
                    <div className="container">
                      <div className="row gx-5 align-items-center">
                        <div className="col-lg-8 offset-lg-2 mb-sm-30">
                          <div className="subtitle blink mb-4">
                            Servers Are Available
                          </div>
                          <h1 className="slider-title text-uppercase mb-1">
                            Ancient Realms
                          </h1>
                        </div>
                        <div className="col-lg-6 offset-lg-3">
                          <p className="slider-text">
                            Aute esse non magna elit dolore dolore dolor sit
                            est. Ea occaecat ea duis laborum reprehenderit id
                            cillum tempor cupidatat qui nisi proident nostrud
                            dolore id do eiusmod. Lorem ipsum non labore.
                          </p>
                          <div className="spacer-10"></div>
                          <a className="btn-main mb10" href="games.html">
                            Order Your Game Server Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sw-overlay"></div>
                </div>
                <div
                  className="swiper-slide"
                  data-bgimage="url(images/slider/7.webp)"
                >
                  <div className="sw-caption s2">
                    <div className="container">
                      <div className="row gx-5 align-items-center">
                        <div className="col-lg-8 offset-lg-2 mb-sm-30">
                          <div className="subtitle blink mb-4">
                            Servers Are Available
                          </div>
                          <h1 className="slider-title text-uppercase mb-1">
                            Thunder and City
                          </h1>
                        </div>
                        <div className="col-lg-6 offset-lg-3">
                          <p className="slider-text">
                            Aute esse non magna elit dolore dolore dolor sit
                            est. Ea occaecat ea duis laborum reprehenderit id
                            cillum tempor cupidatat qui nisi proident nostrud
                            dolore id do eiusmod. Lorem ipsum non labore.
                          </p>
                          <div className="spacer-10"></div>
                          <a className="btn-main mb10" href="games.html">
                            Order Your Game Server Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sw-overlay"></div>
                </div>
                <div
                  className="swiper-slide"
                  data-bgimage="url(images/slider/8.webp)"
                >
                  <div className="sw-caption s2">
                    <div className="container">
                      <div className="row gx-5 align-items-center">
                        <div className="col-lg-8 offset-lg-2 mb-sm-30">
                          <div className="subtitle blink mb-4">
                            Servers Are Available
                          </div>
                          <h1 className="slider-title text-uppercase mb-1">
                            Raceway Revolution
                          </h1>
                        </div>
                        <div className="col-lg-6 offset-lg-3">
                          <p className="slider-text">
                            Aute esse non magna elit dolore dolore dolor sit
                            est. Ea occaecat ea duis laborum reprehenderit id
                            cillum tempor cupidatat qui nisi proident nostrud
                            dolore id do eiusmod. Lorem ipsum non labore.
                          </p>
                          <div className="spacer-10"></div>
                          <a className="btn-main mb10" href="games.html">
                            Order Your Game Server Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sw-overlay"></div>
                </div>
              </div>
              {/* <!-- Add Arrows --> */}
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
            {/* <!-- Slider thumbnail container --> */}
            <div className="swiper-container gallery-thumbs">
              {/* <!-- Additional required wrapper --> */}
              <div className="swiper-wrapper">
                {/* <!-- Slides  --> */}
                <div
                  className="swiper-slide"
                  data-bgimage="url(images/slider/5.webp)"
                >
                  <div className="sw-caption-thumb">
                    <span className="d-tag">15% OFF</span>
                    <h3>Cyber Nexus</h3>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  data-bgimage="url(images/slider/6.webp)"
                >
                  <div className="sw-caption-thumb">
                    <span className="d-tag">12% OFF</span>
                    <h3>Ancient Realms</h3>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  data-bgimage="url(images/slider/7.webp)"
                >
                  <div className="sw-caption-thumb">
                    <span className="d-tag">20% OFF</span>
                    <h3>Thunder and City</h3>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  data-bgimage="url(images/slider/8.webp)"
                >
                  <div className="sw-caption-thumb">
                    <span className="d-tag">15% OFF</span>
                    <h3>Raceway Revolution</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 두번째 섹션 */}
        <section className="pt90 no-bottom">
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-4 col-md-6 mb-sm-30">
                <h3>Server Near You</h3>
                <p>
                  Duis aliqua ex nostrud eiusmod esse esse reprehenderit non
                  esse elit dolore sed qui cupidatat magna occaecat officia ut
                  exercitation eu sed est elit id commodo.
                </p>
                <a className="btn-line lg-w-50" href="locations.html">
                  Choose a Server
                </a>
              </div>
              <div className="col-lg-4 col-md-6 mb-sm-30">
                <h3>Affiliates Program</h3>
                <p>
                  Duis aliqua ex nostrud eiusmod esse esse reprehenderit non
                  esse elit dolore sed qui cupidatat magna occaecat officia ut
                  exercitation eu sed est elit id commodo.
                </p>
                <a className="btn-line lg-w-50" href="affliate.html">
                  Become an Affiliate
                </a>
              </div>
              <div className="col-lg-4 col-md-6 mb-sm-30">
                <h3>Need Support?</h3>
                <p>
                  Duis aliqua ex nostrud eiusmod esse esse reprehenderit non
                  esse elit dolore sed qui cupidatat magna occaecat officia ut
                  exercitation eu sed est elit id commodo.
                </p>
                <a className="btn-line lg-w-50" href="knowledgebase.html">
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 세번째 섹션 */}
        <section className="jarallax">
          <img
            src={require("../../assets/images/background/3.webp")}
            className="jarallax-img"
            alt=""
          />
          <div className="de-gradient-edge-top"></div>
          <div className="de-gradient-edge-bottom"></div>
          <div className="container z-1000">
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

        {/* 네번째 섹션 : 지도 부분 : 에러부분 */}
        <section className="no-top no-bottom jarallax">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="subtitle wow fadeInUp mb-3">
                  Server locations
                </div>
              </div>
              <div className="col-lg-6">
                <h2 className="wow fadeInUp mb20" data-wow-delay=".2s">
                  25 servers available worldwide for your game.
                </h2>
              </div>
              <div className="col-lg-6">
                Take advantage of our server location testing tool to ensure
                optimal performance. Since your users are spread across various
                locations, it's important to identify the server location that
                provides the best experience for your members. Our ping tester
                can help you determine the ideal server location for your
                specific needs.
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

          {/* 에러가 나는 부분 */}
          <div className="no-bottom wow fadeInRight d-flex z-1000">
            <div className="de-marquee-list wow ">
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

        {/* 다섯번째 섹션 : start your game 배지 */}
        <section className="no-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="padding60 sm-padding40 jarallax position-relative">
                  <img
                    src={require("../../assets/images/background/1.webp")}
                    className="jarallax-img"
                    alt=""
                  />
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="subtitle wow fadeInUp mb-3">
                        Start your game
                      </div>
                      <h2 className="wow fadeInUp" data-wow-delay=".2s">
                        Unlock Your Gaming Full Potential
                      </h2>
                      <p className="wow fadeInUp">
                        Aute esse non magna elit dolore dolore dolor sit est. Ea
                        occaecat ea duis laborum reprehenderit id cillum tempor
                        cupidatat qui nisi proident nostrud dolore.
                      </p>
                      <div className="spacer-10"></div>
                      <a
                        className="btn-main mb10 wow fadeInUp"
                        href="games.html"
                      >
                        Order Your Game Server Now
                      </a>
                    </div>
                  </div>

                  <img
                    src={require("../../assets/images/misc/avatar.webp")}
                    className="sm-hide position-absolute bottom-0 end-0 wow fadeIn"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 여섯번째 섹션 : prmium game server */}
        <section className="no-bottom">
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
                className="col-lg-3 col-md-6 mb-sm-30 wow fadeInRight"
                data-wow-delay="0s"
              >
                <div
                  className="padding30 rounded-10"
                  data-bgimage="rgba(255, 255, 255, .03)"
                >
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
                <div
                  className="padding30 rounded-10"
                  data-bgimage="rgba(255, 255, 255, .03)"
                >
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
                <div
                  className="padding30 rounded-10"
                  data-bgimage="rgba(255, 255, 255, .03)"
                >
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
                <div
                  className="padding30 rounded-10"
                  data-bgimage="rgba(255, 255, 255, .03)"
                >
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

        {/* 일곱번째 섹션 :  Manage your server from mobile device */}
        <section className="no-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="padding60 sm-padding40 jarallax position-relative">
                  <img
                    src={require("../../assets/images/background/2.webp")}
                    className="jarallax-img"
                    alt=""
                  />
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="subtitle wow fadeInUp mb-3">
                        Download now
                      </div>
                      <h2 className="wow fadeInUp" data-wow-delay=".2s">
                        Manage your server from mobile device
                      </h2>
                      <p>
                        Enim sit laborum enim ut in excepteur aliqua consequat
                        est ut aliquip nostrud sunt deserunt consequat fugiat
                        adipisicing minim aliquip do adipisicing cupidatat esse
                        ut irure incididunt ullamco dolor laboris anim ea do ut
                        anim.
                      </p>
                      <a href="download.html">
                        <img
                          src={require("../../assets/images/misc/download-appstore.webp")}
                          className="img-fluid mb-sm-20"
                          alt="download"
                        />
                      </a>
                      &nbsp;
                      <a href="download.html">
                        <img
                          src={require("../../assets/images/misc/download-playstore.webp")}
                          className="img-fluid mb-sm-20"
                          alt="download"
                        />
                      </a>
                    </div>
                  </div>

                  <img
                    src={require("../../assets/images/misc/man-with-phone.webp")}
                    className="sm-hide position-absolute bottom-0 end-0 wow fadeIn"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 여덟번째 섹션 : any questions? */}
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
        {/* 아홉번째 섹션 : we accept */}
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

export default HomePage2;
