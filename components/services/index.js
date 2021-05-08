const Services = () => {
  return ( 
    <section id="Services" className="text-gray-600 py-24">
      <div className="container w-10/12 m-auto">
        <div className="flex items-center justify-center mb-20">
          <div className="h-12 w-1 m-2 bg-yellow-600"></div>
          <h1 className="title-font m-2 text-gray-bgColor2 text-3xl font-semibold">Services</h1>
        </div>
        <div className="flex flex-col w-11/12 md:w-full m-auto items-center justify-center md:flex-row text-center">
          <div className="relative w-full mb-10 mx-4 shadow-lg">
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src="/booking-02.jpg" />
            </div>
            <div className="absolute left-1 top-56 text-center text-xl text-yellow-700 font-semibold rounded-full p-3 bg-gray-100 shadow-lg">01.</div>
            <h2 className="title-font text-lg font-medium text-gray-900 mt-6 mb-3">Dine/Take Away</h2>
          </div>
          <div className="relative w-full mb-10 mx-4 shadow-lg">
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src="/bg-intro-05.jpg" />
            </div>
            <div className="absolute left-1 top-56 text-center text-xl text-yellow-700 font-semibold rounded-full p-3 bg-gray-100 shadow-lg">02.</div>
            <h2 className="title-font text-lg font-medium text-gray-900 mt-6 mb-3">Easy Table Reservations</h2>
          </div>
          <div className="relative w-full mb-10 mx-4 shadow-lg">
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src="/blog-08.jpg" />
            </div>
            <div className="absolute left-1 top-56 text-center text-xl text-yellow-700 font-semibold rounded-full p-3 bg-gray-100 shadow-lg">03.</div>
            <h2 className="title-font text-lg font-medium text-gray-900 mt-6 mb-3">Free Home Delivery</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Services;