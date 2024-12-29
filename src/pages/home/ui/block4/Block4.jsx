import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Container } from "../../../../shared/ui";


const data = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2822/2822239.png",
    number: 120,
    text: "Жетим балдарга кийим таратылды",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/8447/8447477.png",
    number: 100,
    text: "Үй-бүлөгө азык-түлүк жеткирилди",
  },
  {
    icon: "https://cdn-icons-png.freepik.com/512/2063/2063267.png",
    number: 10,
    text: "Мекеме кышка карата көмүр менен камсыздалды",
  },
  {
    icon: "https://cdn-icons-png.freepik.com/512/8139/8139943.png",
    number: 57,
    text: "Муктаж үй-бүлөгө курман айтта эт таратылды",
  },
];

const AnimatedNumber = ({ targetNumber, inView }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  React.useEffect(() => {
    if (inView) {
      let current = 0;
      const interval = setInterval(() => {
        if (current < targetNumber) {
          current += 1;
          setCurrentNumber(current);
        } else {
          clearInterval(interval);
        }
      }, 100); // Скорость анимации
      return () => clearInterval(interval);
    }
  }, [inView, targetNumber]);

  return <span>{currentNumber}+</span>;
};

const Block4 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.3, 
  });

  return (
    <Container>
    <div
      ref={ref}
      style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#000",
        color: "#fff",
        padding: "20px",
        marginTop:"50px"
      }}
    >
      {data.map((item, index) => (
        <div key={index} style={{ textAlign: "center", maxWidth: "200px", justifyContent: "center", alignItems: "center"}}>
          <div style={{ fontSize: "40px", marginBottom: "10px", marginLeft: "65px" }}>
            <img src={item.icon} alt="" width={60}/>
          </div>
          <div style={{ fontSize: "24px", fontWeight: "bold" }}>
            <AnimatedNumber targetNumber={item.number} inView={inView} />
          </div>
          <div style={{ marginTop: "10px", fontSize: "16px" }}>{item.text}</div>
        </div>
      ))}
    </div>
    </Container>
  );
};

export default Block4;
