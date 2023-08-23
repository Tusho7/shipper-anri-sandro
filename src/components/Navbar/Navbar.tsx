import ShipperLogo from "../../assets/icons/Logo.png"
import Button from "../Button/Button"

const Navbar = () => {
  return (
    <nav className="bg-transparent flex  items-center justify-between px-14 pt-[35px] font-semibold">
      <div>
        <img src={ShipperLogo} alt="" />
      </div>
      <div className="flex gap-8 list-none text-2xl">
        <li className="underline">Home</li>
        <li>Shops</li>
        <li>USA Shops</li>
        <li>News</li>
        <li>Contact Us</li>
      </div>
      <div className="flex gap-4">
        <Button text="Log in"  bgColor="black" width="154px" height="48px" borderRadius="24px"/>
        <Button text="Sign up" width="154px" height="48px"  borderRadius="24px"/>
      </div>
    </nav>
  )
}

export default Navbar