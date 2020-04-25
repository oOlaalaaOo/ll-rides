import socketio from 'socket.io-client';
import { useEffect, useState } from 'react';

const useSocketIOListener = (eventName: string) => {
  const url = 'http://localhost:5000';
  const socket: SocketIOClient.Socket = socketio.connect(url);
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    socket.on(eventName, (data: any) => {
      console.log(`socketio listening on event: ${eventName}`);
      setEventData(data);
    });

    return () => {
      socket.off(eventName);
    };
  }, []);

  return eventData;
};

export default useSocketIOListener;
