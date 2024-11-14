import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

const Dashboard = () => {
  const [cookies, setCookie] = useCookies(['userRole']);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Set the userRole cookie to 'admin' for testing purposes
    if (!cookies.userRole) {
      setCookie('userRole', 'admin', { path: '/' }); // or change to 'user' to test non-admin access
    }

    // Check if userRole is 'admin'
    if (cookies.userRole === 'admin') {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [cookies.userRole, setCookie]);

  if (!isAdmin) {
    return <p>Access Denied</p>;
  }

  return <h2>Welcome, Admin! You have access to this dashboard.</h2>;
};

export default Dashboard;






// import { useEffect, useState } from 'react';

// const Dashboard = () => {
//   // Static value for userRole for testing
//   const userRole = 'admin'; // Set this to 'admin' or any other role for testing
//   const [isAdmin, setIsAdmin] = useState(false);

//   useEffect(() => {
//     // Set isAdmin based on the static userRole value
//     if (userRole === 'admin') {
//       setIsAdmin(true);
//     } else {
//       setIsAdmin(false);
//     }
//   }, [userRole]);

//   if (!isAdmin) {
//     return <p>Access Denied</p>;
//   }

//   return <h2>Welcome, Admin! You have access to this dashboard.</h2>;
// };

// export default Dashboard;
