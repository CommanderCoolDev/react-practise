import React from 'react';
import ReactDOM from 'react-dom/client';

const initialState = 0;

const reducer = (state, action) => {
  if (action.type === 'INC') {
    return state + 1;
  }
  return 0;
};

let state = reducer(initialState, { type: 'INC' });
state = reducer(state, { type: 'INC' });
state = reducer(state, { type: 'INC' });
state = reducer(state, { type: 'INC' });
console.log(state);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <></>
  </React.StrictMode>,
);
