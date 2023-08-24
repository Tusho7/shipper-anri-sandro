import Button from "../Button/Button"
import Navbar from "../Navbar/Navbar"

const LandingSection = () => {
  return (
    <div className="w-screen h-screen bg-cover landingPageSection min-w-full	">
        <Navbar />
        <div className="flex flex-col items-center mt-[102px]  text-white">
            <h1 className="tracking-[9.45px] lg:text-7xl text-3xl md:text-5xl text-center md:mt-40 font-light">Welcome To ShipCo</h1>
            <p className="mt-12 text-center lg:w-[794px] text-md lg:text-3xl break-words description font-light">Lorem ipsum dolor sit amet consectetur. Lobortis venenatis lorem nulla senectus felis sit enim facilisi vel.</p>
        </div>
        <div className="flex items-center justify-center lg:gap-[18px] mt-[79px] gap-4">
          <Button width="lg:w-[256px] w-[150px]" height="67px" bgColor="black" text="Register" border="none" borderRadius="39px" boxShadow="0px 4px 10px 0px rgba(0, 0, 0, 0.25)" />
          <Button width="lg:w-[256px] w-[150px]" height="67px" text="Services" borderRadius="39px" border="none" bgColor="white" boxShadow="0px 4px 10px 0px rgba(0, 0, 0, 0.25)"/>
        </div>
    </div>
  )
}

export default LandingSection