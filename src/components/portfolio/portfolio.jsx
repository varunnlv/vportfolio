import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";
import Slider from "react-slick";
import { useState } from 'react';
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

    const [activeTab, setActiveTab] = useState('Summary'); // Default tab

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

     const textVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
            },
        },
    };


    return (
        <motion.div 
        id='Projects' 
        className="portfolio" 
        ref={ref}
        variants={textVariants}
        initial="initial"
        whileInView="animate"
        >
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
                <div className="tabs-container">
                    <div className="tabs">
                        {/* <button className="tab active">Stand Alone Project</button>
                        <button className="tab">Stand Alone Project</button>
                        <button className="tab">Web Development Project</button>
                        <button className="tab">FilmBook</button>
                        <button className="tab">Vportfolio</button>
                        <button className="tab">portfoliom</button>
                        <button className="tab">Expense Tracker</button>
                        <button className="tab">Path Finder</button>
                        <button className="tab">Credit Analyser</button>
                        <button className="tab">more</button> */}

                                <button
                        className={`tab ${activeTab === 'Summary' ? 'active' : ''}`}
                        onClick={() => setActiveTab('Summary')}
                        >
                        Summary
                        </button>
{/*                         <button
                        className={`tab ${activeTab === 'StandAloneProject1' ? 'active' : ''}`}
                        onClick={() => setActiveTab('StandAloneProject1')}
                        >
                        Stand Alone Project
                        </button> */}


                         <button
                        className={`tab ${activeTab === 'FilmBook' ? 'active' : ''}`}
                        onClick={() => setActiveTab('FilmBook')}
                        >
                        FilmBook
                        </button>
                           <button
                        className={`tab ${activeTab === 'PathFinder' ? 'active' : ''}`}
                        onClick={() => setActiveTab('PathFinder')}
                        >
                        DSA Visualizer
                        </button>
                          <button
                        className={`tab ${activeTab === 'ExpenseTracker' ? 'active' : ''}`}
                        onClick={() => setActiveTab('ExpenseTracker')}
                        >
                        Expense Tracker
                        </button>        
                        <button
                        className={`tab ${activeTab === 'Vportfolio' ? 'active' : ''}`}
                        onClick={() => setActiveTab('Vportfolio')}
                        >
                        Vportfolio
                        </button>
                        <button
                        className={`tab ${activeTab === 'PortfolioM' ? 'active' : ''}`}
                        onClick={() => setActiveTab('PortfolioM')}
                        >
                        Portfoliom
                        </button>   
                        <button
                        className={`tab ${activeTab === 'WebDevelopmentProject' ? 'active' : ''}`}
                        onClick={() => setActiveTab('WebDevelopmentProject')}
                        >
                        Saas Website Project
                        </button>
                        
                        <button
                        className={`tab ${activeTab === 'StandAloneProject2' ? 'active' : ''}`}
                        onClick={() => setActiveTab('StandAloneProject2')}
                        >
                        Stand Alone Project
                        </button>
                        
                              
{/*                         <button
                        className={`tab ${activeTab === 'CreditAnalyser' ? 'active' : ''}`}
                        onClick={() => setActiveTab('CreditAnalyser')}
                        >
                        Credit Analyser
                        </button> */}
                        <button
                        className={`tab ${activeTab === 'more' ? 'active' : ''}`}
                        onClick={() => setActiveTab('more')}
                        >
                        more
                        </button>
                    </div>
         
                </div>
            </div>

            {activeTab === 'Summary' && (
                <motion.div 
                class="ui-container"
                variants={textVariants}
                initial="initial"
                whileInView="animate"
                >
                 
                    <div className="small-gallery-container">
                        <div className="gallery-content2">

                            <div className="image-row4">

                                    <div className="image-item4" >
                                        <div>
                                            <h3>FILMBOOK</h3>     
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="image-item4" >
                                        <div>
                                            <p>
                                                Usage of <span className="highlight-text">Load Balancer</span>,<span className="highlight-text">Dynamic seat allocation</span>, <span className="highlight-text">Low level design</span> and <span className="highlight-text">Robust payment Retry mechanism</span>.
                                            </p>        
                                        </div>
                                        
                                    </div>
                               
                            </div>

                            <div className="image-row4">

                                    <div className="image-item4" >
                                        <div>
                                            <h3>PORTFOLIO</h3>     
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="image-item4" >
                                        <div>
                                            <p>
                                            Usage of <span className="highlight-text">Framer motion</span> ,<span className="highlight-text">Css Animation</span> and <span className="highlight-text">EmailJS</span>.
                                            </p>        
                                        </div>
                                        
                                    </div>
                                                           
                            </div>

                            <div className="image-row4">

                                <div className="image-item4" >
                                        <div>
                                            <h3>EXPENSE TRACKER</h3>     
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="image-item4" >
                                        <div>
                                            <p>
                                            Usage of <span className="highlight-text">React router</span>.
                                            </p>        
                                        </div>
                                        
                                    </div>
                                    
                                
                            </div>

                            <div className="image-row4">

                                <div className="image-item4" >
                                        <div>
                                            <h3>DSA VISUALIZER</h3>     
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="image-item4" >
                                        <div>
                                            <p>
                                            Usage of few <span className="highlight-text">Search Algorithms</span>.
                                            </p>        
                                        </div>
                                        
                                    </div>
                                    
                                
                            </div>

                            <div className="image-row4">

                                <div className="image-item4" >
                                        <div>
                                            <h3>SAAS WEBSITE</h3>     
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="image-item4" >
                                        <div>
                                            <p>
                                            Usage of <span className="highlight-text">Microservices</span>,<span className="highlight-text">Rest Api</span> and <span className="highlight-text">React Js</span>.
                                            </p>        
                                        </div>
                                        
                                    </div>
                                    
                                
                            </div>

                            <div className="image-row4">

                                <div className="image-item4" >
                                        <div>
                                            <h3>STAND ALONE PROGRAM</h3>     
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="image-item4" >
                                        <div>
                                            <p>
                                            Usage of <span className="highlight-text">Microservices</span>,<span className="highlight-text">Rest Api</span> and <span className="highlight-text">JavaFx</span>.
                                            </p>        
                                        </div>
                                        
                                    </div>
                                    
                                
                            </div>

                            <div className="image-row4">

                                <div className="image-item4" >
                                        <div>
                                            <h3> WORKLOG SYSTEM WEBSITE</h3>     
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="image-item4" >
                                        <div>
                                            <p>
                                            Usage of <span className="highlight-text">Angular</span>, <span className="highlight-text">Abp Framework</span> and <span className="highlight-text">C#</span>.
                                            </p>        
                                        </div>
                                        
                                    </div>
                                    
                                
                            </div>

                 
                            {/* <img src="./FilmBook.png" alt="User Management"/> */}
                            
                        </div>
                    </div>
                </motion.div>
                
            )}
      
             {activeTab === 'StandAloneProject1' && (
                <motion.div 
                class="ui-container"
                variants={textVariants}
                initial="initial"
                whileInView="animate"
                >
                 
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

  

                </motion.div>
                
            )}

            {activeTab === 'StandAloneProject2' && (
                <motion.div 
                class="ui-container"
                variants={textVariants}
                initial="initial"
                whileInView="animate"
                >

                    <div className="small-gallery-container">
                         <div className="gallery-content">
   
                            <div className="gallery-text5">
                             <h2>Stand Alone Project</h2>
                             <h3>Summary</h3>
                             <p>
                               The Structural Design Automation System is an innovative project aimed at revolutionizing the traditional design procedures for structural items. This system provides a modern, user-friendly GUI with User Management that automates the design process, enhancing efficiency and accuracy and generating reports in different file formats.
                             </p>    
                            <p>
                             This project, <b>Structural Design Automation System</b>, showcases my proficiency in <b>GUI development</b> using <b>JavaFX</b> and handling <b>REST APIs</b> for real-time graphical rendering on a dynamic canvas. I developed a secure <b>User Management</b> system integrated with <b>MongoDB</b> for storing and managing user profiles and project data, while implementing <b>forgot password recovery</b> through an email service. The project features intuitive input/output interfaces, allowing users to dynamically generate visual and textual design outputs. Additionally, I utilized <b>Apache POI</b> and <b>iText</b> for generating comprehensive reports in both .txt and .pdf formats. The integration of these technologies enhanced my skills in modern <b>UI design</b>, real-time data handling, and efficient report generation.
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
                             <h2>Stand Alone Project</h2>
                             <h3>Summary</h3>
                             <p>
                               The Structural Design Automation System is an innovative project aimed at revolutionizing the traditional design procedures for structural items. This system provides a modern, user-friendly GUI with User Management that automates the design process, enhancing efficiency and accuracy and generating reports in different file formats.
                             </p>

                             <p>
                             This project, <b>Structural Design Automation System</b>, showcases my proficiency in <b>GUI development</b> using <b>JavaFX</b> and handling <b>REST APIs</b> for real-time graphical rendering on a dynamic canvas. I developed a secure <b>User Management</b> system integrated with <b>MongoDB</b> for storing and managing user profiles and project data, while implementing <b>forgot password recovery</b> through an email service. The project features intuitive input/output interfaces, allowing users to dynamically generate visual and textual design outputs. Additionally, I utilized <b>Apache POI</b> and <b>iText</b> for generating comprehensive reports in both .txt and .pdf formats. The integration of these technologies enhanced my skills in modern <b>UI design</b>, real-time data handling, and efficient report generation.
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

                </motion.div>
            )}

            {activeTab === 'WebDevelopmentProject' && (
                <motion.div 
                class="ui-container"
                variants={textVariants}
                initial="initial"
                whileInView="animate"
                >
                    <div className="small-gallery-container">
                      <div className="gallery-content">
    
                        <div className="gallery-text5">
                              <h2>Web Based Project</h2>
                              <h3>Summary</h3>
                              <p>
                                The Structural Design Automation System is an innovative project aimed at revolutionizing the traditional design procedures for structural items. This system provides a modern, user-friendly web interface with User Management that automates the design process, enhancing efficiency and accuracy, and generating reports in different file formats.
                              </p>  
                              <p>
                              The Structural Design Automation System project has significantly enhanced my web development skills, particularly in utilizing the <b>React</b> framework to build a responsive and dynamic frontend. By implementing React, I gained hands-on experience in creating component-based user interfaces that enhance user engagement and interactivity. Additionally, I utilized <b>HTML</b>, <b>CSS</b>, <b>SCSS</b>, and <b>Tailwind CSS</b> to ensure a visually appealing and responsive design. The project incorporated <b>MongoDB</b> for data storage, providing me with insights into NoSQL databases and effective data management techniques. Utilizing <b>REST APIs</b> enabled me to render real-time graphical outputs, while the integration of <b>JavaFX Drawing APIs</b> offered valuable experience in rendering graphics in web applications. I also developed a secure <b>User Management</b> system that utilized <b>email services</b> for password recovery and <b>Apache POI and iText</b> for generating reports in various formats, further improving my skills in backend integration and data handling. This project not only solidified my understanding of full-stack development but also allowed me to apply best practices in a real-world context.
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
                              <p>
                              The Structural Design Automation System project has significantly enhanced my web development skills, particularly in utilizing the <b>React</b> framework to build a responsive and dynamic frontend. By implementing React, I gained hands-on experience in creating component-based user interfaces that enhance user engagement and interactivity. Additionally, I utilized <b>HTML</b>, <b>CSS</b>, <b>SCSS</b>, and <b>Tailwind CSS</b> to ensure a visually appealing and responsive design. The project incorporated <b>MongoDB</b> for data storage, providing me with insights into NoSQL databases and effective data management techniques. Utilizing <b>REST APIs</b> enabled me to render real-time graphical outputs, while the integration of <b>JavaFX Drawing APIs</b> offered valuable experience in rendering graphics in web applications. I also developed a secure <b>User Management</b> system that utilized <b>email services</b> for password recovery and <b>Apache POI and iText</b> for generating reports in various formats, further improving my skills in backend integration and data handling. This project not only solidified my understanding of full-stack development but also allowed me to apply best practices in a real-world context.
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
                                    <p>for rendering real-time graphical outputs on the canvas.</p>
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

                </motion.div>
            )}
       
            {activeTab === 'PortfolioM' && (
                <motion.div 
                class="ui-container"
                variants={textVariants}
                initial="initial"
                whileInView="animate"
                >
           
                    <div class="slider-container">
                                <Slider {...settings}>
                                    {items[3].images.map((image, index) => (
                                        <img key={index} src={image} alt="" />
                                    ))}
                                </Slider>
                    </div>     

                    <div className="small-gallery-container">
                        <div className="gallery-content">
                            <div className="gallery-text5">
                                <h2>PORTFOLIOM</h2>
                                <h3>Summary</h3>
                                <p>
                                The Portfolio Project is a comprehensive web-based application designed to showcase detailed information about your various projects. This includes summaries, features, technologies used, and learning outcomes for each project. The portfolio serves as an in-depth professional presentation of your work and skills.
                                </p>  

                                <button 
                                    class="visit-website-btn" 
                                    onClick={() => window.open('https://varunnlv.github.io/vportfoliodetail/', '_blank')}
                                >
                                    Visit Website
                                </button>


                                <p>
                                This project, <b>Structural Design Automation System</b>, showcases my proficiency in <b>GUI development</b> using <b>JavaFX</b> and handling <b>REST APIs</b> for real-time graphical rendering on a dynamic canvas. I developed a secure <b>User Management</b> system integrated with <b>MongoDB</b> for storing and managing user profiles and project data, while implementing <b>forgot password recovery</b> through an email service. The project features intuitive input/output interfaces, allowing users to dynamically generate visual and textual design outputs. Additionally, I utilized <b>Apache POI</b> and <b>iText</b> for generating comprehensive reports in both .txt and .pdf formats. The integration of these technologies enhanced my skills in modern <b>UI design</b>, real-time data handling, and efficient report generation.
                                </p> 

                            </div>
   
                    
                           <div className="gallery-images">
                                <div className="image-row">
                                 
                               <div className="image-item" >
                                   <img src="https://www.shutterstock.com/image-vector/management-icon-teamwork-business-team-600nw-1051689107.jpg" alt="User Management" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '10px' }} />
                                   <div>
                                       <b>Personal Information</b>   
                                       <p>A section to display your personal details, including your bio, skills, and contact information.</p>
                                   </div>
                                   
                               </div>
                               <div className="image-item">
                                    <img src="https://friconix.com/png/fi-xnluxx-gui.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '5px' }} />
                                   <div>
                                       <b>Projects Showcase</b> 
                                       <p>Sections to highlight your personal and professional projects with descriptions and screenshots.</p>
                                   </div>
                                   
                               </div>
                                </div>
                                <div className="image-row">
                                    
                                <div className="image-item">
                                        <img src="https://cdn-icons-png.flaticon.com/512/73/73812.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '5px' }} />
                                    <div>
                                        <b>Interactive Elements</b> 
                                        <p>Utilizes Framer Motion for interactive animations and transitions, enhancing the user experience.</p>
                                    </div>
                                    
                                </div>
                                <div className="image-item">
                                    <img src="https://png.pngtree.com/png-clipart/20230427/original/pngtree-data-management-line-icon-png-image_9117318.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '5px' }} />
                                    <div>
                                        <b>Contact Form</b>
                                        <p>Integrated contact form using Nodemailer for sending emails directly from the website.</p>
                                    </div>
                                    
                                </div>
                                </div>
                                <div className="experience">
                                <div className="experience-text">
        
                                    <img src="https://cdn-icons-png.flaticon.com/512/3460/3460831.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '10px' }} />
                                    <div>
                                        <b>Modern Design</b> 
                                        <p>A sleek and responsive design using React, HTML, and CSS to ensure a seamless user experience across devices.</p>
                                    </div>
                                </div>
                                    
                                </div>                 
                                <div className="experience">
                                <div className="experience-text">
        
                                    <img src="https://cdn-icons-png.flaticon.com/512/3460/3460831.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '10px' }} />
                                    <div>
                                        <b>Detailed Descriptions</b> 
                                        <p>In-depth explanations of the features, technologies used, challenges faced, and solutions implemented for each project.</p>
                                    </div>
                                </div>
                                    
                                </div>
                           </div>

                           <div className="gallery-text">
                             <h2>PORTFOLIOM</h2>

                             <h3>Summary</h3>
                             <p>
                             The Portfolio Project is a comprehensive web-based application designed to showcase detailed information about your various projects. This includes summaries, features, technologies used, and learning outcomes for each project. The portfolio serves as an in-depth professional presentation of your work and skills.
                             </p> 

                             <button 
                                class="visit-website-btn" 
                                onClick={() => window.open('https://varunnlv.github.io/vportfoliodetail/', '_blank')}
                            >
                                Visit Website
                            </button>

                             <p>
                             This project, <b>Structural Design Automation System</b>, showcases my proficiency in <b>GUI development</b> using <b>JavaFX</b> and handling <b>REST APIs</b> for real-time graphical rendering on a dynamic canvas. I developed a secure <b>User Management</b> system integrated with <b>MongoDB</b> for storing and managing user profiles and project data, while implementing <b>forgot password recovery</b> through an email service. The project features intuitive input/output interfaces, allowing users to dynamically generate visual and textual design outputs. Additionally, I utilized <b>Apache POI</b> and <b>iText</b> for generating comprehensive reports in both .txt and .pdf formats. The integration of these technologies enhanced my skills in modern <b>UI design</b>, real-time data handling, and efficient report generation.
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

                            <div className="image-item" >
                                <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
                                    alt="React" 
                                    style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '5px' }} 
                                />
                                <div>
                                    <b>Javascript</b>   
                                    <p>for implementing the pathfinding algorithms.</p>
                                </div>
                                
                            </div>
                          </div>
                      
                         <div className="image-row">
                              
                               <div className="image-item">
                                  <img 
                                    src="https://cdn.sanity.io/images/ss02266c/production/f8270046c337979534b32edb529a2c9603765955-64x64.svg" 
                                    alt="HTML,CSS,SCSS,TAILWIND" 
                                    style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} 
                                    />
                                    <div>
                                        <b>HTML & CSS</b>
                                        <p>for frontend UI.</p>
                                    </div>
                                
                                </div>
                    
                        </div>
                         
                        </div>
                       
                      </div>
                    </div>

              

                </motion.div>
            )}

            {activeTab === 'PathFinder' && (
                <motion.div 
                class="ui-container"
                variants={textVariants}
                initial="initial"
                whileInView="animate"
                >

                    <div className="small-gallery-container">
                         <div className="gallery-content">
   
                            <div className="gallery-text5">
                             <h2>DSA VISUALIZER</h2>

{/*                              <div class="slider-container">
                                <Slider {...settings}>
                                    {items[3].images.map((image, index) => (
                                        <img key={index} src={image} alt="" />
                                    ))}
                                </Slider>
                             </div>      */}

                             
                             <h3>Summary</h3>
                             <p>
                             Path Finder Algorithm Visualizer is a web-based application that allows users to visualize pathfinding algorithms in real-time. Users can set start and end points, place obstacles, and watch the algorithm find the shortest path between the two points on a grid.
                             </p>  

                             <button class="visit-website-btn" onClick={() => window.open('https://dsavis.vercel.app/', '_blank')}>
                            Visit Website
                            </button>
                             <p>
                             The Path Finder Algorithm Visualizer is a web-based application that I developed to enable users to visualize pathfinding algorithms in real-time. This project allowed me to enhance my web development skills, particularly through the use of the <b>React</b> framework for building a dynamic and interactive user interface. Users can easily set start and end points on an interactive grid board, place obstacles, and witness the algorithm finding the shortest path between the two points. I implemented various pathfinding algorithms, including <b>Dijkstra’s Algorithm</b> and <b>Depth-First Search (DFS)</b>, using <b>JavaScript</b>, which deepened my understanding of algorithmic principles and their practical applications. Additionally, I integrated an animation speed control feature that enhances user experience by allowing them to customize the visualization speed. Overall, this project significantly improved my proficiency in <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>, while also showcasing my ability to create engaging and educational web applications.
                             </p> 

                            </div>
        
                           <div className="gallery-images">
                               <div className="image-row">
                                 
                               <div className="image-item">
                                    <img src="https://friconix.com/png/fi-xnluxx-gui.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '5px' }} />
                                   <div>
                                       <b>Interactive Grid Board</b> 
                                       <p>Users can click to set start and end points <span style={{ color: 'green', fontWeight: 'bold' }}>visually</span>.</p>
                                   </div>
                                   
                               </div>
                             </div>
                        
                             <div className="experience">
                               <div className="experience-text">
    
                                   <div>
                                       <b>Search Algorithms</b> 
                                       <p>Implement and visualize various pathfinding algorithms such as <span style={{ color: 'green', fontWeight: 'bold' }}>Dijkstra’s Algorithm</span> and <span style={{ color: 'green', fontWeight: 'bold' }}>Depth-First Search (DFS)</span>.</p>
                                   </div>
                               </div>
                                 
                             </div>                 
                             <div className="experience">
                               <div className="experience-text">
       
                                   <div>
                                       <b>Animation Speed Control</b> 
                                       <p>Allows users to control the speed of the visualization.</p>
                                   </div>
                               </div>
                                 
                             </div>
                           </div>



                           <div className="gallery-text">
                             <h2>DSA VISUALIZER</h2>

{/*                              <div class="slider-container">
                                <Slider {...settings}>
                                    {items[3].images.map((image, index) => (
                                        <img key={index} src={image} alt="" />
                                    ))}
                                </Slider>
                            </div>      */}
                             
                             <h3>Summary</h3>
                             <p>
                             Path Finder Algorithm Visualizer is a web-based application that allows users to visualize pathfinding algorithms in real-time. Users can set start and end points, place obstacles, and watch the algorithm find the shortest path between the two points on a grid.
                             </p>

                             <button class="visit-website-btn" onClick={() => window.open('https://algochecker.vercel.app/', '_blank')}>
                                Visit Website
                            </button>

                             <p>
                             The Path Finder Algorithm Visualizer is a web-based application that I developed to enable users to visualize pathfinding algorithms in real-time. This project allowed me to enhance my web development skills, particularly through the use of the <b>React</b> framework for building a dynamic and interactive user interface. Users can easily set start and end points on an interactive grid board, place obstacles, and witness the algorithm finding the shortest path between the two points. I implemented various pathfinding algorithms, including <b>Dijkstra’s Algorithm</b> and <b>Depth-First Search (DFS)</b>, using <b>JavaScript</b>, which deepened my understanding of algorithmic principles and their practical applications. Additionally, I integrated an animation speed control feature that enhances user experience by allowing them to customize the visualization speed. Overall, this project significantly improved my proficiency in <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>, while also showcasing my ability to create engaging and educational web applications.
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

                            <div className="image-item" >
                                <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
                                    alt="React" 
                                    style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '5px' }} 
                                />
                                <div>
                                    <b>Javascript</b>   
                                    <p>for implementing the pathfinding algorithms.</p>
                                </div>
                                
                            </div>
                          </div>
                      
                         <div className="image-row">
                              
                               <div className="image-item">
                                  <img 
                                    src="https://cdn.sanity.io/images/ss02266c/production/f8270046c337979534b32edb529a2c9603765955-64x64.svg" 
                                    alt="HTML,CSS,SCSS,TAILWIND" 
                                    style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} 
                                    />
                                    <div>
                                        <b>HTML & CSS</b>
                                        <p>for frontend UI.</p>
                                    </div>
                                
                                </div>
                    
                        </div>
                         
                        </div>
                       
                      </div>
                    </div>
             </motion.div>
            )}
  
            {activeTab === 'Vportfolio' && (
                 <motion.div 
                class="ui-container"
                variants={textVariants}
                initial="initial"
                whileInView="animate"
                >
    
                    <div class="slider-container">
                                <Slider {...settings}>
                                    {items[4].images.map((image, index) => (
                                        <img key={index} src={image} alt="" />
                                    ))}
                                </Slider>
                                </div>   

                    <div className="small-gallery-container">
                        <div className="gallery-content">
                            <div className="gallery-text5">
                                <h2>VPORTFOLIO</h2>
                                <h3>Summary</h3>
                                <p>
                                The Portfolio Website is a personal web-based application designed to showcase your personal and professional information, projects, and skills. It provides a platform to display project details with screenshots and interactive features to engage visitors.
                                </p>  

                                <p>
                                This project, <b>Structural Design Automation System</b>, showcases my proficiency in <b>GUI development</b> using <b>JavaFX</b> and handling <b>REST APIs</b> for real-time graphical rendering on a dynamic canvas. I developed a secure <b>User Management</b> system integrated with <b>MongoDB</b> for storing and managing user profiles and project data, while implementing <b>forgot password recovery</b> through an email service. The project features intuitive input/output interfaces, allowing users to dynamically generate visual and textual design outputs. Additionally, I utilized <b>Apache POI</b> and <b>iText</b> for generating comprehensive reports in both .txt and .pdf formats. The integration of these technologies enhanced my skills in modern <b>UI design</b>, real-time data handling, and efficient report generation.
                                </p> 

                            </div>
   
                    
                           <div className="gallery-images">
                                <div className="image-row">
                                 
                               <div className="image-item" >
                                   <img src="https://www.shutterstock.com/image-vector/management-icon-teamwork-business-team-600nw-1051689107.jpg" alt="User Management" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '10px' }} />
                                   <div>
                                       <b>Personal Information</b>   
                                       <p>A section to display your personal details, including your bio, skills, and contact information.</p>
                                   </div>
                                   
                               </div>
                               <div className="image-item">
                                    <img src="https://friconix.com/png/fi-xnluxx-gui.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '5px' }} />
                                   <div>
                                       <b>Projects Showcase</b> 
                                       <p>Sections to highlight your personal and professional projects with descriptions and screenshots.</p>
                                   </div>
                                   
                               </div>
                                </div>
                                <div className="image-row">
                                    
                                <div className="image-item">
                                        <img src="https://cdn-icons-png.flaticon.com/512/73/73812.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '5px' }} />
                                    <div>
                                        <b>Interactive Elements</b> 
                                        <p>Utilizes Framer Motion for interactive animations and transitions, enhancing the user experience.</p>
                                    </div>
                                    
                                </div>
                                <div className="image-item">
                                    <img src="https://png.pngtree.com/png-clipart/20230427/original/pngtree-data-management-line-icon-png-image_9117318.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '5px' }} />
                                    <div>
                                        <b>Contact Form</b>
                                        <p>Integrated contact form using Nodemailer for sending emails directly from the website.</p>
                                    </div>
                                    
                                </div>
                                </div>
                                <div className="experience">
                                <div className="experience-text">
        
                                    <img src="https://cdn-icons-png.flaticon.com/512/3460/3460831.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '10px' }} />
                                    <div>
                                        <b>Modern Design</b> 
                                        <p>A sleek and responsive design using React, HTML, and CSS to ensure a seamless user experience across devices.</p>
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
                             <h2>VPORTFOLIO</h2>

                             {/* <div class="slider-container">
                                <Slider {...settings}>
                                    {items[4].images.map((image, index) => (
                                        <img key={index} src={image} alt="" />
                                    ))}
                                </Slider>
                             </div>    */}

                             <h3>Summary</h3>
                             <p>
                                The Portfolio Website is a personal web-based application designed to showcase your personal and professional information, projects, and skills. It provides a platform to display project details with screenshots and interactive features to engage visitors.
                             </p> 

                             <p>
                             This project, <b>Structural Design Automation System</b>, showcases my proficiency in <b>GUI development</b> using <b>JavaFX</b> and handling <b>REST APIs</b> for real-time graphical rendering on a dynamic canvas. I developed a secure <b>User Management</b> system integrated with <b>MongoDB</b> for storing and managing user profiles and project data, while implementing <b>forgot password recovery</b> through an email service. The project features intuitive input/output interfaces, allowing users to dynamically generate visual and textual design outputs. Additionally, I utilized <b>Apache POI</b> and <b>iText</b> for generating comprehensive reports in both .txt and .pdf formats. The integration of these technologies enhanced my skills in modern <b>UI design</b>, real-time data handling, and efficient report generation.
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

                            <div className="image-item" >
                                <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
                                    alt="React" 
                                    style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '5px' }} 
                                />
                                <div>
                                    <b>Javascript</b>   
                                    <p>for implementing the pathfinding algorithms.</p>
                                </div>
                                
                            </div>
                          </div>
                      
                         <div className="image-row">
                              
                               <div className="image-item">
                                  <img 
                                    src="https://cdn.sanity.io/images/ss02266c/production/f8270046c337979534b32edb529a2c9603765955-64x64.svg" 
                                    alt="HTML,CSS,SCSS,TAILWIND" 
                                    style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} 
                                    />
                                    <div>
                                        <b>HTML & CSS</b>
                                        <p>for frontend UI.</p>
                                    </div>
                                
                                </div>
                    
                        </div>
                         
                        </div>
                       
                      </div>
                    </div>


                </motion.div>
            )}
          
            {activeTab === 'ExpenseTracker' && (
                  <motion.div 
                class="ui-container"
                variants={textVariants}
                initial="initial"
                whileInView="animate"
                >
        
                    <div class="slider-container">
                                <Slider {...settings}>
                                    {items[5].images.map((image, index) => (
                                        <img key={index} src={image} alt="" />
                                    ))}
                                </Slider>
                    </div> 

                    <div className="small-gallery-container">
                        <div className="gallery-content">
                            <div className="gallery-text5">
                            <h2>EXPENSE TRACKER</h2>
                             
                             <h3>Summary</h3>
                             <p>
                             Expense Tracker is a web-based application designed to help users manage and track their expenses efficiently. Built with a modern and user-friendly interface, this system allows users to log in, input their expenses, and retrieve their data at any time.
                             </p> 

                             <button class="visit-website-btn" onClick={() => window.open('https://expense-v-tracker.netlify.app/', '_blank')}>
                                Visit Website
                                </button>

                                <p>
                                This project, <b>Structural Design Automation System</b>, showcases my proficiency in <b>GUI development</b> using <b>JavaFX</b> and handling <b>REST APIs</b> for real-time graphical rendering on a dynamic canvas. I developed a secure <b>User Management</b> system integrated with <b>MongoDB</b> for storing and managing user profiles and project data, while implementing <b>forgot password recovery</b> through an email service. The project features intuitive input/output interfaces, allowing users to dynamically generate visual and textual design outputs. Additionally, I utilized <b>Apache POI</b> and <b>iText</b> for generating comprehensive reports in both .txt and .pdf formats. The integration of these technologies enhanced my skills in modern <b>UI design</b>, real-time data handling, and efficient report generation.
                                </p> 

                            </div>
   
                    

                           <div className="gallery-images">
                                <div className="image-row">
                                 
                               <div className="image-item" >
                                   <img src="https://www.shutterstock.com/image-vector/management-icon-teamwork-business-team-600nw-1051689107.jpg" alt="User Management" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '10px' }} />
                                   <div>
                                       <b>User Management</b>   
                                       <p>Secure login system to store and retrieve user profiles and their associated expenses.</p>
                                   </div>
                                   
                               </div>
                               <div className="image-item">
                                    <img src="https://friconix.com/png/fi-xnluxx-gui.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '5px' }} />
                                   <div>
                                       <b>Expense Management</b> 
                                       <p>Intuitive forms for users to input expense details, including date, category, amount, and description.</p>
                                   </div>
                                   
                               </div>
                                </div>
                                <div className="image-row">
                                    
                                <div className="image-item">
                                        <img src="https://cdn-icons-png.flaticon.com/512/73/73812.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '5px' }} />
                                    <div>
                                        <b>Expense Retrieval</b> 
                                        <p>Users can view and retrieve their past expenses after logging in.</p>
                                    </div>
                                    
                                </div>
                                <div className="image-item">
                                    <img src="https://png.pngtree.com/png-clipart/20230427/original/pngtree-data-management-line-icon-png-image_9117318.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '5px' }} />
                                    <div>
                                        <b>Data Storage</b>
                                        <p>Uses JSON Server to store user data and expenses, ensuring easy data management and retrieval.</p>
                                    </div>
                                    
                                </div>
                                </div>
                                <div className="experience">
                                <div className="experience-text">
        
                                    <img src="https://cdn-icons-png.flaticon.com/512/3460/3460831.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '10px' }} />
                                    <div>
                                        <b>Modern Design</b> 
                                        <p>A sleek and responsive design using React, HTML, and CSS to ensure a seamless user experience across devices.</p>
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
                             <h2>EXPENSE TRACKER</h2>
                             
                             <h3>Summary</h3>
                             <p>
                             Expense Tracker is a web-based application designed to help users manage and track their expenses efficiently. Built with a modern and user-friendly interface, this system allows users to log in, input their expenses, and retrieve their data at any time.
                             </p> 

                             <button class="visit-website-btn" onClick={() => window.open('https://expense-v-tracker.netlify.app/', '_blank')}>
                                Visit Website
                                </button>

                             <p>
                             This project, <b>Structural Design Automation System</b>, showcases my proficiency in <b>GUI development</b> using <b>JavaFX</b> and handling <b>REST APIs</b> for real-time graphical rendering on a dynamic canvas. I developed a secure <b>User Management</b> system integrated with <b>MongoDB</b> for storing and managing user profiles and project data, while implementing <b>forgot password recovery</b> through an email service. The project features intuitive input/output interfaces, allowing users to dynamically generate visual and textual design outputs. Additionally, I utilized <b>Apache POI</b> and <b>iText</b> for generating comprehensive reports in both .txt and .pdf formats. The integration of these technologies enhanced my skills in modern <b>UI design</b>, real-time data handling, and efficient report generation.
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
                                    src="./reactl.png" 
                                    alt="React" 
                                    style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '5px' }} 
                                />
                                <div>
                                    <b>React</b>   
                                    <p>for building the frontend web application.</p>
                                </div>
                                
                            </div>

                            <div className="image-item" >
                                <img 
                                    src="./JavaScriptl.png" 
                                    alt="React" 
                                    style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '5px' }} 
                                />
                                <div>
                                    <b>Javascript</b>   
                                    <p>for implementing the pathfinding algorithms.</p>
                                </div>
                                
                            </div>
                          </div>
                      
                         <div className="image-row">

                                <div className="image-item">
                                  <img 
                                    src="./reactrouterl.png" 
                                    alt="HTML,CSS,SCSS,TAILWIND" 
                                    style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} 
                                    />
                                    <div>
                                        <b>React Router</b>
                                        <p>for handling client-side routing and navigation within the web application.</p>
                                    </div>
                                
                                </div>
                              
                               <div className="image-item">
                                  <img 
                                    src="./csshtml.png" 
                                    alt="HTML,CSS,SCSS,TAILWIND" 
                                    style={{ width: '54px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} 
                                    />
                                    <div>
                                        <b>HTML & CSS</b>
                                        <p>for frontend UI.</p>
                                    </div>
                                
                                </div>
                    
                        </div>
                         
                        </div>
                       
                      </div>
                    </div>

               
                </motion.div>
            )}

            {activeTab === 'FilmBook' && (
                 <motion.div 
                class="ui-container"
                variants={textVariants}
                initial="initial"
                whileInView="animate"
                >
        
                    <div class="slider-container">
                                <Slider {...settings}>
                                    {items[6].images.map((image, index) => (
                                        <img key={index} src={image} alt="" />
                                    ))}
                                </Slider>
                    </div>

                    <div className="small-gallery-container">
                        <div className="gallery-content">
                            <div className="gallery-text5">
                            <h2>FILMBOOK</h2>
                             
                             <h3>Summary</h3>
                             <p>
                             The Filmbook project is a highly responsive, real-time movie ticket booking platform designed to handle large-scale traffic while providing a seamless user experience. The platform is built using modern technologies like <b>React</b> for the frontend, ensuring sleek and responsive design, and <b>Spring Boot</b> in the backend to provide scalable, high-performance microservices architecture. To ensure real-time seat availability, <b>WebSocket</b> is used, and <b>state management</b> is efficiently handled using <b>Redux toolkit</b>, ensuring smooth interactions and data consistency across the system. A secure <b>User Management</b> system is integrated using MongoDB for storage, supporting login and profile management functionalities. Payment processing features are also integrated with retry mechanisms for failed transactions, along with a QR code-based e-ticket system for easy verification.
                             This was designed with a robust architecture to handle high traffic and ensure seamless user experience. The platform leverages modern technologies to offer secure authentication, efficient state management, real-time seat updates, and scalable backend services.
                             </p> 

                             <div class="progress-label">
                                <span class="progress-text">Currently in Progress</span>
                            </div>

                                <button class="visit-website-btn" onClick={() => window.open('https://filmpire-v.netlify.app/', '_blank')}>
                                Visit Website
                                </button>

                            </div>
   
                           <div className="gallery-images">
                                <div className="image-row">
                                 
                               <div className="image-item" >
                                   <img src="./userman.png" alt="User Management" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '10px' }} />
                                   <div>
                                       <b>User Management</b>   
                                       <p>Secure <span style={{ color: 'green', fontWeight: 'bold' }}>login system</span> to store and retrieve user profiles and their associated account details.</p>
                                   </div>
                                   
                               </div>
                               <div className="image-item">
                                    <img src="./realtimeseatupdates.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '5px' }} />
                                   <div>
                                       <b>Real-Time Seat Updates</b> 
                                       <p>The system provides <span style={{ color: 'green', fontWeight: 'bold' }}>real-time updates on seat availability</span> using <span style={{ color: 'green', fontWeight: 'bold' }}>websocket</span> to ensure accurate booking information.</p>
                                   </div>
                                   
                               </div>
                                </div>
                                <div className="image-row">
                                    
                                <div className="image-item">
                                        <img src="./dataman.png" alt="JavaFX" style={{ width: '40px', height: '40px', verticalAlign: 'middle', marginRight: '5px' }} />
                                    <div>
                                        <b>Efficient data Management</b> 
                                        <p>Utilizes advanced <span style={{ color: 'green', fontWeight: 'bold' }}>state management</span> and <span style={{ color: 'green', fontWeight: 'bold' }}>Redux toolkit</span> techniques to ensure smooth user interactions and data consistency.</p>
                                    </div>
                                    
                                </div>
                                <div className="image-item">
                                    <img src="./scalablebackend.png" alt="JavaFX" style={{ width: '40px', height: '40px', verticalAlign: 'middle', marginRight: '5px' }} />
                                    <div>
                                        <b>Scalable Backend</b>
                                        <p>The backend services using Spring Boot are designed to handle high traffic and scale according to demand by following <span style={{ color: 'green', fontWeight: 'bold' }}>Microservices architecture</span>.</p>
                                    </div>
                                    
                                </div>
                                </div>

                                <div className="image-row">
                                    
                                <div className="image-item">
                                        <img src="./payment.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '5px' }} />
                                    <div>
                                        <b>Payment Integration and Retry mechanism</b> 
                                        <p>integrated payment for movie tickets in <span style={{ color: 'green', fontWeight: 'bold' }}>payment service providers</span> and includes <span style={{ color: 'green', fontWeight: 'bold' }}>Payment failure retry mecahnism</span> if anything goes wrong while transacting.</p>
                                    </div>
                                    
                                </div>
                                <div className="image-item">
                                    <img src="./Responsive.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '10px' }} />
                                    <div>
                                        <b>Responsive Design</b> 
                                        <p>A<span style={{ color: 'green', fontWeight: 'bold' }}> sleek and responsive design </span>using React, HTML, and CSS to ensure a seamless user experience across devices.</p>
                                    </div>
                                    
                                </div>
                                </div>             
                                <div className="experience">
                                <div className="experience-text">
        
                                    <img src="./gmail.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '10px' }} />
                                    <div>
                                        <b>Notification Service</b> 
                                        <p>Able to generate movie ticket after successful payment as <span style={{ color: 'green', fontWeight: 'bold' }}>QR code</span> and it will be sent as <span style={{ color: 'green', fontWeight: 'bold' }}> E-ticket mail as a confirmation</span>.</p>
                                    </div>
                                </div>
                                    
                                </div>
                           </div>

                           <div className="gallery-text">
                             <h2>FILMBOOK</h2>
                             
                             <h3>Summary</h3>
                             <p>
                             The Filmbook project is a highly responsive, real-time movie ticket booking platform designed to handle large-scale traffic while providing a seamless user experience. The platform is built using modern technologies like <b>React</b> for the frontend, ensuring sleek and responsive design, and <b>Spring Boot</b> in the backend to provide scalable, high-performance microservices architecture. To ensure real-time seat availability, <b>WebSocket</b> is used, and <b>state management</b> is efficiently handled using <b>Redux toolkit</b>, ensuring smooth interactions and data consistency across the system. A secure <b>User Management</b> system is integrated using MongoDB for storage, supporting login and profile management functionalities. Payment processing features are also integrated with retry mechanisms for failed transactions, along with a QR code-based e-ticket system for easy verification.
                             This was designed with a robust architecture to handle high traffic and ensure seamless user experience. The platform leverages modern technologies to offer secure authentication, efficient state management, real-time seat updates, and scalable backend services.
                             </p> 

                             <div class="progress-label">
                                <span class="progress-text">Currently in Progress</span>
                            </div>

                             <button class="visit-website-btn" onClick={() => window.open('https://filmpire-v.netlify.app/', '_blank')}>
                            Visit Website
                            </button>
                               
                           </div>

                        </div>
                    </div>
       
                    <div className="small-gallery-container">
                      <div className="gallery-content">
                        <div className="gallery-images">
                            <div className="image-row">
                              
                            <div className="image-item" >
                                <img 
                                    src="./reactl.png" 
                                    alt="React" 
                                    style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '5px' }} 
                                />
                                <div>
                                    <b>React</b>   
                                    <p>for building the frontend web application.</p>
                                </div>
                                
                            </div>

                            <div className="image-item" >
                                <img 
                                    src="./JavaScriptl.png" 
                                    alt="React" 
                                    style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '5px' }} 
                                />
                                <div>
                                    <b>Javascript</b>   
                                    <p>for implementing the pathfinding algorithms.</p>
                                </div>
                                
                            </div>
                          </div>
                      
                         <div className="image-row">

                                <div className="image-item">
                                  <img 
                                    src="./reactrouterl.png" 
                                    alt="HTML,CSS,SCSS,TAILWIND" 
                                    style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} 
                                    />
                                    <div>
                                        <b>React Router</b>
                                        <p>for handling client-side routing and navigation within the web application.</p>
                                    </div>
                                
                                </div>
                              
                               <div className="image-item">
                                  <img 
                                    src="./csshtml.png" 
                                    alt="HTML,CSS,SCSS,TAILWIND" 
                                    style={{ width: '54px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} 
                                    />
                                    <div>
                                        <b>HTML & CSS</b>
                                        <p>for frontend UI.</p>
                                    </div>
                                
                                </div>
                    
                        </div>
                         
                        </div>
                       
                      </div>
                    </div> 

  
                </motion.div>
            )}

            {activeTab === 'VKANBAN' && (
                 <motion.div 
                class="ui-container"
                variants={textVariants}
                initial="initial"
                whileInView="animate"
                >
           
                    <div class="slider-container">
                            <Slider {...settings}>
                                {items[2].images.map((image, index) => (
                                    <img key={index} src={image} alt="" />
                                ))}
                            </Slider>
                    </div>
                    <h2 style={{ marginTop: '20px' }}>VKANBAN</h2>
    
                    <button class="visit-website-btn" onClick={() => window.open('https://varunnlv.github.io/vprojecttracker/', '_blank')}>
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

         
                </motion.div>
            )}

            {activeTab === 'more' && (
                 <motion.div 
                class="ui-container"
                variants={textVariants}
                initial="initial"
                whileInView="animate"
                >

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
                                <button class="visit-website-btn" onClick={() => window.open('https://varunnlv.github.io/vflex/', '_blank')}>
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
                        <button class="visit-website-btn" onClick={() => window.open('https://varunnlv.github.io/vflex/', '_blank')}>
                                Visit Website
                                </button>
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

             
                </motion.div>
            )}

            {activeTab === 'more' && (
                 <motion.div 
                class="ui-container"
                variants={textVariants}
                initial="initial"
                whileInView="animate"
                >

                    <div class="slider-container">
                            <Slider {...settings}>
                                {items[1].images.map((image, index) => (
                                    <img key={index} src={image} alt="" />
                                ))}
                            </Slider>
                    </div>

                    <h2 style={{ marginTop: '20px' }}>VGRID</h2>

                    <button class="visit-website-btn" onClick={() => window.open('https://varunnlv.github.io/vgrid/', '_blank')}>
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

                </motion.div>
            )}

        </motion.div>
    );
};

export default Portfolio;




