import { useState } from 'react';
import { useCookies } from 'react-cookie';

const NewFeature = () => {
  const [cookies, setCookie] = useCookies(['featureFlag']);
  const [isFeatureEnabled, setIsFeatureEnabled] = useState(cookies.featureFlag === 'true');

  const toggleFeature = () => {
    const newFlag = !isFeatureEnabled;
    setIsFeatureEnabled(newFlag);
    setCookie('featureFlag', newFlag.toString(), { path: '/' });
  };

  return (
    <div>
      <button onClick={toggleFeature}>
        {isFeatureEnabled ? 'Disable' : 'Enable'} New Feature
      </button>
      {isFeatureEnabled && <p>New Feature Enabled!</p>}
    </div>
  );
};

export default NewFeature;
