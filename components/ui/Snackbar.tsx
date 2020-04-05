import React, { useState } from 'react';
import mitt from 'mitt';

const emitter: mitt.Emitter = mitt();

interface NotifyProps {
  id?: number;
  title: string;
  message: string;
}

export const Notify = ({ id, title, message }: NotifyProps) => {
  emitter.emit('notify', {
    id: id || Math.random(),
    title: title,
    message: message,
  });
};

const Snackbar: React.FC<any> = () => {
  const [notifications, setNotifications] = useState<Array<any>>([]);
  let timeoutHandler: any = null;

  const addNotification = (data: any) => {
    console.log('addNotification');

    if (notifications && Array.isArray(notifications)) {
      setNotifications([
        ...notifications,
        {
          id: data.id,
          title: data.title,
          message: data.message,
        },
      ]);
    }

    if (timeoutHandler) {
      clearTimeout(timeoutHandler);
    }

    timeoutHandler = setTimeout(() => {
      if (notifications.length > 1) {
        setNotifications(notifications.shift());
      } else if (notifications.length <= 1) {
        setNotifications([]);
      }
    }, 3000);
  };

  emitter.on('notify', addNotification);

  const removeNotification = (id?: number) => {
    setNotifications(
      notifications.filter((notification: NotifyProps) => {
        return notification.id !== id;
      })
    );
  };

  return (
    <>
      <div style={{ position: 'relative' }}>
        <div
          className={`absolute z-10 w-1/4`}
          style={{ right: '10px', top: '10px' }}
        >
          {notifications.length > 0
            ? notifications.map((notification: NotifyProps) => {
                return (
                  <div
                    className='bg-white text-black py-3 px-3 my-2 w-full border shadow'
                    key={notification.id}
                  >
                    <div className='text-lg'>
                      <h1 className='text-left'>{notification.title}</h1>
                      <div
                        className='cursor-pointer'
                        style={{ marginLeft: '95%', marginTop: '-9%' }}
                        onClick={() => removeNotification(notification.id)}
                      >
                        &times;
                      </div>
                    </div>
                    <p className='text-left text-sm mt-2'>
                      {notification.message}
                    </p>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default Snackbar;
