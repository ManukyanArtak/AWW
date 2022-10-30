const BackdropLayout = (Component) => (props) =>
  (
    <div
      className={`bg-gray-350 fixed h-full w-full z-40 top-0 overflow-hidden`}
    >
      <div
        className={`fixed z-50 top-2/4 right-2/4 translate-x-1/2 translate-y-50`}
      >
        <Component {...props} />
      </div>
    </div>
  )

export default BackdropLayout
