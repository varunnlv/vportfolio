import { useRef } from "react";
import "./Resume.scss";
import { motion } from "framer-motion";

const variants = {
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

const Resume = () => {
    const ref = useRef();

    return (
        <motion.div
            className="services1"
            variants={variants}
            initial="initial"
            ref={ref}
            animate={"animate"}
        >
            <motion.div className="titleContainer1" variants={variants}>
                <div className="title">
                    <h2>
                        <motion.b whileHover={{ color: "orange" }}>CERTIFICATIONS</motion.b>
                    </h2>
                </div>
            </motion.div>

            <div className="imageGrid">
                <a href="https://codedamn.com/certificate/verify/aad8bb3537d90794f6b5eb59327f1ac738f308e1" className="tile">
                    <img
                        src="https://s3.amazonaws.com/user-assets.codedamn.com/6465ccee275cf0000cf5eb6a/certificates/aad8bb3537d90794f6b5eb59327f1ac738f308e1.jpeg"
                        alt="Course certificate for course on codedamn"
                    />
                </a>
                <a href="https://codedamn.com/certificate/verify/83f3f8aec3b87e120942ff89e401b4080f428400" className="tile">
                    <img
                        src="https://s3.amazonaws.com/user-assets.codedamn.com/6465ccee275cf0000cf5eb6a/certificates/83f3f8aec3b87e120942ff89e401b4080f428400.jpeg"
                        alt="Course certificate for course on codedamn"
                    />
                </a>
                <a href="https://codedamn.com/certificate/verify/89bdf28b27ddc594c2506ce827fe4e8da186f708" className="tile">
                    <img
                        src="https://s3.amazonaws.com/user-assets.codedamn.com/6465ccee275cf0000cf5eb6a/certificates/89bdf28b27ddc594c2506ce827fe4e8da186f708.jpeg"
                        alt="Course certificate for course on codedamn"
                    />
                </a>
                <a href="https://codedamn.com/certificate/verify/06af2a8639b5807b7b9a40ae0314fd17ae902f03" className="tile">
                    <img
                        src="https://s3.amazonaws.com/user-assets.codedamn.com/6465ccee275cf0000cf5eb6a/certificates/06af2a8639b5807b7b9a40ae0314fd17ae902f03.jpeg"
                        alt="Course certificate for course on codedamn"
                    />
                </a>
                <a href="https://codedamn.com/certificate/verify/3ad9470f80a65aeb4f4a79bb59eaae1ef17604dd" className="tile">
                    <img
                        src="https://s3.amazonaws.com/user-assets.codedamn.com/6465ccee275cf0000cf5eb6a/certificates/3ad9470f80a65aeb4f4a79bb59eaae1ef17604dd.jpeg"
                        alt="Course certificate for course on codedamn"
                    />
                </a>
                <a href="" className="tile">
                    <img
                        src="./UC-08c2b5df-c591-4184-b064-1acadb373a66.jpg"
                        alt="Course certificate for course on codedamn"
                    />
                </a>
                <a href="https://codedamn.com/certificate/verify/13f9f6093919f5285b1b2a81c08e8ac3b0f6a7fc" className="tile">
                    <img
                        src="https://s3.amazonaws.com/user-assets.codedamn.com/6465ccee275cf0000cf5eb6a/certificates/13f9f6093919f5285b1b2a81c08e8ac3b0f6a7fc.jpeg"
                        alt="Course certificate for course on codedamn"
                    />
                </a>
            </div>
        </motion.div>
    );
};

export default Resume;
