const Button = ({ label, className, type }) => (
  <button type={type} className={`${className}`}>
    {label}
  </button>
)

export default Button
