import { useRef } from "react";
import "./services.scss";
import { motion } from "framer-motion";

const variants = {
    initial: {
        x: 0,
        y: 0,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    // scrollButton: {
    //     opacity: 0,
    //     y: 10,
    //     transition: {
    //         duration: 2,
    //         repeat: Infinity,
    //     },
    // },
};

// const sliderVariants2 = {
//     initial: {
//         x: 0,
//     },
//     animate: {
//         x: "-20%",
//         transition: {
//             repeat: Infinity,
//             repeatType: "mirror",
//             duration: 20,
//         },
//     },
// };

const Services = () => {
    const ref = useRef();

    return (
        <motion.div
            className="services"
            variants={variants}
            initial="initial"  
            whileInView="animate"
            ref={ref}
        >

            <motion.div 
            className="titleContainer"
            variants={textVariants}
            >
                    <p>
                        <motion.b whileHover={{ color: "orange" }}>Technologies I Know</motion.b>
                    </p>
            </motion.div>


{/*             <motion.div
                className="slidingTextContainer"
                variants={sliderVariants2}
                initial="initial"
                animate="animate"
            >
                <img alt="" src="./html-5.png" height={100} width={100} />
                <img alt="" src="./css-3.png" height={100} width={100} />
                <img alt="" src="./js.png" height={100} width={100} />


                <img alt="" src="./java.png" height={100} width={100} />
                <img alt="" src="./mysql.png" height={100} width={100} />



                <img alt="" src="./mongodb.png" height={100} width={100} />
                <img alt="" src="./nodejs.png" height={100} width={100} />

                <img alt="" src="./spring-boot.png" height={100} width={100} />

            </motion.div>
 */}

            <motion.div 
            className="container"
            variants={textVariants}
            >

                <section className="skills">
                    <div className="skill">
                        <div className="icon-container"><img src="./html-5.png" alt="Anaconda" /></div>
                        <p>HTML</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="./CSS22.png" alt="Android" /></div>
                        <p>CSS</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="./JavaScript1.png" alt="Angular" /></div>
                        <p>Javascript</p>
                    </div>
                         <div className="skill">
                        <div className="icon-container"><img src="./Typescript1.png" alt="Anaconda" /></div>
                        <p>TypeScript</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="./react1.png" alt="Anaconda" /></div>
                        <p>React</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="./redux1.png" alt="Android" /></div>
                        <p>Redux</p>
                    </div>
                     <div className="skill">
                        <div className="icon-container"><img src="./scss1.png" alt="Android" /></div>
                        <p>Scss</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="./tailwind1.png" alt="Angular" /></div>
                        <p>Tailwind</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="./java.png" alt="Anaconda" /></div>
                        <p>Java</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="./JavaFX1.png" alt="Android" /></div>
                        <p>Java Fx</p>
                    </div>
                     <div className="skill">
                        <div className="icon-container"><img src="./mysql.png" alt="Angular" /></div>
                        <p>MySql</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="./mongodb1.png" alt="Angular" /></div>
                        <p>Mongo DB</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="./amazonrds1.png" alt="Anaconda" /></div>
                        <p>AWS RDS</p>
                    </div>
                   
               
                    <div className="skill">
                        <div className="icon-container"><img src="./springboot1.png" alt="Android" /></div>
                        <p>Spring Boot</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="./redis1.png" alt="Angular" /></div>
                        <p>Redis</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="./microservices1.png" alt="Anaconda" /></div>
                        <p>Microservices</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="./oops1.png" alt="Android" /></div>
                        <p>OOPS</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.png" alt="Angular" /></div>
                        <p>VS Code</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="./IntelliJ1.png" alt="Anaconda" /></div>
                        <p>IntelliJ</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXqvREgueCenWgK3AOYf2Ggyz-jOISn5uJfg&s" alt="Android" /></div>
                        <p>Anaconda</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="https://repository-images.githubusercontent.com/1272424/d1995000-0ab7-11ea-8ed3-04a082c36b0d" alt="Angular" /></div>
                        <p>EmailJS</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="https://www.docker.com/wp-content/uploads/2023/08/logo-dont-stretch.svg" alt="Anaconda" /></div>
                        <p>Docker</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="https://miro.medium.com/v2/resize:fit:1300/1*4BtGcPz3JauG9qsNXzLMXA.gif" alt="Android" /></div>
                        <p>WebSocket</p>
                    </div>


                    

                    <div className="skill">
                        <div className="icon-container"><img src="./linux1.png" alt="Android" /></div>
                        <p>Linux</p>
                    </div>
                       <div className="skill">
                        <div className="icon-container"><img src="./jiira1.png" alt="Android" /></div>
                        <p>Jiira</p>
                    </div>
                       <div className="skill">
                        <div className="icon-container"><img src="./git1.png" alt="Android" /></div>
                        <p>Git</p>
                    </div>
                       <div className="skill">
                        <div className="icon-container"><img src="./maven1.png" alt="Android" /></div>
                        <p>Maven</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="./juint1.png" alt="Android" /></div>
                        <p>JUnit</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="./jenkins1.png" alt="Android" /></div>
                        <p>Jenkins</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="./Kubernetes1.png" alt="Android" /></div>
                        <p>Kubernetes</p>
                    </div>


                </section>
 
            </motion.div>

              <motion.div 
              className="imageContainer"
              variants={textVariants}
              >
                <img src="/cog1.png" alt="" />
              </motion.div>

            



        </motion.div>
    );
};

export default Services;
