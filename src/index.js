// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App';

// ReactDOM.render(
//     <App />, 
//     document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './AuthContext';

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);
