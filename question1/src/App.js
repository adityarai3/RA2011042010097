
import React, { useState } from 'react';
import UrlInput from './components/UrlInput';

function App() {
  const [urls, setUrls] = useState(['']); 

  const handleAddUrl = () => {
    setUrls([...urls, '']);
  };

  const handleRemoveUrl = (index) => {
    const newUrls = [...urls];
    newUrls.splice(index, 1);
    setUrls(newUrls);
  };

  const handleUrlChange = (value, index) => {
    const newUrls = [...urls];
    newUrls[index] = value;
    setUrls(newUrls);
  };

  return (
    <div className="App">
      {urls.map((url, index) => (
        <UrlInput
          key={index}
          value={url}
          onChange={(e) => handleUrlChange(e.target.value, index)}
          onRemove={() => handleRemoveUrl(index)}
        />
      ))}
      <button onClick={handleAddUrl}>Add URL</button>
    </div>
  );
}

export default App;
