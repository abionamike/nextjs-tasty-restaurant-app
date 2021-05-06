const Menu = () => {
  return ( 
    <section id="Menu" className="bg-gray-100 py-24">
      <div className="container w-11/12 m-auto text-center">
        <div className="flex items-center justify-center mb-20">
          <div className="h-12 w-1 m-2 bg-yellow-600"></div>
          <h1 className="title-font m-2 text-gray-bgColor2 text-3xl font-semibold">Menu</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-auto w-5/6 md:w-full">
          <div className="relative md:row-span-2">
            <div className="absolute uppercase py-4 px-6 text-lg rounded-md bg-gray-100 tracking-widest hover:bg-yellow-600 hover:text-gray-100 opacity-90 left-36 top-60 font-semibold">Lunch</div>
            <img src="/our-menu-01.jpg" className="w-full h-full rounded-lg" alt=""/>
          </div>
          <div className="relative md:row-span-2">
            <div className="absolute uppercase py-4 px-6 text-lg rounded-md bg-gray-100 tracking-widest hover:bg-yellow-600 hover:text-gray-100 opacity-90 left-36 top-60 font-semibold">Dinner</div>
            <img src="/our-menu-05.jpg" className="w-full h-full rounded-lg" alt=""/>
          </div>
          <div className="relative">
            <div className="absolute uppercase py-4 px-6 text-lg rounded-md bg-gray-100 tracking-widest hover:bg-yellow-600 hover:text-gray-100 opacity-90 left-32 top-24  font-semibold">Drinks</div>
            <img src="/our-menu-08.jpg" className="w-full h-full rounded-lg" alt=""/>
          </div>
          <div className="relative">
            <div className="absolute uppercase py-4 px-6 text-lg rounded-md bg-gray-100 tracking-widest hover:bg-yellow-600 hover:text-gray-100 opacity-90 left-32 top-24  font-semibold">Starters</div>
            <img src="/our-menu-10.jpg" className="w-full h-full rounded-lg" alt=""/>
          </div>
          <div className="relative md:col-span-2">
            <div className="absolute uppercase py-4 px-6 text-lg rounded-md bg-gray-100 tracking-widest hover:bg-yellow-600 hover:text-gray-100 opacity-90 left-28 top-8 md:left-80 md:top-24  font-semibold">Happy Hour</div>
            <img src="/our-menu-13.jpg" className="w-full h-full rounded-lg" alt=""/>
          </div>
          <div className="relative">
            <div className="absolute uppercase py-4 px-6 text-lg rounded-md bg-gray-100 tracking-widest hover:bg-yellow-600 hover:text-gray-100 opacity-90 left-32 top-24  font-semibold">Dessert</div>
            <img src="/our-menu-16.jpg" className="w-full h-full rounded-lg" alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Menu;