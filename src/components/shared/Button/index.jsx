
const Button = ({ label, className }) => (
  <button
    className={`bg-transparent  font-semibold  py-4 px-6 border inline-block ${className}`}
  >
    {label}
  </button>
)

export default Button
