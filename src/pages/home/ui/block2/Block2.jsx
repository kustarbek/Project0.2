import { Nurhan } from '../../../../shared/data/constants';
import { Container } from '../../../../shared/ui/Container';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

export function Block2() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container>
      <div className="mt-[100px]">
        {Nurhan.map((item, index) => (
          <div
            key={index}
            className={`flex flex-wrap ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-12 items-center`}
          >
            {/* Изображение */}
            <img
              src={item.img}
              alt={item.tea || "Изображение"} // Лучше указать осмысленный alt
              className="w-[450px] h-[320px] rounded-[40px] shadow-md transform translate-x-[-100%] opacity-0 transition-all duration-700 delay-300"
              data-aos="fade-right"
              loading="lazy" // Оптимизация загрузки изображений
            />

            {/* Контент */}
            <div
              className="flex-1 md:p-[20px] transform translate-x-[100%] opacity-0 transition-all duration-700 delay-500"
              data-aos="fade-left"
            >
              <h1 className="text-[36px] font-bold text-green-700">{item.tea}</h1>
              <p className="text-[18px] text-gray-800 font-serif mb-4">{item.the}</p>

              {/* Динамический вывод элементов */}
              <div className="space-y-3">
                {Array(4)
                  .fill(null)
                  .map((_, i) => {
                    const hotText = item[`hot${i + 1}`]; // Динамическое свойство
                    return hotText ? (
                      <p
                        key={`hot-${index}-${i}`}
                        className="text-gray-800 text-base font-serif italic leading-relaxed"
                      >
                        {hotText}
                      </p>
                    ) : null;
                  })}
              </div>

              {/* Дополнительный текст */}
              {item.islam && (
                <p className="text-gray-800 font-serif mt-6 italic">{item.islam}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
