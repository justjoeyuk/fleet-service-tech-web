import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';

ReactDOM.render(
  // https://github.com/ant-design/ant-design/issues/26136
  // <React.StrictMode>
    <Dashboard />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// reportWebVitals(console.log);
