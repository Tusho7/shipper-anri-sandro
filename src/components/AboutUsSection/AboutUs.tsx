import sky from "../../assets/images/home-page-background.jpg"

const AboutUs = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-between px-[45px]">
        <div className="w-[575px] py-[123px]">
          <h2 className="text-[55px] font-medium">About Us</h2> 
          <div className="space-y-8">
            <p className="text-3xl">Lorem ipsum dolor sit amet consectetur. Lobortis venenatis lorem nulla senectus felis sit enim facilisi vel.</p>
            <p className="text-3xl">Lorem ipsum dolor sit amet consectetur. Lobortis venenatis lorem nulla senectus felis sit enim facilisi vel.</p>
          </div>
        </div>
        <div className="space-y-8  py-[69px]">
            <div className="flex gap-[17px]">
                <img width={344} src={sky} className="rounded-18" alt="sky" />
                <img  width={344} src={sky} className="rounded-18" alt="sky" />
            </div>
            <img width={698} height={269} src={sky} alt="sky" className="rounded-18" />
        </div>
    </div>
  )
}

export default AboutUs