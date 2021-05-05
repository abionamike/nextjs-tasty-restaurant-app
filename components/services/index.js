const Services = () => {
  return ( 
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col md:flex-row -mx-4 -mb-10 text-center">
          <div className="relative md:w-1/3 w-full mb-10 mx-4 shadow-lg">
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src="/booking-02.jpg" />
            </div>
            <div className="absolute left-1 top-60 text-center text-xl text-yellow-700 font-semibold rounded-full p-3 bg-gray-100 shadow-lg">01.</div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Dine/Take Away</h2>
          </div>
          <div className="relative md:w-1/3 w-full mb-10 mx-4 shadow-lg">
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src="/bg-intro-05.jpg" />
            </div>
            <div className="absolute left-1 top-60 text-center text-xl text-yellow-700 font-semibold rounded-full p-3 bg-gray-100 shadow-lg">02.</div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Easy Table Reservations</h2>
          </div>
          <div className="relative md:w-1/3 w-full mb-10 mx-4 shadow-lg">
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src="/blog-08.jpg" />
            </div>
            <div className="absolute left-1 top-60 text-center text-xl text-yellow-700 font-semibold rounded-full p-3 bg-gray-100 shadow-lg">03.</div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Free Home Delivery</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Services;