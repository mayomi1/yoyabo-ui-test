import { motion } from "framer-motion";
import { stone, stoneWrapper } from "@animation/variants";

interface IStone {
  className: string;
  imageUrl: string;
  animationSpeed: number;
  stoneClassName: string;
}
const Stone = ({ className, imageUrl, animationSpeed, stoneClassName }: IStone) => {
  return (
    <motion.div variants={stoneWrapper} className={className}>
      <motion.img custom={animationSpeed} variants={stone} className={stoneClassName} src={imageUrl} />
    </motion.div>
  );
};

export default Stone;
