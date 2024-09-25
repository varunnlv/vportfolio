import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";
import Slider from "react-slick";

const items = [
    {
        id: 1,
        title: "Stand Alone Project 1",
        images: [
            "./VFLEX1.png",
            "./VFLEX2.png",
            "./VFLEX3.png",
            "./VFLEX4.png",
        ],
    },
    {
        id: 2,
        title: "Filmpire",
       images: [
            "./VGRID1.png",
            "./VGRID2.png",
            "./VGRID3.png",
        ],
    },
    {
        id: 3,
        title: "Filmpire",
       images: [
            "./VKANBAN1.png",
            "./VKANBAN2.png",
        ],
    },
    {
        id: 4,
        title: "Filmpire",
       images: [
            "./VPORTFOLIO1.png",
            "./VPORTFOLIO2.png",
            "./VPORTFOLIO3.png",
            "./VPORTFOLIO4.png",
        ],
    },
    {
        id: 5,
        title: "Filmpire",
       images: [
            "./PF1.png",
            "./PF2.png",
            "./PF3.png",
        ],
    },
    {
        id: 6,
        title: "Filmpire",
       images: [
            "./ExTracker1.png",
            "./ExTracker2.png",
            "./ExTracker3.png",
        ],
    },
    {
        id: 7,
        title: "Filmpire",
       images: [
            "./FLMPIRE1.png",
            "./FLMPIRE2.png",
            "./FLMPIRE3.png",
        ],
    },
];

// ... (Your existing components)

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // Replace with your custom dots container component
};

