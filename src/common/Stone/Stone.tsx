import { motion } from "framer-motion";
import { stone, stoneWrapper } from "@animation/variants";

const Stone = ({ className, imageUrl, animationSpeed, stoneClassName }) => {
  return (
    <motion.div variants={stoneWrapper} className={className}>
      <motion.img custom={animationSpeed} variants={stone} className={stoneClassName} src={imageUrl} />
    </motion.div>
  );
};

export default Stone;
