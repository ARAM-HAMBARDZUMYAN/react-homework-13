
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement } from '../../store/slice/counter-slice';
import "./style.scss"

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterSlice.count);
  const [showModal, setShowModal] = useState(false);

  const handleIncrement = () => {
    dispatch(increment());

    if (count === 30) {
      setShowModal(true);
    }
  };

  const handleDecrement = () => {
    dispatch(decrement());
    setShowModal(false);
  };

  return (
    <div>
      <button className="counter-button" onClick={handleIncrement}>+</button>
      <button className="counter-button" onClick={handleDecrement}>-</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Error</h3>
            <p>YOU LOSE EXAM</p>
            <button className="modal-close-button" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Counter;
