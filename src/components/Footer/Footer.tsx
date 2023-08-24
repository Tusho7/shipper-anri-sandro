import FooterLogo from "../../assets/icons/footer-logo.png";
import Facebook from "../../assets/icons/Facebook.png";
import Youtube from "../../assets/icons/Youtube.png";
import Instagram from "../../assets/icons/Instagram.png";

function Footer() {
  return (
    <>
      <div className="bg-black footer-desktop">
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

      <div className="bg-black footer-mobile">
        <div className="flex justify-center items-center pt-8">
          <img
            src={FooterLogo}
            className="w-40 h-auto pb-8 mt-8 md:w-52 md:mt-20"
            alt="Footer Logo"
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-4 text-white pt-6 pb-4 md:flex-row md:items-baseline md:gap-8 md:pb-10">
          <p className="font-normal text-xl leading-6 mb-2 md:mb-0 md:mr-4 transition duration-300 transform hover:scale-110 hover:text-[#804300] hover:cursor-pointer">
            Our Services
          </p>
          <p className="font-normal text-xl leading-6 mb-2 md:mb-0 md:mr-4 transition duration-300 transform hover:scale-110 hover:text-[#804300] hover:cursor-pointer">
            Help
          </p>
          <p className="font-normal text-xl leading-6 mb-2 md:mb-0 md:mr-4 transition duration-300 transform hover:scale-110 hover:text-[#804300] hover:cursor-pointer">
            About Us
          </p>
          <p className="font-normal text-xl leading-6 md:leading-8 transition duration-300 transform hover:scale-110 hover:text-[#804300] hover:cursor-pointer">
            Contact US
          </p>
        </div>

        <div className="w-full h-px bg-white opacity-25"></div>

        <div className="flex flex-col justify-center items-center gap-4 text-white pt-6 pb-4 md:flex-row md:items-baseline md:gap-8 md:pt-10">
          <p className="font-normal text-xl leading-6 mb-2 transition duration-300 transform hover:scale-110 hover:text-[#804300] hover:cursor-pointer">
            Plans & Pricing
          </p>
          <p className="font-normal text-xl leading-6 mb-2 transition duration-300 transform hover:scale-110 hover:text-[#804300] hover:cursor-pointer">
            How it works
          </p>
          <p className="font-normal text-xl leading-6 mb-2 transition duration-300 transform hover:scale-110 hover:text-[#804300] hover:cursor-pointer">
            What is ShipCo
          </p>
          <p className="font-normal text-xl leading-6 transition duration-300 transform hover:scale-110 hover:text-[#804300] hover:cursor-pointer">
            Support@shipper.com
          </p>
        </div>

        <div className="flex justify-center items-center gap-4 pt-4 pb-4 md:pt-6 md:pb-6">
          <img src={Facebook} className="w-8 h-auto" alt="Facebook Icon" />
          <img src={Youtube} className="w-8 h-auto" alt="Youtube Icon" />
          <img src={Instagram} className="w-8 h-auto" alt="Instagram Icon" />
        </div>

        <div className="flex justify-center items-center gap-3 text-white pb-8">
          <p className="font-normal text-sm leading-5 transition duration-300 hover:scale-110 hover:text-[#804300] hover:cursor-pointer">
            Privacy Policy
          </p>
          <p className="font-normal text-sm leading-5 mx-1">|</p>
          <p className="font-normal text-sm leading-5 transition duration-300 hover:scale-110 hover:text-[#804300] hover:cursor-pointer">
            Terms & Conditions
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
