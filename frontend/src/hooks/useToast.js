import { useContext } from 'react';
import ToastContext from '../context/toast/ToastContext';

const useToast = () => {
  const { showToastMessage } = useContext(ToastContext);
  return showToastMessage;
};

export default useToast;
