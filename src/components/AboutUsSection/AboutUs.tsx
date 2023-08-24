import delivery from "../..//assets/images/Rectangle 17.jpg"

const AboutUs = () => {
  return (
    <div className="lg:flex lg:h-screen w-screen lg:items-center lg:justify-between px-[45px] 2xl:px-[200px]">
        <div className="lg:w-[575px] lg:py-[123px] py-5">
          <h2 className="text-[55px] font-medium mb-8 text-center lg:text-left">About Us</h2> 
          <div className="space-y-8 break-words md:text-left lg:text-left">
            <p className="lg:text-3xl text-xs">Lorem ipsum dolor sit amet consectetur. Lobortis venenatis lorem nulla senectus felis sit enim facilisi vel. Lorem ipsum dolor sit amet consectetur. Lobortis venenatis lorem nulla senectus felis sit enim facilisi vel</p>
            <p className="lg:text-3xl text-xs">Lorem ipsum dolor sit amet consectetur. Lobortis venenatis lorem nulla senectus felis sit enim facilisi vel.</p>
          </div>
        </div>
        <div className="lg:space-y-8  lg:py-[69px] space-y-[30px]">
            <div className="flex lg:gap-[17px] justify-between">
                <img  src={delivery} className="rounded-18  w-[45%] lg:w-[344px] " alt="delivery" />
                <img   src={delivery} className="rounded-18 w-[45%]   lg:w-[344px] " alt="delivery" />
            </div>
            <img src={delivery} alt="delivery" className="rounded-18  lg:w-[698px] lg:h-[269px] w-full h-[210px]" />
        </div>
    </div>
  )
}

export default AboutUs

