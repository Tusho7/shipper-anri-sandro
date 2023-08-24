import delivery from "../..//assets/images/Rectangle 17.jpg"

const AboutUs = () => {
  return (
    <div className="lg:flex h-screen w-screen lg:items-center lg:justify-between px-[45px] 2xl:px-[200px]">
        <div className="lg:w-[575px] lg:py-[123px] py-5">
          <h2 className="text-[55px] font-medium mb-8 text-center">About Us</h2> 
          <div className="space-y-8 break-words">
            <p className="text-3xl">Lorem ipsum dolor sit amet consectetur. Lobortis venenatis lorem nulla senectus felis sit enim facilisi vel.</p>
            <p className="text-3xl">Lorem ipsum dolor sit amet consectetur. Lobortis venenatis lorem nulla senectus felis sit enim facilisi vel.</p>
          </div>
        </div>
        <div className="lg:space-y-8 space-y-2 lg:py-[69px]">
            <div className="lg:flex lg:gap-[17px] space-y-2">
                <img width={344} src={delivery} className="rounded-18" alt="delivery" />
                <img  width={344} src={delivery} className="rounded-18" alt="delivery" />
            </div>
            <img width={698} height={269} src={delivery} alt="delivery" className="rounded-18" />
        </div>
    </div>
  )
}

export default AboutUs