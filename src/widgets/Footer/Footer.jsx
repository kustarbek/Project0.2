import { Container } from "../../shared/ui";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Logo from "../Header/img/mirba.png";

export function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

 nuri
    return (
        <div className='bg-green-50 text-green-900 py-10 font-sans'>
            <Container>
                <footer className="">
                    <div className="max-w-7xl mx-auto flex flex-wrap justify-between">


                        <div class="flex-1 min-w-[250px] mb-6">
                            <h3 classNamen="text-green-900 font-bold text-lg">О нас</h3>
                            <p className="leading-relaxed">
                                Наша миссия — помогать тем, кто нуждается. Мы верим в силу доброты и солидарности, которая меняет жизни к лучшему.
                            </p>
                        </div>


                        <div className="flex-1 min-w-[250px] mb-6 ml-[207px]">
                            <h3 className="text-green-900 font-bold text-lg">Быстрые ссылки</h3>
                            <ul className="list-none p-0 space-y-2">
                                <li><a href="#" className="text-green-900 hover:text-green-700">О нас</a></li>
                                <li><a href="#" className="text-green-900 hover:text-green-700">Проекты</a></li>
                                <li><a href="#" className="text-green-900 hover:text-green-700">Как помочь</a></li>
                                <li><a href="#" className="text-green-900 hover:text-green-700">Контакты</a></li>
                            </ul>
                        </div>


                        <div className="flex-1 min-w-[250px] mb-6">
                            <h3 className="text-green-900 font-bold text-lg">Подпишитесь на новости</h3>
                            <p className="leading-relaxed">
                                Подпишитесь на нашу рассылку, чтобы быть в курсе последних новостей и событий.
                            </p>
                            <form className="flex gap-2 mt-4">
                                <input type="email" placeholder="Ваш email"
                                    className="flex-1 p-2 border border-green-200 rounded-md focus:outline-none focus:ring focus:ring-green-300" />
                                <button
                                    className="px-4 py-2 bg-green-900 text-white rounded-md hover:bg-green-700">
                                    Подписаться
                                </button>

                            </form>
                        </div>

                    </div>


                    <div class="text-center border-t border-green-200 pt-6 mt-6">
                        <p class="m-0">&copy; 2024 Благотворительная организация. Все права защищены.</p>
                    </div>
                </footer>
            </Container>
        </div>
    )

    return (
        <div>
            <Container>
                <h1>Footer</h1>
            </Container>
        </div>
    )

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.footer
      ref={ref}
      className="bg-green-50 text-green-900 py-10 w-full"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="container m-auto px-6 md:px-12 lg:px-24 justify-center">
        {/* Лого */}
        <motion.div
          className="flex m-auto mb-6 w-[397px]"
          variants={itemVariants}
        >
          <img src={Logo} alt="bAgyt logo" className="w-40 h-auto ml-[103px]" />
        </motion.div>

        <div className="flex flex-wrap gap-[]">
          {/* 1 */}
          <motion.div
            className="flex-1 min-w-[250px] mb-6 ml-[60px]"
            variants={itemVariants}
          >
            <h3 className="text-green-900 font-bold text-lg mb-4">
              Кайырымдуулук
            </h3>
            <ul className="space-y-2">
              <li>Бир күндө бир адамга жардам көрсөтүү.</li>
              <li>Китеп окуу</li>
              <li>Бүткүл айлана-чөйрөнү таза кармоо.</li>
            </ul>
          </motion.div>

          {/* 2 */}
          <motion.div
            className="flex-1 min-w-[250px] mb-6 ml-[133px]"
            variants={itemVariants}
          >
            <h3 className="text-green-900 font-bold text-lg mb-4">
              Биз жөнүндө
            </h3>
            <ul className="space-y-2">
              <li>иш чара</li>
              <li>каттого кирү</li>
            </ul>
          </motion.div>

          {/* 3 */}
          <motion.div
            className="flex-1 min-w-[250px] mb-6 ml-[-23px]"
            variants={itemVariants}
          >
            <h3 className="text-green-900 font-bold text-lg mb-4">
              Байланыш үчүн кызматташтык.
            </h3>
            <ul className="space-y-2">
              <li>Сотрудничество</li>
              <li>Телефон: +996 505 577 656</li>
              <li>Email: info@example.com</li>
              <li>Instagram: @example</li>
            </ul>
          </motion.div>
        </div>
 main

        {/* Нижний футер */}
        <motion.div
          className="ml-[530px]  border-green-200 pt-6 mt-6 "
          variants={itemVariants}
        >
          <div className="w-[300px] h-[1px] bg-green-200 "></div>
          <p className="text-sm ml-[-70px]">
            &copy; 2024. Кайрымдуулук уюму. Бардык укуктар корголгон.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

  