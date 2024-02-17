import React, { useRef } from "react";
import "./style.scss";
import hill1 from "../../assets/hill1.png";
import hill2 from "../../assets/hill2.png";
import hill3 from "../../assets/hill3.png";
import hill4 from "../../assets/hill4.png";
import hill5 from "../../assets/hill5.png";
import tree from "../../assets/tree.png";
import leaf from "../../assets/leaf.png";
import plant from "../../assets/plant.png";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = () => {
  const ref = useRef(null);

  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const startPoint = 100 * (window.innerHeight / 100);
  const scrollText = useTransform(
    scrollY,
    [startPoint, startPoint * 2],
    ["0%", "700%"]
  );
  const scrollX = useTransform(
    scrollY,
    [startPoint - 100, startPoint * 2],
    ["0%", "90%"]
  );
  const scrollXNegative = useTransform(
    scrollY,
    [startPoint - 100, startPoint * 2],
    ["0%", "-90%"]
  );
  const scrollLeafY = useTransform(
    scrollY,
    [startPoint, startPoint * 2],
    ["0%", "-90%"]
  );

  return (
    <div className="parallax" ref={ref}>
      <motion.p style={{ y: scrollText }}>Projects</motion.p>
      <motion.img src={hill1} />
      <motion.img src={hill2} />
      <motion.img src={hill3} />
      <motion.img src={hill4} style={{ x: scrollXNegative }} />
      <motion.img src={hill5} style={{ x: scrollX }} />
      <motion.img src={tree} style={{ x: scrollXNegative }} />
      <motion.img src={leaf} style={{ x: scrollX, y: scrollLeafY }} />
      <motion.img src={plant} className="plant" />
    </div>
  );
};

export default Parallax;
