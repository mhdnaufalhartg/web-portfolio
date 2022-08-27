const ResponsiveNavLink = ({ href, children }) => {
  return (
    <div>
      <a
        href={href}
        className=" hover:bg-gray-200 text-indigo-800 hover:text-indigo-500  px-4 py-2 block  "
      >
        {children}
      </a>
    </div>
  )
}

export default ResponsiveNavLink
