import { motion } from "framer-motion";

const Project2 = () => {
  return (
    <div>
      <div className="wrapper project-wrapper">
        <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          Project 2
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
    </div>
  );
};
export default Project2;