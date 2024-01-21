import "./Project.css";
import { motion } from "framer-motion";

const Project1 = () => {
  return (
    <div className="wrapper project-wrapper">
      <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        Project 1
      </motion.h1>
      <motion.div
        className="project-box"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="project-img"></div>
      </motion.div>
    </div>
  );
};
export default Project1;
