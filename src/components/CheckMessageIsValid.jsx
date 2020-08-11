import React from 'react';

const CheckMessageIsValid = ({ messageLength }) => {
  if (messageLength < 5) {
    return (
      <p>Text too short</p>
    )
  }

  if (messageLength > 15) {
    return (
      <p>Text long enough</p>
    )
  }

  return null
}

export default CheckMessageIsValid;