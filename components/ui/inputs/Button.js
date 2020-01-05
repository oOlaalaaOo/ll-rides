import PropTypes from 'prop-types'

const Button = ({ className = '', onClick, children, ...rest }) => {
  return (
    <button
      className={`btn btn-rounded ${className}`}
      {...rest}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
