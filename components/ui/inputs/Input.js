import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ label = '', error = '', className = '', onChange, ...rest }) => {
  return (
    <React.Fragment>
      <label htmlFor={id} className="ml-1 text-md">{label}</label>
      <br />
      <input
        className={`input w-full ${className}`}
        onChange={onChange}
        {...rest}
      />
      {
        error !== '' ? (
          <React.Fragment>
            <br />
            <small className="ml-1 text-red">{error}</small>
          </React.Fragment>
        ) : (
          <React.Fragment />
        )
      }
    </React.Fragment>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func
}

export default Input
