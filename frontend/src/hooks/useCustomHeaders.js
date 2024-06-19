import useLocalStorage from './useLocalStorage';

const useCustomHeaders = (requestHeaders) => {
  const getItem = useLocalStorage('getItem');
  const userToken = getItem('token');
  if (userToken) {
    requestHeaders.set('Authorization', `Bearer ${userToken}`);
  }
  return requestHeaders;
};

export default useCustomHeaders;
