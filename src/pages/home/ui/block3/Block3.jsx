import { motion } from "framer-motion";
import { Container } from "../../../../shared/ui"
import {dit} from "../../../../shared/data/home-block3-img";





export function Block3() {

  return (
    <section>
  <Container 
   initial="hidden"
   whilInView="visible">


    <h1 className="text-3xl font-bold mt-6">Биздин оноктоштор</h1>
   <div className="flex gap-5 flex-wrap mt-7">
    {dit.map((item,) => (
        // eslint-disable-next-line react/jsx-key
      <motion.div 
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}>
       <a href={item.url}>
      <img src={item.img} alt="img"className="w-[150px] h-[150px] rounded-md  ml-6"/>
       </a>
      </motion.div>
    ))}
   </div> 
  </Container>
    </section>

  )
}



export default Block3
