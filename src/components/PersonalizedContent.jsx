import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import PropTypes from 'prop-types';
const RecentlyViewed = ({ itemId }) => {
  const [cookies, setCookie] = useCookies(['recentlyViewed']);
  const recentlyViewed = cookies.recentlyViewed || [];

  useEffect(() => {
    if (!recentlyViewed.includes(itemId)) {
      const updatedItems = [...recentlyViewed, itemId];
      setCookie('recentlyViewed', updatedItems, { path: '/' });
    }
  }, [itemId, recentlyViewed, setCookie]);

  return (
    <div>
      <h3>Recently Viewed Items:</h3>
      {recentlyViewed.map((id) => (
        <div key={id}>Item {id}</div>
      ))}
    </div>
  );
};
RecentlyViewed.propTypes = {
    itemId: PropTypes.number.isRequired,
  };

export default RecentlyViewed;
