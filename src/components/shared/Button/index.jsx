const Button = ({ label, className, type, onClick }) => (
  <button
    onClick={() => onClick && onClick()}
    type={type}
    className={`${className}`}
  >
    {label}
  </button>
)

export default Button
