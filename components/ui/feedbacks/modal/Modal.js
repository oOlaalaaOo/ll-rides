import cx from 'classnames'

const Modal = ({ title = '', content = '', actions = '', size = 'md', onClose = () => {} }) => {
  const responsiveClass = cx({
    'w-1/3': size === 'xs',
    'xs:w-9/10': size === 'xs',
    'sm:w-9/10': size === 'xs',
    'md:w-5/10': size === 'xs',
    'lg:w-1/3': size === 'xs',
    'xl:w-1/3': size === 'xs',

    'w-4/10': size === 'sm',
    'xs:w-9/10': size === 'sm',
    'sm:w-9/10': size === 'sm',
    'md:w-5/10': size === 'sm',
    'lg:w-4/10': size === 'sm',
    'xl:w-4/10': size === 'sm',

    'w-6/10': size === 'md',
    'xs:w-9/10': size === 'md',
    'sm:w-9/10': size === 'md',
    'md:w-5/10': size === 'md',
    'lg:w-5/10': size === 'md',
    'xl:w-5/10': size === 'md',

    'w-7/10': size === 'lg',
    'xs:w-9/10': size === 'lg',
    'sm:w-9/10': size === 'lg',
    'md:w-6/10': size === 'lg',
    'lg:w-6/10': size === 'lg',
    'xl:w-6/10': size === 'lg',

    'w-8/10': size === 'xl',
    'xs:w-9/10': size === 'xl',
    'sm:w-9/10': size === 'xl',
    'md:w-7/10': size === 'xl',
    'lg:w-7/10': size === 'xl',
    'xl:w-7/10': size === 'xl',
  })

  return (
    <div className="animated fadeIn faster modal modal-active fixed w-full h-full top-0 left-0 flex items-center justify-center">
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" onClick={onClose}></div>
      <div className={`modal-container bg-white ${responsiveClass} mx-auto rounded shadow-lg z-50 overflow-y-auto`}>
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">

            {title}

            <div className="modal-close cursor-pointer z-50" onClick={onClose}>
              <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
            </div>
          </div>

          {content}

          {actions}

        </div>
      </div>
    </div>
  )
}

export default Modal
