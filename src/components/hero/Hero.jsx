import "./hero.scss";
import { color, motion } from "framer-motion";

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
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-730%",
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 100,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>WHO WE ARE?</motion.h2>
          <motion.h1 variants={textVariants}>Web Developer</motion.h1>
          <motion.h1 variants={textVariants}>
            3D Modeller and Animator
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants} whileHover={{ scale: 0.95 }}>
              See Our Latest Work
            </motion.button>
            <motion.button variants={textVariants} whileHover={{ scale: 0.95 }}>
              Contact Us
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="scroll.png"
            alt="mousescroll"
          />
        </motion.div>
        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Designer Developer Animator Creator
        </motion.div>
        {/* <div className="imageContainer">
          <img src="hero.png" alt="" />
        </div> */}
      </div>
    </div>
  );
};
export default Hero;
