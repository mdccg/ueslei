import { UserContextProvider } from './context/UserContext';

const Wrapper = (props) => {
  return (
    <UserContextProvider>
      {props.children}
    </UserContextProvider>
  );
}

export default Wrapper;