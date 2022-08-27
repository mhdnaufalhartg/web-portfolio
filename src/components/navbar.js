import Header from './header'
import MobileNavbar from './mobilenavbar'
import Navlink from './navlink'

const Navbar = () => {
  return (
    <div className="container bg-white py-5 border-bottom shadow-sm ">
      <div className="flex justify-between items-center  ">
        <Header />
        <div className="flex justify-between">
          <Navlink />
          <MobileNavbar />
        </div>
      </div>
    </div>
  )
}

export { Navbar }
