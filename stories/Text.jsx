import React from 'react';

const textStyle = {
  border: '1px solid #eee',
  borderRadius: 5,
  backgroundColor: '#FFFFFF',
  fontSize: 15,
  padding: 10,
  width: 300,
};

const Text = ({ children }) => (
  <div
    style={textStyle}
  >
    {children}
  </div>
);

export default Text;
