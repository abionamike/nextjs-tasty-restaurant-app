import { useState, useEffect } from 'react';

const Hero = () => {
  const [isHamburgerOpen, setIsHamburgerOpen ] = useState(false);
  const [background, setBackground] = useState('transparent border-gray-400');
  
  const scrollFunc = () => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setBackground('bg-black border-transparent') : setBackground('transparent border-gray-400');
    });
  }

  useEffect(() => {
    scrollFunc();
  }, []);

  return (
    <>
      <div id="Home" className="relative bg-gray-200 h-screen">
        <img className="object-cover h-full w-full" src="/hero2.jpg" alt="hero"/>
        <div className="absolute h-full w-full bg-black left-0 top-0 bg-opacity-75 text-white flex flex-col">
          <nav className={`h-1/10 w-full border-b fixed flex items-center justify-between ${background} z-10`} aria-label="Global">
            <div className="container flex items-center justify-between mx-auto w-11/12">
              <a href="#Home"><h1 className="text-2xl text-gray-300 font-semibold md:text-xl lg:text-3xl"><span className="text-yellow-500">tasty</span>Foods</h1></a>
              <div className="-mr-2 flex items-center md:hidden">
                <button onClick={() => setIsHamburgerOpen(!isHamburgerOpen)} type="button" className="bg-gray-bgColor rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-bgColor3 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              <div className={`hidden md:block`}>
                <a href="#Home" className="font-medium mx-4 text-base text-white-color1 hover:text-yellow-500" onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>Home</a>
                <a href="#About" className="font-medium mx-4 text-base text-white-color1 hover:text-yellow-500" onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>About Us</a>
                <a href="#Services" className="font-medium mx-4 text-base text-white-color1 hover:text-yellow-500" onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>Services</a>
                <a href="#Menu" className="font-medium mx-4 text-base text-white-color1 hover:text-yellow-500" onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>Menu</a>
                <a href="#Reviews" className="font-medium mx-4 text-base text-white-color1 hover:text-yellow-500" onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>Reviews</a>
                <a href="#Contact" className="font-medium mx-4 text-base text-yellow-500 hover:text-yellow-600" onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>Contact Us</a>
              </div>
              {/* <div className="hidden md:block">
                <a className="flex items-center justify-center px-2 py-2 border-2 text-yellow-500 border-yellow-500 text-sm font-medium rounded-3xl bg-transparent hover:bg-yellow-500 hover:text-gray-bgColor2" href="#Contact">Contact Us</a>
              </div> */}
            </div>
          </nav>
          <div className={`${isHamburgerOpen ? '' : 'hidden'} fixed top-0 inset-x-0 p-2 transition duration-900 ease-in-out bg-gray-bgColor2 transform origin-top-right md:hidden z-10`}>
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-end">
                <div className="-mr-2">
                  <button onClick={() => setIsHamburgerOpen(!isHamburgerOpen)} type="button" className="bg-gray-bgColor rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-bgColor3 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                    <span className="sr-only">Close main menu</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#Home" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-yellow-500 hover:bg-gray-bgColor" onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>Home</a>
                <a href="#About" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-yellow-500 hover:bg-gray-bgColor" onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>About Us</a>
                <a href="#Services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-yellow-500 hover:bg-gray-bgColor" onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>Services</a>
                <a href="#Menu" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-yellow-500 hover:bg-gray-bgColor" onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>Menu</a>
                <a href="#Reviews" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-yellow-500 hover:bg-gray-bgColor" onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>Reviews</a>
                {/* <a href="#Contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-yellow-500 hover:bg-gray-bgColor" onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>Contact Us</a> */}
              </div>
              <a href="#" className="block w-full px-5 py-3 text-center font-medium text-yellow-500 bg-gray-bgColor hover:bg-gray-bgColor3 hover:text-yellow-400" onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>Contact Us</a>
            </div>
          </div>
          <main className="h-9/10 w-11/12 flex flex-col justify-center mx-auto my-auto sm:text-center lg:text-left">
            <h1 className="text-3xl tracking-tight font-bold sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block text-gray-300 mb-3">Hello, My Name is Michael</span>
              <span className="block text-yellow-600 mb-3">Web &</span>
              <span className="inline text-yellow-600">Mobile App Developer</span>
            </h1>
            <div className="mt-8 bg-white-color1 rounded-full w-16 h-1 sm:mx-auto sm:mt-10 sm:w-20 md:mt-10 md:w-24 lg:mt-12 lg:m-0 lg:mt-10 lg:w-26"></div>
            <div className="flex justify-start items-center mt-5 sm:mt-8 sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a href="#Services" className="flex items-center justify-center uppercase px-4 py-2 border border-transparent text-sm md:text-base font-medium rounded-sm bg-yellow-600 hover:bg-yellow-700 md:text-base md:px-6">
                  Services
                </a>
              </div>
              <div className="ml-3">
                <a href="#Projects" className="flex items-center justify-center uppercase px-4 py-2 border border-transparent text-sm md:text-base font-medium rounded-sm text-yellow-700 bg-yellow-200 hover:bg-yellow-300 md:text-base md:px-6">
                  Projects
                </a>
              </div>
            </div>
          </main>
          {/* <main className="h-9/10 w-11/12 flex flex-col justify-center items-center mx-auto my-auto">
            <p className="text-base md:text-2xl block text-yellow-600 my-3 md:my-4">Welcome to TastyFoods</p>
            <h1 className="text-2xl tracking-tight text-gray-200 font-bold sm:text-3xl md:text-4xl lg:text-6xl">We Satisfy Your Culinary Desire</h1>
            <div className="mt-8 bg-white-color1 rounded-full w-16 h-1 sm:mx-auto sm:mt-10 sm:w-20 md:mt-10 md:w-24 lg:mt-10 lg:m-0 lg:mt-10 lg:w-26"></div>
            <div className="flex justify-start items-center mt-5 sm:mt-8 sm:justify-center lg:justify-start">
              <a href="#Menu" className="flex items-center justify-center uppercase px-4 py-2 border border-transparent text-sm md:text-base font-medium rounded bg-yellow-600 hover:bg-yellow-700 md:px-5">
                See Menu
              </a>
              <div className="ml-3">
                <a href="#" className="flex items-center justify-center uppercase px-4 py-2 border border-transparent text-sm font-medium rounded text-yellow-700 bg-yellow-200 hover:bg-yellow-300 md:text-base md:px-5">
                  Place Order
                </a>
              </div>
            </div>
          </main> */}
        </div>
      </div>
    </>
  );
};

export default Hero;