import "./Services.css";
import { motion } from "framer-motion";

const webVariant = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};
const blenderVariant = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

const Services = () => {
  return (
    <>
      <div className="wrapper services">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="skill-h1"
        >
          Our Skills
        </motion.h1>
        <div className="bento-wrapper">
          <motion.div
            variants={webVariant}
            initial={{ x: -350, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="web-box"
          >
            <div className="h1-div-web">
              <h1>Expertly Designed Websites</h1>
            </div>
            <div className="web-img">
              <span>*IMG GOES HERE</span>
            </div>
          </motion.div>
          <motion.div
            className="animation-box"
            initial={{ x: 350, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <div className="h1-div-blender">
              <h1>Stylish Product Commercials</h1>
            </div>
            <div className="three-d-img">
              <span>*IMG GOES HERE</span>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default Services;
