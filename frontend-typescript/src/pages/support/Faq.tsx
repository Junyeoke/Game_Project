import React, { useEffect } from 'react'
import designesis from '../../assets/js/designesia';

function Faq() {
    useEffect(()=> {
        designesis();
    },[])
  return (
    <>
            <div className="no-bottom no-top" id="content">
            <div id="top"></div>
            {/* <!-- section begin --> */}
            <section id="subheader" className="jarallax">
                <img src={require('../../assets/images/background/subheader-faq.webp')} className="jarallax-img" alt=""/>
                <div className="container z-1000">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="subtitle wow fadeInUp mb-3">Do you have</div>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="wow fadeInUp mb20" data-wow-delay=".2s">Any questions?</h2>
                        </div>                 
                    </div>
                </div>
            </section>
            {/* <!-- section close --> */}

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="accordion s2 wow fadeInUp">
                                <div className="accordion-section">
                                    <div className="accordion-section-title" data-tab="#accordion-a1">
                                        What is game hosting?
                                    </div>
                                    <div className="accordion-section-content" id="accordion-a1">
                                        <p>Game hosting refers to the process of renting or setting up servers to run multiplayer online games. These servers allow players to connect and play together in the same game world.</p>
                                    </div>
                                    <div className="accordion-section-title" data-tab="#accordion-a2">
                                        Why do I need game hosting?
                                    </div>
                                    <div className="accordion-section-content" id="accordion-a2">
                                        <p>Game hosting is essential for multiplayer gaming. It provides a dedicated server where players can join, ensuring a smooth and lag-free gaming experience. It also allows you to customize game settings and mods.</p>
                                    </div>                                        
                                    <div className="accordion-section-title" data-tab="#accordion-a3">
                                        How do I choose a game hosting provider?
                                    </div>
                                    <div className="accordion-section-content" id="accordion-a3">
                                        <p>Consider factors like server location, performance, scalability, customer support, and price when choosing a game hosting provider. Read reviews and ask for recommendations from fellow gamers.</p>
                                    </div>
                                    <div className="accordion-section-title" data-tab="#accordion-a4">
                                        What types of games can I host?
                                    </div>
                                    <div className="accordion-section-content" id="accordion-a4">
                                        <p>You can host various types of games, including first-person shooters, role-playing games, survival games, strategy games, and more. The type of game hosting you need depends on the game's requirements.</p>
                                    </div>
                                    <div className="accordion-section-title" data-tab="#accordion-a5">
                                        What is server latency or ping?
                                    </div>
                                    <div className="accordion-section-content" id="accordion-a5">
                                        <p>Server latency or ping measures the time it takes for data to travel between your computer and the game server. Lower ping values indicate better responsiveness and less lag.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="accordion s2 wow fadeInUp">
                                <div className="accordion-section">
                                    <div className="accordion-section-title" data-tab="#accordion-b1">
                                        How do I manage a game server?
                                    </div>
                                    <div className="accordion-section-content" id="accordion-b1">
                                        <p>Game server management varies depending on the hosting provider and game type. Typically, you'll have access to a control panel or command-line interface to configure settings, mods, and player access.</p>
                                    </div>
                                    <div className="accordion-section-title" data-tab="#accordion-b2">
                                        Can I run mods on my game server?
                                    </div>
                                    <div className="accordion-section-content" id="accordion-b2">
                                        <p>Yes, many game hosting providers support mods. You can install and manage mods to enhance gameplay or customize the game to your liking.</p>
                                    </div>
                                    <div className="accordion-section-title" data-tab="#accordion-b3">
                                        What is DDoS protection, and do I need it?
                                    </div>
                                    <div className="accordion-section-content" id="accordion-b3">
                                        <p>DDoS (Distributed Denial of Service) protection helps defend your game server from malicious attacks that could disrupt gameplay. It's essential for maintaining server stability, especially for popular games.</p>
                                    </div>
                                    <div className="accordion-section-title" data-tab="#accordion-b4">
                                        How much does game hosting cost?
                                    </div>
                                    <div className="accordion-section-content" id="accordion-b4">
                                        <p>Game hosting costs vary depending on the provider, server type, and game. Prices can range from a few dollars per month for small servers to hundreds for high-performance dedicated servers.</p>
                                    </div>
                                    <div className="accordion-section-title" data-tab="#accordion-b5">
                                        Is there 24/7 customer support?
                                    </div>
                                    <div className="accordion-section-content" id="accordion-b5">
                                        <p>Many reputable game hosting providers offer 24/7 customer support to assist with technical issues and server management.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="spacer-double"></div>

                        <div className="col-lg-12">
                            <div className="padding40 rounded-10" data-bgcolor="rgba(255, 255, 255, .1)">
                                <div className="row align-items-center">
                                    <div className="col-lg-1">
                                        <img src={require('../../assets/images/icons/4.png')} alt="" className="img-responsive"/>
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

export default Faq