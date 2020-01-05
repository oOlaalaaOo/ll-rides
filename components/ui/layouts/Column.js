const Column = ({ children, className = '', type = 'md', col = 1 }) => {
  return (
    <div className={`w-full ${className}`}>
      {children}
    </div>
  )
}

export default Column
