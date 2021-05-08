const Contact = () => {
  const handleSubmit = () => {
    e.preventDefault();

    alert('Message received :)')
  }
  return (
    <section id="Contact" class="relative py-16 my-16 md:my-24 md:py-24">
      <div className="container flex flex-col items-center justify-center m-auto">
        <div className="flex items-center justify-center md:justify-start mb-20">
          <div className="h-12 w-1 m-2 bg-yellow-600"></div>
          <h1 className="title-font m-2 text-gray-bgColor2 text-3xl font-semibold">Contact Us</h1>
        </div>
        <div className="flex flex-col m-auto items-center justify-center md:space-x-10 lg:space-x-16 md:flex-row w-4/5">
          <img src="/dinner-03.jpg" alt="Contact our customer support" class="rounded-xl md:h-96 md:w-1/2" />
          <form onSubmit={handleSubmit} class="space-y-6 w-full mt-8 md:mt-0">
            <h1 className="title-font ext-gray-bgColor2 text-xl font-semibold">Drop Us A Message!</h1>
            <div>
              <input required id="name" type="text" placeholder="Full name" class="w-full p-3 rounded bg-gray-200" />
            </div>
            <div>
              <input required id="email" type="email" placeholder="Email" class="w-full p-3 rounded bg-gray-200" />
            </div>
            <div>
              <textarea required id="message" rows="3" placeholder="Message" class="w-full p-3 rounded bg-gray-200"></textarea>
            </div>
            <button class="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-yellow-600 text-yellow-50">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;