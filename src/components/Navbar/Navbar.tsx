import ShipperLogo from "../../assets/icons/Logo.png"
import Button from "../Button/Button"

const Navbar = () => {
  return (
    <nav className="bg-transparent flex  items-center justify-between px-14 pt-[35px] font-semibold">
      <div>
        <img src={ShipperLogo} alt="" />
      </div>
      <div className="flex gap-8 list-none text-2xl text-white">
        <li className="underline">Home</li>
        <li>Shops</li>
        <li>USA Shops</li>
        <li>News</li>
        <li>Contact Us</li>
      </div>
      <div className="flex gap-4">
        <Button boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)" text="Log in"  bgColor="black" width="154px" height="48px" borderRadius="24px" border="none"/>
        <Button boxShadow="0px 5px 10px 0px rgba(0, 0, 0, 0.23)" color="white" text="Sign up" width="154px"  height="48px" bgColor="transparent"  borderRadius="24px" border="2px solid white"/>
      </div>
    </nav>
  )
}

export default Navbar