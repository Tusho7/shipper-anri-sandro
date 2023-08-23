import Button from "../Button/Button"
import Navbar from "../Navbar/Navbar"

const LandingSection = () => {
  return (
    <div className="bg-home h-screen bg-cover bg-no-repeat">
        <Navbar />
        <div className="flex flex-col items-center mt-[102px] text-7xl">
            <h1 className="tracking-[9.45px]">Welcome To ShipCo</h1>
            <p className="text-3xl mt-20 text-center">Lorem ipsum dolor sit amet consectetur. Lobortis venenatis lorem nulla senectus felis sit enim facilisi vel.</p>
        </div>
        <div className="flex items-center justify-center gap-[18px] mt-[79px]">
          <Button width="256px" height="67px" bgColor="black" text="Register" borderRadius="39px" />
          <Button width="256px" height="67px" text="Services" borderRadius="39px"/>
        </div>
    </div>
  )
}

export default LandingSection