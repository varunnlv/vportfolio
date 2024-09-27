import { useRef, useState } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const variants = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};

const Contact = () => {
    const [status, setStatus] = useState(null); // To handle form submission status
    const [loading, setLoading] = useState(false); // State for handling loading indicator
    const formRef = useRef(); // Reference to the form element

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true); // Start loading

        // Ensure that formRef.current is an HTMLFormElement
        if (formRef.current && formRef.current.nodeName === 'FORM') {
            emailjs
                .sendForm(
                    "service_i8csc15", // Your EmailJS service ID
                    "template_993ag2v", // Your EmailJS template ID
                    formRef.current,
                    "4OJ82j_6N7f1Ijj7c" // Your EmailJS user ID or public key
                )
                .then(
                    (result) => {
                        setStatus('success');
                        setLoading(false); // Stop loading
                        formRef.current.reset(); // Reset the form on success
                    },
                    (error) => {
                        setStatus('error');
                        setLoading(false); // Stop loading
                    }
                );
        } else {
            console.error('Form reference is not valid.');
            setStatus('error');
            setLoading(false); // Stop loading
        }
    };

    return (
        <motion.div
            className="contact"
            variants={variants}
            initial="initial"
            whileInView="animate"
        >
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let’s work together</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>Mail</h2>
                    <span>varun.netinti@gmail.com</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Address</h2>
                    <span>Visakhapatnam, Andhra Pradesh</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Phone</h2>
                    <span>+91 9553131554</span>
                </motion.div>
            </motion.div>
            <div className="formContainer">
                <motion.div
                    className="phoneSvg"
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0 }}
                    transition={{ delay: 3, duration: 1 }}
                >
                    {/* SVG can be uncommented and used here if needed */}
                </motion.div>
                <motion.form
                    ref={formRef} // Correctly set the formRef to the form
                    onSubmit={sendEmail}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <input type="text" required placeholder="Name" name="name" />
                    <input type="email" required placeholder="Email" name="email" />
                    <textarea rows={8} placeholder="Message" name="message" />
                    <button type="submit" disabled={loading}>
                        {loading ? 'Loading...' : 'Submit'}
                    </button>
                    {status === 'success' && <p>Your message has been sent successfully!</p>}
                    {status === 'error' && <p>There was an error sending your message. Please try again.</p>}
                </motion.form>
            </div>
        </motion.div>
    );
};

export default Contact;
