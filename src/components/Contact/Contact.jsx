import "./Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="contact-main">
      <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        Let&apos;s Work Together
      </motion.h1>
      <div className="wrapper contact-wrapper">
        <div className="img-wrapper">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Img Placeholder*
          </motion.div>
        </div>
        <div className="contact-form">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="form-wrapper"
          >
            <form action="">
              <input type="email" name="Email" id="email" placeholder="Email" />
              <input type="text" name="name" id="name" placeholder="Name" />
              <input
                type="text"
                name="Message"
                id="msg"
                placeholder="Message"
              />
            </form>
            <div className="padding"></div>
            <div className="btn-wrapper">
              <button>Cancel</button>
              <button>Submit</button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
