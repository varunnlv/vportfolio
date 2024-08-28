import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";
import Slider from "react-slick";

const items = [
    {
        id: 1,
        title: "Stand Alone Project 1",
        images: [
            "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
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

            <div class="ui-container">
                <div class="slider-container">
                    <Slider {...settings}>
                        {items[0].images.map((image, index) => (
                            <img key={index} src={image} alt="" />
                        ))}
                    </Slider>
                </div>
                <h2>{items[0].title}</h2>

                 <div class="projectdata hidden fade-in-top" style="margin-top: 20px;">
                                        <h6>Summary</h6>
                                        <p class="card-text">
                                            The Structural Design Automation System is an innovative project aimed at revolutionizing the traditional design procedures for structural items. This system provides a modern, user-friendly GUI with User Management that automates the design process, enhancing efficiency and accuracy and generating reports in different file formats.
                                        </p>
                                        
                                        <h6>Features</h6>
                                        <ul>
                                           <li style="display: flex; align-items: center; margin-bottom:5px">
                                                <img src="https://www.shutterstock.com/image-vector/management-icon-teamwork-business-team-600nw-1051689107.jpg" alt="User Management" style="width: 50px; height: 44px; vertical-align: middle;  margin-right: 10px;"/>
                                                <div>
                                                    <b>User Management:</b> Secure <span style="color:green; font-weight: bold;">login</span> and <span style="color:green; font-weight: bold;">registration</span> system for storage and retrieval of user profiles and project data using MongoDB, along with a <span style="color:green; font-weight: bold;">forgot password service</span> to ensure account recovery and accessibility.
                                                </div>
                                            </li>
    
                                            <li style="display: flex; align-items: center; margin-bottom:5px">
                                                <img src="https://friconix.com/png/fi-xnluxx-gui.png" alt="JavaFX" style="width: 50px; height: 44px; vertical-align: middle;  margin-right: 5px;"/>
                                                <div>
                                                    <b>Input/Output Interface:</b> Intuitive forms for users to input design parameters and dynamically generate <span style="color:green; font-weight: bold;">visual and textual outputs</span>.
                                                </div>
                                            </li>
    
    
                                            <li style="display: flex; align-items: center; margin-bottom:5px">
                                                <img src="https://cdn-icons-png.flaticon.com/512/73/73812.png" alt="JavaFX" style="width: 50px; height: 44px; vertical-align: middle;  margin-right: 5px;"/>
                                                <div>
                                                    <b>Dynamic Canvas:</b> A <span style="color:green; font-weight: bold;">graphical canvas</span> that displays real-time, dynamic drawings based on user inputs, allowing for immediate visual feedback.
                                                </div>
                                            </li>
    
    
                                            <li style="display: flex; align-items: center; margin-bottom:5px">
                                                <img src="https://png.pngtree.com/png-clipart/20230427/original/pngtree-data-management-line-icon-png-image_9117318.png" alt="JavaFX" style="width: 50px; height: 44px; vertical-align: middle;  margin-right: 5px;"/>
                                                <div>
                                                    <b>Data Management:</b> Capability to save input data and user sessions, ensuring continuity and ease of use.
                                                </div>
                                            </li>
    
                                            <li style="display: flex; align-items: center; margin-bottom:5px">
                                                <img src="https://cdn-icons-png.flaticon.com/512/3460/3460831.png" alt="JavaFX" style="width: 50px; height: 44px; vertical-align: middle;  margin-right: 10px;"/>
                                                <div>
                                                    <b>Output Formats:</b> Ability to export design outputs as <span style="color:green; font-weight: bold;">bitmaps for graphical representation</span> and <span style="color:green; font-weight: bold;">text reports in both .txt and .pdf formats</span> for comprehensive documentation.
                                                </div>
                                            </li>
    
                                        </ul>
                                        
                                        <h6>Technologies Used</h6>
                                        <ul>
                                          
                                            <li style="display: flex; align-items: center;">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/JavaFX_text_logo.png" alt="JavaFX" style="width: 80px; height: 54px; vertical-align: middle;  margin-right: 5px;"/>
                                                <div>
                                                    <b>JavaFX</b> for GUI design and development.
                                                </div>
                                            </li>
                                            <li style="display: flex; align-items: center;">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" alt="JavaFX" style="width: 80px; height: 54px; vertical-align: middle; margin-right: 5px;"/>
                                                <div>
                                                    <b>MongoDB</b> NoSQL database for storing user data and project data.
                                                </div>
                                            </li>
                                            <li style="display: flex; align-items: center;">
                                                <img src="https://cdn.sanity.io/images/ss02266c/production/806fba67631087cd76ed2a963210feadd164c7fa-64x64.svg" alt="JavaFX" style="width: 80px; height: 54px; vertical-align: middle; margin-right: 5px;"/>
                                                <div>
                                                    <b>Redis</b> for distributed caching.
                                                </div>
                                            </li>
                                            <li style="display: flex; align-items: center;">
                                                <img src="https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png" alt="JavaFX" style="width: 60px; height: 54px; vertical-align: middle; margin-right: 25px;"/>
                                                <div>
                                                    <b>Email Service</b> for forgot password recovery.
                                                </div>
                                            </li>
    
                                            <li style="display: flex; align-items: center;">
                                                <img src="https://cdn-icons-png.flaticon.com/512/337/337946.png" alt="JavaFX" style="width: 60px; height: 54px; vertical-align: middle; margin-right: 25px;"/>
                                                <div>
                                                    <b>Apache POI and iText</b> for generating .txt and .pdf reports.
                                                </div>
                                            </li>
    
                                            <li style="display: flex; align-items: center;">
                                                <img src="https://cdn-icons-png.flaticon.com/512/73/73812.png" alt="JavaFX" style="width: 60px; height: 54px; vertical-align: middle; margin-right: 25px;"/>
                                                <div>
                                                    <b>JavaFX Drawing APIs</b> for rendering real-time graphical outputs on the canvas.
                                                </div>
                                            </li>
                                              
                                        </ul>
                                    
                                        <h6>Learning Outcomes</h6>
                                        <ul>
                                            <li style="display: flex; align-items: center;">
                                                
                                                <div>
                                                    <b>User Authentication and Security:</b> Gained experience in implementing secure user authentication, registration, and forgot password service functionalities. Understood best practices for storing and managing user credentials securely.
                                                </div>
                                            </li>
                                            <div style="display: flex; align-items: center; justify-content:center;">
                                                <img src="https://t3.ftcdn.net/jpg/04/28/95/04/360_F_428950438_huH4H4ljvjUNHmihS5c1Zz8KvlGpGISo.jpg" alt="JavaFX" style="width: 140px; height: 54px; vertical-align: middle;"/>
                                                <img src="https://static.vecteezy.com/system/resources/previews/023/362/615/original/forgot-password-text-button-forgot-password-sign-icon-label-sticker-web-buttons-vector.jpg" alt="JavaFX" style="width: 100px; height: 84px; vertical-align: middle;"/>
                                            </div>
    
    
                                            <li style="display: flex; align-items: center;">
                                                
                                                <div>
                                                    <b>OOP with Singleton Design Pattern:</b> Applied object-oriented programming principles using the Singleton design pattern.
                                                </div>
                                            </li>
                                            <div style="display: flex; align-items: center; justify-content:center;">
                                                <img src="https://img.freepik.com/premium-vector/encapsulation-concept-icon_106317-33855.jpg" alt="JavaFX" style="width: 140px; height: 144px; vertical-align: middle;"/>
                                                <img src="https://img.freepik.com/premium-vector/abstraction-concept-icon_106317-33853.jpg" alt="JavaFX" style="width: 140px; height: 144px; vertical-align: middle;"/>
                                            </div>
                                                      
                                            <li style="display: flex; align-items: center;">
                                                
                                                <div>
                                                    <b>Database Management:</b> Designed and implemented a schema for user and project data in MongoDB. Performed CRUD operations and handled data persistence.
                                                </div>
                                            </li>
                                            <div style="display: flex; align-items: center; justify-content:center;">
                                                <img src="https://media.istockphoto.com/id/1367766076/vector/database-storage-icon-vector-for-your-website-design-logo-app-ui-illustration.jpg?s=612x612&w=0&k=20&c=5-nzlAxbGQMw-lJcZc_P9QbHWXGb00ZLimhhwtr9rnc=" alt="JavaFX" style="width: 140px; height: 144px; vertical-align: middle;"/>
                                               
                                            </div>
    
                                            <li style="display: flex; align-items: center;">
                                                
                                                <div>
                                                    <b>Graphical User Interface (GUI) Development:</b> Designed intuitive and user-friendly forms for data input using JavaFX. Implemented dynamic UI elements that respond to user input in real-time and developed a graphical canvas for real-time drawings and visual feedback.
                                                </div>
                                            </li>
                                            <div style="display: flex; align-items: center; justify-content:center;">
                                                <img src="https://icon-library.com/images/gui-icon/gui-icon-24.jpg" alt="JavaFX" style="width: 140px; height: 144px; vertical-align: middle;"/>
                                               
                                            </div>
    
                                            <li style="display: flex; align-items: center;">
                                                
                                                <div>
                                                    <b>File Export and Report Generation:</b> Exported graphical outputs as bitmap images and generated comprehensive textual reports in .txt and .pdf formats using libraries like Apache POI and iText. Provided export options in the GUI for easy user access.
                                                </div>
                                            </li>
                                            <div style="display: flex; align-items: center; justify-content:center;">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvYMD5-2zWl9cmnQpNEvkpPW2oK1Ld3n3RqA&s" alt="JavaFX" style="width: 90px; height: 104px; vertical-align: middle;"/>
                                                <img src="https://cdn-icons-png.flaticon.com/512/4248/4248321.png" alt="JavaFX" style="width: 90px; height: 104px; vertical-align: middle;"/>
                                                <img src="https://cdn-icons-png.freepik.com/256/9579/9579304.png?semt=ais_hybrid" alt="JavaFX" style="width: 90px; height: 104px; vertical-align: middle;"/>
                                            </div>
    
                                            <li style="display: flex; align-items: center; margin-top:3%">
                                                
                                                <div>
                                                    <b>Software Architecture:</b> Applied the Model-View-Controller (MVC) pattern to separate concerns and improve maintainability. Implemented the Singleton and DAO patterns for efficient resource management and data access.
                                                </div>
                                            </li>
                                            <div style="display: flex; align-items: center; justify-content:center;">
                                                <div class="logo">
                                                    SINGLETON PATTERN | MVC PATTERN| DAO PATTERN
                                                </div>
                                            </div>
    
                                            <li style="display: flex; align-items: center; margin-top:3%">
                                                
                                                <div>
                                                    <b>Data Binding and Real-time Updates:</b> Implemented data binding techniques to ensure real-time updates of visual and textual outputs based on user inputs. Used JavaFX's properties and bindings to synchronize data between the model and the view.
                                                </div>
                                            </li>
                                                                                                                                        
                                        </ul>

                                    </div>   








                
{/*                 <p>{items[0].desc}</p>
                <p>{items[0].desc}</p>
                <p>{items[0].desc}</p>
                <p>{items[0].desc}</p>
                <p>{items[0].desc}</p> */}
                <button>See Demo</button>
            </div>

            <div class="ui-container">
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
            </div>




            {/* {items.map((item) => (
                <Single item={item} key={item.id} />
            ))} */}
        </div>
    );
};

export default Portfolio;
