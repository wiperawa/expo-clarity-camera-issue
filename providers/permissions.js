import React, { createContext, useState, useEffect } from 'react';
import { Camera } from 'expo-camera';


const PermissionsContext = createContext({
  hasPermission: false,
});

function PermissionsProvider({ children }) {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();

      if (isMounted) {
        setHasPermission(status === 'granted');
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <PermissionsContext.Provider value={{ hasPermission }}>{children}</PermissionsContext.Provider>
  );
}

export default PermissionsContext;

export { PermissionsProvider };
