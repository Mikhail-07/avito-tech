import { useContext } from 'react';
import { Context } from '..';


const useStore = () => {
  const { store } = useContext(Context);
  return store;
};

export default useStore;
