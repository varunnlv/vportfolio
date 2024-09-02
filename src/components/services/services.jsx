import { useRef } from "react";
import "./services.scss";
import { motion } from "framer-motion";

const variants = {
    initial: {
        x: -500,
        y: 100,
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
            // animate="animate"
            // whileInView="animate"
            ref={ref}
            animate={"animate"}
        >
        
{/*             <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>Technologies I Know</motion.b>
                    </h1>
                </div>



            </motion.div> */}

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

            <div className="container">

                <section className="skills">
                    <div className="skill">
                        <div className="icon-container"><img src="./html-5.png" alt="Anaconda" /></div>
                        <p>HTML</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png" alt="Android" /></div>
                        <p>CSS</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="Angular" /></div>
                        <p>Javascript</p>
                    </div>
                         <div className="skill">
                        <div className="icon-container"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="Anaconda" /></div>
                        <p>TypeScript</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="https://static-00.iconduck.com/assets.00/react-original-wordmark-icon-840x1024-vhmauxp6.png" alt="Anaconda" /></div>
                        <p>React</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" alt="Android" /></div>
                        <p>Redux</p>
                    </div>
                     <div className="skill">
                        <div className="icon-container"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ803r_FTGrMlWpKJqOWmQgwv0BkQaDWy8q1Q&s" alt="Android" /></div>
                        <p>Scss</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s" alt="Angular" /></div>
                        <p>Tailwind</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png" alt="Anaconda" /></div>
                        <p>Java</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="https://upload.wikimedia.org/wikipedia/commons/3/30/JavaFX_text_logo.png" alt="Android" /></div>
                        <p>Java Fx</p>
                    </div>
                     <div className="skill">
                        <div className="icon-container"><img src="https://cdn.iconscout.com/icon/free/png-256/free-mysql-3628940-3030165.png?f=webp&w=256" alt="Angular" /></div>
                        <p>MySql</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="https://i.pinimg.com/originals/b2/31/7e/b2317e8174e5fcef57c74c662f57d155.png" alt="Angular" /></div>
                        <p>Mongo DB</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="https://cdn.prod.website-files.com/601064f495f4b4967f921aa9/635884ad45bd4b4723f4bc39_202210-rds-logo.png" alt="Anaconda" /></div>
                        <p>AWS RDS</p>
                    </div>
                   
               
                    <div className="skill">
                        <div className="icon-container"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8i4zPog-0j0JR_yZglxPhTPZXxN2iMTQ3Dw&s" alt="Android" /></div>
                        <p>Spring Boot</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="https://www.zdnet.com/a/img/resize/ea56feddb9aed4bc4af6b9e693ef4b40592b6f15/2020/05/11/f9afed5d-33cd-438f-ba73-31b31abba8e1/redis-logo-2.png?auto=webp&width=740" alt="Angular" /></div>
                        <p>Redis</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ7cNI4EZ1hatuC_IzMHF4q0Dx0590F4t7yw&s" alt="Anaconda" /></div>
                        <p>Microservices</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="https://t4.ftcdn.net/jpg/01/08/96/57/360_F_108965707_UhpFxvquwgXVfWlFpg9vYGJfz8mmZ33u.jpg" alt="Android" /></div>
                        <p>OOPS</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.png" alt="Angular" /></div>
                        <p>VS Code</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/2048px-IntelliJ_IDEA_Icon.svg.png" alt="Anaconda" /></div>
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
                        <div className="icon-container"><img src="https://miro.medium.com/v2/resize:fit:1300/1*4BtGcPz3JauG9qsNXzLMXA.gif" alt="Android" /></div>
                        <p>Linux</p>
                    </div>
                       <div className="skill">
                        <div className="icon-container"><img src="https://thumbs.dreamstime.com/b/linux-logo-vector-format-available-illustrator-ai-linux-logo-136767231.jpg" alt="Android" /></div>
                        <p>Jiira</p>
                    </div>
                       <div className="skill">
                        <div className="icon-container"><img src="https://banner2.cleanpng.com/20180425/bxe/ave8vhl4c.webp" alt="Android" /></div>
                        <p>Git</p>
                    </div>
                       <div className="skill">
                        <div className="icon-container"><img src="https://cdn.fs.teachablecdn.com/L2rtxPaRxa4am1VtNegg" alt="Android" /></div>
                        <p>Maven</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="https://avatars.githubusercontent.com/u/874086?s=280&v=4" alt="Android" /></div>
                        <p>JUnit</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png" alt="Android" /></div>
                        <p>Jenkins</p>
                    </div>
                    <div className="skill">
                        <div className="icon-container"><img src="https://download.logo.wine/logo/Kubernetes/Kubernetes-Logo.wine.png" alt="Android" /></div>
                        <p>Kubernetes</p>
                    </div>


                </section>

                {/* <section className="experience">
                    <div class="job-tile">
                        <div class="job-title">Http Listener</div>
                    </div>
                    <div class="job-tile">
                        <div class="job-title">InterService Communication - WebClient</div>
                    </div>
                    <div class="job-tile">
                        <div class="job-title">Spring Cloud Gateway - Api Gateway</div>
                    </div>
                    <div class="job-tile">
                        <div class="job-title">Service Discovery and Registry - Netflix Eureka</div>
                    </div>

                </section> */}



            </div>















        </motion.div>
    );
};

export default Services;
