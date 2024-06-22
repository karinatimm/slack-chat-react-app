import { useMemo, useCallback } from 'react';
import { toast as showToast } from 'react-toastify';
import ToastContext from './ToastContext';

const ToastProvider = ({ children }) => {
  const toastOptions = useMemo(
    () => ({
      position: 'top-center',
      autoClose: 2000,
    }),
    [],
  );

  const showToastMessage = useCallback(
    (message, options = {}) => {
      showToast(message, { ...toastOptions, ...options });
    },
    [toastOptions],
  );

  const contextValue = useMemo(
    () => ({
      showToastMessage,
    }),
    [showToastMessage],
  );

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
