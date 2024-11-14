import { useState } from 'react';
import './App.css';
import RecentlyViewed from './components/PersonalizedContent';
import ThemeSwitcher from './components/Remember User Preferences';
import Login from './components/Store Authentication Token';
import Cart from './components/Cart Management';
import LanguageSelector from './components/Language Selection';
import PageTracker from './components/Tracking User Activity';
import Dashboard from './components/Cookie-Based Access Control and Authorization';
import NewFeature from './components/Feature Flag for New Feature Rollout';
import CookieExample from './components/CookieExample';

function App() {
  const [itemId, setItemId] = useState(1); // Set an initial item ID to pass to RecentlyViewed

  // Optionally update itemId dynamically
  const handleChangeItem = () => {
    const newItemId = itemId + 1; // Example: Increment item ID
    setItemId(newItemId);
  };

  return (
    <div>
      <CookieExample />
      <Login />
      <ThemeSwitcher />
      <RecentlyViewed itemId={itemId} />{' '}
      {/* Pass the itemId to RecentlyViewed */}
      {/* Button to change the item ID (simulating viewing a new item) */}
      <button onClick={handleChangeItem}>View Next Item</button>
      <Cart />
      <LanguageSelector />
      <PageTracker />
      <Dashboard />
      <NewFeature />
    </div>
  );
}

export default App;
