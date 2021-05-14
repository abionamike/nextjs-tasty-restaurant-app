const Menu = () => {
  return ( 
    <section id="Menu" className="bg-gray-100 py-24">
      <div className="container w-11/12 m-auto text-center">
        <div className="flex items-center justify-center mb-20">
          <div className="h-12 w-1 m-2 bg-yellow-600"></div>
          <h1 className="title-font m-2 text-gray-bgColor2 text-3xl font-semibold">Menu</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-auto w-11/12 md:w-full">
          <div className="relative md:row-span-2">
            <img src="/our-menu-01.jpg" className="object-cover w-full h-full rounded-lg" alt=""/>
            <div className="absolute h-full w-full left-0 top-0 flex flex-col items-center justify-center">
              <div className="uppercase bg-gray-100 bg-opacity-90 py-2 px-4 md:py-4 md:px-6 md:text-lg font-semibold tracking-widest rounded-md hover:bg-yellow-600 hover:text-gray-100">Lunch</div>
            </div>
          </div>
          <div className="relative md:row-span-2">
            <img src="/our-menu-05.jpg" className="w-full h-full rounded-lg" alt=""/>
            <div className="absolute h-full w-full left-0 top-0 flex flex-col items-center justify-center">
              <div className="uppercase bg-gray-100 bg-opacity-90 py-2 px-4 md:py-4 md:px-6 md:text-lg font-semibold tracking-widest rounded-md hover:bg-yellow-600 hover:text-gray-100">Dinner</div>
            </div>
          </div>
          <div className="relative">
            <img src="/our-menu-08.jpg" className="w-full h-full rounded-lg" alt=""/>
            <div className="absolute h-full w-full left-0 top-0 flex flex-col items-center justify-center">
              <div className="uppercase bg-gray-100 bg-opacity-90 py-2 px-4 md:py-4 md:px-6 md:text-lg font-semibold tracking-widest rounded-md hover:bg-yellow-600 hover:text-gray-100">Drinks</div>
            </div>
          </div>
          <div className="relative">
            <img src="/our-menu-10.jpg" className="w-full h-full rounded-lg" alt=""/>
            <div className="absolute h-full w-full left-0 top-0 flex flex-col items-center justify-center">
              <div className="uppercase bg-gray-100 bg-opacity-90 py-2 px-4 md:py-4 md:px-6 md:text-lg font-semibold tracking-widest rounded-md hover:bg-yellow-600 hover:text-gray-100">Starters</div>
            </div>
          </div>
          <div className="relative md:col-span-2">
            <img src="/our-menu-13.jpg" className="w-full h-full rounded-lg" alt=""/>
            <div className="absolute h-full w-full left-0 top-0 flex flex-col items-center justify-center">
              <div className="uppercase bg-gray-100 bg-opacity-90 py-2 px-4 md:py-4 md:px-6 md:text-lg font-semibold tracking-widest rounded-md hover:bg-yellow-600 hover:text-gray-100">Happy Hour</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute h-full w-full left-0 top-0 flex flex-col items-center justify-center">
              <div className="uppercase bg-gray-100 bg-opacity-90 py-2 px-4 md:py-4 md:px-6 md:text-lg font-semibold tracking-widest rounded-md hover:bg-yellow-600 hover:text-gray-100">Dessert</div>
            </div>
            <img src="/our-menu-16.jpg" className="w-full h-full rounded-lg" alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Menu;