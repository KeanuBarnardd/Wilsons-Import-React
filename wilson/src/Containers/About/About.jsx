import React from "react";

import { images } from "../../Constants";
import ImageCard from "../../Components/ImageCard/ImageCard";
import { motion } from "framer-motion";
import "./About.scss";

const About = () => {
  return (
    <div className="app__flex">
      <div className="app__container-width ">
        <motion.h1 className="ourteam__title" whileInView={{ x: [-200, 0], opacity: [0, 1] }} transition={{ duration: 1 }}>
          Our Team
        </motion.h1>
        <motion.hr
          whileInView={{ x: [-50, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.p className="ourteam__p"
          whileInView={{ x: [-300, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Say hello to our team that keeps this place up and running. Our team of executives and
          seniors play a huge factor of our success and we will do everything we can to ensure
          yours.{" "}
        </motion.p>
        <div className="team__grid">
          <ImageCard
            image={images.Jamal}
            title="Jamal Wilson"
            position={"CEO"}
            text="Creater and founder of Wilsons trucks been around for 15 years and has been the core of this compaony."
            delayTime={0.2}
          />
          <ImageCard
            image={images.stew}
            title="Steven Seagul"
            position={"Head Operations Manager"}
            text="Mantains order between the cargo, trucks and crew, is our human safety net."
            delayTime={0.4}
          />
          <ImageCard
            image={images.jeff}
            title="Good Riddens"
            position={"HR Manager"}
            text="A man of the people keeping everything smooth and under control with Wilsons employees. "
            delayTime={0.6}
          />
          <ImageCard
            image={images.kevin}
            title="Joe Widen"
            position={"Marketting Chief"}
            text="Manager and section owner of jobs position roles and coordination."
            delayTime={0.8}
          />
        </div>
        <motion.h1 className="ourteam__title" whileInView={{ x: [-200, 0], opacity: [0, 1] }} transition={{ duration: 1 }}>
          Why we started 
        </motion.h1>
        <motion.hr
          whileInView={{ x: [-50, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.p className="ourteam__p"
          whileInView={{ x: [-300, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Our company started in 2017 with Jamal Wilson. It was made as there was a shortage of trucks and deliverys in melbourne. So he came up with solution to add the two together. We now have 5000 trucks 2000 employees and the best working  staff in melbourne. We are set to make further growths going into the year of 2022.  
        </motion.p>
      </div>
    </div>
  );
};

export default About;
