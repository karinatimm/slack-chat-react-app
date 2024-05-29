import useLocalStorage from './useLocalStorage';

const useAuthHeaders = (requestHeaders) => {
  const getItem = useLocalStorage('getItem');
  const userToken = getItem('token');
  if (userToken) {
    requestHeaders.set('Authorization', `Bearer ${userToken}`);
  }
  return requestHeaders;
};

export default useAuthHeaders;
