const Hero = () => {
  return (
    <section id="home" className="pt-10">
      <div className="container ">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 self-center px-4">
            <h1 className="text-base md:text-xl font-semibold text-indigo-600">
              Halo Semua ✌️,
              <span className="block font-bold text-indigo-900 text-3xl lg:text-4xl mt-1">
                Saya Habib Ritonga.
              </span>
            </h1>
            <h2 className=" font-thin text-lg lg:texr-2xl text-indigo-800 mb-5">
              Colleger <span className="font-semibold">&</span> Web Developer
            </h2>
            <p className="mt-4 text-indigo-800 leading-relaxed mb-10">
              Mari bekerja sama demi mendapatkan experience yang sangat luar
              biasa dalam hidup anda!
            </p>
            <a
              href="#contactus"
              className="text-base font-semi-bold text-white bg-indigo-600 shadow-lg
               hover:bg-sky-600 hover:shadow-md transition duration-300 ease-in-out py-3 px-8 rounded-full"
            >
              Hubungi Saya
            </a>
          </div>
          <div className=" w-full lg:w-1/2 self-end px-4">
            <div className="relative lg:mt-0 lg:right-0 mt-10 ">
              <img
                src={require('../img/me.png')}
                alt="habib"
                className="max-w-full mx-auto "
              />
              <span className="absolute md:scale-125 -bottom-5 -z-10 left-1/2 -translate-x-1/2">
                <svg
                  width="400"
                  height="400"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#4338CA"
                    d="M35,-50.7C45.3,-40.6,53.6,-30.4,61.9,-17.2C70.2,-4.1,78.3,12,77.6,28.6C76.9,45.3,67.4,62.4,52.9,69.4C38.5,76.4,19.3,73.2,0.3,72.8C-18.6,72.3,-37.3,74.7,-51.2,67.5C-65,60.3,-74.1,43.7,-80.2,25.8C-86.3,8,-89.4,-11,-81.9,-24.4C-74.5,-37.8,-56.6,-45.6,-41.2,-54C-25.8,-62.5,-12.9,-71.6,-0.3,-71.2C12.3,-70.8,24.7,-60.9,35,-50.7Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero }
