import { useCookies } from 'react-cookie';

const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(['authToken']);

  const handleLogin = (token) => {
    setCookie('authToken', token, { path: '/', maxAge: 3600 }); // Store token for 1 hour
  };

  return <button onClick={() => handleLogin('yourAuthToken')}>Login</button>;
};

export default Login;
