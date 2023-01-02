'use client';

import {motion} from "framer-motion";
import styles from "../styles"
import { staggerContainer,fadeIn } from "../utils/motion";
import {TitleText, TypingText } from "../components"


const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
     <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once : false , amount : 0.25}}
        className={`${styles.innerWidth} mx-auto flex flex-col `}
     >
        <TypingText title="| People on the World" textStyles="text-center" />
        <TitleText title={<>
                              Track friends around you and invite them 
                              to play together in the same world.
                          </>} textStyles="text-center" />
        <motion.div
          variants={fadeIn("up","tween",0.3,1)}
          className={`relative mt-[68px] flex w-full h0-[550px]`}
        >
            <img src="./map.png" alt="map" className="w-full h-full object-cover" />
        </motion.div>                  
     </motion.div>
  </section>
);

export default World;
