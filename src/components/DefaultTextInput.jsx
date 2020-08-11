import React from 'react';

const DefaultTextInput = ({ textValue, onChange }) => (
  <input type="text" value={textValue} onChange={onChange} />
)

export default DefaultTextInput;