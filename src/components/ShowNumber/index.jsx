import React from 'react';
import { useSelector } from 'react-redux';

const ShowCount = () => {
  const count = useSelector((state) => state.counterSlice.count);

  const getTextColor = () => {
    if (count >= 10 && count < 20) {
      return 'orange';
    } else if (count >= 20 && count <= 30) {
      return 'red';
    } else {
      return 'black';
    }
  };

  return (
    <div>
      <h2 style={{ color: getTextColor() }}>Count: {count}</h2>
    </div>
  );
};

export default ShowCount;
