const Contact = () => {
  const handleSubmit = () => {
    e.preventDefault();

    alert('Message received :)')
  }
  return (
    <section id="Contact" class="py-16 my-16 md:my-24 md:py-24">
      <div className="container flex flex-col m-auto items-center justify-center md:flex-row w-4/5">
        <img src="/dinner-03.jpg" alt="Contact our customer support" class="hidden md:block rounded-xl md:h-96 md:w-auto" />
        <form onSubmit={handleSubmit} class="space-y-5 md:ml-20 w-full">
          <div className="flex items-center justify-center md:justify-start">
            <div className="h-12 w-1 m-2 bg-yellow-600"></div>
            <h1 className="title-font m-2 text-gray-bgColor2 text-3xl font-semibold">Contact Us</h1>
          </div>
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
    </section>
  )
}

export default Contact;