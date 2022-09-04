const Input = ({
  inputClassName,
  labelClassname,
  spanClassName,
  placeholder,
  type,
  label,
  value,
  onchange,
  id,
  error,
  touched,
  onBlur,
}) => (
  <label className={`${labelClassname}`}>
    <span className={`block ${spanClassName}`}>{label}</span>
    <input
      className={`${inputClassName} w-full ${
        error && touched ? 'border-red-400' : ''
      }`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onchange}
      id={id}
      onBlur={onBlur}
    />
    {error && touched ? <p className={`text-red-400`}>{error}</p> : null}
  </label>
)

export default Input
