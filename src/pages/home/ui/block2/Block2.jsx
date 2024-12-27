import { nurhan } from '../../../../shared/data/constants';
import { Container } from '../../../../shared/ui';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';


export function Block2() {
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Container>
      <div className='mt-[100px]'>
        {nurhan.map((item, index) => (
          
          <div key={index} className={`flex flex-wrap  ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-12 items-center`}>
          <img
            src={item.img} alt=""className="w-[450px] h-[320px] rounded-[40px] shadow-md transform translate-x-[-100%] opacity-0 transition-all duration-700 delay-300"
            data-aos="fade-right"
          />
          <div
            className="flex-1 md:p-[20px] transform translate-x-[100%] opacity-0 transition-all duration-700 delay-500"
            data-aos="fade-left"
          >
            <h1 className="text-[36px] font-bold text-green-700">{item.tea}</h1>
            <p className="text-[18px] text-gray-800 font-serif mb-4">{item.the}</p>
        
            <div className="space-y-3 ">
              {item.hot && <p className="text-gray-800 text-base font-serif italic leading-relaxed">{item.hot}</p>}
              {item.hot2 && <p className="text-gray-800 text-base font-serif italic leading-relaxed">{item.hot2}</p>}
              {item.hot3 && <p className="text-gray-800 text-base font-serif italic leading-relaxed">{item.hot3}</p>}
              {item.hot4 && <p className="text-gray-800 text-base font-serif italic leading-relaxed">{item.hot4}</p>}
            </div>
        
            <p className="text-gray-800 font-serif mt-6 italic">{item.islam}</p>
          </div>
        </div>
        
        ))}
      </div>
    </Container>
  );
}

