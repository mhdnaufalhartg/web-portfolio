const MyContact = () => {
  return (
    <section id="mycontact" className=" pt-10 pb-30">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-indigo-900 mb-2">Kontak</h4>
            <h2 className="font-bold text-indigo-800 text-3xl mb-4">
              Hubungi Saya
            </h2>
            <p className="font-medium text-md text-indigo-800">
              Hubungi saya dengan cara isi form dibawah ini :
            </p>
          </div>
        </div>
        <form>
          <div className="w-full lg:w-2/3 lg:mx-auto">
            <div className="w-full px-4  mb-5">
              <label className="text-base font-bold text-indigo-800">
                Nama
                <input
                  type="text"
                  className="w-full p-2 bg-gray-100 text-indigo-800 rounded-md
               focus:outline-none focus:ring-1 focus:ring-indigo-900"
                />
              </label>
            </div>
            <div className="w-full px-4 mb-5">
              <label className="text-base font-bold text-indigo-800">
                Email
                <input
                  type="email"
                  className="w-full p-2 bg-gray-100 text-indigo-800 rounded-md
               focus:outline-none focus:ring-1 focus:ring-indigo-900"
                />
              </label>
            </div>
            <div className="w-full px-4 mb-5">
              <label className="text-base font-bold text-indigo-800">
                Pesan
                <textarea
                  type="text"
                  className="w-full p-2 bg-gray-100 text-indigo-800 rounded-md
               focus:outline-none focus:ring-1 focus:ring-indigo-900 h-32"
                />
              </label>
            </div>
            <div className="w-full px-4">
              <button
                className="w-full ttext-base font-semi-bold text-white bg-indigo-600 shadow-lg
               hover:bg-sky-600 hover:shadow-md transition duration-300 ease-in-out py-3 px-8 rounded-full"
              >
                Kirim
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export { MyContact }
