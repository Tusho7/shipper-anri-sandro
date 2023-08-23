import Rectangle from "../../assets/icons/Rectangle20.svg";
import Payment from "../../assets/icons/payment.svg";
import Vector from "../../assets/icons/Vector.png";
import Repack from "../../assets/icons/Repack.png";
import Delivery from "../../assets/icons/Delivery.png";

function Boxes() {
  return (
    <div className="relative flex justify-center items-center">
      <img src={Rectangle} />
      <div className="absolute flex justify-center items-center gap-32">

        <div className="flex flex-col gap-6 justify-center items-center">
          <div className="rounded-full bg-white p-8 flex justify-center items-center">
            <img src={Payment} />
          </div>

          <div className="w-[174px] h-[49px] bg-white rounded-full text-center flex justify-center items-center">
            <p>Payment</p>
          </div>
        </div>


        <div className="flex flex-col gap-6 justify-center items-center">
          <div className="rounded-full bg-white p-8 flex justify-center items-center">
            <img src={Vector} />
          </div>

          <div className="w-[174px] h-[49px] bg-white rounded-full text-center flex justify-center items-center">
            <p>Calculator</p>
          </div>
        </div>


        <div className="flex flex-col gap-6 justify-center items-center">
          <div className="rounded-full bg-white p-8 flex justify-center items-center">
            <img src={Repack} />
          </div>

          <div className="w-[174px] h-[49px] bg-white rounded-full text-center flex justify-center items-center">
            <p>Repack</p>
          </div>
        </div>

        <div className="flex flex-col gap-6 justify-center items-center">
          <div className="rounded-full bg-white p-8 flex justify-center items-center">
            <img src={Delivery} />
          </div>

          <div className="w-[174px] h-[49px] bg-white rounded-full text-center flex justify-center items-center">
            <p>Delivery</p>
          </div>
        </div>


        


      </div>
    </div>
  );
}

export default Boxes;
