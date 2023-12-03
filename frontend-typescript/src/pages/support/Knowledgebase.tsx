import React, { useEffect } from 'react'
import designesis from '../../assets/js/designesia';

function Knowledgebase() {
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
                <img src={require('../../assets/images/background/space.webp')} className="jarallax-img" alt=""/>
                <div className="container z-1000">
                    <div className="row">
                        <div className="col-lg-12 mb-3 text-center">
                            <div className="subtitle wow fadeInUp mb-3">Information center</div>
                            <h2 className="wow fadeInUp mb-3" data-wow-delay=".2s">Knowledgebase</h2>
                        </div>         

                        <div className="col-md-8 offset-md-2 text-center">
                            <form action='#' className="row" data-wow-delay="1.25s" id='form_sb' method="post" name="form_sb">
                                <div className="col">
                                    <div className="spacer-10"></div>
                                    <input className="form-control" id='domain_name' name='domain_name' placeholder="type your questions here" type='text'/> <a id="btn-submit" href="javascript:;" 
                                    // onclick={document.getElementById('form_sb').submit()}
                                    ><i className="arrow_right"></i></a>
                                    <div className="clearfix"></div>
                                </div>
                            </form>
                            <div className="spacer-20"></div>
                            <p className="d-small">*eg. server setup, change hosting plan</p>
                        </div>        
                    </div>
                </div>
            </section>
            {/* <!-- section close --> */}

            <section className="no-top">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="de-box-cat h-100">
                                <i className="fa fa-folder-open-o"></i>
                                <a href="faq.html"><h3>Thunder and City <span>(12)</span></h3></a>
                                <div className="d-subtitle">Help with Thunder and City</div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="de-box-cat h-100">
                                <i className="fa fa-folder-open-o"></i>
                                <a href="faq.html"><h3>Mystic Racing Z <span>(19)</span></h3></a>
                                <div className="d-subtitle">Help with Mystic Racing Z</div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="de-box-cat h-100">
                                <i className="fa fa-folder-open-o"></i>
                                <a href="faq.html"><h3>Silent Wrath <span>(17)</span></h3></a>
                                <div className="d-subtitle">Help with Silent Wrath</div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="de-box-cat h-100">
                                <i className="fa fa-folder-open-o"></i>
                                <a href="faq.html"><h3>Funk Dungeon <span>(18)</span></h3></a>
                                <div className="d-subtitle">Help with Funk Dungeon</div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="de-box-cat h-100">
                                <i className="fa fa-folder-open-o"></i>
                                <a href="faq.html"><h3>Galactic Odyssey <span>(17)</span></h3></a>
                                <div className="d-subtitle">Help with Galactic Odyssey</div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="de-box-cat h-100">
                                <i className="fa fa-folder-open-o"></i>
                                <a href="faq.html"><h3>Warfare Legends <span>(21)</span></h3></a>
                                <div className="d-subtitle">Help with Warfare Legends</div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="de-box-cat h-100">
                                <i className="fa fa-folder-open-o"></i>
                                <a href="faq.html"><h3>Race Revolution <span>(17)</span></h3></a>
                                <div className="d-subtitle">Help with Race Revolution</div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="de-box-cat h-100">
                                <i className="fa fa-folder-open-o"></i>
                                <a href="faq.html"><h3>Cyber Nexus <span>(19)</span></h3></a>
                                <div className="d-subtitle">Help with Cyber Nexus</div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="de-box-cat h-100">
                                <i className="fa fa-folder-open-o"></i>
                                <a href="faq.html"><h3>Ancient Realms <span>(25)</span></h3></a>
                                <div className="d-subtitle">Help with Ancient Realms</div>
                            </div>
                        </div>
                        

                        <div className="spacer-double"></div>

                        <div className="col-lg-12">
                            <div className="padding40 rounded-10" data-bgcolor="rgba(255, 255, 255, .1)">
                                <div className="row align-items-center">
                                    <div className="col-lg-1">
                                        <img src={require('../../assets/images/icons/4.png')}alt="" className="img-responsive"/>
                                    </div>
                                    <div className="col-lg-9">
                                        <h4>Cannot find answer? Contact our customer support now.</h4>
                                    </div>
                                    <div className="col-lg-2 text-lg-end">
                                        <a className="btn-main" href="#">Contact Us</a>
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

export default Knowledgebase