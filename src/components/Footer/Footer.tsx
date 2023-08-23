import FooterLogo from "../../assets/icons/footer-logo.png";
import Facebook from "../../assets/icons/Facebook.png";
import Youtube from "../../assets/icons/Youtube.png";
import Instagram from "../../assets/icons/Instagram.png";

function Footer() {
  return (
    <div className="bg-black">
      <div className="flex justify-center items-center pt-[44px]">
        <img src={FooterLogo} />
      </div>

      <div className="flex justify-center items-center gap-20 text-white pt-[52px] pb-[30px]">
        <p className="font-normal text-[35px] leading-[47.67px] tracking-[6%]">
          Our Services
        </p>
        <p className="font-normal text-[35px] leading-[47.67px] tracking-[6%]">
          Help
        </p>
        <p className="font-normal text-[35px] leading-[47.67px] tracking-[6%]">
          About Us
        </p>
        <p className="font-normal text-[35px] leading-[47.67px] tracking-[6%]">
          Contact US
        </p>
      </div>

      <div className="w-full h-px bg-white"></div>

      <div className="flex justify-center items-center gap-20 text-white pt-[52px] pb-[30px]">
        <p className="font-normal text-[35px] leading-[47.67px] tracking-[1.5%]">
          Plans & Pricing
        </p>
        <p className="font-normal text-[35px] leading-[47.67px] tracking-[1.5%]">
          How it works
        </p>
        <p className="font-normal text-[35px] leading-[47.67px] tracking-[1.5%]">
          What is ShipCo
        </p>
        <p className="font-normal text-[35px] leading-[47.67px] tracking-[1.5%]">
          Support@shipper.com
        </p>
      </div>

      <div className="flex justify-center items-center gap-[21px] pt-[46px] pb-[30px]">
        <img src={Facebook} />
        <img src={Youtube} />
        <img src={Instagram} />
      </div>

      <div className="flex justify-center items-center gap-[12px] text-white pb-[26px]">
        <p className="font-normal text-base leading-[23.86px]">
          Privacy Policy
        </p>
        <p className="font-normal text-base leading-[23.86px]">|</p>
        <p className="font-normal text-base leading-[23.86px]">
          Terms & Conditions
        </p>
      </div>
    </div>
  );
}

export default Footer;
