import YellowRectangle from "../../assets/icons/yellow_rectangle.png";
import Payment from "../../assets/icons/Payment.png";
import Vector from "../../assets/icons/Vector.png";
import Repack from "../../assets/icons/Repack.png";
import Delivery from "../../assets/icons/Delivery.png";
import Rectangle from "../../assets/icons/Rectangle_options.png";

function Boxes() {
  return (
    <>
      <div className="relative flex justify-center items-center boxes-desktop w-screen">
        <img src={Rectangle} className="w-full" />

        <div className="absolute flex justify-center items-center gap-32 lg:mt-64 lg:gap-40">
          <div className="flex flex-col gap-6 justify-center items-center lg:gap-10">
            <div className="rounded-full bg-white p-8 flex justify-center items-center hover:animate-pulse hover:cursor-pointer">
              <img src={Payment} className="hover:animate-spin" />
            </div>

            <div className="w-[174px] h-[49px] bg-white rounded-full text-center flex justify-center items-center">
              <p className="hover:scale-[1.5] hover:text-[#804300] hover:cursor-pointer transition-all text-xl">
                Payment
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 justify-center items-center lg:gap-10">
            <div className="rounded-full bg-white p-8 flex justify-center items-center hover:animate-pulse hover:cursor-pointer">
              <img src={Vector} className="hover:animate-spin" />
            </div>

            <div className="w-[174px] h-[49px] bg-white rounded-full text-center flex justify-center items-center">
              <p className="hover:scale-[1.5] hover:text-[#804300] hover:cursor-pointer transition-all text-xl">
                Calculator
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 justify-center items-center lg:gap-10">
            <div className="rounded-full bg-white p-8 flex justify-center items-center hover:animate-pulse hover:cursor-pointer">
              <img src={Repack} className="hover:animate-spin" />
            </div>

            <div className="w-[174px] h-[49px] bg-white rounded-full text-center flex justify-center items-center">
              <p className="hover:scale-[1.5] hover:text-[#804300] hover:cursor-pointer transition-all text-xl">
                Repack
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 justify-center items-center lg:gap-10">
            <div className="rounded-full bg-white p-8 flex justify-center items-center hover:animate-pulse hover:cursor-pointer">
              <img
                src={Delivery}
                className="hover:animate-spin w-[99px] h-[95px]"
              />
            </div>

            <div className="w-[174px] h-[49px] bg-white rounded-full text-center flex justify-center items-center">
              <p className="hover:scale-[1.5] hover:text-[#804300] hover:cursor-pointer transition-all text-xl">
                Delivery
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mx-auto md:flex-row boxes-mobile">
        <div className="w-full max-w-screen-3xl mx-auto">
          <img
            src={YellowRectangle}
            className="w-full"
            alt="Yellow Rectangle"
          />
        </div>

        <div className="flex gap-6 md:-mt-56 md:gap-20 w-full justify-center items-center -mt-28">
          <div className="flex flex-col gap-2 justify-center items-center md:gap-4">
            <div className="rounded-full bg-white p-4 md:p-8 flex justify-center items-center shadow-custom hover:animate-pulse hover:cursor-pointer">
              <img
                src={Payment}
                className="w-6 h-6 md:w-[40px] md:h-[40px] hover:animate-spin"
                alt="Delivery Icon"
              />
            </div>

            <div className="w-[70px] h-[20px] md:w-[100px] bg-white rounded-full text-center flex justify-center items-center shadow-custom md:p-4">
              <p className="p-2 text-xs leading-[15px] text-[#804300] md:text-lg hover:scale-[0.9] hover:text-[#804300] hover:cursor-pointer transition-all">
                Payment
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 justify-center items-center md:gap-4">
            <div className="rounded-full bg-white p-4 md:p-8 flex justify-center items-center shadow-custom hover:animate-pulse hover:cursor-pointer">
              <img
                src={Vector}
                className="w-6 h-6 md:w-[40px] md:h-[40px] hover:animate-spin"
                alt="Delivery Icon"
              />
            </div>

            <div className="w-[70px] h-[20px] md:w-[100px] bg-white rounded-full text-center flex justify-center items-center shadow-custom md:p-4">
              <p className="p-2 text-xs leading-[15px] text-[#804300] md:text-lg hover:scale-[0.9] hover:text-[#804300] hover:cursor-pointer transition-all">
                Calculator
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 justify-center items-center md:gap-4">
            <div className="rounded-full bg-white p-4 md:p-8 flex justify-center items-center shadow-custom hover:animate-pulse hover:cursor-pointer">
              <img
                src={Repack}
                className="w-6 h-6 md:w-[40px] md:h-[40px] hover:animate-spin"
                alt="Delivery Icon"
              />
            </div>

            <div className="w-[70px] h-[20px] md:w-[100px] bg-white rounded-full text-center flex justify-center items-center shadow-custom md:p-4">
              <p className="p-2 text-xs leading-[15px] text-[#804300] md:text-lg hover:scale-[0.9] hover:text-[#804300] hover:cursor-pointer transition-all">
                Repack
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 justify-center items-center md:gap-4">
            <div className="rounded-full bg-white p-4 md:p-8 flex justify-center items-center shadow-custom hover:animate-pulse hover:cursor-pointer">
              <img
                src={Delivery}
                className="w-6 h-6 md:w-[40px] md:h-[40px] hover:animate-spin"
                alt="Delivery Icon"
              />
            </div>

            <div className="w-[70px] h-[20px] md:w-[100px] bg-white rounded-full text-center flex justify-center items-center shadow-custom md:p-4">
              <p className="p-2 text-xs leading-[15px] text-[#804300] md:text-lg hover:scale-[0.9] hover:text-[#804300] hover:cursor-pointer transition-all">
                Delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Boxes;
