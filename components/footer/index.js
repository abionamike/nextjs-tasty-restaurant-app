const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for subscribing :)');
  }
  return (
    <>
      <div className="relative mt-24 bg-gray-bgColor text-gray-500">
        <svg className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-gray-bgColor" preserveAspectRatio="none" viewBox="0 0 1440 54">
          <path fill="currentColor" d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z" />
        </svg>
        <div className="container w-11/12 m-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-24 pb-16 text-left">
          <div className="mb-8 md:mb-0">
            <h2 className="uppercase mb-6 text-gray-300 text-xl font-semibold">Contact Us</h2>
            <div className="my-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-flex mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              379 Hudson St, Victoria Island, Lagos
            </div>
            <div className="my-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-flex mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (+234) 706 7959 272
            </div>
            <div className="my-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-flex mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              developedbymike@gmail.com
            </div>
          </div>
          <div className="mb-8 md:mb-0">
            <h2 className="uppercase mb-6 text-gray-300 text-xl font-semibold">Latest Twitter</h2>
            <div className="my-3 text-yellow-500">
              <svg className="h-5 w-5 inline-flex mr-3 text-gray-500 fill-current text-gray-500" viewBox="0 0 26 26">
                <path d="M 25.855469 5.574219 C 24.914063 5.992188 23.902344 6.273438 22.839844 6.402344 C 23.921875 5.75 24.757813 4.722656 25.148438 3.496094 C 24.132813 4.097656 23.007813 4.535156 21.8125 4.769531 C 20.855469 3.75 19.492188 3.113281 17.980469 3.113281 C 15.082031 3.113281 12.730469 5.464844 12.730469 8.363281 C 12.730469 8.773438 12.777344 9.175781 12.867188 9.558594 C 8.503906 9.339844 4.636719 7.246094 2.046875 4.070313 C 1.59375 4.847656 1.335938 5.75 1.335938 6.714844 C 1.335938 8.535156 2.261719 10.140625 3.671875 11.082031 C 2.808594 11.054688 2 10.820313 1.292969 10.425781 C 1.292969 10.449219 1.292969 10.46875 1.292969 10.492188 C 1.292969 13.035156 3.101563 15.15625 5.503906 15.640625 C 5.0625 15.761719 4.601563 15.824219 4.121094 15.824219 C 3.78125 15.824219 3.453125 15.792969 3.132813 15.730469 C 3.800781 17.8125 5.738281 19.335938 8.035156 19.375 C 6.242188 20.785156 3.976563 21.621094 1.515625 21.621094 C 1.089844 21.621094 0.675781 21.597656 0.265625 21.550781 C 2.585938 23.039063 5.347656 23.90625 8.3125 23.90625 C 17.96875 23.90625 23.25 15.90625 23.25 8.972656 C 23.25 8.742188 23.246094 8.515625 23.234375 8.289063 C 24.261719 7.554688 25.152344 6.628906 25.855469 5.574219"/>
              </svg>
              <a href="https://twitter.com/developedbymike">
                @developedbyMike
              </a>
            </div>
            <div className="my-3">Follow me on Twitter😉 and also checkout my website to see more projects like this. <a href="https://abiona-michael.vercel.app/"><span className="text-yellow-500">here</span></a></div>
          </div>
          <div className="mb-8 md:mb-0 md:row-span-2">
            <h2 className="uppercase mb-6 text-gray-300 text-xl font-semibold">Subscribe</h2>
            <div className="flex flex-col">
              <p>Be the first to get the lastest update and discounts on our prices.</p>
              <form onSubmit={handleSubmit} className="flex justify-between mt-4">
                <input required placeholder="Email Address" type="text" className="w-2/3 bg-gray-500 text-gray-400 bg-opacity-50 rounded border border-gray-500 focus:ring-1 focus:bg-transparent focus:ring-yellow-200 focus:border-yellow-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                <button className="text-gray-bgColor2 bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">Submit</button>
              </form>
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
            <div className="my-3 text-yellow-500">
              <svg className="h-5 w-5 inline-flex mr-3 text-gray-500 fill-current" viewBox="0 0 26 26">
                <path d="M 25.855469 5.574219 C 24.914063 5.992188 23.902344 6.273438 22.839844 6.402344 C 23.921875 5.75 24.757813 4.722656 25.148438 3.496094 C 24.132813 4.097656 23.007813 4.535156 21.8125 4.769531 C 20.855469 3.75 19.492188 3.113281 17.980469 3.113281 C 15.082031 3.113281 12.730469 5.464844 12.730469 8.363281 C 12.730469 8.773438 12.777344 9.175781 12.867188 9.558594 C 8.503906 9.339844 4.636719 7.246094 2.046875 4.070313 C 1.59375 4.847656 1.335938 5.75 1.335938 6.714844 C 1.335938 8.535156 2.261719 10.140625 3.671875 11.082031 C 2.808594 11.054688 2 10.820313 1.292969 10.425781 C 1.292969 10.449219 1.292969 10.46875 1.292969 10.492188 C 1.292969 13.035156 3.101563 15.15625 5.503906 15.640625 C 5.0625 15.761719 4.601563 15.824219 4.121094 15.824219 C 3.78125 15.824219 3.453125 15.792969 3.132813 15.730469 C 3.800781 17.8125 5.738281 19.335938 8.035156 19.375 C 6.242188 20.785156 3.976563 21.621094 1.515625 21.621094 C 1.089844 21.621094 0.675781 21.597656 0.265625 21.550781 C 2.585938 23.039063 5.347656 23.90625 8.3125 23.90625 C 17.96875 23.90625 23.25 15.90625 23.25 8.972656 C 23.25 8.742188 23.246094 8.515625 23.234375 8.289063 C 24.261719 7.554688 25.152344 6.628906 25.855469 5.574219"/>
              </svg>
              <a href="https://twitter.com/developedbymike">
                @developedbyMike
              </a>
            </div>
            <div className="my-3">Pls reach out to me if you need a website like this or if you have a project you need a helping hands on. <a href="https://abiona-michael.vercel.app/#Contact"><span className="text-yellow-500">here</span></a></div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-bgColor2 text-gray-500">
        <div className="container m-auto w-11/12 py-8 flex flex-col justify-between items-start md:items-center md:flex-row">
          <div className="mb-3 md:mb-0">
            Socials: 
            <a href="https://twitter.com/developedbymike">
              <svg className="h-5 w-5 inline-flex mr-3 ml-3 fill-current hover:text-yellow-500" viewBox="0 0 26 26">
                <path d="M 25.855469 5.574219 C 24.914063 5.992188 23.902344 6.273438 22.839844 6.402344 C 23.921875 5.75 24.757813 4.722656 25.148438 3.496094 C 24.132813 4.097656 23.007813 4.535156 21.8125 4.769531 C 20.855469 3.75 19.492188 3.113281 17.980469 3.113281 C 15.082031 3.113281 12.730469 5.464844 12.730469 8.363281 C 12.730469 8.773438 12.777344 9.175781 12.867188 9.558594 C 8.503906 9.339844 4.636719 7.246094 2.046875 4.070313 C 1.59375 4.847656 1.335938 5.75 1.335938 6.714844 C 1.335938 8.535156 2.261719 10.140625 3.671875 11.082031 C 2.808594 11.054688 2 10.820313 1.292969 10.425781 C 1.292969 10.449219 1.292969 10.46875 1.292969 10.492188 C 1.292969 13.035156 3.101563 15.15625 5.503906 15.640625 C 5.0625 15.761719 4.601563 15.824219 4.121094 15.824219 C 3.78125 15.824219 3.453125 15.792969 3.132813 15.730469 C 3.800781 17.8125 5.738281 19.335938 8.035156 19.375 C 6.242188 20.785156 3.976563 21.621094 1.515625 21.621094 C 1.089844 21.621094 0.675781 21.597656 0.265625 21.550781 C 2.585938 23.039063 5.347656 23.90625 8.3125 23.90625 C 17.96875 23.90625 23.25 15.90625 23.25 8.972656 C 23.25 8.742188 23.246094 8.515625 23.234375 8.289063 C 24.261719 7.554688 25.152344 6.628906 25.855469 5.574219"/>
              </svg>
            </a>
            <a href="https://twitter.com/developedbymike">
              <svg className="h-5 w-5 inline-flex mr-3 fill-current hover:text-yellow-500" viewBox="0 0 48 48" width="48px" height="48px">
                <path d="M 16.5 5 C 10.16639 5 5 10.16639 5 16.5 L 5 31.5 C 5 37.832757 10.166209 43 16.5 43 L 31.5 43 C 37.832938 43 43 37.832938 43 31.5 L 43 16.5 C 43 10.166209 37.832757 5 31.5 5 L 16.5 5 z M 16.5 8 L 31.5 8 C 36.211243 8 40 11.787791 40 16.5 L 40 31.5 C 40 36.211062 36.211062 40 31.5 40 L 16.5 40 C 11.787791 40 8 36.211243 8 31.5 L 8 16.5 C 8 11.78761 11.78761 8 16.5 8 z M 34 12 C 32.895 12 32 12.895 32 14 C 32 15.105 32.895 16 34 16 C 35.105 16 36 15.105 36 14 C 36 12.895 35.105 12 34 12 z M 24 14 C 18.495178 14 14 18.495178 14 24 C 14 29.504822 18.495178 34 24 34 C 29.504822 34 34 29.504822 34 24 C 34 18.495178 29.504822 14 24 14 z M 24 17 C 27.883178 17 31 20.116822 31 24 C 31 27.883178 27.883178 31 24 31 C 20.116822 31 17 27.883178 17 24 C 17 20.116822 20.116822 17 24 17 z"/>
              </svg>
            </a>
            <a href="https://twitter.com/developedbymike">
              <svg className="h-5 w-5 inline-flex mr-3 fill-current hover:text-yellow-500" viewBox="0 0 24 24" width="24px" height="24px">
                <path d="M12,0C5.373,0,0,5.373,0,12c0,6.016,4.432,10.984,10.206,11.852V15.18H7.237v-3.154h2.969V9.927c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L16.73,15.18h-3.106v8.697 C19.481,23.083,24,18.075,24,12C24,5.373,18.627,0,12,0z"/>
              </svg>
            </a>
          </div>
          <div>Copyright &copy; { new Date().getFullYear() } All rights reserved | <span className="text-yellow-500">tasyFoods</span></div>
        </div>
      </div>
    </> 
  );
};

export default Footer;