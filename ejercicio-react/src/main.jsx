import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GitHubUser from '../components/GitHubUser';
import UserState from '../context/userState';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserState>
      <GitHubUser />
    </UserState>
  </React.StrictMode>,
);