const Portfolio = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div  id='Projects' className="portfolio" ref={ref}>
       
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            <div className="progress1">
                <h1> </h1>
            </div>

            <hr/>
            <div class="ui-container">
                 
                 <div className="small-gallery-container">
                  <div className="gallery-content">

                    <div className="gallery-text5">
                      <h2>{items[0].title}</h2>
                      <h3>Summary</h3>
                      <p>
                        The Structural Design Automation System is an innovative project aimed at revolutionizing the traditional design procedures for structural items. This system provides a modern, user-friendly GUI with User Management that automates the design process, enhancing efficiency and accuracy and generating reports in different file formats.
                      </p>          
                    </div>
                      
                    <div className="gallery-images">
                        <div className="image-row">
                          
                            <div className="image-item" >
                                <img src="https://www.shutterstock.com/image-vector/management-icon-teamwork-business-team-600nw-1051689107.jpg" alt="User Management" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '10px' }} />
                                <div>
                                    <b>User Management</b>   
                                    <p>Secure <span style={{ color: 'green', fontWeight: 'bold' }}>login</span> and <span style={{ color: 'green', fontWeight: 'bold' }}>registration</span> system for storage and retrieval of user profiles and project data using MongoDB, along with a <span style={{ color: 'green', fontWeight: 'bold' }}>forgot password service</span> to ensure account recovery and accessibility.</p>
                                </div>
                                
                            </div>
                            <div className="image-item">
                                 <img src="https://friconix.com/png/fi-xnluxx-gui.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '5px' }} />
                                <div>
                                    <b>Input/Output Interface</b> 
                                    <p>Intuitive forms for users to input design parameters and dynamically generate <span style={{ color: 'green', fontWeight: 'bold' }}>visual and textual outputs</span>.</p>
                                </div>
                                
                            </div>
                        </div>
                      <div className="image-row">
                          
                        <div className="image-item">
                             <img src="https://cdn-icons-png.flaticon.com/512/73/73812.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '5px' }} />
                            <div>
                                <b>Dynamic Canvas</b> 
                                <p>A <span style={{ color: 'green', fontWeight: 'bold' }}>graphical canvas</span> that displays real-time, dynamic drawings based on user inputs, allowing for immediate visual feedback.</p>
                            </div>
                            
                        </div>
                        <div className="image-item">
                            <img src="https://png.pngtree.com/png-clipart/20230427/original/pngtree-data-management-line-icon-png-image_9117318.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '5px' }} />
                            <div>
                                <b>Data Management</b>
                                <p>Capability to save input data and user sessions, ensuring continuity and ease of use.</p>
                            </div>
                            
                        </div>
                      </div>
                      <div className="experience">
                        <div className="experience-text">

                            <img src="https://cdn-icons-png.flaticon.com/512/3460/3460831.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '10px' }} />
                            <div>
                                <b>Output Formats</b> 
                                <p>Ability to export design outputs as <span style={{ color: 'green', fontWeight: 'bold' }}>bitmaps for graphical representation</span> and <span style={{ color: 'green', fontWeight: 'bold' }}>text reports in both .txt and .pdf formats</span> for comprehensive documentation.</p>
                            </div>
                        </div>
                          
                      </div>                                    
                    </div>

                      
                    <div className="gallery-text">
                      <h2>{items[0].title}</h2>
                      <h3>Summary</h3>
                      <p>
                        The Structural Design Automation System is an innovative project aimed at revolutionizing the traditional design procedures for structural items. This system provides a modern, user-friendly GUI with User Management that automates the design process, enhancing efficiency and accuracy and generating reports in different file formats.
                      </p>          
                    </div>
                      
                  </div>
                </div>

                <div className="small-gallery-container">
                  <div className="gallery-content">
                    <div className="gallery-images">
                        <div className="image-row">
                          
                        <div className="image-item" >
                            <img src="https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2021/07/communityIcon_4v21sx0aiam41.png?fit=256%2C171&ssl=1" alt="JavaFX" style={{ width: '60px',height: '54px', verticalAlign: 'middle', marginRight: '5px' }} />
                            <div>
                                <b>JavaFX</b>   
                                <p>for GUI design and development.</p>
                            </div>
                            
                        </div>
                        <div className="image-item">
                             <img src="https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-5-pack-logos-icons-2945120.png?f=webp" alt="JavaFX" style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '5px' }} />
                            <div>
                                <b>MongoDB</b> 
                                <p>NoSQL database for storing user data and project data.</p>
                            </div>
                            
                        </div>
                      </div>
                      <div className="image-row">
                          
                        <div className="image-item">
                             <img src="https://cdn.sanity.io/images/ss02266c/production/806fba67631087cd76ed2a963210feadd164c7fa-64x64.svg" alt="JavaFX" style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '5px' }} />
                            <div>
                                <b>Redis</b>                         
                                <p>for distributed caching.</p>
                            </div>
                            
                        </div>
                        <div className="image-item">
                            <img src="https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png" alt="JavaFX" style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} />
                            <div>
                                <b>Email Service</b> 
                                <p>for forgot password recovery.</p>
                            </div>
                            
                        </div>
                      </div>

                      <div className="image-row">
                          
                        <div className="image-item">
                             <img src="https://cdn-icons-png.flaticon.com/512/337/337946.png" alt="JavaFX" style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} />
                            <div>
                                <b>Apache POI and iText</b>
                                <p>for generating .txt and .pdf reports</p>
                            </div>
                            
                        </div>
                        <div className="image-item">
                             <img src="https://cdn-icons-png.flaticon.com/512/73/73812.png" alt="JavaFX" style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} />
                            <div>
                                <b>JavaFX Drawing APIs</b>
                                <p>for rendering real-time graphical outputs on the canvas.</p>
                            </div>
                            
                        </div>
                      </div>
                     
                    </div>
                   
                  </div>
                </div>

            </div>

            <hr style={{ marginTop: '20px', marginBottom: '20px'}}/>

             <div class="ui-container">

                <div className="small-gallery-container">
                      <div className="gallery-content">

                         <div className="gallery-text5">
                          <h2>Stand Alone Project 2</h2>
                          <h3>Summary</h3>
                          <p>
                            The Structural Design Automation System is an innovative project aimed at revolutionizing the traditional design procedures for structural items. This system provides a modern, user-friendly GUI with User Management that automates the design process, enhancing efficiency and accuracy and generating reports in different file formats.
                          </p>       
                         </div>

                          
                        <div className="gallery-images">
                            <div className="image-row">
                              
                            <div className="image-item" >
                                <img src="https://www.shutterstock.com/image-vector/management-icon-teamwork-business-team-600nw-1051689107.jpg" alt="User Management" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '10px' }} />
                                <div>
                                    <b>User Management</b>   
                                    <p>Secure <span style={{ color: 'green', fontWeight: 'bold' }}>login</span> and <span style={{ color: 'green', fontWeight: 'bold' }}>registration</span> system for storage and retrieval of user profiles and project data using MongoDB, along with a <span style={{ color: 'green', fontWeight: 'bold' }}>forgot password service</span> to ensure account recovery and accessibility.</p>
                                </div>
                                
                            </div>
                            <div className="image-item">
                                 <img src="https://friconix.com/png/fi-xnluxx-gui.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '5px' }} />
                                <div>
                                    <b>Input/Output Interface</b> 
                                    <p>Intuitive forms for users to input design parameters and dynamically generate <span style={{ color: 'green', fontWeight: 'bold' }}>visual and textual outputs</span>.</p>
                                </div>
                                
                            </div>
                          </div>
                          <div className="image-row">
                              
                            <div className="image-item">
                                 <img src="https://cdn-icons-png.flaticon.com/512/73/73812.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '5px' }} />
                                <div>
                                    <b>Dynamic Canvas</b> 
                                    <p>A <span style={{ color: 'green', fontWeight: 'bold' }}>graphical canvas</span> that displays real-time, dynamic drawings based on user inputs, allowing for immediate visual feedback.</p>
                                </div>
                                
                            </div>
                            <div className="image-item">
                                <img src="https://png.pngtree.com/png-clipart/20230427/original/pngtree-data-management-line-icon-png-image_9117318.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '5px' }} />
                                <div>
                                    <b>Data Management</b>
                                    <p>Capability to save input data and user sessions, ensuring continuity and ease of use.</p>
                                </div>
                                
                            </div>
                          </div>
                          <div className="experience">
                            <div className="experience-text">
    
                                <img src="https://cdn-icons-png.flaticon.com/512/3460/3460831.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '10px' }} />
                                <div>
                                    <b>Api Management</b> 
                                    <p>Ability to genbrate design outputs as <span style={{ color: 'green', fontWeight: 'bold' }}>bitmaps for graphical representation</span> and <span style={{ color: 'green', fontWeight: 'bold' }}>text reports in both .txt and .pdf formats</span> for comprehensive documentation as response by taking inputs as request.</p>
                                </div>
                            </div>
                              
                          </div>                 
                          <div className="experience">
                            <div className="experience-text">
    
                                <img src="https://cdn-icons-png.flaticon.com/512/3460/3460831.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '10px' }} />
                                <div>
                                    <b>Output Formats</b> 
                                    <p>Ability to export design outputs as <span style={{ color: 'green', fontWeight: 'bold' }}>bitmaps for graphical representation</span> and <span style={{ color: 'green', fontWeight: 'bold' }}>text reports in both .txt and .pdf formats</span> for comprehensive documentation.</p>
                                </div>
                            </div>
                              
                          </div>
                        </div>
                        <div className="gallery-text">
                          <h2>Stand Alone Project 2</h2>
                          <h3>Summary</h3>
                          <p>
                            The Structural Design Automation System is an innovative project aimed at revolutionizing the traditional design procedures for structural items. This system provides a modern, user-friendly GUI with User Management that automates the design process, enhancing efficiency and accuracy and generating reports in different file formats.
                          </p>
                            
                        </div>
                      </div>
                    </div>
    
                    <div className="small-gallery-container">
                      <div className="gallery-content">
                        <div className="gallery-images">
                            <div className="image-row">
                              
                            <div className="image-item" >
                                <img src="https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2021/07/communityIcon_4v21sx0aiam41.png?fit=256%2C171&ssl=1" alt="JavaFX" style={{ width: '60px',height: '54px', verticalAlign: 'middle', marginRight: '5px' }} />
                                <div>
                                    <b>JavaFX</b>   
                                    <p>for GUI design and development.</p>
                                </div>
                                
                            </div>
                            <div className="image-item">
                                 <img src="https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-5-pack-logos-icons-2945120.png?f=webp" alt="JavaFX" style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '5px' }} />
                                <div>
                                    <b>MongoDB</b> 
                                    <p>NoSQL database for storing user data and project data.</p>
                                </div>
                                
                            </div>
                          </div>
                          <div className="image-row">
                              
                            <div className="image-item">
                                <img src="https://www.opc-router.de/wp-content/uploads/2020/05/REST_socialmedia.jpg" alt="REST API" style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} />
                                <div>
                                    <b>Rest Api</b>                         
                                    <p>ffor rendering real-time graphical outputs on the canvas.</p>
                                </div>
                                
                            </div>
                            <div className="image-item">
                                <img src="https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png" alt="JavaFX" style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} />
                                <div>
                                    <b>Email Service</b> 
                                    <p>for forgot password recovery.</p>
                                </div>
                                
                            </div>
                          </div>
    
                          <div className="image-row">
                              
                            <div className="image-item">
                                 <img src="https://cdn-icons-png.flaticon.com/512/337/337946.png" alt="JavaFX" style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} />
                                <div>
                                    <b>Apache POI and iText</b>
                                    <p>for generating .txt and .pdf reports</p>
                                </div>
                                
                            </div>
                            <div className="image-item">
                                 <img src="https://cdn-icons-png.flaticon.com/512/73/73812.png" alt="JavaFX" style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} />
                                <div>
                                    <b>JavaFX Drawing APIs</b>
                                    <p>for rendering real-time graphical outputs on the canvas.</p>
                                </div>
                                
                            </div>
                          </div>
    
                         <div className="image-row">
                              
                            <div className="image-item">
                                 <img src="https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png" alt="Spring Boot" style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} />
                                <div>
                                    <b>Spring Boot</b>
                                    <p>for rendering real-time graphical outputs on the canvas.</p>
                                </div>
                                
                            </div>
                    
                          </div>
                         
                        </div>
                       
                      </div>
                    </div>
                 </div>

            <hr style={{ marginTop: '20px', marginBottom: '20px'}}/>


            <div class="ui-container">
             <div className="small-gallery-container">
                  <div className="gallery-content">

                    <div className="gallery-text5">
                          <h2>Web Based Project</h2>
                          <h3>Summary</h3>
                          <p>
                            The Structural Design Automation System is an innovative project aimed at revolutionizing the traditional design procedures for structural items. This system provides a modern, user-friendly web interface with User Management that automates the design process, enhancing efficiency and accuracy, and generating reports in different file formats.
                          </p>  
                         </div>
                      
                    <div className="gallery-images">
                        <div className="image-row">
                          
                        <div className="image-item" >
                            <img src="https://www.shutterstock.com/image-vector/management-icon-teamwork-business-team-600nw-1051689107.jpg" alt="User Management" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '10px' }} />
                            <div>
                                <b>User Management</b>   
                                <p>Secure <span style={{ color: 'green', fontWeight: 'bold' }}>login</span> and <span style={{ color: 'green', fontWeight: 'bold' }}>registration</span> system for storage and retrieval of user profiles and project data using MongoDB, along with a <span style={{ color: 'green', fontWeight: 'bold' }}>forgot password service</span> to ensure account recovery and accessibility.</p>
                            </div>
                            
                        </div>
                        <div className="image-item">
                             <img src="https://friconix.com/png/fi-xnluxx-gui.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '5px' }} />
                            <div>
                                <b>Input/Output Interface</b> 
                                <p>Intuitive forms for users to input design parameters and dynamically generate <span style={{ color: 'green', fontWeight: 'bold' }}>visual and textual outputs</span>.</p>
                            </div>
                            
                        </div>
                      </div>
                      <div className="image-row">
                          
                        <div className="image-item">
                             <img src="https://cdn-icons-png.flaticon.com/512/73/73812.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '5px' }} />
                            <div>
                                <b>Dynamic Canvas</b> 
                                <p>A <span style={{ color: 'green', fontWeight: 'bold' }}>graphical canvas</span> that displays real-time, dynamic drawings based on user inputs, allowing for immediate visual feedback.</p>
                            </div>
                            
                        </div>
                        <div className="image-item">
                            <img src="https://png.pngtree.com/png-clipart/20230427/original/pngtree-data-management-line-icon-png-image_9117318.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '5px' }} />
                            <div>
                                <b>Data Management</b>
                                <p>Capability to save input data and user sessions, ensuring continuity and ease of use.</p>
                            </div>
                            
                        </div>
                      </div>
                      <div className="experience">
                        <div className="experience-text">

                            <img src="https://cdn-icons-png.flaticon.com/512/3460/3460831.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '10px' }} />
                            <div>
                                <b>Api Management</b> 
                                <p>Ability to genbrate design outputs as <span style={{ color: 'green', fontWeight: 'bold' }}>bitmaps for graphical representation</span> and <span style={{ color: 'green', fontWeight: 'bold' }}>text reports in both .txt and .pdf formats</span> for comprehensive documentation as response by taking inputs as request.</p>
                            </div>
                        </div>
                          
                      </div>                 
                      <div className="experience">
                        <div className="experience-text">

                            <img src="https://cdn-icons-png.flaticon.com/512/3460/3460831.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '10px' }} />
                            <div>
                                <b>Output Formats</b> 
                                <p>Ability to export design outputs as <span style={{ color: 'green', fontWeight: 'bold' }}>bitmaps for graphical representation</span> and <span style={{ color: 'green', fontWeight: 'bold' }}>text reports in both .txt and .pdf formats</span> for comprehensive documentation.</p>
                            </div>
                        </div>
                          
                      </div>
                    </div>
                    <div className="gallery-text">
                      <h2>Web Based Project</h2>
                      <h3>Summary</h3>
                      <p>
                        The Structural Design Automation System is an innovative project aimed at revolutionizing the traditional design procedures for structural items. This system provides a modern, user-friendly web interface with User Management that automates the design process, enhancing efficiency and accuracy, and generating reports in different file formats.
                      </p>
                        
                    </div>
                  </div>
                </div>

                <div className="small-gallery-container">
                  <div className="gallery-content">
                    <div className="gallery-images">
                        <div className="image-row">
                          
                        <div className="image-item" >
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
                                alt="React" 
                                style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '5px' }} 
                            />
                            <div>
                                <b>React</b>   
                                <p>for building the frontend web application.</p>
                            </div>
                            
                        </div>
                        <div className="image-item">
                             <img src="https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-5-pack-logos-icons-2945120.png?f=webp" alt="JavaFX" style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '5px' }} />
                            <div>
                                <b>MongoDB</b> 
                                <p>NoSQL database for storing user data and project data.</p>
                            </div>
                            
                        </div>
                      </div>
                      <div className="image-row">
                          
                        <div className="image-item">
                            <img src="https://www.opc-router.de/wp-content/uploads/2020/05/REST_socialmedia.jpg" alt="REST API" style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} />
                            <div>
                                <b>Rest Api</b>                         
                                <p>ffor rendering real-time graphical outputs on the canvas.</p>
                            </div>
                            
                        </div>
                        <div className="image-item">
                            <img src="https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png" alt="JavaFX" style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} />
                            <div>
                                <b>Email Service</b> 
                                <p>for forgot password recovery.</p>
                            </div>
                            
                        </div>
                      </div>

                      <div className="image-row">
                          
                        <div className="image-item">
                             <img src="https://cdn-icons-png.flaticon.com/512/337/337946.png" alt="JavaFX" style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} />
                            <div>
                                <b>Apache POI and iText</b>
                                <p>for generating .txt and .pdf reports</p>
                            </div>
                            
                        </div>
                        <div className="image-item">
                             <img src="https://cdn-icons-png.flaticon.com/512/73/73812.png" alt="JavaFX" style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} />
                            <div>
                                <b>JavaFX Drawing APIs</b>
                                <p>for rendering real-time graphical outputs on the canvas.</p>
                            </div>
                            
                        </div>
                      </div>

                     <div className="image-row">
                          
                        <div className="image-item">
                             <img src="https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png" alt="Spring Boot" style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} />
                            <div>
                                <b>Spring Boot</b>
                                <p>Instead of using JDBC, a Spring Boot REST API approach is adopted for backend database connections.</p>
                            </div>
                            
                        </div>

                           <div className="image-item">
                              <img 
                                src="https://cdn.sanity.io/images/ss02266c/production/f8270046c337979534b32edb529a2c9603765955-64x64.svg" 
                                alt="HTML,CSS,SCSS,TAILWIND" 
                                style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} 
                            />
                            <div>
                                <b>HTML,CSS,SCSS,TAILWIND</b>
                                <p>for frontend UI.</p>
                            </div>
                            
                        </div>
                
                      </div>
                     
                    </div>
                   
                  </div>
                </div>
            </div>
            
        <hr style={{ marginTop: '20px', marginBottom: '20px'}}/>

        <div class="ui-container">
            <div class="slider-container">
                        <Slider {...settings}>
                            {items[3].images.map((image, index) => (
                                <img key={index} src={image} alt="" />
                            ))}
                        </Slider>
            </div>        
            <h2 style={{ marginTop: '20px' }}>VPORTFOLIO</h2>
            <button className="visit-website-btn" onClick={() => window.open('https://varunnlv.github.io/vportfoliodetail/', '_blank')}>
              Visit Website
            </button>
            <div id="projectSectionh7" className="hidden fade-in-top" style={{ marginTop: '20px' }}>
                <h3 style={{ marginTop: '20px' }}>Summary</h3>
                <p style={{ marginTop: '20px' }} className="card-text">
                    The Portfolio Project is a comprehensive web-based application designed to showcase detailed information about your various projects. This includes summaries, features, technologies used, and learning outcomes for each project. The portfolio serves as an in-depth professional presentation of your work and skills.
                </p>
            
                <h3 style={{ marginTop: '20px' }}>Features</h3>
                <ul style={{ marginTop: '20px' }}>
                    <li>
                        <b>Project Summaries:</b> Each project includes a brief overview summarizing its purpose and goals.
                    </li>
                    <li>
                        <b>Detailed Descriptions:</b> In-depth explanations of the features, technologies used, challenges faced, and solutions implemented for each project.
                    </li>
                    <li>
                        <b>Learning Outcomes:</b> Clear documentation of the skills and knowledge gained from each project.
                    </li>
                    <li>
                        <b>Interactive UI:</b> A user-friendly and visually appealing interface to navigate through different projects.
                    </li>
                </ul>
            
                <h3 style={{ marginTop: '20px' }}>Technologies Used</h3>
                <ul style={{ marginTop: '20px' }}>
                    <li>
                        <b>HTML & CSS:</b> For structuring and styling the web pages.
                    </li>
                    <li>
                        <b>JavaScript:</b> For adding dynamic functionality, such as handling user interactions.
                    </li>
                    <li>
                        <b>React:</b> For building the frontend web application.
                    </li>
                </ul>
            </div>

        </div>
        <hr style={{ marginTop: '20px', marginBottom: '20px'}}/>

        <div class="ui-container">
     
            <h2 style={{ marginTop: '20px' }}>PATH FINDER</h2>

            <button className="visit-website-btn" onClick={() => window.open('https://varunnlv.github.io/vportfoliodetail/', '_blank')}>
              Visit Website
            </button>
    
            <div id="projectSectionh10" className="hidden fade-in-top" style={{ marginTop: '20px' }}>
                <h3 style={{ marginTop: '20px' }}>Summary</h3>
                <p style={{ marginTop: '20px' }} className="card-text">
                    Path Finder Algorithm Visualizer is a web-based application that allows users to visualize pathfinding algorithms in real-time. Users can set start and end points, place obstacles, and watch the algorithm find the shortest path between the two points on a grid.
                </p>
            
                <h3 style={{ marginTop: '20px' }}>Features</h3>
                <ul style={{ marginTop: '20px' }}>
                    <li>
                        <b>Interactive Grid Board:</b> Users can click to set start and end points.
                    </li>
                    <li>
                        <b>Pathfinding Algorithms:</b> Implement and visualize various pathfinding algorithms such as Dijkstra’s Algorithm and Depth-First Search (DFS).
                    </li>
                    <li>
                        <b>Animation Speed Control:</b> Allows users to control the speed of the visualization.
                    </li>
                </ul>
            
                <h3 style={{ marginTop: '20px' }}>Technologies Used</h3>
                <ul style={{ marginTop: '20px' }}>
                    <li>
                        <b>Frontend:</b> React, HTML, CSS, JavaScript.
                    </li>
                    <li>
                        <b>Algorithm Implementations:</b> JavaScript (for implementing the pathfinding algorithms).
                    </li>
                </ul>
            </div>

        </div>
         <hr style={{ marginTop: '20px', marginBottom: '20px'}}/>

        <div class="ui-container">
  
            <div class="slider-container">
                        <Slider {...settings}>
                            {items[4].images.map((image, index) => (
                                <img key={index} src={image} alt="" />
                            ))}
                        </Slider>
            </div>        
            <h2 style={{ marginTop: '20px' }}>PORTFOLIO</h2>
    
            <div id="projectSectionh11" className="hidden fade-in-top" style={{ marginTop: '20px' }}>
                <h3 style={{ marginTop: '20px' }}>Summary</h3>
                <p style={{ marginTop: '20px' }} className="card-text">
                    The Portfolio Website is a personal web-based application designed to showcase your personal and professional information, projects, and skills. It provides a platform to display project details with screenshots and interactive features to engage visitors.
                </p>
            
                <h3 style={{ marginTop: '20px' }}>Features</h3>
                <ul style={{ marginTop: '20px' }}>
                    <li>
                        <b>Personal Information:</b> A section to display your personal details, including your bio, skills, and contact information.
                    </li>
                    <li>
                        <b>Projects Showcase:</b> Sections to highlight your personal and professional projects with descriptions and screenshots.
                    </li>
                    <li>
                        <b>Interactive Elements:</b> Utilizes Framer Motion for interactive animations and transitions, enhancing the user experience.
                    </li>
                    <li>
                        <b>Contact Form:</b> Integrated contact form using Nodemailer for sending emails directly from the website.
                    </li>
                    <li>
                        <b>Modern Design:</b> A sleek and responsive design using React, HTML, and CSS to ensure a seamless user experience across devices.
                    </li>
                </ul>
            </div>

        </div>
        <hr style={{ marginTop: '20px', marginBottom: '20px'}}/>

        <div class="ui-container">
       
            <div class="slider-container">
                        <Slider {...settings}>
                            {items[5].images.map((image, index) => (
                                <img key={index} src={image} alt="" />
                            ))}
                        </Slider>
            </div>        
            <h2 style={{ marginTop: '20px' }}>EXPENSE TRACKER</h2>
            
            <button className="visit-website-btn" onClick={() => window.open('https://varunnlv.github.io/vportfoliodetail/', '_blank')}>
              Visit Website
            </button>
    
    
            <div id="projectSectionh12" className="hidden fade-in-top" style={{ marginTop: '20px' }}>
                <h3 style={{ marginTop: '20px' }}>Summary</h3>
                <p style={{ marginTop: '20px' }} className="card-text">
                    Expense Tracker is a web-based application designed to help users manage and track their expenses efficiently. Built with a modern and user-friendly interface, this system allows users to log in, input their expenses, and retrieve their data at any time.
                </p>
            
                <h3 style={{ marginTop: '20px' }}>Features</h3>
                <ul>
                    <li>
                        <b>User Management:</b> Secure login system to store and retrieve user profiles and their associated expenses.
                    </li>
                    <li>
                        <b>Expense Management:</b> Intuitive forms for users to input expense details, including date, category, amount, and description.
                    </li>
                    <li>
                        <b>Expense Retrieval:</b> Users can view and retrieve their past expenses after logging in.
                    </li>
                    <li>
                        <b>Data Storage:</b> Uses JSON Server to store user data and expenses, ensuring easy data management and retrieval.
                    </li>
                </ul>
            
                <h3 style={{ marginTop: '20px' }}>Technologies Used</h3>
                <ul style={{ marginTop: '20px' }}>
                    <li>
                        <b>React:</b> For building the frontend web application.
                    </li>
                    <li>
                        <b>HTML & CSS:</b> For structuring and styling the web pages.
                    </li>
                    <li>
                        <b>React Router:</b> For handling client-side routing and navigation within the web application.
                    </li>
                    <li>
                        <b>JSON Server:</b> For storing and retrieving user data and expenses.
                    </li>
                </ul>
            </div>
        </div>
        <hr style={{ marginTop: '20px', marginBottom: '20px'}}/>

        <div class="ui-container">
       
            <div class="slider-container">
                        <Slider {...settings}>
                            {items[6].images.map((image, index) => (
                                <img key={index} src={image} alt="" />
                            ))}
                        </Slider>
            </div>        
            <h2 style={{ marginTop: '20px' }}>FILMBOOK</h2>
            
            <button className="visit-website-btn" onClick={() => window.open('https://varunnlv.github.io/vportfoliodetail/', '_blank')}>
              Visit Website
            </button>
    
                
            <div id="projectSectionh8" className="hidden fade-in-top" style={{ marginTop: '20px' }}>
                <h3 style={{ marginTop: '20px' }}>Summary</h3>
                <p style={{ marginTop: '20px' }} className="card-text">
                    Filmbook is a real-time movie ticket booking website designed with a robust architecture to handle high traffic and ensure seamless user experience. The platform leverages modern technologies to offer secure authentication, efficient state management, real-time seat updates, and scalable backend services.
                </p>
            
                <h3 style={{ marginTop: '20px' }}>Features</h3>
                <ul style={{ marginTop: '20px' }}>
                    <li>
                        <b>Secure Authentication:</b> Users can register and log in with secure authentication mechanisms to protect their accounts.
                    </li>
                    <li>
                        <b>Real-Time Seat Updates:</b> The system provides real-time updates on seat availability to ensure accurate booking information.
                    </li>
                    <li>
                        <b>Efficient State Management:</b> Utilizes advanced state management techniques to ensure smooth user interactions and data consistency.
                    </li>
                    <li>
                        <b>Scalable Backend:</b> The backend services are designed to handle high traffic and scale according to demand.
                    </li>
                    <li>
                        <b>Responsive Design:</b> The layout adapts to different screen sizes, providing a seamless experience across devices.
                    </li>
                </ul>
            
                <h3 style={{ marginTop: '20px' }}>Technologies Used</h3>
                <ul style={{ marginTop: '20px' }}>
                    <li>
                        <b>HTML & CSS:</b> For structuring and styling the web pages.
                    </li>
                    <li>
                        <b>JavaScript:</b> For adding dynamic functionality and handling user interactions.
                    </li>
                    <li>
                        <b>React:</b> For building the frontend user interface.
                    </li>
                    <li>
                        <b>Node.js & Express:</b> For backend services and handling server-side logic.
                    </li>
                    <li>
                        <b>WebSocket:</b> For real-time communication and updates.
                    </li>
                </ul>
            </div>
         </div>

        <hr style={{ marginTop: '20px', marginBottom: '20px'}}/>

           
            <div class="ui-container">
           
                <div class="slider-container">
                        <Slider {...settings}>
                            {items[2].images.map((image, index) => (
                                <img key={index} src={image} alt="" />
                            ))}
                        </Slider>
                </div>
                <h2 style={{ marginTop: '20px' }}>VKANBAN</h2>

                <button className="visit-website-btn" onClick={() => window.open('https://varunnlv.github.io/vportfoliodetail/', '_blank')}>
              Visit Website
            </button>
                
                <div id="projectSectionh6" className="hidden fade-in-top" style={{ marginTop: '20px' }}>
                <h3 style={{ marginTop: '20px' }}>Summary</h3>
                <p className="card-text">
                    VKANBAN is a static UI website designed to provide a visual task management system using the Kanban methodology. Similar to Jira, this application allows users to drag tasks between columns to track their status, making it easy to manage and visualize workflow.
                </p>
            
                <h3 style={{ marginTop: '20px' }}>Features</h3>
                <ul style={{ marginTop: '20px' }}>
                    <li>
                        <b>Task Management:</b> Users can create tasks with descriptions and assign them to columns representing different stages of a workflow (e.g., To Do, In Progress, Done).
                    </li>
                    <li>
                        <b>Drag and Drop:</b> Tasks can be dragged and dropped between columns to update their status.
                    </li>
                    <li>
                        <b>Dynamic UI:</b> The interface updates in real-time to reflect the current status of tasks.
                    </li>
                </ul>
            
                <h3 style={{ marginTop: '20px' }}>Technologies Used</h3>
                <ul style={{ marginTop: '20px' }}>
                    <li>
                        <b>HTML & CSS:</b> For structuring and styling the web pages.
                    </li>
                    <li>
                        <b>JavaScript:</b> For adding dynamic functionality, such as enabling drag-and-drop interactions and handling user input.
                    </li>
                </ul>
            </div>
         </div>

        <hr style={{ marginTop: '20px', marginBottom: '20px'}}/>
        

         <div class="ui-container">

                <div class="slider-container">
                            <Slider {...settings}>
                                {items[0].images.map((image, index) => (
                                    <img key={index} src={image} alt="" />
                                ))}
                            </Slider>
                </div>
             <div className="small-gallery-container">
                  <div className="gallery-content">
                    <div className="gallery-text5">
                          <h2>VFLEX</h2>
                             <button className="visit-website-btn" onClick={() => window.open('https://varunnlv.github.io/vportfoliodetail/', '_blank')}>
                              Visit Website
                            </button>
                          <h3>Summary</h3>
                          <p>
                            VFLEX is a Static UI website designed to practice and demonstrate the Flexbox layout concept. It allows users to dynamically add cards with their own descriptions and headings, which are arranged using Flexbox. The site is responsive, with each card featuring a randomly assigned color.
                          </p>  
                         </div>
                      
                    <div className="gallery-images">
                        <div className="image-row">
                          
                        <div className="image-item" >
                            <div>
                                <b>Dynamic Card Addition</b>   
                                <p>Users can add cards with custom descriptions and headings.</p>
                            </div>
                            
                        </div>
                        <div className="image-item">
                            
                            <div>
                                <b>Flexbox Layout</b> 
                                <p>Cards are arranged using the Flexbox layout, demonstrating various Flexbox properties and behaviors.</p>
                            </div>
                            
                        </div>
                      </div>


                      <div className="experience">
                        <div className="experience-text">
                            <div>
                                <b>Responsive Design</b> 
                                <p>The layout adapts to different screen sizes, ensuring a seamless user experience on all devices.</p>
                            </div>
                        </div>
                          
                      </div>

                      <div className="experience">
                        <div className="experience-text">
                            <div>
                                <b>Random Colors</b> 
                                <p>Each card is assigned a random color to enhance visual variety and appeal.</p>
                            </div>
                        </div>                          
                      </div>
                      
                    </div>
                    <div className="gallery-text">
                      <h2>VFLEX</h2>
                      <h3>Summary</h3>
                      <p>
                        VFLEX is a Static UI website designed to practice and demonstrate the Flexbox layout concept. It allows users to dynamically add cards with their own descriptions and headings, which are arranged using Flexbox. The site is responsive, with each card featuring a randomly assigned color.
                      </p>
                        
                    </div>
                  </div>
                </div>

                <div className="small-gallery-container">
                  <div className="gallery-content">
                    <div className="gallery-images">
                        <div className="image-row">
                          
                        <div className="image-item" >
                
                            <div>
                                <b>HTML & CSS</b>   
                                <p>for structuring and styling the web pages.</p>
                            </div>
                            
                        </div>
                        <div className="image-item">
                            
                            <div>
                                <b>JavaScript</b> 
                                <p>for adding dynamic functionality, such as generating random colors and handling user input.</p>
                            </div>
                            
                        </div>
                      </div>
                      
                    </div>
                   
                  </div>
                </div>
            </div>

            <hr style={{ marginTop: '20px', marginBottom: '20px'}}/>




            <div class="ui-container">
                <div class="slider-container">
                        <Slider {...settings}>
                            {items[1].images.map((image, index) => (
                                <img key={index} src={image} alt="" />
                            ))}
                        </Slider>
                </div>
                <h2 style={{ marginTop: '20px' }}>VGRID</h2>
                <button className="visit-website-btn" onClick={() => window.open('https://varunnlv.github.io/vportfoliodetail/', '_blank')}>
                  Visit Website
                </button>
                <div id="projectSectionh5" className="hidden fade-in-top" style={{ marginTop: '20px' }}>
                    <h3 style={{ marginTop: '20px' }}>Summary</h3>
                    <p className="card-text">
                        VGRID is a Static UI website designed to practice and master the CSS Grid layout concept. It allows users to dynamically add content, which is arranged using CSS Grid. The site demonstrates the flexibility and power of CSS Grid in creating responsive and complex layouts.
                    </p>
                
                    <h3 style={{ marginTop: '20px' }}>Features</h3>
                    <ul style={{ marginTop: '20px' }}>
                        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                            <div>
                                <b>Dynamic Card Addition:</b> Users can add cards with custom descriptions and headings.
                            </div>
                        </li>
                
                        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                            <div>
                                <b>CSS Grid Layout:</b> Items are arranged using CSS Grid, showcasing various grid properties and layouts.
                            </div>
                        </li>
                
                        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                            <div>
                                <b>Responsive Design:</b> The layout adapts to different screen sizes, ensuring a seamless user experience on all devices.
                            </div>
                        </li>
                
                        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                            <div>
                                <b>Random Colors:</b> Each card is assigned a random color to enhance visual variety and appeal.
                            </div>
                        </li>
                    </ul>
                
                    <h3 style={{ marginTop: '20px' }}>Technologies Used</h3>
                    <ul style={{ marginTop: '20px' }}>
                        <li>
                            <b>HTML & CSS:</b> For structuring and styling the web pages.
                        </li>
                        <li>
                            <b>JavaScript:</b> For adding dynamic functionality, such as generating random colors and handling user input.
                        </li>
                    </ul>
                </div>
            </div>
            <hr style={{ marginTop: '20px', marginBottom: '20px'}}/>


            

        


{/*             <div class="ui-container">
                <div class="slider-container">
                    <Slider {...settings}>
                        {items[0].images.map((image, index) => (
                            <img key={index} src={image} alt="" />
                        ))}
                    </Slider>
                </div>
                <h2>{items[0].title}</h2>
                
                <p>{items[0].desc}</p>
                <p>{items[0].desc}</p>
                <p>{items[0].desc}</p>
                <p>{items[0].desc}</p>
                <p>{items[0].desc}</p>
                <button>See Demo</button>
            </div> */}


            
        </div>
    );
};

export default Portfolio;
