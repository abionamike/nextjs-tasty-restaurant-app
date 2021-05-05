const Footer = () => {
  return (
    <>
      <div className="relative mt-24 bg-gray-bgColor text-gray-500">
        <svg className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-gray-bgColor" preserveAspectRatio="none" viewBox="0 0 1440 54">
          <path fill="currentColor" d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z" />
        </svg>
        <div className="container w-11/12 m-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-24 pb-16 text-left">
          <div className="mb-8 md:mb-0">
            <h2 className="uppercase mb-6 text-gray-300 text-xl font-semibold">Contact Us</h2>
            <div className="my-3">379 Hudson St, Victoria Island, Lagos</div>
            <div className="my-3">(+234) 706 7959 272</div>
            <div className="my-3">developedbymike@gmail.com</div>
          </div>
          <div className="mb-8 md:mb-0">
            <h2 className="uppercase mb-6 text-gray-300 text-xl font-semibold">Latest Twitter</h2>
            <div className="my-3 text-yellow-500">@developedbyMike</div>
            <div className="my-3">Activello is a good option. It has a slider built into that displays the featured image in the slider. <span className="text-yellow-500">https://buff.ly/2zaSfAQ</span></div>
          </div>
          <div className="mb-8 md:mb-0 md:row-span-2">
            <h2 className="uppercase mb-6 text-gray-300 text-xl font-semibold">Gallery</h2>
            <div className="grid grid-cols-4">
              <div className="w-24 h-24 md:w-22 md:h-22 m-1">
                <img src="/our-menu-01.jpg" className="w-full h-full rounded" alt=""/>
              </div>
              <div className="w-24 h-24 md:w-22 md:h-22 m-1">
                <img src="/our-menu-05.jpg" className="w-full h-full rounded" alt=""/>
              </div>
              <div className="w-24 h-24 md:w-22 md:h-22 m-1">
                <img src="/our-menu-08.jpg" className="w-full h-full rounded" alt=""/>
              </div>
              <div className="w-24 h-24 md:w-22 md:h-22 m-1">
                <img src="/our-menu-10.jpg" className="w-full h-full rounded" alt=""/>
              </div>
              <div className="w-24 h-24 md:w-22 md:h-22 m-1">
                <img src="/our-menu-13.jpg" className="w-full h-full rounded" alt=""/>
              </div>
              <div className="w-24 h-24 md:w-22 md:h-22 m-1">
                <img src="/our-menu-16.jpg" className="w-full h-full rounded" alt=""/>
              </div>
              <div className="w-24 h-24 md:w-22 md:h-22 m-1">
                <img src="/our-menu-01.jpg" className="w-full h-full rounded" alt=""/>
              </div>
              <div className="w-24 h-24 md:w-22 md:h-22 m-1">
                <img src="/our-menu-05.jpg" className="w-full h-full rounded" alt=""/>
              </div>
              <div className="w-24 h-24 md:w-22 md:h-22 m-1">
                <img src="/our-menu-08.jpg" className="w-full h-full rounded" alt=""/>
              </div>
              <div className="w-24 h-24 md:w-22 md:h-22 m-1">
                <img src="/our-menu-10.jpg" className="w-full h-full rounded" alt=""/>
              </div>
              <div className="w-24 h-24 md:w-22 md:h-22 m-1">
                <img src="/our-menu-13.jpg" className="w-full h-full rounded" alt=""/>
              </div>
              <div className="w-24 h-24 md:w-22 md:h-22 m-1">
                <img src="/our-menu-16.jpg" className="w-full h-full rounded" alt=""/>
              </div>
            </div>
          </div>
          <div className="mb-8 md:mb-0">
            <h2 className="uppercase mb-6 text-gray-300 text-xl font-semibold">Opening Times</h2>
            <div>
              <p className="my-3">09:30 AM – 11:00 PM</p>
              <p className="my-3">Every Day</p>
            </div>
          </div>
          <div className="mb-8 md:mb-0">
            <h2 className="uppercase mb-6 text-gray-300 text-xl font-semibold">Latest Twitter</h2>
            <div className="my-3 text-yellow-500">@developedbyMike</div>
            <div className="my-3">Activello is a good option. It has a slider built into that displays the featured image in the slider. <span className="text-yellow-500">https://buff.ly/2zaSfAQ</span></div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-bgColor2 text-gray-500">
        <div className="container m-auto w-11/12 py-8 flex flex-col justify-between items-start md:items-center md:flex-row">
          <div className="mb-3 md:mb-0">Socials:</div>
          <div>Copyright &copy; { new Date().getFullYear() } All rights reserved | <span className="text-yellow-500">Cravings</span></div>
        </div>
      </div>
    </> 
  );
};

export default Footer;