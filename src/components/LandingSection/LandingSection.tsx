import Button from "../Button/Button"
import Navbar from "../Navbar/Navbar"

const LandingSection = () => {
  return (
    <div className="h-screen  bg-cover no-repeat landingPageSection">
        <Navbar />
        <div className="flex flex-col items-center mt-[102px] text-7xl text-white">
            <h1 className="tracking-[9.45px]">Welcome To ShipCo</h1>
            <p className="mt-12 text-center w-[794px] text-3xl">Lorem ipsum dolor sit amet consectetur. Lobortis venenatis lorem nulla senectus felis sit enim facilisi vel.</p>
        </div>
        <div className="flex items-center justify-center gap-[18px] mt-[79px]">
          <Button width="256px" height="67px" bgColor="black" text="Register" border="none" borderRadius="39px" boxShadow="0px 4px 10px 0px rgba(0, 0, 0, 0.25)" />
          <Button width="256px" height="67px" text="Services" borderRadius="39px" border="none" bgColor="white" boxShadow="0px 4px 10px 0px rgba(0, 0, 0, 0.25)"/>
        </div>
    </div>
  )
}

export default LandingSection