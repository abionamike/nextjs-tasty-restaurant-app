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
            <div className="my-3">Follow me on Twitter😉 and also checkout my website to see more projects like this. <span className="text-yellow-500">here</span></div>
          </div>
          <div className="mb-8 md:mb-0 md:row-span-2">
            <h2 className="uppercase mb-6 text-gray-300 text-xl font-semibold">Subscribe</h2>
            <div className="flex flex-col">
              <p>Be the first to get the lastest update and discounts on our prices.</p>
              <div className="flex justify-between mt-4">
                <input placeholder="Your email" type="text" id="footer-field" name="footer-field" className="w-2/3 bg-gray-500 text-gray-400 bg-opacity-50 rounded border border-gray-500 focus:ring-1 focus:bg-transparent focus:ring-yellow-200 focus:border-yellow-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                <button className="text-gray-bgColor2 bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">Submit</button>
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
            <div className="my-3">Pls reach out to me if you need a website like this or if you have a project you need a helping hands on. <span className="text-yellow-500">here</span></div>
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