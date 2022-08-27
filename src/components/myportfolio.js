const MyPortfolio = () => {
  const Img = [
    {
      id: 1,
      name: 'tlp',
      imgUrl: require('../img/projects/tlp.png'),
      title: 'Traffic Light Puzzle Game',
      content: 'Membuat Game Traffic Light Puzzle.',
      stack1: 'dart',
      stack2: 'flutter',
      linkRepo: 'https://github.com/Ripat-2345/traffic_light_puzzle',
    },
    {
      id: 2,
      name: 'rapi',
      imgUrl: require('../img/projects/rapi.png'),
      title: 'React Js Api',
      content: 'Membuat React Js Api.',
      stack1: 'React Js',
      linkRepo: 'https://github.com/mhdnaufalhartg/reactjs-api',
    },
    {
      id: 3,
      name: 'hi',
      imgUrl: require('../img/projects/hi.png'),
      title: 'Website Hari Ibu',
      content: 'Membuat Website Hari Ibu.',
      stack1: 'Html',
      stack2: 'Css',
      stack3: 'Bootstrap 5',
      linkRepo: 'https://github.com/mhdnaufalhartg/hari-ibu',
    },
    {
      id: 4,
      name: 'dm',
      imgUrl: require('../img/projects/dm.png'),
      title: 'Dark Mode App',
      content: 'Membuat Dark Mode App.',
      stack1: 'React Js',
      stack2: 'Tailwind Css',
      linkRepo: 'https://github.com/mhdnaufalhartg/darkmode-react-tailwindcss',
    },
  ]

  return (
    <section id="myproject" className=" mt-10 pt-10 bg-gray-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-indigo-900 mb-2">PortfolioKu</h4>
            <h2 className="font-bold text-indigo-800 text-3xl mb-4">
              Project Terbaru
            </h2>
            <p className="font-medium text-md text-indigo-800">
              Berikut adalah project - project terbaru saya :
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center w-full px-4 ">
          {Img.map((data) => {
            return (
              <div className="mb-5 lg:mb-8 md:w-1/2 p-4">
                <div className="rounded md shadow-md overflow-hidden">
                  <img src={data.imgUrl} alt={data.name} width="w-full" />
                </div>
                <h3 className="font-semibold text-xl text-indigo-800 mt-5 ">
                  <a href={data.linkRepo} target="__blank">
                    {data.title}
                  </a>
                </h3>
                <p className="text-base font-medium text-indigo-800">
                  {data.content}
                </p>
                <p className="text-base  text-indigo-800">
                  Stack :<span className="mx-1">{data.stack1}</span>
                  <span className="mx-1">{data.stack2}</span>
                  <span className="mx-1">{data.stack3}</span>
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
export { MyPortfolio }
