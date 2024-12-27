
import { motion } from "framer-motion";
import { Container } from "../../../../shared/ui";
import { dit } from "../../../../shared/data/home-block3-img";

export function Block3() {
 
  const variants = {
    hidden: (i) => ({
      opacity: 0,
      x: i % 2 === 0 ? -100 : 100, 
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section>
      <Container initial="hidden" whileInView="visible" viewport={{  amount: 0.3 }}>
        <h1 className="text-3xl font-bold mt-6">Биздин оноктоштор</h1>
        <div className="flex gap-5 flex-wrap mt-7">
          {dit.map((item, index) => (
            <motion.div
              key={item.url} 
              custom={index} 
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{  amount: 0.3 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <a href={item.url}>
                <img
                  src={item.img}
                  alt="img"
                  className="w-[150px] h-[150px] rounded-md ml-6"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </Container>

    </section>
  );
}




export default Block3

