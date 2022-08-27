import ResponsiveNavLink from './responsivenavlink'
import { useState } from 'react'

const MobileNavbar = () => {
  const [isNavOpen, setisNavOpen] = useState(false)

  return (
    <div className="flex lg:hidden ">
      <div
        onClick={() => setisNavOpen(false)}
        className={`  ${
          isNavOpen ? 'block' : 'hidden'
        } bg-transparent absolute w-full h-full inset-0`}
      ></div>
      <button
        onClick={() => setisNavOpen((isNavOpen) => !isNavOpen)}
        className="focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-indigo-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div
        className={` ${
          isNavOpen ? 'block' : 'hidden'
        }  bg-gray-100 rounded-lg absolute right-1  mr-14 mt-6 w-40 `}
      >
        <ResponsiveNavLink href="#home">Home</ResponsiveNavLink>
        <ResponsiveNavLink href="#aboutme">About Me</ResponsiveNavLink>
        <ResponsiveNavLink href="#myproject">Project</ResponsiveNavLink>
        <ResponsiveNavLink href="#myservices">Services</ResponsiveNavLink>
        <ResponsiveNavLink href="#mycontact"> Contact Me</ResponsiveNavLink>
      </div>
    </div>
  )
}

export default MobileNavbar
