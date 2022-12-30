'use client';

import {motion} from "framer-motion";
import styles from "../styles"
import { fadeIn } from "../utils/motion";

const ExploreCard = ({id,imgUrl,title,index,active,handleClickmotion}) => {
   // destructuring => console.log(props)
   return(
    <motion.div
      variants={fadeIn("right","spring",index * 0.5,0.8)}
      className={`relative ${active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"}
                  flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s]
                  ease-out-flex pointer-cursor
                  `}
    >
      <img 
      src={imgUrl}
      alt={title}
      className="absolute h-full w-[full] object-cover rounded-[24px]"
      />
      {active !== id && (
        <h3 className="font-semibold sm:text-[26px] text-18px text-white absolute z-0 
          lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]
        ">{title}</h3>
      )}
    </motion.div>
  )
};

export default ExploreCard;
