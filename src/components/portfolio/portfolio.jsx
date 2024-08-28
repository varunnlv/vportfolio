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
            "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            // Add more image URLs as needed
        ],
        desc: "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
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

                <h2>{items[0].title}</h2>

                 <div id="projectSectionh1" className="projectdata hidden fade-in-top" style={{ marginTop: '20px' }}>
                    <h3>Summary</h3>
                    <p className="card-text" >
                        The Structural Design Automation System is an innovative project aimed at revolutionizing the traditional design procedures for structural items. This system provides a modern, user-friendly GUI with User Management that automates the design process, enhancing efficiency and accuracy and generating reports in different file formats.
                    </p>
                    
                    <h3 style={{ marginTop: '20px' }}>Features</h3>
                    <ul style={{ marginTop: '20px' }}>
                        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                            <img src="https://www.shutterstock.com/image-vector/management-icon-teamwork-business-team-600nw-1051689107.jpg" alt="User Management" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '10px' }} />
                            <div>
                                <b>User Management:</b> Secure <span style={{ color: 'green', fontWeight: 'bold' }}>login</span> and <span style={{ color: 'green', fontWeight: 'bold' }}>registration</span> system for storage and retrieval of user profiles and project data using MongoDB, along with a <span style={{ color: 'green', fontWeight: 'bold' }}>forgot password service</span> to ensure account recovery and accessibility.
                            </div>
                        </li>
            
                        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                            <img src="https://friconix.com/png/fi-xnluxx-gui.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '5px' }} />
                            <div>
                                <b>Input/Output Interface:</b> Intuitive forms for users to input design parameters and dynamically generate <span style={{ color: 'green', fontWeight: 'bold' }}>visual and textual outputs</span>.
                            </div>
                        </li>
            
                        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                            <img src="https://cdn-icons-png.flaticon.com/512/73/73812.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '5px' }} />
                            <div>
                                <b>Dynamic Canvas:</b> A <span style={{ color: 'green', fontWeight: 'bold' }}>graphical canvas</span> that displays real-time, dynamic drawings based on user inputs, allowing for immediate visual feedback.
                            </div>
                        </li>
            
                        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                            <img src="https://png.pngtree.com/png-clipart/20230427/original/pngtree-data-management-line-icon-png-image_9117318.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '5px' }} />
                            <div>
                                <b>Data Management:</b> Capability to save input data and user sessions, ensuring continuity and ease of use.
                            </div>
                        </li>
            
                        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                            <img src="https://cdn-icons-png.flaticon.com/512/3460/3460831.png" alt="JavaFX" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '10px' }} />
                            <div>
                                <b>Output Formats:</b> Ability to export design outputs as <span style={{ color: 'green', fontWeight: 'bold' }}>bitmaps for graphical representation</span> and <span style={{ color: 'green', fontWeight: 'bold' }}>text reports in both .txt and .pdf formats</span> for comprehensive documentation.
                            </div>
                        </li>
                    </ul>
            
                    <h3 style={{ marginTop: '20px' }}>Technologies Used</h3>
                    <ul style={{ marginTop: '20px' }}>
                        <li style={{ display: 'flex', alignItems: 'center' }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/JavaFX_text_logo.png" alt="JavaFX" style={{ width: '80px', height: '54px', verticalAlign: 'middle', marginRight: '5px' }} />
                            <div>
                                <b>JavaFX</b> for GUI design and development.
                            </div>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center' }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" alt="JavaFX" style={{ width: '80px', height: '54px', verticalAlign: 'middle', marginRight: '5px' }} />
                            <div>
                                <b>MongoDB</b> NoSQL database for storing user data and project data.
                            </div>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center' }}>
                            <img src="https://cdn.sanity.io/images/ss02266c/production/806fba67631087cd76ed2a963210feadd164c7fa-64x64.svg" alt="JavaFX" style={{ width: '80px', height: '54px', verticalAlign: 'middle', marginRight: '5px' }} />
                            <div>
                                <b>Redis</b> for distributed caching.
                            </div>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center' }}>
                            <img src="https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png" alt="JavaFX" style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} />
                            <div>
                                <b>Email Service</b> for forgot password recovery.
                            </div>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center' }}>
                            <img src="https://cdn-icons-png.flaticon.com/512/337/337946.png" alt="JavaFX" style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} />
                            <div>
                                <b>Apache POI and iText</b> for generating .txt and .pdf reports.
                            </div>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center' }}>
                            <img src="https://cdn-icons-png.flaticon.com/512/73/73812.png" alt="JavaFX" style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} />
                            <div>
                                <b>JavaFX Drawing APIs</b> for rendering real-time graphical outputs on the canvas.
                            </div>
                        </li>
                    </ul>
                </div>               
            </div>

            <hr style={{ marginTop: '20px', marginBottom: '20px'}}/>

             <h2>Stand Alone Project 2 </h2>

             <div id="projectSectionh2" className="hidden fade-in-top" style={{ marginTop: '20px' }}>
                 
                <h3>Summary</h3>
                <p className="card-text">
                    The Structural Design Automation System is an innovative project aimed at revolutionizing the traditional design procedures for structural items. This system provides a modern, user-friendly GUI with User Management that automates the design process, enhancing efficiency and accuracy and generating reports in different file formats.
                </p>
        
                <h3 style={{ marginTop: '20px' }}>Features</h3>
                <ul style={{ marginTop: '20px' }}>
                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <img src="https://www.shutterstock.com/image-vector/management-icon-teamwork-business-team-600nw-1051689107.jpg" alt="User Management" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '10px' }} />
                        <div>
                            <b>User Management:</b> Secure <span style={{ color: 'green', fontWeight: 'bold' }}>login</span> and <span style={{ color: 'green', fontWeight: 'bold' }}>registration</span> system for storage and retrieval of user profiles and project data using MongoDB, along with a <span style={{ color: 'green', fontWeight: 'bold' }}>forgot password service</span> to ensure account recovery and accessibility.
                        </div>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <img src="https://friconix.com/png/fi-xnluxx-gui.png" alt="Input/Output Interface" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '5px' }} />
                        <div>
                            <b>Input/Output Interface:</b> Intuitive forms for users to input design parameters and dynamically generate <span style={{ color: 'green', fontWeight: 'bold' }}>visual and textual outputs</span>.
                        </div>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <img src="https://cdn-icons-png.flaticon.com/512/73/73812.png" alt="Dynamic Canvas" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '5px' }} />
                        <div>
                            <b>Dynamic Canvas:</b> A <span style={{ color: 'green', fontWeight: 'bold' }}>graphical canvas</span> that displays real-time, dynamic drawings based on user inputs, allowing for immediate visual feedback.
                        </div>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <img src="https://png.pngtree.com/png-clipart/20230427/original/pngtree-data-management-line-icon-png-image_9117318.png" alt="Data Management" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '5px' }} />
                        <div>
                            <b>Data Management:</b> Capability to save input data and user sessions, ensuring continuity and ease of use.
                        </div>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <img src="https://www.opc-router.de/wp-content/uploads/2020/05/REST_socialmedia.jpg" alt="API Management" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '5px' }} />
                        <div>
                            <b>Api Management:</b> Ability to export design outputs as <span style={{ color: 'green', fontWeight: 'bold' }}>bitmaps for graphical representation</span> and <span style={{ color: 'green', fontWeight: 'bold' }}>text reports in both .txt and .pdf formats</span> for comprehensive documentation.
                        </div>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <img src="https://cdn-icons-png.flaticon.com/512/3460/3460831.png" alt="Output Formats" style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '10px' }} />
                        <div>
                            <b>Output Formats:</b> Ability to export design outputs as <span style={{ color: 'green', fontWeight: 'bold' }}>bitmaps for graphical representation</span> and <span style={{ color: 'green', fontWeight: 'bold' }}>text reports in both .txt and .pdf formats</span> for comprehensive documentation.
                        </div>
                    </li>
                </ul>
        
                <h3 style={{ marginTop: '20px' }}>Technologies Used</h3>
                <ul style={{ marginTop: '20px' }}>
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/JavaFX_text_logo.png" alt="JavaFX" style={{ width: '80px', height: '54px', verticalAlign: 'middle', marginRight: '5px' }} />
                        <div>
                            <b>JavaFX</b> for GUI design and development.
                        </div>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" alt="MongoDB" style={{ width: '80px', height: '54px', verticalAlign: 'middle', marginRight: '5px' }} />
                        <div>
                            <b>MongoDB</b> NoSQL database for storing user data and project data.
                        </div>
                    </li>
              
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png" alt="Email Service" style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} />
                        <div>
                            <b>Email Service</b> for forgot password recovery.
                        </div>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="https://cdn-icons-png.flaticon.com/512/337/337946.png" alt="Apache POI and iText" style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} />
                        <div>
                            <b>Apache POI and iText</b> for generating .txt and .pdf reports.
                        </div>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="https://cdn-icons-png.flaticon.com/512/73/73812.png" alt="JavaFX Drawing APIs" style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} />
                        <div>
                            <b>JavaFX Drawing APIs</b> for rendering real-time graphical outputs on the canvas.
                        </div>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="https://www.opc-router.de/wp-content/uploads/2020/05/REST_socialmedia.jpg" alt="REST API" style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} />
                        <div>
                            <b>Rest Api</b> for rendering real-time graphical outputs on the canvas.
                        </div>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png" alt="Spring Boot" style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} />
                        <div>
                            <b>Spring Boot</b> for rendering real-time graphical outputs on the canvas.
                        </div>
                    </li>
                </ul>
            </div>
            <hr style={{ marginTop: '20px', marginBottom: '20px'}}/>

            <h2>Web Based Project</h2>


            <div id="projectSectionh3" className="hidden fade-in-top" style={{ marginTop: '20px' }}>
                <h3 style={{ marginTop: '20px' }}>Summary</h3>

                <p className="card-text">
                    The Structural Design Automation System is an innovative project aimed at revolutionizing the traditional design procedures for structural items. This system provides a modern, user-friendly web interface with User Management that automates the design process, enhancing efficiency and accuracy, and generating reports in different file formats.
                </p>
                
                <h3 style={{ marginTop: '20px' }}>Features</h3>
                
                <ul style={{ marginTop: '20px' }}>
                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <img 
                            src="https://www.shutterstock.com/image-vector/management-icon-teamwork-business-team-600nw-1051689107.jpg" 
                            alt="User Management" 
                            style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '10px' }} 
                        />
                        <div>
                            <b>User Management:</b> Secure <span style={{ color: 'green', fontWeight: 'bold' }}>login</span> and <span style={{ color: 'green', fontWeight: 'bold' }}>registration</span> system for storage and retrieval of user profiles and project data using MongoDB, along with a <span style={{ color: 'green', fontWeight: 'bold' }}>forgot password service</span> to ensure account recovery and accessibility.
                        </div>
                    </li>
                
                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <img 
                            src="https://friconix.com/png/fi-xnluxx-gui.png" 
                            alt="JavaFX" 
                            style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '5px' }} 
                        />
                        <div>
                            <b>Input/Output Interface:</b> Intuitive forms for users to input design parameters and dynamically generate <span style={{ color: 'green', fontWeight: 'bold' }}>visual and textual outputs</span>.
                        </div>
                    </li>
                
                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/73/73812.png" 
                            alt="JavaFX" 
                            style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '5px' }} 
                        />
                        <div>
                            <b>Dynamic Canvas:</b> A <span style={{ color: 'green', fontWeight: 'bold' }}>graphical canvas</span> that displays real-time, dynamic drawings based on user inputs, allowing for immediate visual feedback.
                        </div>
                    </li>
                
                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <img 
                            src="https://png.pngtree.com/png-clipart/20230427/original/pngtree-data-management-line-icon-png-image_9117318.png" 
                            alt="JavaFX" 
                            style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '5px' }} 
                        />
                        <div>
                            <b>Data Management:</b> Capability to save input data and user sessions, ensuring continuity and ease of use.
                        </div>
                    </li>
                
                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <img 
                            src="https://www.opc-router.de/wp-content/uploads/2020/05/REST_socialmedia.jpg" 
                            alt="JavaFX" 
                            style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '5px' }} 
                        />
                        <div>
                            <b>Api Management:</b> Ability to export design outputs as <span style={{ color: 'green', fontWeight: 'bold' }}>bitmaps for graphical representation</span> and <span style={{ color: 'green', fontWeight: 'bold' }}>text reports in both .txt and .pdf formats</span> for comprehensive documentation.
                        </div>
                    </li>
                
                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/3460/3460831.png" 
                            alt="JavaFX" 
                            style={{ width: '50px', height: '44px', verticalAlign: 'middle', marginRight: '10px' }} 
                        />
                        <div>
                            <b>Output Formats:</b> Ability to export design outputs as <span style={{ color: 'green', fontWeight: 'bold' }}>bitmaps for graphical representation</span> and <span style={{ color: 'green', fontWeight: 'bold' }}>text reports in both .txt and .pdf formats</span> for comprehensive documentation.
                        </div>
                    </li>
                </ul>


                <h3 style={{ marginTop: '20px' }}>Technologies Used</h3>
                <ul style={{ marginTop: '20px' }}>
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
                            alt="React" 
                            style={{ width: '80px', height: '54px', verticalAlign: 'middle', marginRight: '5px' }} 
                        />
                        <div>
                            <b>React</b> for building the frontend web application.
                        </div>
                    </li>
                
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" 
                            alt="MongoDB" 
                            style={{ width: '80px', height: '54px', verticalAlign: 'middle', marginRight: '5px' }} 
                        />
                        <div>
                            <b>MongoDB</b> NoSQL database for storing user data and project data.
                        </div>
                    </li>
                
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        <img 
                            src="https://cdn.sanity.io/images/ss02266c/production/806fba67631087cd76ed2a963210feadd164c7fa-64x64.svg" 
                            alt="Redis" 
                            style={{ width: '80px', height: '54px', verticalAlign: 'middle', marginRight: '5px' }} 
                        />
                        <div>
                            <b>Redis</b> for distributed caching.
                        </div>
                    </li>
                
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        <img 
                            src="https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png" 
                            alt="Email Service" 
                            style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} 
                        />
                        <div>
                            <b>Email Service</b> for forgot password recovery.
                        </div>
                    </li>
                
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/337/337946.png" 
                            alt="Apache POI and iText" 
                            style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} 
                        />
                        <div>
                            <b>Apache POI and iText</b> for generating .txt and .pdf reports.
                        </div>
                    </li>
                
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/73/73812.png" 
                            alt="JavaFX Drawing APIs" 
                            style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} 
                        />
                        <div>
                            <b>JavaFX Drawing APIs</b> for rendering real-time graphical outputs on the canvas.
                        </div>
                    </li>
                
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        <img 
                            src="https://www.opc-router.de/wp-content/uploads/2020/05/REST_socialmedia.jpg" 
                            alt="Rest API" 
                            style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} 
                        />
                        <div>
                            <b>Rest API</b> for rendering real-time graphical outputs on the canvas.
                        </div>
                    </li>
                
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        <img 
                            src="https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png" 
                            alt="Spring Boot REST API" 
                            style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} 
                        />
                        <div>
                            <b>Spring Boot REST API</b> Instead of using JDBC, a Spring Boot REST API approach is adopted for backend database connections.
                        </div>
                    </li>
                
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        <img 
                            src="https://cdn.sanity.io/images/ss02266c/production/f8270046c337979534b32edb529a2c9603765955-64x64.svg" 
                            alt="HTML,CSS,SCSS,TAILWIND" 
                            style={{ width: '60px', height: '54px', verticalAlign: 'middle', marginRight: '25px' }} 
                        />
                        <div>
                            <b>HTML,CSS,SCSS,TAILWIND</b> for frontend UI.
                        </div>
                    </li>
                </ul>
            
            </div>

            <hr style={{ marginTop: '20px', marginBottom: '20px'}}/>

            <div class="slider-container">
                    <Slider {...settings}>
                        {items[0].images.map((image, index) => (
                            <img key={index} src={image} alt="" />
                        ))}
                    </Slider>
            </div>
            <h2 style={{ marginTop: '20px' }}>VFLEX</h2>
            <div id="projectSectionh4" className="hidden fade-in-top" style={{ marginTop: '20px' }}>
                <h3 style={{ marginTop: '20px' }}>Summary</h3>
                <p className="card-text">
                    VFLEX is a Static UI website designed to practice and demonstrate the Flexbox layout concept. It allows users to dynamically add cards with their own descriptions and headings, which are arranged using Flexbox. The site is responsive, with each card featuring a randomly assigned color.
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
                            <b>Flexbox Layout:</b> Cards are arranged using the Flexbox layout, demonstrating various Flexbox properties and behaviors.
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
            <hr style={{ marginTop: '20px', marginBottom: '20px'}}/>




            
            <div class="slider-container">
                    <Slider {...settings}>
                        {items[0].images.map((image, index) => (
                            <img key={index} src={image} alt="" />
                        ))}
                    </Slider>
            </div>
            <h2 style={{ marginTop: '20px' }}>VGRID</h2>
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
            <hr style={{ marginTop: '20px', marginBottom: '20px'}}/>



            
            <div class="slider-container">
                    <Slider {...settings}>
                        {items[0].images.map((image, index) => (
                            <img key={index} src={image} alt="" />
                        ))}
                    </Slider>
            </div>
            <h2 style={{ marginTop: '20px' }}>VKANBAN</h2>
            
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

        <hr style={{ marginTop: '20px', marginBottom: '20px'}}/>

        <div class="slider-container">
                    <Slider {...settings}>
                        {items[0].images.map((image, index) => (
                            <img key={index} src={image} alt="" />
                        ))}
                    </Slider>
        </div>        
        <h2 style={{ marginTop: '20px' }}>VPORTFOLIO</h2>
        <div id="projectSectionh7" className="hidden fade-in-top" style={{ marginTop: '20px' }}>
            <h3 style={{ marginTop: '20px' }}>Summary</h3>
            <p className="card-text">
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
