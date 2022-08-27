const Navlink = () => {
  return (
    <div>
      <div className="navlink hidden lg:flex ">
        <a href="#home" className="text-indigo-800 mx-3">
          Home
        </a>
        <a href="#aboutme" className="text-indigo-800 mx-3">
          About Me
        </a>
        <a href="#myproject" className="text-indigo-800 mx-3">
          Project
        </a>
        <a href="#myservices" className="text-indigo-800 mx-3">
          Services
        </a>
        <a href="#mycontact" className="text-indigo-800 mx-3">
          Contact Me
        </a>
      </div>
    </div>
  )
}

export default Navlink
