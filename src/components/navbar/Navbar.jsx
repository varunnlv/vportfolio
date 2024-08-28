import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar />
            <div className="wrapper">
                
                <img src="https://logos.textgiraffe.com/logos/logo-name/Varun-designstyle-boots-m.png" width="200px" alt="Angular" />
                
                <div className="social">

                    <a href="https://expense-v-tracker.netlify.app/">
                        <img src="/github.png" alt="" />
                    </a>
                    <a href="https://filmpire-v.netlify.app/">
                        <img src="/linkedin.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
