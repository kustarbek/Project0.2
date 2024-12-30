import { nurhan } from '../../../../shared/data/constants';
import { Container } from '../../../../shared/ui';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import "./Block.css"

export function Block2() {
  useEffect(() => {AOS.init({ duration: 1000 });}, []);
  return (
    <Container>
      <div className="mt-[50px]">
        {nurhan.map((item, index) => (
          <div key={index}className={`flex flex-wrap ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-12 items-center`} style={{gap: index % 2 === 0 ? '120px' : '0px', }}>
              <div className={`w-[40%] transition-all duration-700 delay-300`}data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
              <img src={item.img} className="w-full h-[320px] rounded-full object-cover"/>
            </div>
            <div className="flex-1 md:p-[20px] transform translate-x-[100%] opacity-0 transition-all duration-700 delay-500"data-aos="fade-left">
              <h1 className="text-[36px] font-bold text-green-700 font-[cursive]   ">{item.tea}</h1>
              <p className="text-[17px] text-gray-800 mb-2  font-[cursive]  ">{item.the}</p>
              <div className="space-y-1">
                  <p className="text-gray-800 text-base font-[cursive] leading-relaxed ">{item.hot}</p>
                  <p className="text-gray-800 text-base font-[cursive]  leading-relaxed">{item.hot2}</p>
                  <p className="text-gray-800 text-base font-[cursive]  leading-relaxed ">{item.hot3}</p>
                  <p className="text-gray-800 text-base font-[cursive] leading-relaxed ">{item.hot4}</p>
              </div>
              <p className="text-gray-800 text-base    mt-6 font-[cursive] ">{item.islam}</p>
            </div>
          </div>
        ))}
      </div>
      </Container>
      );}
