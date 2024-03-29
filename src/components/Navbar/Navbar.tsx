import ShipperLogo from "../../assets/icons/Logo.png"
import Button from "../Button/Button"
import NavbarMenu from '../NavbarMenu/NavbarMenu';
import NavbarLink from "./NavbarLinks";

const LINKS = ["Home", "Shops", "USA Shops", "News", "Contact Us"];


const Navbar = () => {
  return (
    <nav className="bg-transparent flex  items-center justify-between px-7 lg:px-14 pt-[35px] font-semibold">
      <div>
        <img src={ShipperLogo} alt="shipper logo"  className="w-2/3"/>
      </div>
      <div className="lg:flex lg:gap-8 list-none lg:text-lg xl:text-2xl text-white hidden">
        {LINKS.map(link => <NavbarLink key={link} linkText={link}/>)}
      </div>
      <NavbarMenu />
      <div className="lg:flex gap-4  hidden ">
        <Button boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)" text="Log in"  bgColor="black" width="lg:w-[110px] xl:w-[154px]" height="48px" borderRadius="24px" border="none"/>
        <Button boxShadow="0px 5px 10px 0px rgba(0, 0, 0, 0.23)" color="white" text="Sign up" width="lg:w-[110px] xl:w-[154px]"  height="48px" bgColor="transparent"  borderRadius="24px" border="2px solid white"/>
      </div>
    </nav>
  )
}

export default Navbar