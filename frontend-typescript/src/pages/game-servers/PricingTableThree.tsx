import React, { useEffect } from 'react'
import designesis from '../../assets/js/designesia';

function PricingTableThree() {
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
                            <img src={require('../../assets/images/covers/4.webp')} className="img-fluid wow fadeInUp" alt=""/>
                        </div>
                        <div className="col-lg-6">
                            <div className="subtitle wow fadeInUp mb-3">Server hosing</div>
                            <h2 className="wow fadeInUp mb20" data-wow-delay=".2s">Funk Dungeon</h2>
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

                        <div className="col-md-12">
                            <table className="table table-pricing dark-style text-center">
                              <thead>
                                <tr>
                                  <th scope="col">Package</th>
                                  <th scope="col">Player Slots</th>
                                  <th scope="col">Memory</th>
                                  <th scope="col">Server Locations</th>
                                  <th scope="col">Price</th>
                                  <th scope="col">Order</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th><span className="lbl">Package name</span>Rookie</th>
                                  <td><span className="lbl">Player Slots</span><i className="fa fa-user id-color"></i> 10 Players</td>
                                  <td><span className="lbl">Memory</span><i className="fa fa-memory id-color"></i> 2 GB</td>
                                  <td className="d-spc"><span className="lbl">Server Locations</span>
                                    <div className="select-wrap">
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
                                  </td>
                                  <td className="d-spc"><span className="lbl">Price</span><span className="opt-1">$9.99</span><span className="opt-2">$5.99</span></td>
                                  <td>
                                    <a href="#" className="btn-main opt-1">Order Now</a>
                                    <a href="#" className="btn-main opt-2">Order Now</a>
                                  </td>
                                </tr>
                                <tr>
                                  <th><span className="lbl">Package name</span>Warrior</th>
                                  <td><span className="lbl">Player Slots</span><i className="fa fa-user id-color"></i> 40 Players</td>
                                  <td><span className="lbl">Memory</span><i className="fa fa-memory id-color"></i> 4 GB</td>
                                  <td className="d-spc"><span className="lbl">Server Locations</span>
                                    <div className="select-wrap">
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
                                  </td>
                                  <td className="d-spc"><span className="lbl">Price</span><span className="opt-1">$14.99</span><span className="opt-2">$9.99</span></td>
                                  <td>
                                    <a href="#" className="btn-main opt-1">Order Now</a>
                                    <a href="#" className="btn-main opt-2">Order Now</a>
                                  </td>
                                </tr>
                                
                                <tr>
                                  <th><span className="lbl">Package name</span>General</th>
                                  <td><span className="lbl">Player Slots</span><i className="fa fa-user id-color"></i> 60 Players</td>
                                  <td><span className="lbl">Memory</span><i className="fa fa-memory id-color"></i> 8 GB</td>
                                  <td className="d-spc"><span className="lbl">Server Locations</span>
                                    <div className="select-wrap">
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
                                  </td>
                                  <td className="d-spc"><span className="lbl">Price</span><span className="opt-1">$19.99</span><span className="opt-2">$14.99</span></td>
                                  <td>
                                    <a href="#" className="btn-main opt-1">Order Now</a>
                                    <a href="#" className="btn-main opt-2">Order Now</a>
                                  </td>
                                </tr>
                                
                                <tr>
                                  <th><span className="lbl">Package name</span>Commander</th>
                                  <td><span className="lbl">Player Slots</span><i className="fa fa-user id-color"></i> 125 Players</td>
                                  <td><span className="lbl">Memory</span><i className="fa fa-memory id-color"></i> 16 GB</td>
                                  <td className="d-spc"><span className="lbl">Server Locations</span>
                                    <div className="select-wrap">
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
                                  </td>
                                  <td className="d-spc"><span className="lbl">Price</span><span className="opt-1">$29.99</span><span className="opt-2">$24.99</span></td>
                                  <td>
                                    <a href="#" className="btn-main opt-1">Order Now</a>
                                    <a href="#" className="btn-main opt-2">Order Now</a>
                                  </td>
                                </tr>
                                
                                <tr>
                                  <th><span className="lbl">Package name</span>Legendary</th>
                                  <td><span className="lbl">Player Slots</span><i className="fa fa-user id-color"></i> 200+ Players</td>
                                  <td><span className="lbl">Memory</span><i className="fa fa-memory id-color"></i> 32 GB</td>
                                  <td className="d-spc"><span className="lbl">Server Locations</span>
                                    <div className="select-wrap">
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
                                  </td>
                                  <td className="d-spc"><span className="lbl">Price</span><span className="opt-1">$59.99</span><span className="opt-2">$49.99</span></td>
                                  <td>
                                    <a href="#" className="btn-main opt-1">Order Now</a>
                                    <a href="#" className="btn-main opt-2">Order Now</a>
                                  </td>
                                </tr>
                                
                                
                                

                                

                              </tbody>
                            </table>
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

export default PricingTableThree