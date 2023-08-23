import FooterLogo from "../../assets/icons/footer-logo.png";
import Facebook from "../../assets/icons/Facebook.png";
import Youtube from "../../assets/icons/Youtube.png";
import Instagram from "../../assets/icons/Instagram.png";


function Footer() {
  return (
    <div className='bg-black'>
        <div className='flex justify-center items-center pt-[44px]'>

        <img src={FooterLogo} />
        </div>

        <div className='flex justify-center items-center gap-20 text-white pt-[52px] pb-[30px]'>
            <p>Our Services</p>
            <p>Help</p>
            <p>About Us</p>
            <p>Contact US</p>
        </div>

        <div className='w-full h-px bg-white'></div>

        <div className='flex justify-center items-center gap-20 text-white pt-[52px] pb-[30px]'>
            <p>Plans & Pricing</p>
            <p>How it works</p>
            <p>What is ShipCo</p>
            <p>Support@shipper.com</p>
        </div>

        <div className='flex justify-center items-center gap-[21px] pt-[46px] pb-[30px]'>
    <img src={Facebook} />
    <img src={Youtube} />
    <img src={Instagram} />
        </div>

        <div className='flex justify-center items-center gap-[12px] text-white pb-[26px]'>
            <p>Privacy Policy</p>
            <p>|</p>
            <p>Terms & Conditions</p>
        </div>
    </div>
  )
}

export default Footer