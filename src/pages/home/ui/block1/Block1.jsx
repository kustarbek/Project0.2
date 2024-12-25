import { motion } from "framer-motion"
import { useState } from "react"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import { Autoplay, EffectFade } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { data } from "../../../../shared/data/constants"
import { Container } from "../../../../shared/ui"

export function Block1() {
  const [activeIndex, setActiveIndex] = useState(0)

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const backgroundVariants = {
    hidden: { scale: 1.2 },
    visible: { scale: 1 },
  }

  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.img})`,
              }}
              className="h-[500px] bg-no-repeat bg-center bg-cover flex items-center"
              initial="hidden"
              animate={activeIndex === index ? "visible" : "hidden"}
              variants={backgroundVariants}
              transition={{ duration: 1.5 }}
            >
              <Container>
                <motion.div
                  className="text-white w-[600px]"
                  initial="hidden"
                  animate={activeIndex === index ? "visible" : "hidden"}
                  variants={fadeInVariants}
                  transition={{ duration: 1.7, ease: "easeOut" }}
                >
                  <motion.h1
                    className="text-3xl font-bold"
                    variants={fadeInVariants}
                    transition={{ duration: 1.7 }}
                  >
                    {item.title}
                  </motion.h1>
                  <motion.p
                    className="text-xl font-semibold my-5"
                    variants={fadeInVariants}
                    transition={{ duration: 1.7, delay: 1.2 }}
                  >
                    {item.dscr}
                  </motion.p>
                  <motion.button
                    className="border py-2 px-4 rounded bg-blue-400"
                    variants={fadeInVariants}
                    transition={{ duration: 1.7, delay: 1.4 }}
                  >
                    Улантуу
                  </motion.button>
                </motion.div>
              </Container>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
