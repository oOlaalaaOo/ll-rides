import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { shiftNotification } from '../../../store/actions/notificationAction'
import cx from 'classnames'

const Notification = ({ type = '', message = '', duration = 5000, onCLose = () => {} }) => {
  const dispatch = useDispatch()

  const typeClass = cx({
    'bg-green-500': type === 'success',
    'bg-red-600': type === 'danger',
    'bg-indigo-400': type === 'primary',
    'bg-blue-400': type === 'info',
    'bg-orange-400': type === 'warning',
    'bg-gray-600': type === 'secondary',
    'bg-white': type === 'default'
  })

  useEffect(() => {
    setTimeout(() => {
      dispatch(shiftNotification())
    }, duration)
  }, [])

  return (
    <div className={`notification animated bounceInRight faster ${typeClass}`} role="alert">
      <div className={`notification-content ${type === 'success' || type === 'danger' || type === 'primary' || type === 'warning' || type === 'secondary' ? 'text-white' : ''}`}>
        {message}
      </div>
    </div>
  )
}

export default Notification
