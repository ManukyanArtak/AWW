const BackdropLayout = (Component) => (props) => {
    return (
        <div className={`bg-[#0000004d] fixed h-screen w-full z-40 top-0 overflow-hidden`}>
            <div className={`fixed z-50 top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]`}>
                <Component {...props}/>
            </div>
        </div>
    )
}



export default BackdropLayout