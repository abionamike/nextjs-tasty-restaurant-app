const About = () => {
  return (
    <section id="About" className="text-gray-600 body-font">
      <div className="mx-auto flex px-8 py-24 md:flex-row flex-col items-center justify-center">
        <div className="md:w-1/2 md:pr-16 flex flex-col mb-16 md:mb-0 items-center text-center">
          <div className="mb-10">
            <h1 className="title-font uppercase text-gray-bgColor2 sm:text-4xl text-3xl mb-4 font-medium">About <span className='text-yellow-500'>me</span></h1>
            <div className="flex items-center justify-center mt-6">
              <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex m-auto md:m-0"></div>
            </div>
          </div>
          <p className="mb-4 leading-relaxed text-lg text-gray-bgColor2">
            My name is Michael Abiona, 
            I'm a full stack Web and Mobile App developer with special passion for making life easier for people through excellent software delivery. 
            My experience has given me the privilege of seeing problems through the lens of solution.
          </p>
          <div className="flex w-full mt-5 justify-center">
            <a href="#Projects" className="text-yellow-500 py-2 text-lg hover:text-yellow-600">See All Projects &rarr;</a>
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