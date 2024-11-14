import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

const PageTracker = () => {
  const [cookies, setCookie] = useCookies(['lastPage']);

  useEffect(() => {
    const currentPath = window.location.pathname;
    setCookie('lastPage', currentPath, { path: '/' });
  }, [setCookie]);

  return (
    <div>
      <p>Welcome back! Last visited page: {cookies.lastPage || 'N/A'}</p>
    </div>
  );
};

export default PageTracker;
