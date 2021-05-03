const Menu = () => {
  return ( 
    <section className="bg-gray-200 py-16">
      <div className="w-11/12 m-auto text-center">
        <div className="mb-10">
          <p>Discover</p>
          <h1 className="uppercase ">Our Menu</h1>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src="/our-menu-01.jpg" className="w-full h-full rounded-lg md:row-span-2" alt=""/>
          <img src="/our-menu-05.jpg" className="w-full h-full rounded-lg md:row-span-2" alt=""/>
          <img src="/our-menu-08.jpg" className="w-full h-full rounded-lg" alt=""/>
          <img src="/our-menu-10.jpg" className="w-full h-full rounded-lg" alt=""/>
          <img src="/our-menu-13.jpg" className="w-full h-full rounded-lg md:col-span-2" alt=""/>
          <img src="/our-menu-16.jpg" className="w-full h-full rounded-lg" alt=""/>
        </div>
      </div>
    </section>
  );
}
 
export default Menu;