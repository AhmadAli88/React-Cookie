import { useState } from 'react';
import { useCookies } from 'react-cookie';

const CookieExample = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [username, setUsername] = useState('');

  // Set a cookie when the user clicks "Save Username"
  const saveUsername = () => {
    setCookie('username', username, { path: '/', maxAge: 3600 }); // Expires in 1 hour
  };

  // Delete the cookie when the user clicks "Delete Cookie"
  const deleteUsername = () => {
    removeCookie('username', { path: '/' });
  };

  return (
    <div>
      <h2>React Cookie Example</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={saveUsername}>Save Username</button>
      <button onClick={deleteUsername}>Delete Cookie</button>

      <p>Saved Username: {cookies.username || 'No username saved'}</p>
    </div>
  );
};

export default CookieExample;
