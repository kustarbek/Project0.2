import { nuri } from "../../../../shared/data/constants"
import { Container } from "../../../../shared/ui"


export function Block5() {
  return (
    <Container>
      <div>
        {nuri.map((item, index) => (
          <div
            key={index}
            className={`flex gap-[20px] mt-[40px] ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            } items-center`}
          >
            {/* Блок с одной большой фотографией */}
            <div className="w-[50%] mt-[10%] flex justify-center">
              <img
                src={item.img}
                alt=""
                className="w-full h-auto max-w-[600px] rounded-[20px] object-cover"
              />
            </div>

            {/* Блок с текстом и тремя фотографиями */}
            <div className="w-[50%]">
              <h1 className="text-[26px] text-center italic font-[700] text-green-700">
                {item.osh}
                {item.talas}
              </h1>
              <p className="font-serif leading-7 mt-[20px] italic">{item.info}</p>
              <div className="flex gap-[20px] mt-[20px]">
                <img
                  src={item.img1}
                  alt=""
                  className="w-[190px]  rounded-[20px] obоect-cover"
                />
                <img
                  src={item.img2}
                  alt=""
                  className="w-[190px]  rounded-[20px] object-cover"
                />
                <img
                  src={item.img3}
                  alt=""
                  className="w-[190px]  rounded-[20px] object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

