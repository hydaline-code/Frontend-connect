import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from '../Redux/slice/greetingSlice';
import './Greeting.css'

// connect the component to the store
// usedispatch :It allows components to interact with the Redux store by dispatching actions.
// Dispatching actions : In Redux, actions are plain JavaScript objects that describe changes to the state.
// Dispatching an action means sending that action object to the Redux store. This is how you trigger state changes in Redux.
// select and access the Redux state in the  components
// useselector: It allows components to extract and access specific pieces of state from the Redux store.

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetingSlice.greeting);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(fetchRandomGreeting());
  };

  return (
    <div className="greeting-container">
      <h1 className="greeting-title">Welcome to our Hello Rails-React in one app !</h1>
      <div className="button-text">
      <p className="greeting-text">{greeting}</p>
      <button className="greeting-button" onClick={handleClick}>Get New Greeting</button>
      </div>
    </div>
  );
};
export default Greeting;
