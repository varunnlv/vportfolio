import { useRef, useState, useEffect } from "react";
import "./parallax.scss"; // Ensure this includes your CSS animations
import { motion} from "framer-motion";

const Parallax = ({ type }) => {
    const ref = useRef();
    const [currentText, setCurrentText] = useState("Experience");
    const [animateText, setAnimateText] = useState(false); // State to trigger CSS animation

    function downloadPDF() {
        // Create an invisible anchor element
        const a = document.createElement('a');
        a.href = './Resume1.pdf'; // Replace with the actual path to your PDF
        a.download = 'Resume.pdf'; // Default name for the downloaded file
        
        // Trigger the click event on the anchor
        a.click();
      }
      
    

    useEffect(() => {
        // Function to handle text change with delay
        const changeTextWithDelay = () => {
            setAnimateText(false);
            setAnimateText(true); // Trigger animation class
            setCurrentText((prevText) =>
                prevText === "Experience" ? "Education" : "Experience"
            );

            // Reset animation state after animation duration
            //setTimeout(() => setAnimateText(false), 1000); // Match the duration of your animation
        };

        // Set interval to change text every 10 seconds
        const intervalId = setInterval(changeTextWithDelay, 5000); // 10 seconds delay

        // Clean up interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    const sliderVariants = {
        initial: {
            x: 0,
        },
        animate: {
            x: "-5%",
            transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 10,
            },
        },
    };

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

    const textVariants1 = {
        initial: {
            opacity: 0,
            y: 0,
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
            id="Education"
            className="parallax"
            ref={ref}
            style={{
                background:
                    type === "services"
                        ? "linear-gradient(180deg, white, #0c0c1d)"
                        : "linear-gradient(180deg, white, #505064)",
            }}
            variants={textVariants1}
            initial="initial"
            whileInView="animate"
           
        >
            <motion.div className="Righttab">
                <motion.div
                    className="slidingTextContainer"
                    variants={sliderVariants}
                    initial="initial"
                     animate="animate"
                >
                    <img alt="" src="./stars.png" />
                </motion.div>
            </motion.div>

            <motion.div 
            className="Righttab1"
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            >

                <button className="center-button" onClick={downloadPDF}>Download Resume</button>

                <img className="center-image" alt="" src="./Resume.png" />

                
                {/* <div className="experience-item">
                    <h3 className="font-bold text-2xl mb-6"  style={{display: 'flex', alignItems: 'center', marginBottom: '10px', marginTop: '20px' }}>May 2022 - Present</h3>
                    <p className="font-light leading-7 mb-6" style={{display: 'flex', marginBottom: '5px', marginTop: '5px' }}>Software Engineer</p>
                    <p className="font-light leading-7 mb-6" style={{display: 'flex', marginBottom: '5px', marginTop: '5px' }}>
                        INTERNATIONAL DESIGN AND ENGINEERING SOLUTIONS PVT.LTD, PUNE
                    </p>
                    <ul className="font-light leading-7 mb-6 list-disc list-inside">
                        <li>Worked as a Senior Software Engineer, coordinating team efforts, managing projects, and utilizing Git, GitHub, and GitHub Actions for version control and CI/CD pipelines, and agile project management.</li>
                        <li>Developed standalone applications for the connection of cold-formed steel members using Java, JavaFX and few projects using C# and MYSQL database management.</li>
                        <li>Gained expertise in web development with a focus on HTML, CSS, JavaScript, and React for frontend, and Java with Spring Boot for backend, utilizing AWS RDS for database management.</li>
                        <li>Designed reusable and reliable code for use within distributed cloud environments.</li>
                    </ul>
                </div>
      
                <div className="experience-item">
                    <h3 className="font-bold text-2xl mb-6" style={{display: 'flex', alignItems: 'center', marginBottom: '10px', marginTop: '20px' }}>JAN 2022 - APR 2022</h3>
                    <p className="font-light leading-7 mb-6" style={{display: 'flex', marginBottom: '5px', marginTop: '5px' }}>Software Developer Intern</p>
                    <p className="font-light leading-7 mb-6" style={{display: 'flex', marginBottom: '5px', marginTop: '5px' }}>EON Designers, Hyderabad</p>
                    <ul className="font-light leading-7 mb-6 list-disc list-inside">
                        <li>Developed automation of shear wall design, Estimation, and Detailing project using Python programming language.</li>
                        <li>Learned about some python predefined modules i.e., ezdxf, Docx, Openpyxl.</li>
                    </ul>
                </div> */}


            </motion.div>

            <motion.div
             className="mountains"
             ></motion.div>

            {/* Apply the animated class conditionally */}
            <motion.div 
            className={`background-text ${animateText ? "text-animation" : ""}`}
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            >
                {currentText}
            </motion.div>
        </motion.div>
    );
};

export default Parallax;
