const Input = ({inputClassName, labelClassname, spanClassName, placeholder, type, label}) =>(
    <label className={`${labelClassname}`}>
        <span className={`block ${spanClassName}`}>{label}</span>
        <input className={`${inputClassName} w-full `} type={type} placeholder={placeholder} />
    </label>
)

export default Input
