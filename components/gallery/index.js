const Gallery = () => {
  return (
    <div className="container w-11/12 m-auto text-center">
      <div className="flex items-center justify-center mb-20">
        <div className="h-12 w-1 m-2 bg-yellow-600"></div>
        <h1 className="title-font m-2 text-gray-bgColor2 text-3xl font-semibold">Gallery</h1>
      </div>
      <div className="h-96 flex space-x-3 overflow-x-auto">
        <img src="/photo-gallery-thumb-02.jpg" alt=""/>
        <img src="/photo-gallery-16.jpg" alt=""/>
        <img src="/our-menu-12.jpg" alt=""/>
        <img src="/lunch-02.jpg" alt=""/>
        <img src="/lunch-03.jpg" alt=""/>
        <img src="/lunch-04.jpg" alt=""/>
        <img src="/our-menu-03.jpg" alt=""/>
        <img src="/our-menu-04.jpg" alt=""/>
        <img src="/our-menu-07.jpg" alt=""/>
        <img src="/our-menu-09.jpg" alt=""/>
        <img src="/our-menu-10.jpg" alt=""/>
        <img src="/our-menu-06.jpg" alt=""/>
        <img src="/photo-gallery-10.jpg" alt=""/>
        <img src="/photo-gallery-thumb-06.jpg" alt=""/>
        <img src="/fried-egg.jpg" alt=""/>
        <img src="/lunch-01.jpg" alt=""/>
      </div>
    </div>
  );
}
 
export default Gallery;