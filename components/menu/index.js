const Menu = () => {
  return ( 
    <section className="bg-gray-200 py-16">
      <div className="container w-11/12 m-auto text-center">
        <div className="mb-10">
          <p>Discover</p>
          <h1 className="uppercase ">Our Menu</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative md:row-span-2">
            <div className="absolute uppercase py-4 px-6 text-lg rounded-md bg-gray-100 hover:bg-yellow-600 hover:text-gray-100 opacity-90 left-36 top-60 font-semibold">Lunch</div>
            <img src="/our-menu-01.jpg" className="w-full h-full rounded-lg" alt=""/>
          </div>
          <div className="relative md:row-span-2">
            <div className="absolute uppercase py-4 px-6 text-lg rounded-md bg-gray-100 hover:bg-yellow-600 hover:text-gray-100 opacity-90 left-36 top-60 font-semibold">Dinner</div>
            <img src="/our-menu-05.jpg" className="w-full h-full rounded-lg" alt=""/>
          </div>
          <div className="relative ">
            <div className="absolute uppercase py-4 px-6 text-lg rounded-md bg-gray-100 hover:bg-yellow-600 hover:text-gray-100 opacity-90 left-36 top-24  font-semibold">Drinks</div>
            <img src="/our-menu-08.jpg" className="w-full h-full rounded-lg" alt=""/>
          </div>
          <div className="relative ">
            <div className="absolute uppercase py-4 px-6 text-lg rounded-md bg-gray-100 hover:bg-yellow-600 hover:text-gray-100 opacity-90 left-36 top-24  font-semibold">Starters</div>
            <img src="/our-menu-10.jpg" className="w-full h-full rounded-lg" alt=""/>
          </div>
          <div className="relative md:col-span-2">
            <div className="absolute uppercase py-4 px-6 text-lg rounded-md bg-gray-100 hover:bg-yellow-600 hover:text-gray-100 opacity-90 left-80 top-24  font-semibold">Happy Hour</div>
            <img src="/our-menu-13.jpg" className="w-full h-full rounded-lg" alt=""/>
          </div>
          <div className="relative ">
            <div className="absolute uppercase py-4 px-6 text-lg rounded-md bg-gray-100 hover:bg-yellow-600 hover:text-gray-100 opacity-90 left-36 top-24  font-semibold">Dessert</div>
            <img src="/our-menu-16.jpg" className="w-full h-full rounded-lg" alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Menu;