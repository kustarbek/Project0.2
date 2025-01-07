import React, { useState } from "react";
import { motion } from "framer-motion";
import { info } from "../../../../../shared/data/Bizhonyndk";
import "./Bizhonundo.css";
import { Container } from "../../../../../shared/ui";
import { useInView } from "react-intersection-observer";

export function Bizhonundo() {
  return (
    <div className="m-auto w-[900px] flex justify-between gap-4">
      {info.map((e, index) => (
        <FlipCard
          key={index}
          image={e.image}
          image2={e.image2}
          text={e.discription}
        />
      ))}
    </div>
  );
}

function FlipCard({ image, image2, text }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false, // Позволяет срабатывать при каждом появлении
    threshold: 0.2, // Карточка считается видимой, когда 20% ее видны
  });

  const handleMouseEnter = () => setIsFlipped(true);
  const handleMouseLeave = () => setIsFlipped(false);

  return (
    <Container>
      <motion.div
        ref={ref}
        className="flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div
          className="flip-card w-[150px] h-[150px] mt-[50px] relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: 1000 }}
        >
          <motion.div
            className="flip-card-inner w-full h-full absolute"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <div
              className="flip-card-front w-full h-full bg-cover border-[1px] text-white rounded-full p-4 shadow-lg"
              style={{
                backgroundImage: `url(${image})`,
              }}
            ></div>
            <div
              className="flip-card-back w-full h-full bg-cover border-[1px] rounded-full p-4 shadow-lg"
              style={{
                backgroundImage: `url(${image2})`,
                transform: "rotateY(180deg)",
              }}
            ></div>
          </motion.div>
        </div>
        <h3 className="w-[170px] text-center mt-2 text-[20px]">{text}</h3>
      </motion.div>
    </Container>
  );
}

export default Bizhonundo;
