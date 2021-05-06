const About = () => {
  return (
    <section id="About" className="text-gray-600 body-font">
      <div className="container mx-auto flex px-8 py-24 mt-12 md:flex-row flex-col items-center justify-center">
        <div className="md:w-1/2 md:pr-16 flex flex-col mb-16 md:mb-0 items-center text-center">
          <div className="flex items-center justify-center mb-10">
            <div className="h-12 w-1 m-2 bg-yellow-600"></div>
            <h1 className="title-font m-2 text-gray-bgColor2 text-3xl font-semibold">About <span className='text-yellow-600 text-3xl'>Us</span></h1>
          </div>
          <p className="mb-4 leading-relaxed text-lg text-gray-bgColor2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim sit dignissimos neque placeat, et a dolor dolorem inventore nesciunt obcaecati aspernatur rerum necessitatibus sapiente dicta earum, perspiciatis facere maxime aliquid repellendus, error exercitationem. Provident, porro.
          </p>
          <div className="flex w-full mt-5 justify-center">
            <a href="#Projects" className="text-yellow-600 py-2 text-lg font-medium hover:text-yellow-700">Our Story &rarr;</a>
          </div>
        </div>
        <div className="lg:max-w-sm lg:w-full md:w-1/2 w-5/6 rounded-xl">
          <div className="transition duration-700 ease-in-out hover:scale-110">
            <img height="600" width="600" className="object-cover object-center transform rounded-xl transition duration-700 ease-in-out hover:scale-110" alt="hero" src="/our-story-01.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default About;