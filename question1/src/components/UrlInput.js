
import React from 'react';

const UrlInput = ({ value, onChange, onRemove }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter URL"
        value={value}
        onChange={onChange}
      />
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

export default UrlInput;
